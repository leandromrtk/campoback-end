const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const Registro = require('../models/Registro');

module.exports = async (req, res, next) => {
    const authHeader = req.header('Autorizado');
    if (!authHeader) {
        return res.status(401).json({message: 'Sem token, permissao negada'});
    }


    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({message: 'Sem token, permissao negada'});
    }

    try {
        const decoded = jwt.verify(token, config.secret);
        req.registro = await Registro.findById(decoded.id);
        if (!req.registro) {
            return res.status(401).json({message: 'Usuario nao existe, autorizacao negada'});
        }
        next();
    } catch (error) {
        res.status(401).json({message: 'token nao permitido'});
    }
}