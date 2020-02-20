const express = require("express");
const router = express.Router()
// const TodoController = require("../controllers/todos")
const { auth } = require('../middleware/authorization');
const { login, register } = require('../controllers/auth');
const { index, add } = require('../controllers/species');
const { Petindex, Petadd, Petupdate, Petdestroyer, Petdetails } = require('../controllers/pet');
const { Udetail, Uupdate, Udelete } = require('../controllers/user')

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
router.post('/pet', auth, Petadd);
router.put('/pet/:id', auth, Petupdate);
router.delete('/pet/:id', auth, Petdestroyer);
router.get('/pet/:id', auth, Petdetails);

//USER
router.get('/user/:id', Udetail);
router.put('/user/:id', Uupdate);
router.delete('/user/:id', Udelete);


//todocontroller
// router.get('/todos', TodoController.index)
// router.get('/todo/:id', TodoController.show)
// router.post('/todo', TodoController.store)
// router.patch('/todo/:id', TodoController.update)
// router.delete('/todo/:id', TodoController.destroy)


module.exports = router;