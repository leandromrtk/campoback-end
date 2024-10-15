const jwt = require('jsonwebtoken');
const Registro = require('../models/Registro');
const config = require('../config/jwt');

exports.register = async (req, res) => {
    try {
        const {name, description} = req.body;
        const registro = new Registro({name, description});
        await registro.save()
        res.status(201).json({message: "Registro executado com sucesso."});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

