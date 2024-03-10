const { Server } = require("socket.io");

const io = new Server({ cors: { origin: ["http://localhost:4200"] } });

io.on("connection", (socket) => {
    socket.on("client-event", (data) => {
        console.log(data);
        socket.emit("server-resp", data);
    })
    socket.emit("Socket-Connection", {sender :"server", message : "hello this message is from server"});
});

io.listen(3000);