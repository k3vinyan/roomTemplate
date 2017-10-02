const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  room_name: String,
  a_date: Date
});

const RoomModel = mongoose.model('RoomModel', RoomSchema);
