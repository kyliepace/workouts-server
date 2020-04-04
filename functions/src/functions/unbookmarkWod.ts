import * as functions from 'firebase-functions';
import { Request, Response } from 'express';
import mongoService from '../services/MongoService';
import { UserDoc } from '../models/user.model';
import { unbookmarkWod } from '../controllers/user.controller';

let cors: any;
if (process.env.NODE_ENV === 'development'){
  cors = require('cors')({
    origin: true,
  });
}

const unbookmarkFunction = functions.https.onRequest(async (request: Request, response: Response) => {
  mongoService.status();
  const user : UserDoc = await unbookmarkWod(JSON.parse(request.body));
  console.log('user: ', user)
  if(process.env.NODE_ENV === 'development'){
    return cors(request, response, () => {
      response.status(200).json(user);
    })
  }
  response.status(200).json(user);
});

export default unbookmarkFunction;