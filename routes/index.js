const express = require("express");
const router = express.Router()
// const TodoController = require("../controllers/todos")
const { login, register } = require('../controllers/auth');
const { index, add } = require('../controllers/species');
const { authorization } = require('../middleware/authorization');
const { Petindex, Petadd, Petupdate, Petdestroyer } = require('../controllers/pet');

router.get("/", (req, res) => {
    res.send("<strong>Hello DumbWays Rumah Tengah</strong>");
});

//Login
router.post('/login', login)
router.post('/register', register)

//Species
router.get('/species', index)
router.post('/species', add)

//PET
router.get('/pets', Petindex);
router.post('/pet', Petadd);
router.put('/pet/:id', Petupdate);
router.delete('/pet/:id', Petdestroyer);


//todocontroller
// router.get('/todos', TodoController.index)
// router.get('/todo/:id', TodoController.show)
// router.post('/todo', TodoController.store)
// router.patch('/todo/:id', TodoController.update)
// router.delete('/todo/:id', TodoController.destroy)


module.exports = router;