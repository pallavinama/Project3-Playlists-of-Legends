module.exports = function (sequelize, DataTypes) {
    const SpotifyUser = sequelize.define("SpotifyUser", {
      spotifyUserId: DataTypes.INTEGER,
      password: DataTypes.STRING,
      acessToken: DataTypes.STRING,
      redirectToken: DataTypes.STRING
    });
  
    SpotifyUser.associate = function (models) {
      SpotifyUser.belongsToMany(models.Champion, {
        through: "SpotifyUserChampions",
        foreignKey: "spotifyUserId",
      });
    };
    return SpotifyUser;
  };