const express = require('express');
const router = express.Router();

// Dummy expert advice data
const expertAdvice = [
  { name: 'John Doe', advice: 'Start with a solid business plan.' },
  { name: 'Jane Smith', advice: 'Focus on customer acquisition early on.' },
  { name: 'Bob Johnson', advice: 'Validate your idea with potential customers.' },
];

// Route for expert advice
router.get('/', (req, res) => {
  res.render('experts', { expertAdvice });
});

module.exports = router;