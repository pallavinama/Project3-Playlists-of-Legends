const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  accessToken: { type: String },
  champions: [{ type: Schema.Types.ObjectId, ref: "Champion" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
