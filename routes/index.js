const express = require("express");
const router = express.Router()
// const TodoController = require("../controllers/todos")
const { login, register } = require('../controllers/auth');
const { index, add } = require('../controllers/species')

router.get("/", (req, res) => {
    res.send("<strong>Hello DumbWays Rumah Tengah</strong>");
});


router.post('/login', login)
router.post('/register', register)

router.get('/species', index)
router.post('/species', add)
//todocontroller
// router.get('/todos', TodoController.index)
// router.get('/todo/:id', TodoController.show)
// router.post('/todo', TodoController.store)
// router.patch('/todo/:id', TodoController.update)
// router.delete('/todo/:id', TodoController.destroy)


module.exports = router;