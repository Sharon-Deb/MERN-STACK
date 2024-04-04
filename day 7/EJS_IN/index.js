let express = require('express');

let app = express();

app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("home",{name: 'shan'});
});

app.listen(5000, function(req,res){
    console.log("server is running in http://localhost:5000")
})