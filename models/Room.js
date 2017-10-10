const mongoose = require('mongoose');
mongoose.Promis = global.Promise;

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  name: {
    type: String,
    required: 'Room name is required'
  },
  date: Date
});


module.exports = mongoose.model('Room', RoomSchema);
