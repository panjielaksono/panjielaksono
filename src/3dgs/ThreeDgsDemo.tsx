import { useEffect, useRef, useState } from 'react';

type Viewer = {
  addSplatScene: (url: string, options: Record<string, unknown>) => Promise<unknown>;
  start: () => void;
};

export function ThreeDgsDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('Loading sample Gaussian splat...');
  const [info, setInfo] = useState<'tips' | 'sources' | null>(null);

  useEffect(() => {
    let cancelled = false;
    let objectUrl: string | null = null;
    let viewer: Viewer | null = null;
    const controller = new AbortController();

    async function loadSample() {
      setLoading(true);
      setMessage('Loading sample Gaussian splat...');
      try {
        const sampleUrl = new URL('./3dgs/gaussians.ply', document.baseURI);
        const response = await fetch(sampleUrl, { signal: controller.signal });
        if (!response.ok) throw new Error('The sample scene could not be loaded.');
        const blob = await response.blob();
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        setMessage('Preparing the 3D viewer...');
        const GaussianSplats3D = await import('@mkkellogg/gaussian-splats-3d');
        if (cancelled || !containerRef.current) return;
        viewer = new GaussianSplats3D.Viewer({
          rootElement: containerRef.current,
          cameraUp: [0, 1, 0],
          initialCameraPosition: [0, 0, 3],
          initialCameraLookAt: [0, 0, 0],
          sharedMemoryForWorkers: false,
          gpuAcceleratedSort: false,
        }) as Viewer;
        await viewer.addSplatScene(objectUrl, {
          splatAlphaCrop: 0,
          showLoadingUI: true,
          format: GaussianSplats3D.SceneFormat.Ply,
        });
        if (cancelled) return;
        viewer.start();
        setLoading(false);
      } catch (error) {
        if (cancelled) return;
        console.error(error);
        setMessage('This browser could not display the sample scene. Try a desktop browser with WebGL enabled.');
        setLoading(false);
      }
    }

    void loadSample();
    return () => {
      cancelled = true;
      controller.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <div className="app-container">
      <div ref={containerRef} className="viewer-container" aria-label="Interactive sample Gaussian Splat scene" />
      <div className="vignette-overlay" />

      <header className="game-header">
        <a className="hud-badge" href="index.html#projects">← PORTFOLIO</a>
        <div className="status-badge"><span className="dot" /> 3DGS DEMO</div>
      </header>

      {loading && (
        <div className="upload-overlay" role="status">
          <div className="game-panel">
            <h1 className="game-title">Loading...</h1>
            <p>{message}</p>
            <div className="loader" />
          </div>
        </div>
      )}

      {!loading && message.startsWith('This browser') && (
        <div className="upload-overlay" role="alert">
          <div className="game-panel">
            <h1 className="game-title">Oops!</h1>
            <p>{message}</p>
          </div>
        </div>
      )}

      {!loading && !message.startsWith('This browser') && (
        <>
          <div className="demo-label">DRAG TO ROTATE · SCROLL TO ZOOM<br />ONE SAMPLE SCENE · VIEWER ONLY</div>
          <div className="bottom-panel">
            <button className="bottom-btn btn-green" type="button" onClick={() => setInfo('tips')}>
              CONTROLS
            </button>
            <button className="bottom-btn btn-blue" type="button" onClick={() => setInfo('sources')}>
              SOURCES
            </button>
          </div>
        </>
      )}

      {info && (
        <div className="upload-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setInfo(null); }}>
          <div className="game-panel sources-panel" role="dialog" aria-modal="true" aria-labelledby="sources-title">
            <h2 className="game-title" id="sources-title">{info === 'tips' ? 'Controls' : '3DGS Demo'}</h2>
            {info === 'tips' ? (
              <p>Drag the scene to orbit around the sample. Scroll or pinch to zoom. This public demo is for viewing only.</p>
            ) : (
              <>
                <p>This limited viewer uses one public sample splat from the original project. The full app also contains image upload, 3D editing, and GPU generation; those tools are not part of this portfolio demo.</p>
                <p className="source-small">Viewer built with React and the Gaussian Splats 3D package. Source project: <a href="https://github.com/panjielaksono/3dgs" target="_blank" rel="noreferrer">panjielaksono/3dgs</a>.</p>
              </>
            )}
            <button className="action-btn" type="button" onClick={() => setInfo(null)}>CLOSE</button>
          </div>
        </div>
      )}
    </div>
  );
}
