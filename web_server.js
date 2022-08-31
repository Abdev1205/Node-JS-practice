const http = require("http");
const server= http.createServer((req,res) => {
    res.end("hello server is running")


})

server.listen("8000","127.0.0.1", (_err) =>{
    try {
        console.log("Server is created ");
        console.log("Running on port 8000");
    } catch (_err) {
        console.log(_err);
    }
    



})