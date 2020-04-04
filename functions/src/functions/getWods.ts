import * as functions from 'firebase-functions';
import { getWods } from '../controllers/wod.controller';
import { WodDoc } from '../models/wod.model';
import { Request, Response } from 'express';
import MongoService from '../services/MongoService';

const getFunction = functions.https.onRequest(async (request: Request, response: Response) => {
  console.log('get wods')
  MongoService.status();
  const wods : WodDoc[] = await getWods();
  response.status(200).json(wods);
});

export default getFunction;