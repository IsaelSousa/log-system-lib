const { Server } = require('socket.io');

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
            console.log('👌 Log System Started 👌');

            socket.on('disconnect', () => {
                console.log('🔥 Log System Disconnected 🔥');
            });
        });
    }

    trace(value) {
        const date = new Date();
        this.io.emit('message', [ 'trace', value, date ]);
    }

    debug(value) {
        const date = new Date();
        this.io.emit('message', [ 'debug', value, date ]);
    }

    info(value) {
        const date = new Date();
        this.io.emit('message', [ 'info', value, date ]);
    }

    warn(value) {
        const date = new Date();
        this.io.emit('message', [ 'warn', value, date ]);
    }

    error(value) {
        const date = new Date();
        this.io.emit('message', [ 'error', value, date ]);
    }

    fatal(value) {
        const date = new Date();
        this.io.emit('message', [ 'fatal', value, date ]);
    }
}

module.exports = new Log();