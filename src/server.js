const express = require('express')
const { port, socketPort } = require('./config')
const bodyParser = require('body-parser')
const app = express()
const { createServer } = require("https");
const { Server } = require("socket.io");
const Mongoose = require('./db/db.connect')
Mongoose.connect()

const httpsServer = createServer(app);
const io = new Server(httpsServer, { /* options */ });
io.on("connection", (socket) => {
  // console.log(socket);
});

httpsServer.listen(socketPort);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => res.send('Sheets API is up!'))

app.use('/api/users', require('./routes/users.routes'))
app.use('/api/sheets', require('./routes/sheets.routes'))

app.listen(port, () => console.log(`Sheets app listening on port ${port}!`))

module.exports = {
  app
}