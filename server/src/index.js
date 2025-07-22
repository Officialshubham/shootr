const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5001;

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../../client/build')));

// Serve React frontend + SWF
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
