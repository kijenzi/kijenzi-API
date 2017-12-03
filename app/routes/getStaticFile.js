const uuid = require('uuid/v1');fileDest
const tempStorage = require('../util/tempStorage');
const firebase = require('../firebase/firebase');
const path = require('path');

function setupRoutes(app){
  app.get('/getStaticFile/:name', function(req, res){
    var name = req.params.name;
    firebase.downloadFileTemp(name, function(fileDest){
      console.log('sending local file ' + fileDest);
      res.sendFile(path.resolve(fileDest));
    });
  });
}

module.exports = setupRoutes;
