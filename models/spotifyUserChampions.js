module.exports = function (sequelize, DataTypes) {
    const SpotifyUserChampions = sequelize.define(
      "SpotifyUserChampions",
      {
        spotifyUserId: DataTypes.INTEGER,
        championId: DataTypes.INTEGER,
        comments:DataTypes.String
      },
      { timestamps: false }
    );
  
    return SpotifyUserChampions;
  };