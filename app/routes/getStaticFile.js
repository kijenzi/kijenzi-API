const uuid = require('uuid/v1');
const tempStorage = require('../util/tempStorage');
const firebaseStorage = require('../firebase/firebaseStorage');
const firebaseDatabase = require('../firebase/firebaseDatabase');
const path = require('path');

function setupRoutes(app){
  app.get('/getStaticFile/:name', function(req, res){
    var name = req.params.name;
    firebaseDatabase.getStaticFileUUID(name, (uuidFilename) => {
      //Download file from firebase
      firebaseStorage.downloadFileTemp(uuidFilename, function(fileDest){
        if(fileDest){
          console.log('sending local file ' + fileDest);
          //send downloaded file to user
          res.sendFile(path.resolve(fileDest));
        }
        else{
          res.status(404);
          res.send("file not found");
        }
      });
    });

  });
}

module.exports = setupRoutes;
