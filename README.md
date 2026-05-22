# Computational Design Workflows

Overview

This repository contains front-end visualization examples (D3, Three.js, Mapbox, Firebase) and a small Python script to process New York City farmers market data.

Quick start

1. Clone the repository and change into the project folder:

```bash
git clone <repo-url>
cd computational-design-workflows
```

2. Run a simple static server to preview the pages:

```bash
python3 -m http.server 8000
# Open http://localhost:8000/pages/index.html in your browser
```

Configuration (API keys)

- Copy `config.example.js` to `config.js` and fill in your keys. `config.js` is ignored by `.gitignore` to avoid committing secrets.
- `MAPBOX_TOKEN`: Mapbox public token
- `OPENAI_API_KEY`: OpenAI API key (use server-side proxy for production)
- `FIREBASE_CONFIG`: Firebase project configuration object

Dependencies

- Front-end libraries are loaded via CDN. See `frontend-dependencies.md` for exact versions and CDN links.
- Python: the data-processing script uses Python standard library (`csv`, `json`). Add third-party packages to `requirements.txt` if needed and install inside a virtual environment.

Assets and data

- Put image assets in `assets/images/`. Use subfolders like `icons/`, `logos/`, `photos/` for organization. See `assets/images/README.md` for guidance.
- Data files live in `data/` (CSV and GeoJSON). The script `data/process_farmers_markets.py` converts the provided CSV into a GeoJSON file.

Run the data script

```bash
python3 data/process_farmers_markets.py
```

This writes `manhattan_farmers_markets.geojson` to the repository root.

Security notes

- Never commit API secrets. Use `config.js` (ignored by git) or a server-side proxy to keep keys secret.
- The front-end code was updated to read tokens from `window.APP_CONFIG`. An optional local proxy server is provided to proxy OpenAI requests server-side.

Optional: local OpenAI proxy (recommended for security)

1. Install server dependencies and run the proxy:

```bash
cd server
npm install
export OPENAI_API_KEY="sk-..."
npm start
```

2. Point the front-end to the proxy by setting `OPENAI_API_URL` to `/api/openai` in `config.js` (or enable `USE_PROXY: true` in the example).

Development and checks

- Start a static server to preview pages:

```bash
python3 -m http.server 8000
```

- Run ESLint (project root):

```bash
npm install
npm run lint
```

Files of interest

- `pages/` — HTML pages
- `scripts/` — front-end JavaScript
- `styles/` — CSS
- `data/` — CSV and GeoJSON + processing script
- `server/` — optional Node proxy for OpenAI

If you'd like, I can:

- Fill `config.js` locally with keys you provide (I will not commit secrets).
- Start the local proxy and run an integration test (you must set `OPENAI_API_KEY` in your environment).
- Remove remaining ESLint warnings or further tidy up code.
