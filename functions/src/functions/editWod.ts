import * as functions from 'firebase-functions';
import mongoService from '../services/MongoService';
import { updateWod } from '../controllers/wod.controller';
import { WodDoc } from '../models/wod.model';

const editFunction = functions.https.onRequest(async (request, response) => {
  mongoService.status();
  const wod : WodDoc | null = await updateWod(request.body);
  response.status(200).json(wod);
});

export default editFunction;