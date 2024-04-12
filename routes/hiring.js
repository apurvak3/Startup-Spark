const express = require('express');
const router = express.Router();

// Dummy job posting data
const jobPostings = [
  {
    title: 'Software Engineer',
    company: 'Acme Inc.',
    description: 'We are looking for a skilled software engineer to join our team and work on our cutting-edge products.',
    location: 'New York, NY'
  },
  {
    title: 'Marketing Manager',
    company: 'Startup Ventures',
    description: 'An exciting opportunity to lead the marketing efforts for a rapidly growing startup.',
    location: 'San Francisco, CA'
  },
  {
    title: 'Sales Representative',
    company: 'TechCorp',
    description: 'Seeking an enthusiastic sales representative to join our sales team and drive revenue growth.',
    location: 'Chicago, IL'
  }
];

// Route for job postings
router.get('/', (req, res) => {
  res.render('hiring', { jobPostings });
});

module.exports = router;