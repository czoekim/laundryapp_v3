// Schema for laundry room
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LaundryRoomSchema = new Schema({
  reshall: {
    type: String,
    required: true
  },
  availableWashers: {
    type: Number,
    required: true
  },
  availableDryers: {
    type: Number,
    required: true
  },
  brokenWashers: {
    type: Number,
    required: true
  },
  brokenDryers: {
    type: Number,
    required: true
  }
});

module.exports = LaundryRoom = mongoose.model('laundryrooms', LaundryRoomSchema);
