var SHOPKEEPER = require('../model/shopkeeper');
const bcrypt = require('bcrypt');

exports.creatshopkeeper = async function (req, res, next) {
  try {

    if (req.body.confirmpassword !== req.body.password) {
      throw new Error('Passwords do not match');
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);

    let createshopkeeper = await SHOPKEEPER.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Shopkeeper created successfully",
      data: createshopkeeper
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    });
  }
}

exports.loginshopkeeper = async function (req, res, next) {
  try {
    let shopkeepercheck = await SHOPKEEPER.findOne({ email: req.body.email })
    if (!shopkeepercheck) {
      throw new Error('shopkeeper not found')
    }

    let passcheck = await bcrypt.compare(req.body.password, shopkeepercheck.password)
    if (!passcheck) {
      throw new Error('invalid password')
    } else {

    }
    res.status(201).json({
      status: "success",
      message: "shopkeeper found successfull",
      data: shopkeepercheck
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}

exports.shopkeeper = async function (req, res, next) {
  try {
    let findshopkeeper = await SHOPKEEPER.findById(req.params.id)

    res.status(201).json({
      status: "success",
      message: "shopkeeper found successfull",
      data: findshopkeeper
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}


exports.allshopkeeper = async function (req, res, next) {
  try {
    let findshopkeeper = await SHOPKEEPER.find()
    res.status(201).json({
      status: "success",
      message: "all shopkeeper found successfully",
      data: findshopkeeper
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}


exports.update = async function (req, res, next) {
  try {
    let shopkeeperupdate = await SHOPKEEPER.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "success",
      message: "shopkeeper updated successfully",
      data: shopkeeperupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}


exports.delete = async function (req, res, next) {
  try {
    await SHOPKEEPER.findByIdAndDelete(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "success",
      message: "shopkeeper deleted successfully"
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}