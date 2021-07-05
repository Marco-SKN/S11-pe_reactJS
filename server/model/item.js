const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  id: Number,
  image: {
    type: String,
  },
  name: String,
  price: Number,
});

module.exports = mongoose.model("Item", itemSchema);
