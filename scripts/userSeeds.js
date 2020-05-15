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
    username: "jessiecomputes",
    password: "12345",
    name: "Jessie",
    age: 25,
    gender: "female",
    accessToken: "",
    champions: [],
  },
  {
    username: "MrMuscles3000",
    password: "12345",
    name: "Alan",
    age: 30,
    gender: "male",
    accessToken: "",
    champions: [],
  },
  {
    username: "JohnLoLz",
    password: "12345",
    name: "John",
    age: 18,
    gender: "male",
    accessToken: "",
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
