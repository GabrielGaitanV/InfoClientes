const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const port = 3000;

const indexRouter = require('./routes/indexRouter.js');

app.set('view engine', 'ejs');

app.use("/", indexRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


