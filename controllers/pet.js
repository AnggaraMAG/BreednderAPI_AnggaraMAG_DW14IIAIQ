const models = require('../models');
const Pet = models.pet;
const User = models.user;
const Species = models.species;


exports.Petindex = async (req, res) => {
    try {
        const species = await Pet.findAll({
            include: [{
                model: User,
                as: "breeder",
                attributes: ["id", "name", "address", "phone"]
            },
            {
                model: Species,
                as: "category",
                attributes: ["id", "name"]
            }
            ],
            attributes: { exlude: ["user", "species"] }
        });
        res.send(species)
    } catch (error) {
        console.log(error)
    }
}

exports.Petadd = async (req, res) => {
    const { name, gender, age, about_pet, photo } = req.body;
    const species = req.body.species.id;
    const user = req.body.user.id;
    try {
        const pet = await Pet.create({
            name,
            gender,
            species,
            age,
            user,
            about_pet,
            photo,
        });
        const id = pet.id;
        const data = await Pet.findOne({
            include: [
                {
                    model: User,
                    as: "breeder",
                    attributes: ["id", "name", "phone"]
                },
                {
                    model: Species,
                    as: "category",
                    attributes: ["id", "name"]
                }
            ],
            attributes: { exclude: ["user", "species"] }
        }, { where: { id } });
        res.status(200).send({
            status: true,
            message: "success add new pet",
            data: data
        })
    } catch (error) {
        console.log(error)
    }
}

exports.Petupdate = async (req, res) => {
    const id_data = req.params.id;
    const { name, gender, age, about_pet, photo } = req.body;
    const species = req.body.species.id;
    const user = req.body.user.id;

    try {
        const pet = await Pet.update({
            name,
            gender,
            species,
            age,
            user,
            about_pet,
            photo
        }, { where: { id: id_data } });
        const id = pet.id;
        const data = await Pet.findOne({
            include: [
                {
                    model: User,
                    as: "breeder",
                    attributes: ["id", "name", "address", "phone"]
                },
                {
                    model: Species,
                    as: "category",
                    attributes: ["id", "name"]
                }
            ],
            attributes: { exclude: ["user", "species"] }
        },
            { where: { id } });
        res.status(200).send({
            status: true,
            message: "success update a pet",
            data: data
        })
    } catch (error) {

    }
}

exports.Petdestroyer = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.destroy({ where: { id } });
        res.status(200).send({
            message: "success deleted a pet",
            id: pet
        })
    } catch (error) {
        console.log(error)
    }
}