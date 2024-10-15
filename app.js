// imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));  // Aumentando o limite de tamanho
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));  // Para dados enviados via URL encoded
app.use(express.static('public'));

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// Rotas
const registrosRoute = require('./routes/registros');
app.use('/api/registros', registrosRoute);

const presencasRoute = require('./routes/presencas')
app.use('/api/presencas', presencasRoute)
// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

