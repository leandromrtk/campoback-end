const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');

router.get('/', registroController.getAllRegistro);
router.post('/', registroController.createRegistro);
router.put('/:id', registroController.updateRegistro);
router.delete('/:id', registroController.deleteRegistro);

module.exports = router;
