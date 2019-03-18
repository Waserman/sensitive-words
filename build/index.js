'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (content, exp) {

  var expression = Array.isArray(exp) ? exp.join("|") : exp;
  return content.replace(new RegExp(expression, 'gi'), '***');
};