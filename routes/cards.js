const router = require('express').Router()
const cardsBase = require('../data/cards.json')

router.get('', (req, res) => {
    res.status(200).send(JSON.stringify(cardsBase));
})

module.exports = router;