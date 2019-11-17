'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _core = require('@babel/core');

var _presetReact = require('@babel/preset-react');

var _presetReact2 = _interopRequireDefault(_presetReact);

var _presetTypescript = require('@babel/preset-typescript');

var _presetTypescript2 = _interopRequireDefault(_presetTypescript);

var _sandboxer = require('./lib/sandboxer');

var _sandboxer2 = _interopRequireDefault(_sandboxer);

var _render = require('./lib/render');

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (_ref) {
  var children = _ref.children,
      imports = _ref.imports;

  var _transform = (0, _core.transform)(children, {
    presets: [_presetReact2.default, _presetTypescript2.default],
    plugins: [_sandboxer2.default]
  }),
      code = _transform.code;

  var importsWithRender = _extends({}, imports, { render: _render2.default });

  return new (Function.prototype.bind.apply(Function, [null].concat(_toConsumableArray(_lodash2.default.keys(importsWithRender)), [code])))().apply(undefined, _toConsumableArray(_lodash2.default.values(importsWithRender)));
};