const { Server, Socket } = require('socket.io');

class Log {

    constructor() {
        this.io = new Server(5632, {
            transports: ['websocket', 'polling'],
            cors: {
                origin: '*',
                credentials: true
            }
        });
    }

    startLog() {
        this.io.on('connection', (socket) => {
            console.log('👌 Server Started 👌');

            socket.on('message', (args) => {
                this.LogMessage(args[0], args[1]);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    LogMessage(logLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal', value) {
        const date = new Date();
        this.io.emit('message', [ logLevel, value, date ]);
    }

}

module.exports = new Log();
