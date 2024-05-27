// Write a JavaScript program that determines the corresponding grade of each student
const report = [
    {
        id: 1,
        name: "David",
        score: 80,
    },
    {
        id: 2,
        name: "Vinoth",
        score: 77,
    },
    {
        id: 3,
        name: "Divya",
        score: 88,
    },
    {
        id: 4,
        name: "Ishitha",
        score: 95,
    },
    {
        id: 5,
        name: "Thomas",
        score: 68,
    }
];

report.forEach(student => {
    let grade;
    if (student.score < 60) {
        grade = "Grade F";
    } else if (student.score < 70) {
        grade = "Grade D";
    } else if (student.score < 80) {
        grade = "Grade C";
    } else if (student.score < 90) {
        grade = "Grade B";
    } else if (student.score <= 100) {
        grade = "Grade A";
    } else {
        grade = "Invalid score";
    }
    console.log(`${student.id}. ${student.name}, you scored ${student.score} ${grade}`);
});

