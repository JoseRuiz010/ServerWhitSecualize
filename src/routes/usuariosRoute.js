const Usuario = require('../models/usuario');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
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

    const newUser = await Usuario.create({ nombre: name, email })
    res.json(newUser)
})



module.exports = router