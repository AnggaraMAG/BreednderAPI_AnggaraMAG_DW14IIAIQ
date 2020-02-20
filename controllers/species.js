const models = require('../models')
const Species = models.species

exports.index = async (req, res) => {
    try {
        const species = await Species.findAll();
        res.send(species)
    } catch (err) {
        console.log(err)
    }
};

exports.add = async (req, res) => {
    try {
        const { name } = req.body;
        const check = await Species.findOne({ where: { name } });
        if (check) {
            res.status(401).send({
                status: false,
                message: "nama species sudah ada"
            });
        } else {
            const species = await Species.create(req.body);
            res.status(200).send({
                status: true,
                message: "success", data: species
            })
        }
    } catch (err) {
        console.log(err)
    }
};