import mongoose from 'mongoose';
import * as functions from 'firebase-functions';

class MongoService {

  constructor() {
    const DB_USER = functions.config().mongo.user;
    const DB_PASSWORD = functions.config().mongo.password;
    const DB_HOST = functions.config().mongo.host;
    const DB_NAME = functions.config().mongo.name;
    const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
    // tslint:disable-next-line:no-floating-promises
    mongoose.connect(uri, {
      useNewUrlParser: true
    }, (err) => {
      if (err) {
        console.log(err.message);
      }
      else {
        console.log('connected to mongodb');
      }
    })
  }


  status() {
    console.log('mongo status');
  }
};

export default new MongoService();