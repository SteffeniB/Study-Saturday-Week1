const db = {
  tests: [
    { id: 0, subject: 'Physics', score: 99, studentId: 0 },
    { id: 1, subject: 'English', score: 78, studentId: 1 },
    { id: 2, subject: 'Math', score: 90, studentId: 3 },
    { id: 3, subject: 'English', score: 95, studentId: 3 },
    { id: 4, subject: 'Physics', score: 88, studentId: 4 },
  ],
  students: [
    { id: 0, name: 'Dan' },
    { id: 1, name: 'Rohan' },
    { id: 2, name: 'Sol' },
    { id: 3, name: 'Ella' },
    { id: 4, name: 'Michael' },
    { id: 5, name: 'Karen' },
  ],
};

module.exports = db;
