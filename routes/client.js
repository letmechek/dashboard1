var express = require('express');
var router = express.Router();
let clientsCtrl = require('../controllers/clients')

/* GET home page. */
router.get('/', clientsCtrl);

module.exports = router;
