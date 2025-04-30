// 1. Install dulu ws: npm install ws
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
let counter = 0;

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Kirim counter ke klien baru
  ws.send(`Counter: ${counter}`);
});

// Setiap 1 detik, semua klien dikirimi counter baru
setInterval(() => {
  counter++;
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(`Counter: ${counter}`);
    }
  });
}, 1000);
