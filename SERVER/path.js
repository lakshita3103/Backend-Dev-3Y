// 'c:\\user\\lakshita\\desktop\\path.js'
// path.join("user","lakshita","desktop",);
/*
const path = require('path');
const filepath = "/user/admin/docs/report.pdf";
console.log(path.basename(filepath)); // Output: report.pdf // use of filepath? 
*/

const path = require('path');
console.log("file name:", path.basename(__filename));
console.log("folder name:", path.dirname(__filename));
console.log("file extension:", path.extname(__filename));

const fullpath = path.join(__dirname, "public", "index.html");
console.log("full path:", fullpath);