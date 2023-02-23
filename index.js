const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));
app.use('/esy-state',  express.static('node_modules/@esyfyi/esy-state', { index: ["index.mjs"] }));

app.listen(port, () => {
  console.log(`Esy-State website is listening on port ${port}`);
})