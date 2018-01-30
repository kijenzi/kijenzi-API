const adminAccount = require('./firebase').adminAccount;

//Create database object
var db = adminAccount.database();

var rootRef = db.ref();

var staticFilesRef = rootRef.child('static-files');

function addNewStaticFile(name, uuidName){
  var fileObject = {
    name:name,
    uuidName:uuidName,
    fileType:null
  }
  staticFilesRef.push(fileObject);
}

function getStaticFileUUID(filename, callback){
  console.log('looking for filename: ' + filename)
  var ref = staticFilesRef.orderByChild('name').equalTo(filename).on("child_added", (snapshot)=>{
    callback(snapshot.child('uuidName').val());
  });
}

module.exports={
  addNewStaticFile,
  getStaticFileUUID
}
