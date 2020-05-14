const express = require("express");
const router = express.Router();
const db = require("../models");

/**
 * Update Route to add a champion's id to the user's champions array.
 */
router.put("/:id", (req, res) => {
    console.log(req.params.id);
    // TODO: Take in a valid user's UUID (borrow from your seeds)
    // Lookup mongoose update queries.
    // Start by hardcoding UUIDs for champions. 
    // You'll need to look at the $.push method, to push the UUIDs into the User.champions array.
    
  res.json({
    success: true,
    message: "Successfully updated user.",
  });
});

module.exports = router;
