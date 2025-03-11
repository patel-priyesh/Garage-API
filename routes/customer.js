var express = require('express');
var CUSTOMERC = require('../controller/customer');
var router = express.Router();

/* GET home page. */
router.post('/signup', CUSTOMERC.customercreate);
router.post('/login', CUSTOMERC.secure, CUSTOMERC.customerlogin);
router.get('/:id', CUSTOMERC.secure, CUSTOMERC.customer);
router.get('/', CUSTOMERC.secure, CUSTOMERC.allcustomer);
router.put('/:id', CUSTOMERC.secure, CUSTOMERC.update);
router.delete('/:id', CUSTOMERC.secure, CUSTOMERC.delete);



module.exports = router;
