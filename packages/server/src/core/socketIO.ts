import { Server, Socket } from "socket.io";

function SocketIO() {
    this.io;
    this.connectedClients = [];
}

SocketIO.prototype.init = function(server) {
    this.io = new Server(server, {
        cors: {
            origin: 'http://localhost:3000'
        }
    });
    this.io.on("connection", async (socket: Socket) => {
        const socketId = socket.id;
        this.connectedClients.push(socketId);
        socket.emit('welcome', `hey ${socketId} welcome`);
        console.log('new client has been connected');
    });
};

SocketIO.prototype.emitMessage = function(topic, data)  {
    this.io.emit(topic, data);
    console.log(`new message emitted to ${topic} with data:: `, data);
}

const socketIO = new SocketIO();

export {socketIO as default};