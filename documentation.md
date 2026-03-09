# Memory Game - Technical Manual

## 1. Core Gameplay
- A classic "Flip and Find" memory game implemented in Godot 4.
- Players flip tiles to find matching pairs.

## 2. Interactions & UX
- Mouse/Touch input to flip tiles.
- Responsive design for web browsers.
- Loading screen with progress bar during asset loading.

## 3. Scoring & Rules
- Match all pairs to win.
- (Rules details to be expanded from source code investigation).

## 4. Technical Optimizations
- **Engine:** Godot 4.x (Web Export).
- **Renderer:** Compatibility (OpenGL 3).
- **Isolation:** Requires Cross-Origin-Opener-Policy (COOP) and Cross-Origin-Embedder-Policy (COEP) headers for SharedArrayBuffer support.
- **Serving:** Static files served via Node.js/Express with appropriate security headers.

## 5. Platform Integration
- **Web:** Fully contained in `src/` directory.
- **Server:** Node.js entry point at `server.js`.

## 8. Status/Health
- **Known Issues:** Fixed a critical black screen issue caused by Git conflict markers in `src/index.html`.
- **Validation:** Verified file sizes for `index.pck` and `index.wasm` match `GODOT_CONFIG`.
