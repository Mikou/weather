const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080;

require('./routes')(app);

app.use(bodyParser.json());
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.listen(PORT);
console.log(`listening on ${PORT}`)

