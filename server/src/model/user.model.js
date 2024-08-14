const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  isDefault: { type: Boolean, default: false }, // Indicates if this is the default address
});

const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
});

const favoriteSchema = new mongoose.Schema({
  type: mongoose.Schema.Types.ObjectId,
  ref: "Product",
});

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },

  lastName : {
    type: String,
    trim: true
  },

  userName: {
    type: String,
    required: true,
    minLength: 4,
    unique: true,
    trim: true 
  },

  emailId: {
    type: String,
    require: true,
    unique: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
  },

  dateOfBirth: { type: Date },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

  cart: [cartSchema],

  address: [addressSchema],

  favorite : [favoriteSchema]
});

userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
  });

  const User = mongoose.model('user',userSchema);

  module.exports = User;
