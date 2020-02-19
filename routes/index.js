const express = require("express");
const router = express.Router()
// const TodoController = require("../controllers/todos")
const { login } = require('../controllers/auth');

router.get("/", (req, res) => {
    res.send("<strong>Hello DumbWays Rumah Tengah</strong>");
});


router.post('/login', login)
//todocontroller
// router.get('/todos', TodoController.index)
// router.get('/todo/:id', TodoController.show)
// router.post('/todo', TodoController.store)
// router.patch('/todo/:id', TodoController.update)
// router.delete('/todo/:id', TodoController.destroy)


module.exports = router;