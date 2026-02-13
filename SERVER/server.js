const http= require("http");
const fs= require("fs");

const myserver= http.createServer((req,res)=>{
    //console.log("New Req Rec.");
    //console.log(req.headers); //tells the host and the window information
    //console.log(req);
    const log=`${Date.now()} :  ${req.url} New Req Rec.\n`;
    fs.appendFile("log.txt", log , (err,data)=>{
        // 5 switch case
        switch(req.url){
            case '/':
                res.end("Home Page");
                break;
            case '/about':
                res.end("About Page");
                break;     
            case '/contact':
                res.end("Contact Page");
                break;
            default:
                res.end("404 Page Not Found");
        }
    });
    res.end("Hello from server");
});

myserver.listen(8000, ()=> console.log("Server Started"));