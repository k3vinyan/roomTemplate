const mongoose = require('mongoose');
mongoose.Promis = global.Promise;

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  room_name: {
    type: String,
    required: 'Room name is required'
  },
  date: Date
});


module.exports = mongoose.model('Room', RoomSchema);
