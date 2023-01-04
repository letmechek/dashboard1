var express = require('express');
var router = express.Router();
let getUser = require('../controllers/general')

/* GET home page. */
router.get('/user/:id', getUser);

module.exports = router;
