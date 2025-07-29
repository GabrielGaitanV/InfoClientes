const expreess = require('express');
const router = expreess.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.index);

router.get('/clientes', indexController.clientes);

module.exports = router;