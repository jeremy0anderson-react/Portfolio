const express = require('express'),
    app=express(),
    {json, urlencoded, static}=express,
    PORT=process.env.PORT || 4000,
    httpServer=require('http').createServer(app),
    {Server}=require('socket.io'),
    path=require('path'),
    io = new Server(httpServer,{
    });

app.use(json());
app.use(urlencoded({extended:true}));
app.use(static(path.join(__dirname, "portfolio", "build")))

io.on('connection', (socket)=>{
    console.log(socket.id);
    io.emit("connected",{
        socketID: socket.id
    });

    socket.on("ID", (data)=>{
        console.log(data)
    })






    socket.on('disconnect', (reason)=>{
        console.log(reason);
        socket.removeAllListeners(socket.eventNames());
    })

})




app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "portfolio","build","index.html"))
})

httpServer.listen(PORT, ()=>{
    console.log("listening @ "+PORT);
})