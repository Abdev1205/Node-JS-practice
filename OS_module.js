const os = require("os");
// console.log(os.arch()); // it used to get architecture of system
const freeMemory = os.freemem();
console.log(`My free RAm ${freeMemory/1024/1024/1024 } GB`);
const totalMemory = os.totalmem();
console.log(`My Total Ram is ${totalMemory/1024/1024/1024 } GB`);
