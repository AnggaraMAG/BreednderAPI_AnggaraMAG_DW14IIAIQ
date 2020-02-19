const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const Pet = models.pet
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email, password } });
        if (user) {
            const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
            res.send({ email, token });
        } else {
            res.status(401).send({ message: "invalid login" });
        }
    } catch (err) {
        console.log("err");
    }
};

//REGISTER
exports.register = async (req, res) => {
    try {
        const { name, email, password, phone, address, pet } = req.body;
        const { petname, gender } = pet;
        const species = pet.species.id;
        const age = pet.age.id;

        const check = await User.findOne({ where: { email } });
        if (check) {
            res
                .status(401)
                .send({ status: false, message: "The email is ready to login" });
        } else {
            const userRes = await User.create({
                email,
                password,
                name,
                phone,
                address
            });
            // console.log(userRes);

            const user = userRes.dataValues.id;
            const petRes = await Pet.create({
                name: petname,
                gender,
                species,
                age,
                user
            });

            if (userRes && petRes) {
                const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
                res
                    .status(200)
                    .send({ email, token, status: true, message: "Register Success" });
            } else {
                res.status(401).send({ status: false, message: "Invalid Register" });
            }
        }
    } catch (err) {
        console.log(err);
    }
};