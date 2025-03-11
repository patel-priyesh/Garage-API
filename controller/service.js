var SERVICE = require('../model/service');


exports.servicecreate = async function(req, res, next) {
    try {
      req.body.customerID = req.customerID  
      let servicecreate = await SERVICE.create(req.body)

      res.status(201).json({
        status: "success",
        message: "service create successfull",
        data:servicecreate
        
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
}


  exports.service = async function(req, res, next) {
    try {
      let findservice = await SERVICE.findById(req.params.id)
      res.status(201).json({
        status: "success",
        message: "service find successfull",
        data:findservice
        
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
}

  exports.allservice = async function(req, res, next) {
    try {
      let findservice = await SERVICE.find().populate("customerID");
      res.status(201).json({
        status: "success",
        message: "service find successfull",
        daata:findservice
        
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
      
     let serviceupdate =  await SERVICE.findByIdAndUpdate(req.params.id,req.body,{new :true})
      res.status(201).json({
        status: "success",
        message: "service update bjdbv successfull",
        data:serviceupdate
        
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
     await SERVICE.findByIdAndDelete(req.params.id)
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
  