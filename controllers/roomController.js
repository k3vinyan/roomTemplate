const mongoose = require('mongoose');
const Room = mongoose.model('Room');
const slug = require('slugs');

//find all rooms
exports.allRooms = async(req, res) => {
  const rooms = await Room.find();
  res.render('rooms', {rooms});
}

//find one room
exports.singleRoom = async(req, res) => {
  const room = await Room.findOne( {_id: req.params.id});
  console.log(room)
  res.render('show', {room});
}

//display template to create new room
exports.newRoom = (req, res) => {
  res.render('new');
}

//create room and save to database
exports.createRoom = async (req, res) => {
  const roomName = req.body['name'];
  const room = new Room({'name': roomName, slug: roomName.slug});
  await room.save();
  res.redirect('/rooms');
}

exports.addVideoToRoom = async (req, res) => {
  const videoName = req.body['videoName'];
  const videoYTId = req.body['videoId'];
  const roomId = req.body['roomId'];
  await Room.findOne({ _id: roomId})
    .then(function(record){
      record.videos.push({name: videoName, videoYTId });
      record.save()
        .then(function(){
          res.send(videoName)
        })
  })
}
