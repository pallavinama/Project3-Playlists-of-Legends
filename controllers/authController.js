const express = require("express");
const db = require("../models");
const jwt = require("jsonwebtoken");

/**
 * Root POST route to validate user credentials.
 */
module.exports = {
  create: (req, res) => {
    console.log("Authentication POST route");
    console.log(req.body);
    db.User.findOne({
      username: req.body.username.trim(),
    })
      .then(async (foundUser) => {
        console.log(foundUser);
        if (foundUser && foundUser.password === req.body.password) {
          const token = await jwt.sign(
            {
              username: foundUser.username,
              id: foundUser._id,
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
            },
            process.env.REACT_APP_SECRET_KEY
          );
          console.log(token);
          await res.json({
            success: true,
            data: token,
          });
        } else {
          res.status(403).json({
            success: false,
            message: "Invalid username or password.",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          success: false,
          message: "Failed to validate user.",
        });
      });
  },
};
