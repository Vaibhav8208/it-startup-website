const express = require('express');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files (for CSS, images)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
