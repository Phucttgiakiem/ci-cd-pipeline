const express = require('express');


// Next initialize the application
const app = express();

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'bạn';
  res.json({ message: `Xin, ${name}!` });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});