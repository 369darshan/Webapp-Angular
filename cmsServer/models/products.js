const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true

  },
  description: {
    type: String,
    required: true
  },

}, {
  timestamps: ture
});
var products = mongoose.model('Dish',productSchema);

module.exports = productSchema;