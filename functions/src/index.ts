

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const getWods = require('./functions/getWods').default;
export const addWod = require('./functions/addWod').default;
export const editWod = require('./functions/editWod').default;