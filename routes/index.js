const express = require('express');
const mongoose = require('mongoose');
const Room = mongoose.model('Room');
const router = express.Router();

catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  }
}

//rap catchError for each route

router.get('/', (req, res) => {
  res.render("index");
});

//room routes
router.get('/room/new', (req, res) => {
  res.render("new");
});


router.post('/room/create', catchErrors(async (req, res) => {
  const roomName = req.body['room-name'];
  const room = new Room({'room_name': roomName});
  await room.save();


  console.log('it worked!');
  res.redirect('/');
}));

router.get('/room/edit', (req, res) =>{
  res.render("edit");
})


module.exports = router;
