# Much Panji Laksono — Portfolio

Personal portfolio built with React, TypeScript, and Vite. The existing portfolio colors and visual style are preserved.

## Warehouse Management System prototype

The [public prototype](warehouse-demo.html) is based on the UI and operational flows in [smb-warehouse](https://github.com/panjielaksono/smb-warehouse). It demonstrates a focused warehouse role:

- A dashboard with pending requests, arriving goods, and low stock.
- A sample purchase order receipt that increases stock.
- Sample part requests that can be approved with a driver or rejected. Approval decreases stock.
- A searchable, filterable stock table.

All records are fictional and kept in browser memory. Reloading the page or selecting **Reset demo** restores the starting state. The prototype has no authentication, database, production API, real business data, or access to the full system. Other source modules, including work orders, vehicle management, tire monitoring, role administration, and reports, are outside the public prototype.

## Develop and build

```bash
npm install
npm run dev
npm run build
```

Vite builds all three HTML entry pages. The static files in `public/` are copied to `dist/`.

## 3D Gaussian Splats demo

The [3DGS demo](3dgs-demo.html) keeps the [source project's](https://github.com/panjielaksono/3dgs) game-like visual style and renders one public sample splat. Visitors can rotate and zoom the scene and view usage and source information. The portfolio includes only the viewer component and sample scene; the original upload tools, 3D editor, backend API, Docker configuration, and GPU generation pipeline are not included. The sample scene is approximately 50 MB and may take time to load.

## Repository layout

- `index.html`, `warehouse-demo.html`, `3dgs-demo.html` — Vite page entries
- `src/portfolio/` — React portfolio and its existing visual styles
- `src/demo/` — React warehouse prototype, typed in-memory model, and source-inspired styles
- `src/3dgs/` — limited interactive splat viewer with source-inspired styling
- `public/3dgs/gaussians.ply` — one public sample scene from the 3dgs repository
- `public/assets/` — existing portfolio and legacy project assets
- `public/gaya/`, `public/pic/`, `public/*.html` — older standalone project pages and their assets

The warehouse source repository is referenced for the prototype design and workflow. Its backend code, secrets, and data are not copied into this portfolio.
