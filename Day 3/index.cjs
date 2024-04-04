var generateName = require('sillyname');
var sillyName = generateName();
console.log(sillyName);
console.log("code has run");
const { error } = require("console");
const fstream = require("fs");
fstream.writeFile("shanfile.txt","this is the first file that I am creating using node js",(error) => {
    if (error) throw error;
    console.log("file successfully written")
})
fstream.readFile("shanfile.txt","utf-8",(data,error) =>{
    if (error) throw error;

    console.log(data);

})

