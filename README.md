# Computational Design Workflows

简介
-	本仓库包含一组前端可视化页面（D3、Three.js、Mapbox、Firebase 示例）和用于处理纽约农贸市场数据的 Python 脚本。

快速开始
1. 克隆或下载仓库到本地。
2. 在本地启动静态服务器（推荐）：

```bash
cd path/to/computational-design-workflows
# 使用 Python3 内置的简单服务器
python3 -m http.server 8000
# 然后在浏览器打开 http://localhost:8000/pages/index.html
```

配置（API key）
- 请复制 `config.example.js` 为 `config.js` 并填入你的密钥和 Firebase 配置：

- `MAPBOX_TOKEN`：Mapbox 公钥
- `OPENAI_API_KEY`：OpenAI（ChatGPT）API Key（仅用于测试，生产请走服务端代理）
- `FIREBASE_CONFIG`：Firebase 项目配置对象

依赖
- 前端依赖主要通过 CDN 引入（Mapbox, D3, Three.js, Firebase 等），详见 `frontend-dependencies.md`。
- Python 脚本只使用标准库（`csv`, `json`），若需更多处理请在 `requirements.txt` 中添加对应包。

组织和资源
- 图片资源目录：`assets/images/`（请将项目图片放到此目录）。仓库内提供 `.gitkeep` 占位。
- 数据目录：`data/`（包含 CSV 和 geojson 文件）。

运行数据处理脚本
- 将原始 CSV 放在 `data/NYC_Farmers_Markets_20250719.csv`（仓库已包含示例）。
- 运行：

```bash
python3 data/process_farmers_markets.py
```

这会在仓库根目录生成 `manhattan_farmers_markets.geojson`（可手动移动到 `data/`）。

安全性与注意事项
- 仓库中不应包含私密密钥。请使用 `config.js` 或服务端代理来注入密钥。已将硬编码密钥替换为可配置方式（详见 `config.example.js`）。

故障排查
- 若 Mapbox 显示为空白，确认 `config.js` 中的 `MAPBOX_TOKEN` 正确并且域名没有被限制。
- 若 ChatGPT 请求失败，请检查 `OPENAI_API_KEY` 是否正确以及浏览器是否允许跨域请求（推荐通过服务端代理调用 OpenAI）。

如需我继续：我可以运行本地检查（readme + 创建 config.js 模板、移除或替换更多硬编码密钥、运行脚本并修复明显错误）。

本地代理（可选）
1. 进入 `server` 目录并安装依赖：

```bash
cd server
npm install
```

2. 创建 `.env` 或在 Shell 中设置环境变量：

```bash
export OPENAI_API_KEY="sk-..."
# 可选覆盖： export OPENAI_API_URL="https://api.openai.com/v1/chat/completions"
```

3. 启动代理：

```bash
npm start
# 代理默认监听 http://localhost:3000
```

4. 在 `config.js` 中将 `OPENAI_API_URL` 设置为 `/api/openai`（或启用 `USE_PROXY:true`），前端将自动使用代理而不在客户端暴露密钥。