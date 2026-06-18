// 1. 引入 WebSocket 库
const WebSocket = require('ws');

// 2. 创建服务器，监听 8080 端口
const wss = new WebSocket.Server({ port: 8080 });

// 3. 监听连接事件
wss.on('connection', (ws) => {
    console.log('✅ 有客户端连接了！');
    
    // 4. 监听消息事件
    ws.on('message', (data) => {
        console.log('📩 收到消息:', data.toString());
    });
    
    // 5. 监听关闭事件
    ws.on('close', () => {
        console.log('❌ 客户端断开了');
    });
});

console.log('🚀 服务器已启动: ws://localhost:8080');