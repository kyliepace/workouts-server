import * as mongoose from 'mongoose';
import * as functions from 'firebase-functions';
import controller from '../controllers/wod.controller';

class MongoService {

  constructor() {
    const DB_USER = functions.config().mongo.user;
    const DB_PASSWORD = functions.config().mongo.password;
    const DB_HOST = functions.config().mongo.host;
    const DB_NAME = functions.config().mongo.name;
    const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
    
    mongoose.connect(uri, {
      useNewUrlParser: true
    }, (err: Error) => {
      if (err) {
        console.log(err.message);
        console.log(err);
      }
      else {
        console.log('Connected to MongoDb');
      }
    });

  }

  get(){
    return controller.getWods();
  }
};

export default new MongoService();