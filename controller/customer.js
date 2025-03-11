var CUSTOMER = require('../model/customer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.secure = async function(req, res, next){
  try 
  {
      let token = req.headers.authorization;
      if(!token)
      {
          throw new Error("token required");
      }
      let decoded = jwt.verify(token, "DEMO1");
      req.customerID = decoded.id
    
      let customerCheck = await CUSTOMER.findById(decoded.id)
      // console.log(decoded);
      if(!customerCheck)
      {
          throw new Error("invalid token");
      }
      next();
  } 
  catch (error) 
  {
      res.status(404).json({
          status:"failed",
          message:error.message
      })
  }
}




exports.customercreate = async function(req, res, next) {
    try {

       if (req.body.confirmpassword !== req.body.password) {
      throw new Error('Passwords do not match');
    }


      req.body.password = await bcrypt.hash(req.body.password,10)
      let customercreate = await CUSTOMER.create(req.body)
      var token = jwt.sign({id:customercreate._id},"DEMO1");


      res.status(201).json({
        status: "success",
        message: "customer create successfull",
        data:customercreate,token
        
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
}

  exports.customerlogin = async function(req, res, next) {
    try {
       
      let customercheck = await CUSTOMER.findOne({email:req.body.email})
      if (!customercheck) {
        throw new Error('customer not found')
      }
      let passCheck = await bcrypt.compare(req.body.password,customercheck.password)
      if(!passCheck){
          throw new Error('password invalid')
      }
      res.status(201).json({
        status: "success",
        message: "customer login successfull",
        data:customercheck
        
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
}

  exports.customer = async function(req, res, next) {
    try {
      let findcustomer = await CUSTOMER.findById(req.params.id)
      res.status(201).json({
        status: "success",
        message: "customer find successfull",
        data:findcustomer
        
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
}

  exports.allcustomer = async function(req, res, next) {
    try {
      let findcustomer = await CUSTOMER.find()
      res.status(201).json({
        status: "success",
        message: "customer find successfull",
        daata:findcustomer
        
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
}

  exports.update  = async function(req, res, next) {
    try {
      
     let customerupdate =  await CUSTOMER.findByIdAndUpdate(req.params.id,req.body,{new :true})
      res.status(201).json({
        status: "success",
        message: "customer update successfull",
        data:customerupdate
        
        
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
}

  exports.delete =  async function(req, res, next) {
    try {    
     await CUSTOMER.findByIdAndDelete(req.params.id,req.body,{new :true})
      res.status(201).json({
        status: "success",
        message: "customer delete successfull"      
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
  }
  