const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 3000 })

server.on('connection', ws => {
    ws.on('message', message => {
        server.clients.forEach(client => {
            if (client.readyState == WebSocket.OPEN) {
                client.send(message)
                console.log(message)
            }
        })
    })

    console.log('Открыли соединение')
})