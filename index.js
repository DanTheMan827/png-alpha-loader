/*
  MIT License

  Copyright (c) 2017 Daniel Radtke

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

var loaderUtils = require('loader-utils')
var PNG = require('pngjs').PNG

module.exports = function (content) {
  this.cacheable && this.cacheable()

  var options = loaderUtils.getOptions(this) || {}
  var png = PNG.sync.read(content)
  var output = {
    alpha: [],
    width: png.width,
    height: png.height
  }

  for (var i = 0; i < png.data.length; i += 4) {
    output.alpha.push(png.data[i])
  }

  return 'module.exports = ' + JSON.stringify(options.alphaOnly ? output.alpha : output)
}

module.exports.raw = true
