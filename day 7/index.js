const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'public','images')));

app.get("/", async(req,res) => {
    res.sendFile(path.join(__dirname,'public','resume.html'));
});

app.get("/home", async(req,res) => {
    res.sendFile(path.join(__dirname,'public','home.html'));
});

app.get("/contact", async(req,res) =>{
    res.sendFile(path.join(__dirname,'public','contact.html'));
});

app.listen(5000, () => {
    console.log('server is running in http://localhost:5000');

});
