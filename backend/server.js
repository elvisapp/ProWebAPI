const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hola reclutador, todo bien?, saludos!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
