require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/playlistoflegends", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API Server listening on http://localhost:${PORT}`);
});
