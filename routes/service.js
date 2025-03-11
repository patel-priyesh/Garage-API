var express = require('express');
var SERVICEC = require('../controller/service');
var CUSTOMERC = require('../controller/customer');
var router = express.Router();

/* GET home page. */
router.post('/create', CUSTOMERC.secure, SERVICEC.servicecreate);
router.get('/:id', CUSTOMERC.secure, SERVICEC.service);
router.get('/', CUSTOMERC.secure, SERVICEC.allservice);
router.put('/:id', CUSTOMERC.secure, SERVICEC.update);
router.delete('/:id', CUSTOMERC.secure, SERVICEC.delete);



module.exports = router;
