import * as functions from 'firebase-functions';
import { Request, Response } from 'express';
import mongoService from '../services/MongoService';
import { UserDoc } from '../models/user.model';
import { bookmarkWod } from '../controllers/user.controller';


const addFunction = functions.https.onRequest(async (request: Request, response: Response) => {
  mongoService.status();
  console.log('req.body: ', request.body);
  const user : UserDoc = await bookmarkWod(request.body);
  console.log('saved: ', user);
  response.status(200).send(user);
});

export default addFunction;