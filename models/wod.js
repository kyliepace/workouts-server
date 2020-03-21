const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeEnum = ['time', 'emom', 'rounds', 'amrap', 'reps', 'sets', 'rft', 'cals', 'distance'];
const unitsEnum = ['ft', 'kg', 'lbs', 'm', 'km', 'mi'];
const sectionEnum = ['warmup', 'skill', 'barbell', 'accessory', 'wod'];
// Define our model
var wodSchema = mongoose.Schema({
  source: String,
  section: {
    type: String,
    enum: sectionEnum
  },
  name: String,
  doAtHome: Boolean,
  type: {
    type: String,
    enum: typeEnum
  },
  movement: String,
  time: String,
  reps: Number,
  sets: Number,
  rounds: Number,
  cals: Number,
  distance: Number,
  weight: Number,
  units: {
    type: String,
    enum: unitsEnum
  },
  tags: [String],
  movements: {
    type: [{
      movement: String,
      type: {
        type: String,
        enum: typeEnum
      },
      time: String,
      weight: Number,
      distance: Number,
      reps: String,
      sets: String,
      rounds: String,
      cals: String,
      units: {
        type: String,
        enum: unitsEnum
      },
      movements: {
        type: [],
        default: undefined
      }
    }],
    default: undefined
  }
}, { strict: false});


// Create the model class
const WodClass = mongoose.model('wod', wodSchema);

// Export the model
module.exports = WodClass;
