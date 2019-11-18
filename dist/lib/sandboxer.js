"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return {
    visitor: {
      Program: function Program(path, state) {
        var imports = _lodash["default"].filter(path.get('body'), function (p) {
          return p.isImportDeclaration();
        });

        _lodash["default"].each(imports, function (i) {
          return i.remove();
        });
      },
      Identifier: function Identifier(path) {
        if (path.node.name !== 'render') return;
        path.node.name = 'render';
      }
    }
  };
}; // path.node.name = 'return render' 改成 'render'


exports["default"] = _default;