const express = require('express');
const router = express.Router();

// Dummy economic help data
const economicHelp = [
  { title: 'Small Business Loans', description: 'Information about various small business loan programs.' },
  { title: 'Tax Incentives', description: 'Details on tax incentives and credits for startups.' },
  { title: 'Incubator and Accelerator Programs', description: 'accelerators that provide resources, mentorship, and networking opportunities to startups.' },
  { title: 'Procurement Programs:', description: 'set aside a portion of their procurement budget for small businesses or minority-owned businesses.' },
  { title: 'Export Promotion Schemes:', description: 'Information on government and private grant programs for entrepreneurs.' },
  { title: 'Grant Programs', description: 'Information on government and private grant programs for entrepreneurs.' },
];

// Route for economic help
router.get('/', (req, res) => {
  res.render('economic-help', { economicHelp });
});

module.exports = router;