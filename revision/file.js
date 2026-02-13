const fs = require("fs");
fs.writeFile("data.txt", "hello world", (err)=>{
    if(err) throw err;
    console.log("File Created");
})
/*fs.appendFile("data.txt", "\nThis is new data",(err)=>{
    console.log("Data appended");
})
fs.readFile("data.txt", "utf8", (err,data)=>{
    console.log(data);
})
fs.unlink("data.txt", (err)=>{
    console.log("File Deleted");
})*/
/*fs.mkdir("folder",(err)=>{
    console.log("Folder created");
})
fs.mkdir("parent/child", {recursive:true}, ()=>{})
fs.rmdir("folder",(err)=>{
    console.log("Folder deleted");
})*/
const readsteam =fs.createReadStream("data.txt", "utf8");
readsteam.on("data", (chunk)=>{
    console.log(chunk);
})
readsteam.on("end", ()=>{
    console.log("File read complete");
})