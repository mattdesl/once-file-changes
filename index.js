var chokidar = require('chokidar')
var noop = function(){}

module.exports = function onFileChange(glob, cb) {
  cb = cb || noop
  var watcher = chokidar.watch(glob || '*', { 
    ignoreInitial: true
  }).once('all', function(type, file) {
    if (type === 'add' || type === 'change') {
      watcher.close()
      cb(type, file)
      cb = noop
    }
  })
  return watcher
}