/*const http = require("http");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "logs", "log.txt");
const server = http.createServer((req,res)=>{
    fs.mkdir(path.join(__dirname, "logs"), {recursive: true},()=>{
        fs.appendFile(filePath, "new req" ()=>{
    })
})*/
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    let response="";
    switch(req.utl){
        case '/home':
            resphone="Home Page";
            break;
        case '/about':
            response="About Page";
            break;
        case '/contact':
            response="Contact Page";
            break;
        default:
            response="404 Page Not Found";
    }
    const log = `${Date.now()} | ${req.url} | ${response} \n`;
    fs.appendFile("log.txt", log , (err)=>{
        res.end(response);
    })
})
server.listen(8000,()=>console.log("server started"));