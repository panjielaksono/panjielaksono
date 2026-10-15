export type Item = {
  id: string;
  sku: string;
  name: string;
  category: 'Part General' | 'Official Hino';
  unit: 'Pcs';
  stock: number;
};

export type PartRequest = {
  reference: string;
  itemId: string;
  quantity: number;
  vehicle: string;
  mechanic: string;
  driver: string;
  status: 'PENDING_APPROVAL' | 'APPROVED' | 'REJECTED';
};

export type DemoState = {
  items: Item[];
  purchaseOrder: { reference: string; supplier: string; itemId: string; ordered: number; received: number | null };
  requests: PartRequest[];
  activity: string[];
  nextRequest: number;
};

export type DemoAction =
  | { type: 'receive'; quantity: number }
  | { type: 'request'; itemId: string; quantity: number; vehicle: string; mechanic: string }
  | { type: 'approve'; reference: string; driver: string }
  | { type: 'reject'; reference: string }
  | { type: 'reset' };

export function createDemoState(): DemoState {
  return {
    items: [
      { id: 'filter', sku: 'PT-001', name: 'Oil Filter', category: 'Part General', unit: 'Pcs', stock: 18 },
      { id: 'brake', sku: 'PT-002', name: 'Brake Pad Set', category: 'Part General', unit: 'Pcs', stock: 6 },
      { id: 'hose', sku: 'PT-003', name: 'Hydraulic Hose', category: 'Part General', unit: 'Pcs', stock: 4 },
      { id: 'hino-filter', sku: 'HN-004', name: 'Air Filter', category: 'Official Hino', unit: 'Pcs', stock: 9 },
    ],
    purchaseOrder: { reference: 'PO-DEMO-001', supplier: 'Demo Parts Co.', itemId: 'brake', ordered: 12, received: null },
    requests: [
      { reference: 'REQ-DEMO-001', itemId: 'brake', quantity: 2, vehicle: 'Unit DEMO-01', mechanic: 'Demo Mechanic', driver: '', status: 'PENDING_APPROVAL' },
    ],
    activity: ['REQ-DEMO-001 dibuat oleh Admin Part.', 'PO-DEMO-001 menunggu konfirmasi kedatangan.'],
    nextRequest: 2,
  };
}

export function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case 'receive': {
      if (state.purchaseOrder.received !== null || action.quantity < 1 || action.quantity > state.purchaseOrder.ordered) return state;
      return {
        ...state,
        items: state.items.map((item) => item.id === state.purchaseOrder.itemId ? { ...item, stock: item.stock + action.quantity } : item),
        purchaseOrder: { ...state.purchaseOrder, received: action.quantity },
        activity: [`${state.purchaseOrder.reference} dikonfirmasi tiba: ${action.quantity} Pcs masuk stok.`, ...state.activity],
      };
    }
    case 'request': {
      if (!state.items.some((item) => item.id === action.itemId) || action.quantity < 1 || !action.mechanic.trim()) return state;
      const reference = `REQ-DEMO-${String(state.nextRequest).padStart(3, '0')}`;
      return {
        ...state,
        requests: [{ reference, itemId: action.itemId, quantity: action.quantity, vehicle: action.vehicle, mechanic: action.mechanic.trim(), driver: '', status: 'PENDING_APPROVAL' }, ...state.requests],
        nextRequest: state.nextRequest + 1,
        activity: [`${reference} dibuat oleh Admin Part.`, ...state.activity],
      };
    }
    case 'approve': {
      const request = state.requests.find((entry) => entry.reference === action.reference);
      const item = state.items.find((entry) => entry.id === request?.itemId);
      if (!request || !item || request.status !== 'PENDING_APPROVAL' || item.stock < request.quantity || !action.driver.trim()) return state;
      return {
        ...state,
        items: state.items.map((entry) => entry.id === item.id ? { ...entry, stock: entry.stock - request.quantity } : entry),
        requests: state.requests.map((entry) => entry.reference === action.reference ? { ...entry, status: 'APPROVED', driver: action.driver.trim() } : entry),
        activity: [`${action.reference} disetujui: ${request.quantity} Pcs keluar dari stok.`, ...state.activity],
      };
    }
    case 'reject': {
      const request = state.requests.find((entry) => entry.reference === action.reference);
      if (!request || request.status !== 'PENDING_APPROVAL') return state;
      return {
        ...state,
        requests: state.requests.map((entry) => entry.reference === action.reference ? { ...entry, status: 'REJECTED' } : entry),
        activity: [`${action.reference} ditolak oleh Admin Gudang.`, ...state.activity],
      };
    }
    case 'reset': return createDemoState();
  }
}
