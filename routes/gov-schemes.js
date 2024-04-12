const express = require('express');
const router = express.Router();

// Dummy government scheme data
const govSchemes = [
  { name: 'Startup India', description: 'A government initiative to promote entrepreneurship in India.' },
  { name: 'Make in India', description: 'A government initiative to encourage manufacturing in India.' },
  { name: 'Digital India', description: 'A government program to improve digital infrastructure and services.' },
];

// Route for government schemes
router.get('/', (req, res) => {
  res.render('gov-schemes', { govSchemes });
});

module.exports = router;