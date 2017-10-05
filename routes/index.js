const express = require('express');
const router = express.Router();
//const { catchErrors } = require('../handlers/errorHandlers');
const roomController = require('../controllers/roomController');

router.get('/', (req, res) => {
  res.render("index");
});

//room routes
router.get('/rooms', roomController.allRooms);
router.get('/rooms/new', roomController.newRoom);
router.post('/rooms/create', roomController.createRoom);
router.get('/rooms/edit', (req, res) =>{
  res.render("edit");
});
router.get('/rooms/:id', roomController.singleRoom);


module.exports = router;
