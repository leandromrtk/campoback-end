const Presenca = require('../models/Presenca');

exports.getAllPresenca = async (req, res) => {
    try {
        const presencas = await Presenca.find();
        res.json(presencas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createPresenca = async (req, res) => {
    console.log('chegou aqui')
    console.log(req.body)
    const { nameAluno, resumoAula, localAluno, fotoAula } = req.body;
    const newPresenca = new Presenca({ nameAluno, resumoAula, localAluno, fotoAula });
    console.log('chegou aqui 2')

    console.log(newPresenca)
    try {
        const savedPresenca = await newPresenca.save();
        res.status(201).json(savedPresenca);
    } catch (err) {
        console.log('chegou aqui 3')
console.log(err)
        res.status(400).json({ message: err.message });
    }
};

exports.updatePresenca = async (req, res) => {
    try {
        const updatedPresenca = await Presenca.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPresenca);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deletePresenca = async (req, res) => {
    try {
        await Presenca.findByIdAndDelete(req.params.id);
        res.json({ message: 'Presença excluida.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
