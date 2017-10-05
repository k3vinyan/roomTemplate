const mongoose = require('mongoose');
const Room = mongoose.model('Room');

exports.createRoom = async (req, res) => {
  const roomName = req.body['room-name'];
  const room = new Room({'room_name': roomName});
  await room.save();


  console.log('it worked!');
  res.redirect('/');
}
