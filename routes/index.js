const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render("index");
});

//room routes
router.get('/room/new', (req, res) => {
  res.render("new");
});

router.post('/room/create', (req, res) => {
  console.log(req.body);
});

router.get('/room/edit', (req, res) =>{
  res.render("edit");
})


module.exports = router;
