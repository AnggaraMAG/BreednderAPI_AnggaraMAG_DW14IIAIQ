const models = require('../models');

const User = models.user;

exports.Udetail = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne(
            {
                where: { id },
                attributes: { exclude: ["id", "password", "email"] }
            },

        );
        res.send(user);
    } catch (err) {
        console.log(err);
    }
};

exports.Uupdate = async (req, res) => {
    try {
        const { name, address, phone } = req.body;
        const { id } = req.params;
        const user = await User.update(
            { name, address, phone },
            {
                where: {
                    id
                }
            }
        );
        const myuser = await User.findOne({
            where: { id },
            attributes: { exclude: ["id", "password", "email"] }
        });
        res.send(myuser);
    } catch (err) {
        console.log(err);
    }
};

exports.Udelete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.destroy({ where: { id } });
        res.status(200).send({ message: "Success Delete a user", id: user });
    } catch (error) {
        console.log(error)
    }
}