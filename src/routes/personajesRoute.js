const Personaje = require('../models/Personaje');


const router = require('express').Router();

router.get('/', async (req, res) => {
    const persoanjes = await Personaje.findAll()
    res.json(persoanjes)
})


router.get('/:id', (req, res) => {

    const { id } = req.params
    res.json({ id: id })
})

router.post('/', async (req, res) => {
    const { name, email } = req.body
    if (!name || !email) return res.send({
        menssaje: 'Uno o mas campos son vacios'
    })

    const newPersonaje = await Personaje.create({ nombre: name, email })
    res.json(newUser)
})



module.exports = router