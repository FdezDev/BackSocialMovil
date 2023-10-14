"use strict";
const admin = require('firebase-admin');
const serviceAccount = require('../infraestructure/backsocialmovil-firebase.json'); // Asegúrate de tener la ruta correcta al archivo JSON de tus credenciales.
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'gs://backsocialmovil.appspot.com' // Reemplaza 'your-database-name' con el nombre de tu base de datos en Firebase.
});
