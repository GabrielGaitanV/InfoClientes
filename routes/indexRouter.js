const expreess = require('express');
const router = expreess.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.index);

router.get('/clientes', indexController.clientes);

router.get('/clientes/create', indexController.createClientes);

router.get('/clientes/edit', indexController.editClientes);

module.exports = router;