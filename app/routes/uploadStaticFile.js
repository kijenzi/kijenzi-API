const uuid = require('uuid/v1');
const tempStorage = require('../util/tempStorage');
const firebase = require('../firebase/firebase');

function setupRoutes(app){
  app.post('/uploadStaticFile', function(req, res){
    if(!req.files){
      res.status(400).send('Error: no file uploaded');
      return;
    }
    var file = req.files.gcode;
    if(!file){
      res.status(400).send('Error: no gcode file found');
      return;
    }

    tempStorage.writeFile(file, function(err){
      if(err){
        res.status(500).send('Error: file uploaded could not save');
        throw err;
      }else{

        firebase.uploadTempFile(file.name, function(err){
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
