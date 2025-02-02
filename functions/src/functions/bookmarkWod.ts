import * as functions from 'firebase-functions';
import { Request, Response } from 'express';
import mongoService from '../services/MongoService';
import { UserDoc } from '../models/user.model';
import { bookmarkWod } from '../controllers/user.controller';

let cors: any;
if (process.env.NODE_ENV === 'development'){
  cors = require('cors')({
    origin: true,
  });
}

const addFunction = functions.https.onRequest(async (request: Request, response: Response) => {
  mongoService.status();
  const user : UserDoc = await bookmarkWod(JSON.parse(request.body));
  if(process.env.NODE_ENV === 'development'){
    return cors(request, response, () => {
      response.status(200).json(user);
    })
  }
  response.status(200).json(user);
});

export default addFunction;