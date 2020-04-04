import * as functions from 'firebase-functions';
import { addWod } from '../controllers/wod.controller';
import { WodDoc } from '../models/wod.model';
import { Request, Response } from 'express';
import mongoService from '../services/MongoService';


const addFunction = functions.https.onRequest(async (request: Request, response: Response) => {
  mongoService.status();
  console.log('req.body: ', request.body);
  const wod : WodDoc = await addWod(request.body);
  console.log('saved: ', wod);
  response.status(200).json(wod);
});

export default addFunction;