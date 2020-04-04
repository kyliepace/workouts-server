import * as functions from 'firebase-functions';
import { getUser } from '../controllers/user.controller';
import { Request, Response } from 'express';
import MongoService from '../services/MongoService';
import { UserDoc } from '../models/user.model';
// import cors from 'cors';

let cors: any;
if (process.env.NODE_ENV === 'development'){
  cors = require('cors')({
    origin: true,
  });
}

const getFunction = functions.https.onRequest(async (request: Request, response: Response) => {
  MongoService.status();
  console.log('get user from request.url', request.url);

  const user : UserDoc = await getUser(request.url.replace('/', ''));
  if (process.env.NODE_ENV === 'development'){
    return cors(request, response, () => {
      response.status(200).json(user);
    });
  } 
  return response.status(200).json(user);
});

export default getFunction;