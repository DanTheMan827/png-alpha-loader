[![npm][npm]][npm-url]
[![deps][deps]][deps-url]

<div align="center">
  <img width="200" height="200"
    src="https://cdn3.iconfinder.com/data/icons/lexter-flat-colorfull-file-formats/56/png-256.png">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>PNG Alpha Loader</h1>
  <p>A loader for webpack that exports the alpha channel of a PNG.</p>
</div>

## Install

```bash
npm install --save-dev png-alpha-loader
```

## Options

**alphaOnly**: Whether to return the image alpha, width, and size or just an array of alpha values.

## Usage

Use the loader either via your webpack config, CLI or inline.

### Via webpack config (recommended)

**webpack.config.js**
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.mask\.png$/,
        use: 'png-alpha-loader',
        options: {
          alphaOnly: false
        }
      }
    ]
  }
}
```

**In your application**
```js
var mask = require('./image.mask.png');
```

### CLI

```bash
webpack --module-bind 'mask.png=png-alpha-loader'
```

**In your application**
```js
var mask = require('./image.mask.png');
```

### Inline

**In your application**
```js
var mask = require('raw-loader!./image.mask.png')
```

[npm]: https://img.shields.io/npm/v/png-alpha-loader.svg
[npm-url]: https://npmjs.com/package/png-alpha-loader

[deps]: https://david-dm.org/dantheman827/png-alpha-loader.svg
[deps-url]: https://david-dm.org/dantheman827/png-alpha-loader
