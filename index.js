const { Server } = require("socket.io");

const io = new Server({ cors: { origin: ["http://localhost:4200"] } });

io.on("connection", (socket) => {
    // ...
    console.log("Connected")
    socket.on("client-event", (data) => {
        socket.emit("server-resp", data);
    })
    socket.emit("new-email", {sender :"server", message : "hello this message is from server"});

    // setInterval(() => {
    //     socket.emit("new-email", { message: faker.git.commitMessage(), sender: "Server" })
    //     // socket.to("private").emit("new-email", { message: faker.git.commitMessage(), sender: "Server" })
    // }, 5000);
});

io.listen(3000);