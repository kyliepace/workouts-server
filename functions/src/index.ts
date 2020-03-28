import * as admin from 'firebase-admin';
admin.initializeApp();

export const getWods = require('./functions/getWods').default;
export const addWod = require('./functions/addWod').default;
export const editWod = require('./functions/editWod').default;
export const addUser = require('./functions/addUser').default;