const mongoose = require('mongoose');
const Room = mongoose.model('Room');



exports.allRooms = async(req, res) => {
  const rooms = await Room.find();
//  console.log(rooms);
  res.render('rooms', {rooms});
}

exports.singleRoom = async(req, res) => {
  const room = await Room.findOne( {_id: req.params.id});
  res.render('show', {room});
}

exports.newRoom = (req, res) => {
  res.render('new');
}

exports.createRoom = async (req, res) => {
  const roomName = req.body['name'];
  const room = new Room({'name': roomName});
  await room.save();
  res.redirect('/rooms');
}

exports.showRoom = (req, res) => {
  res.send("show Room")
}
