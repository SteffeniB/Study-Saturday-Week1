// Express routes
const router = require('express').Router();
const db = require('../db');
let tests = db.tests;
const students = db.students;

// Get Tests
router.get('/', function(req, res, next) {
  res.json(tests);
});

router.get('/top', (req, res, next) => {
  res.send(
    tests.reduce((acc, cv) => {
      if (cv.score > acc.score) {
        acc = cv;
        return acc;
      } else {
        return acc;
      }
    })
  );
});

router.get('/:id/mean', (req, res, next) => {
  let studentScores = tests
    .filter(test => {
      return test.studentId === Number(req.params.id);
    })
    .map(test => {
      return test.score;
    });
  let studentAvg =
    studentScores.reduce((acc, cv) => {
      acc += cv;
      return acc;
    }, 0) / studentScores.length;
  console.log(studentAvg);
  res.send(`The Student's mean score is: ${studentAvg}`);
});

// Get Test by Id
router.get('/:id', function(req, res, next) {
  let test = tests.filter(test => test.id === +req.params.id);
  res.json(test);
});

// Add Score
router.post('/', function(req, res, next) {
  let newId = tests.length + 1;
  let test = {
    id: newId,
    score: req.body.score,
    studentId: req.body.studentId,
    subject: req.body.subject,
  };
  tests.push(test);
  res.json(tests);
});

// Delete Score
router.delete('/:id', function(req, res, next) {
  let newScores = tests.filter(score => score.id !== +req.params.id);
  tests = newScores;
  res.json(tests);
});

// Update Score
router.put('/:id', function(req, res, next) {
  tests.map(score => {
    if (score.id === +req.params.id) {
      score.score = req.body.score;
      score.studentId = req.body.studentId;
      score.subject = req.body.subject;
    }
  });
  res.json(tests);
});

router.get('/top', (req, res, next) => {
  console.log(tests);
  let scores = tests.map(test => {
    return test;
  });
  res.send(scores);
});

module.exports = router;
