const Registro = require('../models/Registro');

exports.getAllRegistro = async (req, res) => {
    try {
        const registros = await Registro.find();
        res.json(registros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createRegistro = async (req, res) => {
    const { name, description, location, photo } = req.body;
    const newRegistro = new Registro({ name, description, location, photo });

    try {
        const savedRegistro = await newRegistro.save();
        res.status(201).json(savedRegistro);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateRegistro = async (req, res) => {
    try {
        const updatedRegistro = await Registro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedRegistro);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteRegistro = async (req, res) => {
    try {
        await Registro.findByIdAndDelete(req.params.id);
        res.json({ message: 'Registro excluido.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
