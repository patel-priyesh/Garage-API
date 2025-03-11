var express = require('express');
var SHOPKEEPERC = require('../controller/shopkeeper');
var SERVICEC = require('../controller/service');
var router = express.Router();

/* GET home page. */
router.post('/signup', SHOPKEEPERC.creatshopkeeper);
router.post('/login', SHOPKEEPERC.loginshopkeeper);
router.get('/:id', SHOPKEEPERC.shopkeeper);
router.get('/', SHOPKEEPERC.allshopkeeper);
router.put('/:id', SERVICEC.update);
router.delete('/:id', SHOPKEEPERC.delete);

module.exports = router;

