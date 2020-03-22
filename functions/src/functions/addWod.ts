import * as functions from 'firebase-functions';
import mongoService from '../services/MongoService';
import { addWod } from '../controllers/wod.controller';
import { WodDoc } from '../models/wod.model';

const addFunction = functions.https.onRequest(async (request, response) => {
  mongoService.status();
  const wod : WodDoc = await addWod(request.body);
  response.status(200).send(wod);
});

export default addFunction;