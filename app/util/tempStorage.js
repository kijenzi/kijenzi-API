function writeFile(file, callback){
  file.mv(__dirname + '/../../temp/' + file.name, function(err){
    callback(err);
  });
}

module.exports = {
  writeFile
};
