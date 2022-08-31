const fs = require("fs");
const http =require("http");

const server = http.createServer((req,res) =>{
    // fs.readFile("response.json","UTF-8",(_err,data) =>{
    
    //     res.end(data.toString());
    // })

    // this is traditional way to read th file nut now we are going read file using stream 
    // const rStream = fs.createReadStream("response.json");
    // rStream.on("data",(chunkData)=>{
    //     res.write(chunkData);
        
    // });
    // rStream.on("end",()=>{
    //     res.end();
    // })
    // rStream.on("error",(err)=>{
    //     console.log(err);
    //     res.end("File Not Found")
    // })
    // this is to long so we are going to use stream.pipe() to short the code 

    const rStream = fs.createReadStream("response.json");
    rStream.pipe(res);

})
server.listen("7000","127.0.0.1", (_err) =>{
    try {
        console.log("Server is created ");
        console.log("Running on port 7000");
    } catch (_err) {
        console.log(_err);
    }
    



})