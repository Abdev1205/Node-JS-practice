const { error } = require("console");
const fs = require("fs");
// fs.writeFile("test.txt","creating file using node js" ,(err) =>{
//     console.log("File is created");
// });
// fs.appendFile("test.txt","good work on it",(err) =>{
//     try {
//        console.log("Task completed"); 
//     } catch (err) {
//         console.log(err);
//     }
// });

fs.readFile("test.txt","UTF-8",(err,data)=>{
    try {
        console.log(data);
    } catch (err) {
        console.log(error);
    }
});