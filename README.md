# once-file-changes

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Listens for file changes on the specified glob(s) and then fires a callback when something is changed or added. The watcher is then closed and no more callbacks will be fired.

```js
var changes = require('once-file-changes')

changes('bundle.js', function(eventType, file) {
  //... do something now that the file has been added or changed
})
```

`eventType` is either `add` or `change`
`file` is the file that was changed.

## Usage

[![NPM](https://nodei.co/npm/once-file-changes.png)](https://www.npmjs.com/package/once-file-changes)

#### `watcher = changes(glob, callback)`

Listens for a single change/add event on `glob` and then triggers the `callback` once. Returns the watcher instance which you can `close()` yourself on timeout if no callback has been received.

`glob` defaults to wildcard `*`.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/once-file-changes/blob/master/LICENSE.md) for details.
