var fs = require('fs')
var change = require('./')
var path = require('path')
var test = require('tape')

test('should only fire a single callback on file change', function(t) {
  t.plan(3)
  var stub = path.join(__dirname, 'tmp.txt')
  var glob = 'tmp.txt'
  change(glob, function(event, file) {
    console.log("CHANGE", event, file)
    t.equal(event, 'change', 'matches change event')
    t.equal(file, 'tmp.txt', 'matches file')

    fs.writeFile(stub, 'barbar', function(err) {
      if (err) t.fail(err)
      t.ok(true, 'only called once')
    })
  })

  setTimeout(function() {
    fs.writeFile(stub, 'foobar', function(err) {
      if (err) t.fail(err)
    })
  }, 1000)
})