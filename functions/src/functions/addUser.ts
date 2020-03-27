import * as functions from 'firebase-functions';
import { addUser } from '../controllers/user.controller';
import { UserDoc } from '../models/user.model';
import mongoService from '../services/MongoService';

exports.createProfile = functions.auth
  .user()
  .onCreate(async ({uid, email, displayName}) => {
    mongoService.status();

    // Do something after a new user account is created
    const user: UserDoc = await addUser({
      uid,
      email,
      name: displayName
    });
    return user;
  });