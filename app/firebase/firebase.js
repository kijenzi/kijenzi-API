//Imports
const admin = require('firebase-admin');

//Account setup
var serviceAccount = require('../../firebase-service.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://medtechtest-77f2d.firebaseio.com",
  storageBucket: "medtechtest-77f2d.appspot.com"
});

//Exports
module.exports = {
  adminAccount:admin
};
