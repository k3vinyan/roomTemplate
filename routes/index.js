const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');

const roomController = require('../controllers/roomController');

router.get('/', (req, res) => {
  res.render("index");
});

//room routes
router.get('/room/new', (req, res) => {
  res.render("new");
});

router.post('/room/create', catchErrors(roomController.createRoom));

router.get('/room/edit', (req, res) =>{
  res.render("edit");
})


module.exports = router;
