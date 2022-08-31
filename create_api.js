const fs = require("fs");
const http =require("http");

const server = http.createServer((req,res) =>{
    fs.readFile("response.json","UTF-8",(_err,data) =>{
    
        res.end(data);
    })
})
server.listen("8000","127.0.0.1", (_err) =>{
    try {
        console.log("Server is created ");
        console.log("Running on port 8000");
    } catch (_err) {
        console.log(_err);
    }
    



})