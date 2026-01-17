const url = require('url');
const http= require('http');

const myserver = http.createServer((req, res) => {
    const myurl = url.parse(req.url, true);
    console.log(myurl);

    switch (myurl.pathname) {
        case '/':
            res.end("This is Home page");
            break;
        case '/about':
            const username = myurl.query.myname;
            res.end(`Hi, ${username}`);
            break;
        default:
            res.end("404 Page Not Found");
    }
});
myserver.listen(8000, () => console.log("Server Started"));