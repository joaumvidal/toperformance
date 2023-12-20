const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a route that sends a JSON response
app.get('/api/data', (req, res) => {
  const jsonData = {
    message: 'Hello, this is your JSON response!',
    timestamp: new Date()
  };

  res.json(jsonData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
