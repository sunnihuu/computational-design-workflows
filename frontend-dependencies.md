前端依赖说明

- Mapbox GL JS: https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js (与 mapbox CSS)
- D3.js: https://d3js.org/d3.v7.min.js
- Three.js: https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
- Firebase: https://www.gstatic.com/firebasejs/<version>/firebase-app.js 等（仓库中示例使用 8.x / 10.x compat）
- p5.js: （用于噪点背景示例）

说明：本项目通过 CDN 引入这些库，因此不依赖本地包管理。但如果需要离线或可控版本，建议建立 `package.json` 并使用 npm/yarn 管理。

本地运行建议：
1. 使用静态服务器（`python3 -m http.server` 或 `npx http-server`）来避免跨域问题。
2. 需要 API Key（Mapbox、OpenAI、Firebase）时，请按 `config.example.js` 创建 `config.js`，并在页面中先行加载该脚本。
