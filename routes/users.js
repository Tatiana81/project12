const router = require('express').Router()
const usersBase = require('../data/users.json')

router.get('/:id', (req, res) => {
    for (let i of usersBase) {
        if (i['_id'] === req.params.id) {
            res.send(JSON.stringify(i));
            return
        }
    }
    res.send(JSON.stringify({ 'message': "Нет пользователя с таким id" }))

})

router.get('', (req, res) => {
    res.status(200).send(JSON.stringify(usersBase));
})



module.exports = router;