// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const championSchema = new Schema({
//   name: { type: String, required: true },
//   title: { type: String, required: true },
//   role: { type: String, required: true },
//   image: { type: String, required: true },
//   lore: { type: String, required: true },
//   genre: { type: String }
// });

// const Champion = mongoose.model("Champion", championSchema);

// module.exports = Champion;

module.exports = function (sequelize, DataTypes) {
  const Champion = sequelize.define("Champion", {
    championId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    role: DataTypes.STRING,
    image: DataTypes.STRING,
    lore: DataTypes.STRING,
    genre: DataTypes.STRING,
  });

  Champion.associate = function (models) {
    Champion.belongsToMany(models.SpotifyUser, {
      through: "SpotifyUserChampions",
      foreignKey: "championId",
    });
  };

  return Champion;
};