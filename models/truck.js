var mongoose = require('mongoose');

var truckSchema = new mongoose.Schema({
  truckname: String,
  cuisine: String,
  menu: String,
  location: String
});

module.exports = mongoose.model('FoodTruck', truckSchema);