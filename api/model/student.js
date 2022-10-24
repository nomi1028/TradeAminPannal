const mongoose = require("mongoose");
//////////////create schema
//////defining datatype
const userSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  nftnname: String,
  Tokenname: String,
  Coinname: String,
  Nftadress: String,
  trade: String,
  AdminWallet: String,
  takerImageURL: String,
  makerImageURL: String,
  time: String,
  NftIcon: String,
  NftIcontrade: String,
  ClientIcontrade: String,
  ClientIcon: String,
  Eth: String,
});
/////////////create  Actor model(collection)& here Actor is collection and actorschema is a schema
module.exports = mongoose.model("NFT", userSchema);
