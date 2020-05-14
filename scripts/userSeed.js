let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/playlistoflegends",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

let userSeeds = [
  {
    name: "Jessie",
    champions: [],
  },
  {
    name: "Alan",
    champions: [],
  },
  {
    name: "John",
    champions: [],
  },
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeeds))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });