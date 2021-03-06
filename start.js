const express = require('express');
const path = require('path');

const port = 3000;
const here = __dirname;
const app = express();

app.enable('strict routing');

const router = express.Router({
  caseSensitive: app.get('case sensitive routing'),
  strict: app.get('strict routing')
});

app.use(router);

// - /icon.png
// - /doc.css
router.use(express.static(`${here}`));

router.get('/form/', (req, res) => {
  res.sendFile(`${here}/app.html`);
});

router.get('/form/doc.js', (req, res) => {
  res.sendFile(`${here}/doc-opt-bundle.js`);
});

app.listen(port, () => {
  console.log(`success Started local server at port ${port}!`)
});
