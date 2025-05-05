const express = require('express');
const router = express.Router();

// Dummy register route
router.post('/register', (req, res) => {
  res.send('Register endpoint');
});

// Dummy login route
router.post('/login', (req, res) => {
  res.send('Login endpoint');
});

module.exports = router;
