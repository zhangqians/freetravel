const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name:String,
  productName: String,
  price:Number,
  unit:String,
  briefDescription:String
});

const Product = mongoose.model('Product', productSchema);

export {Product};
