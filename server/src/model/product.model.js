const mongoose = require("mongoose");
const categories = require("../../../shared/utils/categories");
const tags = require("../../../shared/utils/tags");
const occasions = require("../../../shared/utils/occasions");
const materials = require("../../../shared/utils/material");
const defaultUrl = require("../../../shared/utils/constants");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [8, "Price cannot exceed 8 figures"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: {
    type: [String],
    required: true,
    default: defaultUrl,
  },
  category: {
    type: [String],
    required: [true, "Please select category for this product"],
    enum: Object.keys(categories),
  },

  tags: {
    type: [String],
    required: [true, "Please select tags for this product"],
    enum: Object.keys(tags),
  },
  material: {
    type: String,
    required: [true, "Please enter material for this product"],
    enum: Object.keys(materials),
  },
  occasion: {
    type: String,
    enum: Object.keys(occasions),
  },

  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
