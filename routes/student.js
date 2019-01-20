// Express routes
const router = require('express').Router();
const db = require('../db');
let students = db.students;

// Create Student Models

// Get Students
router.get('/', function(req, res, next) {
  res.json(students);
});

// Get Student by Id
router.get('/:id', function(req, res, next) {
  let student = students.filter(person => person.id === +req.params.id);
  res.json(student);
});

// Add Student
router.post('/', function(req, res, next) {
  let newId = students.length + 1;
  let student = {
    id: newId,
    name: req.body.name,
  };
  students.push(student);
  res.json(students);
});

// Delete Student
router.delete('/:id', function(req, res, next) {
  let newClass = students.filter(person => person.id !== +req.params.id);
  students = newClass;
  res.json(students);
});

// Update Student
router.put('/:id', function(req, res, next) {
  students.map(person => {
    if (person.id === +req.params.id) {
      person.name = req.body.name;
    }
  });
  res.json(students);
});

module.exports = router;
