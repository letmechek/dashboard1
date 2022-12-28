var express = require('express');
var router = express.Router();
let managementCtrl = require('../controllers/management')

/* GET home page. */
router.get('/', managementCtrl);

module.exports = router;