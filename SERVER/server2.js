const http= require("http");
const fs= require("fs");

const myserver= http.createServer((req,res)=>{
    let responetext="";
    const log=`${Date.now()} | ${req.url} | ${responetext} \n`;
    fs.appendFile("log.txt", log , (err,data)=>{
    if(err) console.log(err);
});
    switch(req.url){
        case '/':
            responetext="Home Page";
            break;
        case '/about':
            responetext="About Page";
            break;     
        case '/contact':
            responetext="Contact Page";
            break;
        default:
            responetext="404 Page Not Found";
            break;
    }
});
myserver.listen(8000, ()=> console.log("Server Started"));