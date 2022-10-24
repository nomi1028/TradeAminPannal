const express = require("express");
var app = express();
const routes = express.Router();
const mongoose = require("mongoose");
const User = require("../model/student");
// const axios = require("axios");
// const checkAuth = require("../middleware/checkauth");
// var upload = require("../middleware/multer");

var fs = require("fs");
// var https = require("https");
// var path = require("path");

// var { fileURLToPath } = require("url");

// const __filename = fileURLToPath();
// const _dirname = path.dirname(__filename);

// var cloudinary = require("cloudinary").v2;
// cloudinary.config({
//   cloud_name: "dqdpio4xn",
//   api_key: "467147114767511",
//   api_secret: "o_sJvKKf2sDscXqQYVg1Ar0pwZA",
// });
routes.get("/", async (req, res) => {
  try {
    const UserData = await User.find({});

    res.status(200).json({
      User_Data: UserData,
    });
  } catch (error) {
    console.log(error);
  }

  // const consultantId = req.query.consultantId;
});
routes.delete("/:id", async (req, res, next) => {
  try {
    console.log("hgvh");
    await User.findOneAndDelete({
      _id: req.params.id,
    });
    res.send("user delete successfully");
  } catch (error) {
    console.log("error");
  }
});
routes.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        actorData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
routes.get("/stud/:walletId", (req, res, next) => {
  console.log(req.params.walletId);
  User.findOne({ AdminWallet: req.params.walletId })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        actorData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
/////////////////////////////////////////
//Create actors
////////////////////////////////////////
routes.post("/", (req, res) => {
  console.log(req.body, "data");

  const actor = new User({
    _id: new mongoose.Types.ObjectId(),
    nftnname: req.body.nftnname,
    Tokenname: req.body.Tokenname,
    Coinname: req.body.Coinname,
    Nftadress: req.body.Nftadress,
    trade: req.body.trade,
    AdminWallet: req.body.AdminWallet,
    takerImageURL: req.body.takerImageURL,
    makerImageURL: req.body.makerImageURL,
    time: req.body.time,
    NftIcon: req.body.NftIcon,
    ClientIcon: req.body.ClientIcon,
    NftIcontrade: req.body.NftIcontrade,
    ClientIcontrade: req.body.ClientIcontrade,
    Eth: req.body.Eth,
  });
  actor
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        NFt: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
/////Updating specific Actor/////////

routes.patch("/:id", (req, res, next) => {
  console.log("id");
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        nftnname: req.body.nftnname,
        Tokenname: req.body.Tokenname,
        Coinname: req.body.Coinname,
        Nftadress: req.body.Nftadress,
        trade: req.body.trade,
        AdminWallet: req.body.AdminWallet,
        takerImageURL: req.body.takerImageURL,
        makerImageURL: req.body.makerImageURL,
        time: req.body.time,
        NftIcon: req.body.NftIcon,
        ClientIcon: req.body.ClientIcon,
        NftIcontrade: req.body.NftIcontrade,
        ClientIcontrade: req.body.ClientIcontrade,
      },
    }
  )
    .then((result) => {
      console.log(result);
      res.status(200).json({
        updatedData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = routes;

// const express =require('express');
// const User = require("../model/student");
// const router=express.Router();
// router.get('/',(req,res)=>{
//     res.status(200).json({
//         message:"student "
//     })
// })
// module.exports=router;
