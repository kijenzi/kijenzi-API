const uuid = require('uuid/v1');
const tempStorage = require('../util/tempStorage');
const firebase = require('../firebase/firebase');

function setupRoutes(app){
  app.post('/uploadStaticFile', function(req, res){
    if(!req.files){
      res.status(400).send('Error: no file uploaded');
      return;
    }
    //Body will include all metadata about the File
    var body = req.body;

    //TODO, check schema on body and make entry in firebase database for object

    //uploading file to firebase
    var file = req.files.gcode;
    if(!file){
      res.status(400).send('Error: no gcode file found');
      return;
    }

    //First write file to temp
    tempStorage.writeFile(file, function(err, filename){
      if(err){
        res.status(500).send('Error: file uploaded could not save');
        throw err;
      }else{
        //Upload same file from temp to firebase
        firebase.uploadTempFile(tempStorage.getFilePath(filename), function(err){
          if(err){
            res.status(500).send('Error: file uploaded could not save to firebase');
            throw err;
          }
          res.status(200).send('File saved to firebase');
        });

      }
    });

  });
}

module.exports = setupRoutes;
