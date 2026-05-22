/*
  配置示例：复制为 config.js（同级），并填写你的密钥/配置。
  该文件在浏览器中以 `window.APP_CONFIG` 形式可用。
*/

window.APP_CONFIG = {
  MAPBOX_TOKEN: 'your-mapbox-token-here',
  // If you run the optional local proxy, set OPENAI_API_URL to '/api/openai' and do NOT set OPENAI_API_KEY here.
  OPENAI_API_KEY: 'your-openai-api-key-here',
  OPENAI_API_URL: '/api/openai',
  USE_PROXY: true,
  FIREBASE_CONFIG: {
    apiKey: 'your-firebase-apiKey',
    authDomain: 'your-firebase-authDomain',
    projectId: 'your-firebase-projectId',
    storageBucket: 'your-firebase-storageBucket',
    messagingSenderId: 'your-firebase-messagingSenderId',
    appId: 'your-firebase-appId',
    measurementId: 'your-firebase-measurementId'
  }
};
