const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 3000;

// In-memory student data
let students = [
  { id: 1, name: "Amit", branch: "CSE" },
  { id: 2, name: "Sona", branch: "IT" }
];

// Logger function
function logRequest(req, responseMessage) {
  const log = `${new Date().toISOString()} | ${req.method} | ${req.url} | ${responseMessage}\n`;
  fs.appendFile("log.txt", log, () => {});
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // GET /students
  if (method === "GET" && path === "/students") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(students));
    logRequest(req, "Returned all students");
  }

  // GET /students/:id
  else if (method === "GET" && path.startsWith("/students/")) {
    const id = parseInt(path.split("/")[2]);
    const student = students.find(s => s.id === id);

    if (student) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(student));
      logRequest(req, "Returned single student");
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Student not found" }));
      logRequest(req, "Student not found");
    }
  }

  // POST /students
  else if (method === "POST" && path === "/students") {
    let body = "";

    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const newStudent = JSON.parse(body);
      newStudent.id = students.length + 1;
      students.push(newStudent);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newStudent));
      logRequest(req, "Added new student");
    });
  }

  // DELETE /students/:id
  else if (method === "DELETE" && path.startsWith("/students/")) {
    const id = parseInt(path.split("/")[2]);
    const index = students.findIndex(s => s.id === id);

    if (index !== -1) {
      students.splice(index, 1);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Student deleted" }));
      logRequest(req, "Deleted student");
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Student not found" }));
      logRequest(req, "Delete failed");
    }
  }

  // 404 Handler
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "404 Route Not Found" }));
    logRequest(req, "Invalid route");
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
