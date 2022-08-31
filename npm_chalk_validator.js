const chalk = require("chalk");
const validator = require("validator")
const fs = require("fs");
// const positive = chalk.green.underline.inverse("Test Passed .....");
// const negative = chalk.red.underline.inverse("Test Failed .....");
// console.log(negative);


// fs.readFile("test.txt","UTF-8",(_err,data)=>{
//    console.log(data ? chalk.green.inverse("test passed"): chalk.red.inverse(`test failed`));
//    console.log(data ? data : _err);
// });

// email validation

// emailValidation = validator.isEmail("abhay@gmail.com");
// console.log(emailValidation ? chalk.green.inverse("Email is valid"): chalk.red.inverse("Email is not valid"));
  
// mobile no validation 
mobileValidation = validator.isMobilePhone("17065040");
console.log(mobileValidation ? chalk.green.inverse("Mobile no is valid"): chalk.red.inverse("Mobile no is not valid"));
  
