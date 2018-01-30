const admin = require('./firebase').adminAccount;

// File options
var storage = admin.storage();
var bucket = storage.bucket();

//Upload file from temporary storage
function uploadTempFile(path, callback){
  bucket.upload(path, function(err, file){
    callback(err);
  });
}

//Download file from firebase to temp storage
function downloadFileTemp(name, callback){
  var fileLoc = __dirname + '/../../temp/' + name;
  bucket.file(name)
  .download({destination: fileLoc})
  .then(()=>{
    console.log('downloaded');
    callback(fileLoc);
  }).catch(err => {
    callback(null);
  });
}

module.exports = {
  downloadFileTemp,
  uploadTempFile
}
