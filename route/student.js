const express = require('express');
const router = express.Router();

let students = [
  { id: 1, name: 'Dan' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Derek' },
  { id: 4, name: 'Steff' },
];

router.get('/', (req, res, next) => {
  res.send(
    students.map(student => {
      return student.name;
    })
  );
});

router.get('/:id', (req, res, next) => {
  res.send(students[req.params.id - 1].name);
});

router.post('/', (req, res, next) => {
  try {
    if (students[req.body.id - 1]) {
      throw new Error();
    }
    students.push({
      id: req.body.id,
      name: req.body.name,
    });
    res.redirect('/');
  } catch (err) {
    res.status(404).send('ID already exists');
  }
});

router.put('/', (req, res, next) => {
  try {
    if (!students[req.body.id - 1]) {
      throw new Error();
    }
    students[req.body.id - 1].name = req.body.name;
    res.redirect('/');
  } catch (err) {
    res.status(404).send('That student ID does not exist');
  }
});

router.delete('/', (req, res, next) => {
  try {
    if (!students[req.body.id - 1]) {
      throw new Error();
    }
    students.splice(req.body.id - 1, 1);
    res.redirect('/');
  } catch (err) {
    res.status(404).send('That student ID does not exist');
  }
});

module.exports = router;
