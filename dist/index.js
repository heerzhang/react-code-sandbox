"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _core = require("@babel/core");

var _presetReact = _interopRequireDefault(require("@babel/preset-react"));

var _sandboxer = _interopRequireDefault(require("./lib/sandboxer"));

var _render = _interopRequireDefault(require("./lib/render"));

var _pluginProposalClassProperties = _interopRequireDefault(require("@babel/plugin-proposal-class-properties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = function _default(_ref) {
  var children = _ref.children,
      imports = _ref.imports;

  var _transform = (0, _core.transform)(children, {
    presets: [_presetReact["default"]],
    plugins: [_pluginProposalClassProperties["default"], _sandboxer["default"]]
  }),
      code = _transform.code;

  var importsWithRender = Object.assign({}, imports, {
    render: _render["default"]
  });
  return _construct(Function, _toConsumableArray(_lodash["default"].keys(importsWithRender)).concat([code])).apply(void 0, _toConsumableArray(_lodash["default"].values(importsWithRender)));
}; //not support tsx or ts，It just support js,jsx source code。
//只能使用js,jsx编码的。
//这里不支持TypeScript代码，支持jsx+React的动态编码,需支持@babel/preset-typescript。


exports["default"] = _default;