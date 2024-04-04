import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Please type the URL for QR conversion",
            name: "URL",
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        console.log(url);
        
        var qrimage = qr.image(url, {type: "svg"});

        qrimage.pipe(fs.createWriteStream("website_url.svg"));

        fs.writeFile("URLText.txt",url, (error) =>{
        if(error) throw error;
        console.log("File saved successfully");

        })
        fs.close();
})
    
    .catch((error) =>{
        if (error.isTtyError) {
            //comment
        }
        else {
            //something
        }
    });
    
