"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _encBase = _interopRequireDefault(require("crypto-js/enc-base64"));

var _encUtf = _interopRequireDefault(require("crypto-js/enc-utf8"));

var _errors = require("./errors");

var _algorithms = _interopRequireDefault(require("./algorithms"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaultOptions = {
  algorithm: 'HS256'
};

var _key;

var Encoder =
/*#__PURE__*/
function () {
  function Encoder(body, key) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Encoder);

    this.body = body;
    this.options = _objectSpread({}, defaultOptions, {}, options);
    _key = key;
  }

  _createClass(Encoder, [{
    key: "buildHeader",
    value: function buildHeader() {
      return {
        typ: 'JWT',
        alg: this.options.algorithm
      };
    }
  }, {
    key: "encodeAndSign",
    value: function encodeAndSign() {
      var jsonHeader = JSON.stringify(this.buildHeader());
      var jsonBody = JSON.stringify(this.body);

      var base64Header = _encBase["default"].stringify(_encUtf["default"].parse(jsonHeader));

      var base64Body = _encBase["default"].stringify(_encUtf["default"].parse(jsonBody));

      var encodedHeader = (0, _helpers.urlEncodeBase64)(base64Header);
      var encodedBody = (0, _helpers.urlEncodeBase64)(base64Body);

      if (this.options.algorithm === 'none') {
        return "".concat(encodedHeader, ".").concat(encodedBody, ".");
      }

      var algorithm = _algorithms["default"][this.options.algorithm];

      if (!algorithm) {
        throw new _errors.AlgorithmNotSupported();
      }

      var signature = algorithm("".concat(encodedHeader, ".").concat(encodedBody), _key);
      var encodedSignature = signature.toString(_encBase["default"]);
      var urlSafeEncodedSignature = (0, _helpers.urlEncodeBase64)(encodedSignature);
      return "".concat(encodedHeader, ".").concat(encodedBody, ".").concat(urlSafeEncodedSignature);
    }
  }]);

  return Encoder;
}();

var _default = Encoder;
exports["default"] = _default;
