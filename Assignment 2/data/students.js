// data/students.js
// In-memory "database" — just a plain array of student objects.
// No MongoDB/MySQL/Mongoose allowed for this assignment, so we store
// everything in this array and mutate it directly.

let students = [
  { id: 1, name: "punit", course: "Btech", age: 19 },
  { id: 2, name: "Priya", course: "BTech", age: 21 },
  { id: 3, name: "Amit", course: "BCA", age: 19 },
  { id: 4, name: "akshat", course: "Btech", age: 19 }
 
];

module.exports = students;
