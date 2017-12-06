var mongoose = require("mongoose");
var Schema = mongoose.Schema;
let retailerSchema = new Schema({
  zipcode:String,
  store: Array
});

module.exports = mongoose.model("stores", retailerSchema);
