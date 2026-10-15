declare module '@mkkellogg/gaussian-splats-3d' {
  export const SceneFormat: { Ply: unknown };

  export class Viewer {
    constructor(options: {
      rootElement: HTMLElement;
      cameraUp: [number, number, number];
      initialCameraPosition: [number, number, number];
      initialCameraLookAt: [number, number, number];
      sharedMemoryForWorkers: boolean;
      gpuAcceleratedSort: boolean;
    });
    addSplatScene(url: string, options: Record<string, unknown>): Promise<unknown>;
    start(): void;
    dispose(): void;
  }
}
