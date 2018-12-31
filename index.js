// https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node
    module.exports = factory();
  } else {
    // Browser globals
    root['375to320'] = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  var _375to320;
  (_375to320 = function (options) {
    'use strict'
    var initialScale
    if (options == null) options = {}
    if (!options.minWidth) options.minWidth = 375
    if (screen.width >= options.minWidth && screen.height >= options.minWidth)
      return
    initialScale = screen.width / options.minWidth
    document.querySelector('[name="viewport"]').setAttribute(
      'content',
      'width=' + options.minWidth + ',initial-scale=' + initialScale
    )
  })()
  return _375to320
}));
