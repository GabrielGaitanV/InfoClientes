// config/firebase.js

//Importa Firebase Admin SDK y la clave del servicio
const admin = require('firebase-admin');

//Importa clave privada que se encuentra en firebaseConfig.json
const serviceAccount = require('./firebaseConfig.json');

//Inicializa la aplicación de Firebase Admin con las credenciales del servicio
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//se crea constante para acceder a la base de datos Firestore
const db = admin.firestore();

//Exporta la constante db para que pueda ser utilizada en otras partes de la aplicación
module.exports = db;
