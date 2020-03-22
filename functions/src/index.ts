import * as functions from 'firebase-functions';
import mongoService from './services/MongoService';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const getWods = functions.https.onRequest(async (request, response) => {
  console.log('hi');
  const wods : any[] = await mongoService.get();
  response.send(wods);
});