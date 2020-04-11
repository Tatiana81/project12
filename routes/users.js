/* eslint-disable no-restricted-syntax */
const router = require('express').Router();
const fs = require('fs');
const path = require('path');

let file = '';
let usersBase = new Array();
// eslint-disable-next-line no-undef
try { file = fs.readFileSync(path.join(__dirname, '../data/users.json')); } catch (err) { console.log(err); }

try { usersBase = JSON.parse(file); } catch (err) { console.log(err); }

router.get('/:id', (req, res) => {
    for (const i of usersBase) {
        // eslint-disable-next-line no-underscore-dangle
        if (i._id === req.params.id) {
            res.send(i);
            return;
        }
    }
    res.status(200).send({ message: 'Нет пользователя с таким id' });
});

router.get('', (req, res) => {
    res.status(200).send(usersBase);
});
module.exports = router;