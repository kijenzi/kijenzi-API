/*TODO add uuid instead of writing actual name of file and create function to
fetch temporary file location for upload to firebase*/

function writeFile(file, callback){
  file.mv(__dirname + '/../../temp/' + file.name, function(err){
    callback(err);
  });
}

module.exports = {
  writeFile
};
