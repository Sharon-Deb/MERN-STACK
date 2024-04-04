import http from "http";
import { parse } from "path";
import url from "url";
import fs from "fs";


    


const server = http.createServer((req, res) => {
const parseUrl = url.parse(req.url, true);



if(parseUrl.pathname === "/" && req.method === "GET")
{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("calculator.html")
}
else if(parseUrl.pathname === "/home" && req.method === "GET")
{
    fs.readFile('calculator.html', function (err, html){
        if (err) {
            throw err; 
        }
    
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
    });
}
else if(parseUrl.pathname === "/aboutus" && req.method === "GET")
{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>About Us</h1><p>At the heart of innovation and technological advancement, our engineering college stands as a beacon of knowledge, dedicated to nurturing the next generation of engineers and thought leaders. With a rich history of academic excellence and a vibrant community of scholars, our institution is committed to providing a comprehensive and challenging curriculum, state-of-the-art facilities, and a supportive environment that fosters creativity, collaboration, and problem-solving. Our distinguished faculty, drawn from the world's leading institutions, are passionate about teaching and research, and are invested in the success of each student. Through hands-on projects, internships, and research opportunities, we prepare our students not only to meet the demands of the modern workforce but to lead it, driving forward the frontiers of engineering and making meaningful contributions to society. Join us to embark on a journey of discovery, innovation, and success.</p>")
}
else if(parseUrl.pathname === "/contact" && req.method === "GET")
{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>contact us</h1>")
}
else {
    res.writeHead(404,{"Content-Type": "text/html"} );
    res.end("<h1>Sorry! Page not found</h1>");
}

});
server.listen(5000, ()=>{
    console.log("Server is running successfully in http://localhost:5000");
});