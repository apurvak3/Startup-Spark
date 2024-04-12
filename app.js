const express = require('express');
const app = express();
const port = 3000;

// Set up view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Import routes
const expertsRouter = require('./routes/experts');
const caseStudiesRouter = require('./routes/case-studies');
const economicHelpRouter = require('./routes/economic-help');
const hiringRouter = require('./routes/hiring');
const govSchemesRouter = require('./routes/gov-schemes');

// Use routes
app.use('/experts', expertsRouter);
app.use('/case-studies', caseStudiesRouter);
app.use('/economic-help', economicHelpRouter);
app.use('/hiring', hiringRouter);
app.use('/gov-schemes', govSchemesRouter);

// Home route
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});