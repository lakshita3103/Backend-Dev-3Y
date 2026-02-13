const express = require("express");
const app = express();
app.use(express.json());

let students = [
    {id:1, name:"Apeksha", marks:90, city:"Mathura"},
    {id:2, name:"Gunnu", marks:20, city:"Agra"},
    {id:3, name:"Gungun", marks:70, city:"Delhi"}
];

app.get("/students", (req, res) => {
    res.json(students);
});

// Delete - Remove Student only if marks < 70
app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);
    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" 
        });
    }

    // Condition check: A student can be deleted only if their marks are less than 70. if marks are 70 or above, return a proper error message.
    if (students[index].marks >= 70) {
        return res.status(400).json({
            message: "Student cannot be deleted because marks are 70 or above"
        });
    }
    const deletedStudent = students.splice(index, 1);

    res.json({
        message: "Student deleted successfully",
        deletedStudent: deletedStudent[0]
    });
});

app.listen(8000, () => console.log("Server Started on port 5000"));
