const mongoose = require('mongoose');

const PresencaSchema = new mongoose.Schema({
    nameAluno: { type: String, required: true },
    resumoAula: { type: String, required: true },
    localAluno: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    fotoAula: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Presenca', PresencaSchema);
