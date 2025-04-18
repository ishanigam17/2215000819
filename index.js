const express = require('express');
const numbersRoute = require('./routes/numbers');

const app = express();
const PORT = 9876;

app.use('/numbers', numbersRoute);

// Default route
app.get('/', (req, res) => {
  res.send('Average Calculator Microservice is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
