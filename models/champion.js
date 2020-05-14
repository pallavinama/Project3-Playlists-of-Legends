const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const championSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, required: true },
  lore: { type: String, required: true },
  genre: { type: String }
});

const Champion = mongoose.model("Champion", championSchema);

module.exports = Champion;
