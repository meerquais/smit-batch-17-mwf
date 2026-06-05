const Message = require("../models/Message");

const socketHandler = (io)=>{
    io.on("connection", (socket)=>{
        console.log("User Connected:" ,socket.id);

        socket.on("send_message", async(data)=>{
            const msg = await Message.create({
                sender:data.sender,
                text:data.text
            });

            io.emit("receive_message" , msg);
        });

        socket.on("disconnect", ()=>{
            console.log("user disconnected:" , socket.id);
        });

    });
};

module.exports = socketHandler