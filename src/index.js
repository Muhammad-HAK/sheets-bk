const express = require('express')
const bodyParser = require('body-parser')
const Mongoose = require('./db/db.connect');
Mongoose.connect();
const app = express()
const { router } = require('./routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('API is up!'))

app.use('/api' || '/api/user', require('./routes/users.routes'))
app.use('/api/sheet', require('./routes/sheets.routes'))

app.listen(3000, () => console.log('Sheets app listening on port 3000!'))

module.exports = {
  app
}