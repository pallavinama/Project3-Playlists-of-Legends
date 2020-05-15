const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String },
  age: {type: Number},
  gender: {type: String},
  accessToken: { type: String },
  champions: [{ type: Schema.Types.ObjectId, ref: "Champion" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
