var express = require('express');
var router = express.Router();
let salesCtrl = require('../controllers/sales')

/* GET home page. */
router.get('/', salesCtrl);

module.exports = router;