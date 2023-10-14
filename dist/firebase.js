"use strict";
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/your/serviceAccountKey.json'); // Asegúrate de tener la ruta correcta al archivo JSON de tus credenciales.
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-database-name.firebaseio.com' // Reemplaza 'your-database-name' con el nombre de tu base de datos en Firebase.
});
