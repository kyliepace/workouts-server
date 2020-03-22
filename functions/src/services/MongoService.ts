import * as mongoose from 'mongoose';
import * as functions from 'firebase-functions';

class MongoService {
  connected: boolean = false;
  private uri: string;

  constructor() {
    const DB_USER = functions.config().mongo.user;
    const DB_PASSWORD = functions.config().mongo.password;
    const DB_HOST = functions.config().mongo.host;
    const DB_NAME = functions.config().mongo.name;
    this.uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, {
        useNewUrlParser: true
      });
      console.log('Connected to MongoDb');
      this.connected = true;
    }
    catch(err) {
      console.log(err.message);
    }
  }

  status() {
    return this.connected ? console.log('mongo db connected') : null;
  }
};

export default new MongoService();