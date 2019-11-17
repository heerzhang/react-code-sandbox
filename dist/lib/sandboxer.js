'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return {
    visitor: {
      Program: function Program(path, state) {
        var imports = _lodash2.default.filter(path.get('body'), function (p) {
          return p.isImportDeclaration();
        });
        _lodash2.default.each(imports, function (i) {
          return i.remove();
        });
      },
      Identifier: function Identifier(path) {
        if (path.node.name !== 'render') return;

        path.node.name = 'return render';
      }
    }
  };
};