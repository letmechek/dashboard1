var express = require('express');
var router = express.Router();
let generalCtrl = require('../controllers/general')

/* GET home page. */
router.get('/', generalCtrl);

module.exports = router;
