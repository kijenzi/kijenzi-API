/*TODO add uuid instead of writing actual name of file and create function to
fetch temporary file location for upload to firebase*/
var shortid = require('shortid');


function writeFile(file, callback){
  var filename = shortid.generate();
  file.mv(__dirname + '/../../temp/' + filename, function(err){
    callback(err, filename);
  });
}

function getFilePath(filename){
  return __dirname + '/../../temp/' + filename;
}

module.exports = {
  writeFile
};
