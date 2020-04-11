const express = require('express');
const path = require('path');
const usersGet = require('./routes/users.js');
const cardsGet = require('./routes/cards.js');

// eslint-disable-next-line no-undef
const { PORT = 3000 } = process.env;

const app = express();

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersGet);
app.use('/cards', cardsGet);
app.use((req, res) => {
    res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});