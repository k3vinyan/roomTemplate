const mongoose = require('mongoose');
mongoose.Promis = global.Promise;
const slug = require('slugs');


const Schema = mongoose.Schema;

const Videos = new Schema({
  name:  String,
  videoId:  String
})

const RoomSchema = new Schema({
  name: {
    type: String,
    required: 'Room name is required'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  videos: [Videos],
  date: Date
});

RoomSchema.pre('save', async function(next) {
  if (!this.isModified('name')) {
    next(); // skip it
    return; // stop this function from running
  }
  this.slug = slug(this.name);
  // find other stores that have a slug of wes, wes-1, wes-2
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const storesWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (storesWithSlug.length) {
    this.slug = `${this.slug}-${storesWithSlug.length + 1}`;
  }
  next();
  // TODO make more resiliant so slugs are unique
});



module.exports = mongoose.model('Room', RoomSchema);
