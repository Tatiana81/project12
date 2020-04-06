const express = require('express');
const path = require('path');
const usersGet = require('./routes/users.js')
const cardsGet = require('./routes/cards.js')

//const bodyParser = require('body-parser')

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersGet);
app.use('/cards', cardsGet);
app.use(function(req, res) {
    res.status(404).send(JSON.stringify({ "message": "Запрашиваемый ресурс не найден" }));
});

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) });