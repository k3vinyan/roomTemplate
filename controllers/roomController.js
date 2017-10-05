const mongoose = require('mongoose');
const Room = mongoose.model('Room');



exports.allRooms = async(req, res) => {
  const rooms = await Room.find();
  console.log(typeof(rooms));
  res.render('rooms', {rooms});
}
exports.singleRoom = (req, res) => {
  console.log("single room");
}
exports.newRoom = (req, res) => {
  res.render('new');
}
exports.createRoom = async (req, res) => {
  const roomName = req.body['name'];
  const room = new Room({'name': roomName});
  await room.save();
  console.log('it worked!');
  res.redirect('/rooms');
}

exports.showRoom = (req, res) => {
  res.send("show Room")
}
