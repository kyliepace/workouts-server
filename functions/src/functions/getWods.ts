import * as functions from 'firebase-functions';
import mongoService from '../services/MongoService';
import { getWods } from '../controllers/wod.controller';
import { WodDoc } from '../models/wod.model';

const getFunction = functions.https.onRequest(async (request, response) => {
  mongoService.status();
  const wods : WodDoc[] = await getWods();
  response.status(200).send(wods);
});

export default getFunction;