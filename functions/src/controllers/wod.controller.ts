import Wod from '../models/wod.model';


function getWods() {
  return Wod.find().lean();
};

export default {
  getWods
}