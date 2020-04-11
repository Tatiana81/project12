const router = require('express').Router();
const fs = require('fs');
const path = require('path');

let file;
let cardsBase;

// eslint-disable-next-line no-undef
try { file = fs.readFileSync(path.join(__dirname, '../data/cards.json')); } catch (err) { console.log(err); }

try { cardsBase = JSON.parse(file); } catch (err) { console.log(err); }

router.get('', (req, res) => {
    res.status(200).send(cardsBase);
});

module.exports = router;