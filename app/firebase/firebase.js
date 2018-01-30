//Imports
const admin = require('firebase-admin');

//Account setup
var serviceAccount = require('../../firebase-service.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://medtechtest-77f2d.firebaseio.com",
  storageBucket: "medtechtest-77f2d.appspot.com"
});

// File options
var storage = admin.storage();
var bucket = storage.bucket();

//database
var db = admin.database();

function uploadTempFile(path, callback){
  bucket.upload(path, function(err, file){
    callback(err);
  });
}

function downloadFileTemp(name, callback){
  var fileLoc = __dirname + '/../../temp/' + name;
  bucket.file(name)
  .download({destination: fileLoc})
  .then(()=>{
    console.log('downloaded');
    callback(fileLoc);
  });
}
//Exports
module.exports = {
  uploadTempFile,
  downloadFileTemp
};
