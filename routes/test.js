const router = require('express').Router();
const students = require('./studentDB');

let tests = [
  { id: 0, subject: 'Physics', score: 99, studentId: 0 },
  { id: 1, subject: 'English', score: 78, studentId: 1 },
  { id: 2, subject: 'Math', score: 90, studentId: 3 },
  { id: 3, subject: 'English', score: 55, studentId: 3 },
  { id: 4, subject: 'Physics', score: 88, studentId: 4 },
];

router.get('/', (req, res, next) => {
  res.send(tests);
});

router.get('/:id', (req, res, next) => {
  res.send(tests[req.params.id - 1]);
});

router.post('/', (req, res, next) => {
  tests.push({
    id: tests.length,
    subject: req.body.subject,
    score: req.body.score,
    studentId: students.filter(student => {
      return student.name === req.body.name;
    })[0].id,
  });
  res.send(tests);
});

router.put('/:id', (req, res, next) => {
  let testToUpdate = tests.filter(test => {
    return test.id === Number(req.params.id);
  })[0];
  testToUpdate.score = req.body.score;
  res.send(tests);
});

router.delete('/:id', (req, res, next) => {
  let newTests = tests.filter(test => {
    return test.id !== Number(req.params.id);
  });
  tests = newTests;
  res.send(tests);
});

module.exports = router;
