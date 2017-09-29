const express = require('express');
const router = express.Router();

console.log("dog");
router.get('/', (req, res) => {
  res.send("hello");
});

module.exports = router;
