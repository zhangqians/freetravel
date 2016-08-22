import productsData from '../db/products.json';
import express from 'express';
import {Product} from '../db/product-schema.js';
const router = express.Router();

router.post('/', function (req, res, next) {
  Product.find().remove(function (err) {
    if (err) return next(err);
    Product.create(productsData, (err, all) => {
      if (err) return next(err);
      res.json(all);
    });
  });
});
export  default router;
