const express = require('express');
const router = express.Router();

// Dummy case study data
const caseStudies = [
  { title: 'Successful SaaS Startup', description: 'A case study on a successful software-as-a-service (SaaS) startup.' },
  { title: 'E-commerce Business Growth', description: 'A case study on how an e-commerce business scaled and grew.' },
  { title: 'Social Impact Startup', description: 'A case study on a startup with a social impact mission.' },
];

// Route for case studies
router.get('/', (req, res) => {
  res.render('case-studies', { caseStudies });
});

module.exports = router;