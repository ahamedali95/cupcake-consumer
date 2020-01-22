(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1d29b853373632b0f0424978c1b416bc.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ec4816fb624758db55d6ec0944d3739b.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c02c3cb83f621f0914694e00b458945f.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "05c73bfad68b8c1447d96d0e65791677.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a1a6c69f23c13601956f849d115798a2.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af933a50e9afb98a11ea1aad1d0fe5ea.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1c2a5d18706ed867a162acb5fea23c3d.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca654c3e4562ec449c82758206776a3a.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "065ab222fbdae2ce1ecc7e2b066392a7.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
module.exports = __webpack_require__(27);


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(23);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "#canvas {\n  display:block;\n}\n\nbody {\n  margin:0;\n}\n\nspan {\n  display: block;\n}", ""]);



/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(4);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./src/entities/Tile.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var Tile =
/*#__PURE__*/
function () {
  function Tile(x, y, width, height, isCollidedWithCupcake) {
    _classCallCheck(this, Tile);

    _x.set(this, {
      writable: true,
      value: void 0
    });

    _y.set(this, {
      writable: true,
      value: void 0
    });

    _width.set(this, {
      writable: true,
      value: void 0
    });

    _height.set(this, {
      writable: true,
      value: void 0
    });

    _isCollidedWithCupcake.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _x, x);

    _classPrivateFieldSet(this, _y, y);

    _classPrivateFieldSet(this, _width, width);

    _classPrivateFieldSet(this, _height, height);

    _classPrivateFieldSet(this, _isCollidedWithCupcake, isCollidedWithCupcake);
  }

  _createClass(Tile, [{
    key: "getX",
    value: function getX() {
      return _classPrivateFieldGet(this, _x);
    }
  }, {
    key: "setX",
    value: function setX(value) {
      _classPrivateFieldSet(this, _x, value);
    }
  }, {
    key: "getY",
    value: function getY() {
      return _classPrivateFieldGet(this, _y);
    }
  }, {
    key: "setY",
    value: function setY(value) {
      _classPrivateFieldSet(this, _y, value);
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return _classPrivateFieldGet(this, _width);
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      _classPrivateFieldSet(this, _width, width);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return _classPrivateFieldGet(this, _height);
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      _classPrivateFieldSet(this, _height, height);
    }
  }, {
    key: "getIsCollidedWithCupcake",
    value: function getIsCollidedWithCupcake() {
      return _classPrivateFieldGet(this, _isCollidedWithCupcake);
    }
  }, {
    key: "setIsCollidedWithCupcake",
    value: function setIsCollidedWithCupcake(value) {
      _classPrivateFieldSet(this, _isCollidedWithCupcake, value);
    }
  }]);

  return Tile;
}();

var _x = new WeakMap();

var _y = new WeakMap();

var _width = new WeakMap();

var _height = new WeakMap();

var _isCollidedWithCupcake = new WeakMap();

/* harmony default export */ var entities_Tile = (Tile);
// CONCATENATED MODULE: ./src/entities/Catcher.js
function Catcher_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Catcher_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Catcher_createClass(Constructor, protoProps, staticProps) { if (protoProps) Catcher_defineProperties(Constructor.prototype, protoProps); if (staticProps) Catcher_defineProperties(Constructor, staticProps); return Constructor; }

function Catcher_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function Catcher_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var Catcher =
/*#__PURE__*/
function () {
  function Catcher(name, x, y, width, height, maxJumpHeight, verticalSpeed, isGoingUp, isGoingDown, horizontalSpeed, leftPressed, rightPressed, gravityPull, isSafe) {
    Catcher_classCallCheck(this, Catcher);

    _name.set(this, {
      writable: true,
      value: void 0
    });

    Catcher_x.set(this, {
      writable: true,
      value: void 0
    });

    Catcher_y.set(this, {
      writable: true,
      value: void 0
    });

    Catcher_width.set(this, {
      writable: true,
      value: void 0
    });

    Catcher_height.set(this, {
      writable: true,
      value: void 0
    });

    _maxJumpHeight.set(this, {
      writable: true,
      value: void 0
    });

    _verticalSpeed.set(this, {
      writable: true,
      value: void 0
    });

    _isGoingUp.set(this, {
      writable: true,
      value: void 0
    });

    _isGoingDown.set(this, {
      writable: true,
      value: void 0
    });

    _horizontalSpeed.set(this, {
      writable: true,
      value: void 0
    });

    _leftPressed.set(this, {
      writable: true,
      value: void 0
    });

    _rightPressed.set(this, {
      writable: true,
      value: void 0
    });

    _gravityPull.set(this, {
      writable: true,
      value: void 0
    });

    _isSafe.set(this, {
      writable: true,
      value: void 0
    });

    Catcher_classPrivateFieldSet(this, _name, name);

    Catcher_classPrivateFieldSet(this, Catcher_x, x);

    Catcher_classPrivateFieldSet(this, Catcher_y, y);

    Catcher_classPrivateFieldSet(this, Catcher_width, width);

    Catcher_classPrivateFieldSet(this, Catcher_height, height);

    Catcher_classPrivateFieldSet(this, _maxJumpHeight, maxJumpHeight);

    Catcher_classPrivateFieldSet(this, _verticalSpeed, verticalSpeed);

    Catcher_classPrivateFieldSet(this, _isGoingUp, isGoingUp);

    Catcher_classPrivateFieldSet(this, _isGoingDown, isGoingDown);

    Catcher_classPrivateFieldSet(this, _horizontalSpeed, horizontalSpeed);

    Catcher_classPrivateFieldSet(this, _leftPressed, leftPressed);

    Catcher_classPrivateFieldSet(this, _rightPressed, rightPressed);

    Catcher_classPrivateFieldSet(this, _gravityPull, gravityPull);

    Catcher_classPrivateFieldSet(this, _isSafe, isSafe);
  }

  Catcher_createClass(Catcher, [{
    key: "getX",
    value: function getX() {
      return Catcher_classPrivateFieldGet(this, Catcher_x);
    }
  }, {
    key: "setX",
    value: function setX(value) {
      Catcher_classPrivateFieldSet(this, Catcher_x, value);
    }
  }, {
    key: "getY",
    value: function getY() {
      return Catcher_classPrivateFieldGet(this, Catcher_y);
    }
  }, {
    key: "setY",
    value: function setY(value) {
      Catcher_classPrivateFieldSet(this, Catcher_y, value);
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return Catcher_classPrivateFieldGet(this, Catcher_width);
    }
  }, {
    key: "setWidth",
    value: function setWidth(value) {
      Catcher_classPrivateFieldSet(this, Catcher_width, value);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return Catcher_classPrivateFieldGet(this, Catcher_height);
    }
  }, {
    key: "setHeight",
    value: function setHeight(value) {
      Catcher_classPrivateFieldSet(this, Catcher_height, value);
    }
  }, {
    key: "setMaxJumpHeight",
    value: function setMaxJumpHeight(value) {
      Catcher_classPrivateFieldSet(this, _maxJumpHeight, value);
    }
  }, {
    key: "getMaxJumpHeight",
    value: function getMaxJumpHeight() {
      return Catcher_classPrivateFieldGet(this, _maxJumpHeight);
    }
  }, {
    key: "getVerticalSpeed",
    value: function getVerticalSpeed() {
      return Catcher_classPrivateFieldGet(this, _verticalSpeed);
    }
  }, {
    key: "setVerticalSpeed",
    value: function setVerticalSpeed(value) {
      Catcher_classPrivateFieldSet(this, _verticalSpeed, value);
    }
  }, {
    key: "getIsGoingUp",
    value: function getIsGoingUp() {
      return Catcher_classPrivateFieldGet(this, _isGoingUp);
    }
  }, {
    key: "setIsGoingUp",
    value: function setIsGoingUp(value) {
      Catcher_classPrivateFieldSet(this, _isGoingUp, value);
    }
  }, {
    key: "getIsGoingDown",
    value: function getIsGoingDown() {
      return Catcher_classPrivateFieldGet(this, _isGoingDown);
    }
  }, {
    key: "setIsGoingDown",
    value: function setIsGoingDown(value) {
      Catcher_classPrivateFieldSet(this, _isGoingDown, value);
    }
  }, {
    key: "getHorizontalSpeed",
    value: function getHorizontalSpeed() {
      return Catcher_classPrivateFieldGet(this, _horizontalSpeed);
    }
  }, {
    key: "setHorizontalSpeed",
    value: function setHorizontalSpeed(value) {
      Catcher_classPrivateFieldSet(this, _horizontalSpeed, value);
    }
  }, {
    key: "getLeftPressed",
    value: function getLeftPressed() {
      return Catcher_classPrivateFieldGet(this, _leftPressed);
    }
  }, {
    key: "setLeftPressed",
    value: function setLeftPressed(value) {
      Catcher_classPrivateFieldSet(this, _leftPressed, value);
    }
  }, {
    key: "getRightPressed",
    value: function getRightPressed() {
      return Catcher_classPrivateFieldGet(this, _rightPressed);
    }
  }, {
    key: "setRightPressed",
    value: function setRightPressed(value) {
      Catcher_classPrivateFieldSet(this, _rightPressed, value);
    }
  }, {
    key: "getGravityPull",
    value: function getGravityPull() {
      return Catcher_classPrivateFieldGet(this, _gravityPull);
    }
  }, {
    key: "setGravityPull",
    value: function setGravityPull(value) {
      Catcher_classPrivateFieldSet(this, _gravityPull, value);
    }
  }, {
    key: "getIsSafe",
    value: function getIsSafe() {
      return Catcher_classPrivateFieldGet(this, _isSafe);
    }
  }, {
    key: "setIsSafe",
    value: function setIsSafe(value) {
      Catcher_classPrivateFieldSet(this, _isSafe, value);
    }
  }]);

  return Catcher;
}();

var _name = new WeakMap();

var Catcher_x = new WeakMap();

var Catcher_y = new WeakMap();

var Catcher_width = new WeakMap();

var Catcher_height = new WeakMap();

var _maxJumpHeight = new WeakMap();

var _verticalSpeed = new WeakMap();

var _isGoingUp = new WeakMap();

var _isGoingDown = new WeakMap();

var _horizontalSpeed = new WeakMap();

var _leftPressed = new WeakMap();

var _rightPressed = new WeakMap();

var _gravityPull = new WeakMap();

var _isSafe = new WeakMap();

/* harmony default export */ var entities_Catcher = (Catcher);
// CONCATENATED MODULE: ./src/entities/Image.js
function Image_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Image_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Image_createClass(Constructor, protoProps, staticProps) { if (protoProps) Image_defineProperties(Constructor.prototype, protoProps); if (staticProps) Image_defineProperties(Constructor, staticProps); return Constructor; }

function Image_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function Image_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var Image_Image =
/*#__PURE__*/
function () {
  function Image(name, url) {
    Image_classCallCheck(this, Image);

    Image_name.set(this, {
      writable: true,
      value: void 0
    });

    _url.set(this, {
      writable: true,
      value: void 0
    });

    Image_classPrivateFieldSet(this, Image_name, name);

    Image_classPrivateFieldSet(this, _url, url);
  }

  Image_createClass(Image, [{
    key: "getName",
    value: function getName() {
      return Image_classPrivateFieldGet(this, Image_name);
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      return Image_classPrivateFieldGet(this, _url);
    }
  }]);

  return Image;
}();

var Image_name = new WeakMap();

var _url = new WeakMap();

/* harmony default export */ var entities_Image = (Image_Image);
// EXTERNAL MODULE: ./src/assets/images/tile.png
var tile = __webpack_require__(5);
var tile_default = /*#__PURE__*/__webpack_require__.n(tile);

// EXTERNAL MODULE: ./src/assets/images/background.jpg
var background = __webpack_require__(6);
var background_default = /*#__PURE__*/__webpack_require__.n(background);

// EXTERNAL MODULE: ./src/assets/images/catcher1.png
var catcher1 = __webpack_require__(7);
var catcher1_default = /*#__PURE__*/__webpack_require__.n(catcher1);

// EXTERNAL MODULE: ./src/assets/images/catcher2.png
var catcher2 = __webpack_require__(8);
var catcher2_default = /*#__PURE__*/__webpack_require__.n(catcher2);

// EXTERNAL MODULE: ./src/assets/images/catcher3.png
var catcher3 = __webpack_require__(9);
var catcher3_default = /*#__PURE__*/__webpack_require__.n(catcher3);

// EXTERNAL MODULE: ./src/assets/images/catcher4.png
var catcher4 = __webpack_require__(10);
var catcher4_default = /*#__PURE__*/__webpack_require__.n(catcher4);

// EXTERNAL MODULE: ./src/assets/images/food.png
var food = __webpack_require__(11);
var food_default = /*#__PURE__*/__webpack_require__.n(food);

// EXTERNAL MODULE: ./src/assets/images/blood.png
var blood = __webpack_require__(12);
var blood_default = /*#__PURE__*/__webpack_require__.n(blood);

// EXTERNAL MODULE: ./src/assets/images/fruit.png
var images_fruit = __webpack_require__(13);
var fruit_default = /*#__PURE__*/__webpack_require__.n(images_fruit);

// CONCATENATED MODULE: ./src/utilities/getImages.js











var getImages = function () {
  return [new entities_Image('tile', tile_default.a), new entities_Image('background', background_default.a), new entities_Image('catcherOne', catcher1_default.a), new entities_Image('catcherTwo', catcher2_default.a), new entities_Image('catcherThree', catcher3_default.a), new entities_Image('catcherFour', catcher4_default.a), new entities_Image('cupcake', food_default.a), new entities_Image('blood', blood_default.a), new entities_Image('fruit', fruit_default.a)];
}();

/* harmony default export */ var utilities_getImages = (getImages);
// CONCATENATED MODULE: ./src/entities/Cupcake.js
function Cupcake_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Cupcake_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Cupcake_createClass(Constructor, protoProps, staticProps) { if (protoProps) Cupcake_defineProperties(Constructor.prototype, protoProps); if (staticProps) Cupcake_defineProperties(Constructor, staticProps); return Constructor; }

function Cupcake_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function Cupcake_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var Cupcake =
/*#__PURE__*/
function () {
  function Cupcake(x, y, width, height, speed) {
    Cupcake_classCallCheck(this, Cupcake);

    Cupcake_x.set(this, {
      writable: true,
      value: void 0
    });

    Cupcake_y.set(this, {
      writable: true,
      value: void 0
    });

    Cupcake_width.set(this, {
      writable: true,
      value: void 0
    });

    Cupcake_height.set(this, {
      writable: true,
      value: void 0
    });

    _speed.set(this, {
      writable: true,
      value: void 0
    });

    Cupcake_classPrivateFieldSet(this, Cupcake_x, x);

    Cupcake_classPrivateFieldSet(this, Cupcake_y, y);

    Cupcake_classPrivateFieldSet(this, Cupcake_width, width);

    Cupcake_classPrivateFieldSet(this, Cupcake_height, height);

    Cupcake_classPrivateFieldSet(this, _speed, speed);
  }

  Cupcake_createClass(Cupcake, [{
    key: "getX",
    value: function getX() {
      return Cupcake_classPrivateFieldGet(this, Cupcake_x);
    }
  }, {
    key: "setX",
    value: function setX(value) {
      Cupcake_classPrivateFieldSet(this, Cupcake_x, value);
    }
  }, {
    key: "getY",
    value: function getY() {
      return Cupcake_classPrivateFieldGet(this, Cupcake_y);
    }
  }, {
    key: "setY",
    value: function setY(value) {
      Cupcake_classPrivateFieldSet(this, Cupcake_y, value);
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return Cupcake_classPrivateFieldGet(this, Cupcake_width);
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      Cupcake_classPrivateFieldSet(this, Cupcake_width, width);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return Cupcake_classPrivateFieldGet(this, Cupcake_height);
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      Cupcake_classPrivateFieldSet(this, Cupcake_height, height);
    }
  }, {
    key: "getSpeed",
    value: function getSpeed() {
      return Cupcake_classPrivateFieldGet(this, _speed);
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(speed) {
      Cupcake_classPrivateFieldSet(this, _speed, speed);
    }
  }]);

  return Cupcake;
}();

var Cupcake_x = new WeakMap();

var Cupcake_y = new WeakMap();

var Cupcake_width = new WeakMap();

var Cupcake_height = new WeakMap();

var _speed = new WeakMap();

/* harmony default export */ var entities_Cupcake = (Cupcake);
// CONCATENATED MODULE: ./src/entities/Sound.js
function Sound_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sound_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Sound_createClass(Constructor, protoProps, staticProps) { if (protoProps) Sound_defineProperties(Constructor.prototype, protoProps); if (staticProps) Sound_defineProperties(Constructor, staticProps); return Constructor; }

function Sound_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var Sound =
/*#__PURE__*/
function () {
  function Sound(src) {
    Sound_classCallCheck(this, Sound);

    _soundElement.set(this, {
      writable: true,
      value: new Audio()
    });

    Sound_classPrivateFieldGet(this, _soundElement).src = src;

    Sound_classPrivateFieldGet(this, _soundElement).setAttribute('preload', 'auto');

    Sound_classPrivateFieldGet(this, _soundElement).setAttribute('controls', 'none');

    Sound_classPrivateFieldGet(this, _soundElement).style.display = 'none';
    document.body.appendChild(Sound_classPrivateFieldGet(this, _soundElement));
  }

  Sound_createClass(Sound, [{
    key: "pause",
    value: function pause() {
      Sound_classPrivateFieldGet(this, _soundElement).pause();
    }
  }, {
    key: "play",
    value: function play() {
      Sound_classPrivateFieldGet(this, _soundElement).play();
    }
  }]);

  return Sound;
}();

var _soundElement = new WeakMap();

/* harmony default export */ var entities_Sound = (Sound);
// CONCATENATED MODULE: ./src/entities/Fruit.js
function Fruit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Fruit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Fruit_createClass(Constructor, protoProps, staticProps) { if (protoProps) Fruit_defineProperties(Constructor.prototype, protoProps); if (staticProps) Fruit_defineProperties(Constructor, staticProps); return Constructor; }

function Fruit_classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function Fruit_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var Fruit =
/*#__PURE__*/
function () {
  function Fruit(x, y, width, height, speed) {
    Fruit_classCallCheck(this, Fruit);

    Fruit_x.set(this, {
      writable: true,
      value: void 0
    });

    Fruit_y.set(this, {
      writable: true,
      value: void 0
    });

    Fruit_width.set(this, {
      writable: true,
      value: void 0
    });

    Fruit_height.set(this, {
      writable: true,
      value: void 0
    });

    Fruit_speed.set(this, {
      writable: true,
      value: void 0
    });

    Fruit_classPrivateFieldSet(this, Fruit_x, x);

    Fruit_classPrivateFieldSet(this, Fruit_y, y);

    Fruit_classPrivateFieldSet(this, Fruit_width, width);

    Fruit_classPrivateFieldSet(this, Fruit_height, height);

    Fruit_classPrivateFieldSet(this, Fruit_speed, speed);
  }

  Fruit_createClass(Fruit, [{
    key: "getX",
    value: function getX() {
      return Fruit_classPrivateFieldGet(this, Fruit_x);
    }
  }, {
    key: "setX",
    value: function setX(value) {
      Fruit_classPrivateFieldSet(this, Fruit_x, value);
    }
  }, {
    key: "getY",
    value: function getY() {
      return Fruit_classPrivateFieldGet(this, Fruit_y);
    }
  }, {
    key: "setY",
    value: function setY(value) {
      Fruit_classPrivateFieldSet(this, Fruit_y, value);
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return Fruit_classPrivateFieldGet(this, Fruit_width);
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      Fruit_classPrivateFieldSet(this, Fruit_width, width);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return Fruit_classPrivateFieldGet(this, Fruit_height);
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      Fruit_classPrivateFieldSet(this, Fruit_height, height);
    }
  }, {
    key: "getSpeed",
    value: function getSpeed() {
      return Fruit_classPrivateFieldGet(this, Fruit_speed);
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(speed) {
      Fruit_classPrivateFieldSet(this, Fruit_speed, speed);
    }
  }]);

  return Fruit;
}();

var Fruit_x = new WeakMap();

var Fruit_y = new WeakMap();

var Fruit_width = new WeakMap();

var Fruit_height = new WeakMap();

var Fruit_speed = new WeakMap();

/* harmony default export */ var entities_Fruit = (Fruit);
// CONCATENATED MODULE: ./src/components/Instructions.js


var Instructions_Instructions = function Instructions() {
  return react_default.a.createElement("div", {
    className: "row justify-content-center"
  }, react_default.a.createElement("div", {
    className: "col col-7"
  }, react_default.a.createElement("strong", null, "Instructions:"), react_default.a.createElement("p", null, "Press arrow keys (\u2190 \u2192 \u2191) to move left, right and jump"), react_default.a.createElement("p", null, "Eat the cupcakes to increase score"), react_default.a.createElement("p", null, "Tiles collapse when it hit bridge"), react_default.a.createElement("p", null, "Game over when catcher falls off the bridge or eats a fruit")));
};

/* harmony default export */ var components_Instructions = (Instructions_Instructions);
// CONCATENATED MODULE: ./src/components/Canvas.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function Canvas_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Canvas_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Canvas_createClass(Constructor, protoProps, staticProps) { if (protoProps) Canvas_defineProperties(Constructor.prototype, protoProps); if (staticProps) Canvas_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Canvas_App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Canvas_classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "canvas", Object(react["createRef"])());

    _defineProperty(_assertThisInitialized(_this), "context", void 0);

    _defineProperty(_assertThisInitialized(_this), "canvasWidth", 500);

    _defineProperty(_assertThisInitialized(_this), "canvasHeight", 500);

    _defineProperty(_assertThisInitialized(_this), "loadedImages", {});

    _defineProperty(_assertThisInitialized(_this), "setInterval", void 0);

    _defineProperty(_assertThisInitialized(_this), "animationFlag", 0);

    _defineProperty(_assertThisInitialized(_this), "tileList", []);

    _defineProperty(_assertThisInitialized(_this), "updatedTileList", []);

    _defineProperty(_assertThisInitialized(_this), "CATCHER", new entities_Catcher('Catcher', 100, 350, 30, 50, 0, 5, false, false, 0, false, false, 5, true));

    _defineProperty(_assertThisInitialized(_this), "cupcakesSpawnXCoordinates", [0, 50, 100, 150, 200, 250, 300, 350, 400, 450]);

    _defineProperty(_assertThisInitialized(_this), "cupcakeList", []);

    _defineProperty(_assertThisInitialized(_this), "fruitList", []);

    _defineProperty(_assertThisInitialized(_this), "cupcakeCreationTimer", 0);

    _defineProperty(_assertThisInitialized(_this), "fruitCreationTimer", 0);

    _defineProperty(_assertThisInitialized(_this), "score", 0);

    _defineProperty(_assertThisInitialized(_this), "level", 0);

    _defineProperty(_assertThisInitialized(_this), "isGameOver", false);

    _defineProperty(_assertThisInitialized(_this), "eatSound", new entities_Sound('../assets/sound/eat.mp3'));

    _defineProperty(_assertThisInitialized(_this), "dropSound", new entities_Sound('../assets/sound/drop.mp3'));

    return _this;
  }

  Canvas_createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context = this.canvas.current.getContext('2d');
      this.preloadImages();
    }
  }, {
    key: "preloadImages",
    value: function preloadImages() {
      var _this2 = this;

      Promise.all(this.getPromises(utilities_getImages)).then(function (a) {
        return _this2.afterLoad();
      });
    }
  }, {
    key: "getPromises",
    value: function getPromises(images) {
      var _this3 = this;

      return images.map(function (imageObj) {
        return new Promise(function (resolve, reject) {
          var image = new Image();

          image.onload = function () {
            _this3.loadedImages[imageObj.getName()] = image;
            resolve(image);
          };

          image.error = function () {
            reject();
          };

          image.src = imageObj.getUrl();
        });
      });
    }
  }, {
    key: "afterLoad",
    value: function afterLoad() {
      console.log('LOADED IMAGES', this.loadedImages);
      this.drawBackground();
      this.drawTiles();
      this.drawCatcherTwo();
      this.setCatcherInteraction(); // set DOM events to allow the user to interact with the catcher
      //this.setPageInteraction();

      this.init(); // switch between catcher one(no eyes) and two(with eyes)
    }
  }, {
    key: "drawImage",
    value: function drawImage(image, x, y, width, height) {
      this.context.drawImage(image, x, y, width, height);
    }
  }, {
    key: "drawBackground",
    value: function drawBackground() {
      this.drawImage(this.loadedImages.background, 0, 0, 500, 500);
    }
  }, {
    key: "drawTiles",
    value: function drawTiles() {
      var _this4 = this;

      // draw ten tiles
      if (this.tileList.length < 10) {
        _toConsumableArray(new Array(10).keys()).forEach(function (ele, index) {
          _this4.tileList.push(new entities_Tile(index * 50, 400, 50, 50, false));
        });
      }

      this.tileList.forEach(function (tile) {
        !tile.getIsCollidedWithCupcake() && _this4.drawImage(_this4.loadedImages.tile, tile.getX(), tile.getY(), tile.getWidth(), tile.getHeight());
      });
    }
  }, {
    key: "drawScoreBoard",
    value: function drawScoreBoard() {
      var context = this.context;
      this.drawImage(this.loadedImages.cupcake, 440, 10, 20, 20);
      context.fillStyle = '#FFFFFF';
      context.font = '20px Calibri';
      context.fillText(this.score, 465, 27);
      context.fillText("Level ".concat(this.level), 10, 27);
    }
  }, {
    key: "drawCatcherTwo",
    value: function drawCatcherTwo() {
      var CATCHER = this.CATCHER;
      this.drawImage(this.loadedImages.catcherTwo, CATCHER.getX(), CATCHER.getY(), CATCHER.getWidth(), CATCHER.getHeight());
    }
  }, {
    key: "init",
    value: function init() {
      var _this5 = this;

      this.setInterval = setInterval(function () {
        _this5.context.clearRect(0, 0, 500, 500);

        _this5.drawBackground();

        _this5.drawTiles();

        _this5.drawScoreBoard();

        _this5.animateCatcher();

        _this5.updateHorizontalCatcherPosition();

        _this5.updateVerticalCatcherPosition();

        _this5.startCupcakeCreationTimer();

        _this5.createCupcake();

        _this5.updateCupcakeVerticalPosition();

        _this5.detectCupcakeAndCatcherCollision();

        _this5.detectCupcakeAndTileCollision();

        _this5.detectCatcherAndTileCollision(); //fruit


        _this5.startFruitCreationTimer();

        _this5.createFruit();

        _this5.updateVerticalFruitPosition();

        _this5.detectCatcherAndFruitCollision();
      }, 10);
    }
  }, {
    key: "animateCatcher",
    value: function animateCatcher() {
      var CATCHER = this.CATCHER;
      var args = [CATCHER.getX(), CATCHER.getY(), CATCHER.getWidth(), CATCHER.getHeight()];

      if (CATCHER.getIsGoingUp()) {
        this.drawImage.apply(this, [this.loadedImages.catcherFour].concat(args));
      } else if (this.animationFlag) {
        this.drawImage.apply(this, [this.loadedImages.catcherTwo].concat(args));
        this.animationFlag = 0;
      } else {
        this.drawImage.apply(this, [this.loadedImages.catcherOne].concat(args));
        this.animationFlag = 1;
      }
    }
  }, {
    key: "setCatcherInteraction",
    value: function setCatcherInteraction() {
      var _this6 = this;

      var CATCHER = this.CATCHER;

      document.onkeydown = function (event) {
        if (event.key === 'ArrowLeft' && _this6.isMinimumHorizontalBoundaryCheckPassed()) {
          CATCHER.setHorizontalSpeed(-5);
          CATCHER.setLeftPressed(true);
        }

        if (event.key === 'ArrowRight' && _this6.isMaximumHorizontalBoundaryCheckPassed()) {
          CATCHER.setHorizontalSpeed(5);
          CATCHER.setRightPressed(true);
        }

        if (event.key === 'ArrowUp' && CATCHER.getY() === 350) {
          CATCHER.setMaxJumpHeight(100);
          CATCHER.setIsGoingUp(true);
          CATCHER.setIsGoingDown(false);
          CATCHER.setVerticalSpeed(5);
        }
      };

      document.onkeyup = function (event) {
        if (event.key === 'ArrowLeft') {
          CATCHER.setHorizontalSpeed(0);
          CATCHER.setLeftPressed(false);
        }

        if (event.key === 'ArrowRight') {
          CATCHER.setHorizontalSpeed(0);
          CATCHER.setRightPressed(false);
        }
      };
    } // setPageInteraction() {
    //   //debugger;
    //   document.getElementById('canvas').onmousedown = () => {
    //     console.log(this.isGameOver, this.setInterval);
    //     if (this.isGameOver) {
    //       clearInterval(this.setInterval);
    //       this.init();
    //
    //     } else {
    //       clearInterval(this.setInterval);
    //       this.init();
    //     }
    //   };
    // }

  }, {
    key: "isMinimumHorizontalBoundaryCheckPassed",
    value: function isMinimumHorizontalBoundaryCheckPassed() {
      return this.CATCHER.getX() > 0;
    }
  }, {
    key: "isMaximumHorizontalBoundaryCheckPassed",
    value: function isMaximumHorizontalBoundaryCheckPassed() {
      var CATCHER = this.CATCHER,
          canvasWidth = this.canvasWidth;
      return CATCHER.getX() < canvasWidth - CATCHER.getWidth();
    }
  }, {
    key: "updateHorizontalCatcherPosition",
    value: function updateHorizontalCatcherPosition() {
      var CATCHER = this.CATCHER; // Transform x for side movements

      if (CATCHER.getLeftPressed() && this.isMinimumHorizontalBoundaryCheckPassed()) {
        CATCHER.setX(CATCHER.getX() + CATCHER.getHorizontalSpeed());
      }

      if (CATCHER.getRightPressed() && this.isMaximumHorizontalBoundaryCheckPassed()) {
        CATCHER.setX(CATCHER.getX() + CATCHER.getHorizontalSpeed());
      }
    }
  }, {
    key: "updateVerticalCatcherPosition",
    value: function updateVerticalCatcherPosition() {
      var canvasHeight = this.canvasHeight,
          CATCHER = this.CATCHER;

      if (CATCHER.getIsGoingUp() && CATCHER.getY() <= 350 && CATCHER.getY() > 250) {
        CATCHER.setY(CATCHER.getY() - CATCHER.getVerticalSpeed());
      }

      if (CATCHER.getY() === 250) {
        CATCHER.setIsGoingUp(false);
        CATCHER.setIsGoingDown(true);
      }

      if (CATCHER.getIsGoingDown() && CATCHER.getY() >= 250 && CATCHER.getY() < 350) {
        CATCHER.setY(CATCHER.getY() + CATCHER.getVerticalSpeed());
      }

      if (!CATCHER.getIsSafe() && CATCHER.getY() < canvasHeight - CATCHER.getHeight()) {
        CATCHER.setY(CATCHER.getY() + 5);
      }

      if (CATCHER.getY() >= 450) {
        this.dropSound.play();
        this.isGameOver = true;
        this.handleGameOver();
      }
    }
  }, {
    key: "startCupcakeCreationTimer",
    value: function startCupcakeCreationTimer() {
      this.cupcakeCreationTimer++;
    }
  }, {
    key: "createCupcake",
    value: function createCupcake() {
      if (this.cupcakeCreationTimer > 150 - this.level) {
        var cupcake = new entities_Cupcake(this.cupcakesSpawnXCoordinates[Math.round(Math.random() * 9)], 0, 50, 50, 3);
        this.cupcakeList.push(cupcake);
        this.cupcakeCreationTimer = 0;
      }
    }
  }, {
    key: "updateCupcakeVerticalPosition",
    value: function updateCupcakeVerticalPosition() {
      var _this7 = this;

      if (this.cupcakeList.length) {
        this.cupcakeList.forEach(function (cupcake, index) {
          // Delete cupcakes which goes past the canvas to save memory
          if (cupcake.getY() > 500) {
            _this7.cupcakeList.splice(index, 1);
          } else {
            _this7.drawImage(_this7.loadedImages.cupcake, cupcake.getX(), cupcake.getY(), 50, 50);

            cupcake.setY(cupcake.getY() + cupcake.getSpeed());
          }
        });
      }
    }
  }, {
    key: "detectCupcakeAndCatcherCollision",
    value: function detectCupcakeAndCatcherCollision() {
      var _this8 = this;

      var CATCHER = this.CATCHER,
          cupcakeList = this.cupcakeList;

      if (cupcakeList.length) {
        cupcakeList.forEach(function (cupcake, index) {
          if (cupcake.getX() < CATCHER.getX() + CATCHER.getWidth() && CATCHER.getX() < cupcake.getX() + cupcake.getWidth() && cupcake.getY() < CATCHER.getY() + CATCHER.getHeight() && CATCHER.getY() < cupcake.getY() + cupcake.getHeight()) {
            cupcakeList.splice(index, 1);

            _this8.eatSound.play();

            _this8.score++;

            if (_this8.score % 2 === 0) {
              _this8.level++;
            }
          }
        });
      }
    }
  }, {
    key: "detectCupcakeAndTileCollision",
    value: function detectCupcakeAndTileCollision() {
      var cupcakeList = this.cupcakeList,
          tileList = this.tileList;

      if (cupcakeList.length) {
        cupcakeList.forEach(function (cupcake) {
          tileList.forEach(function (tile) {
            if (cupcake.getX() < tile.getX() + tile.getWidth() && tile.getX() < cupcake.getX() + cupcake.getWidth() && cupcake.getY() < tile.getY() + tile.getHeight() && tile.getY() < cupcake.getY() + cupcake.getHeight()) {
              tile.setIsCollidedWithCupcake(true);
            }
          });
        });
        this.updatedTileList = this.tileList.filter(function (tile) {
          return !tile.getIsCollidedWithCupcake();
        });
      }
    }
  }, {
    key: "detectCatcherAndTileCollision",
    value: function detectCatcherAndTileCollision() {
      var CATCHER = this.CATCHER,
          updatedTileList = this.updatedTileList;

      if (!CATCHER.getIsGoingUp() && updatedTileList.length) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = updatedTileList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var tile = _step.value;

            if (CATCHER.getX() <= tile.getX() + tile.getWidth() && tile.getX() <= CATCHER.getX() + CATCHER.getWidth() && CATCHER.getY() + CATCHER.getHeight() <= tile.getY()) {
              CATCHER.setIsSafe(true);
              break;
            }

            CATCHER.setIsSafe(false);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "handleGameOver",
    value: function handleGameOver() {
      var context = this.context;
      clearInterval(this.setInterval);
      context.save();
      context.globalAlpha = 0.6;
      this.drawImage(this.loadedImages.blood, 100, 100, 300, 300);
      context.globalAlpha = 1.0;
      context.strokeStyle = '#FFFFFF';
      context.font = '30px Calibri';
      context.strokeText('Game Over', 180, 200);
      context.strokeText('Refresh Page', 160, 250);
      context.restore();
    }
  }, {
    key: "startFruitCreationTimer",
    value: function startFruitCreationTimer() {
      this.fruitCreationTimer++;
    }
  }, {
    key: "createFruit",
    value: function createFruit() {
      if (this.fruitCreationTimer > 200 - this.level) {
        var fruit = new entities_Fruit(this.cupcakesSpawnXCoordinates[Math.round(Math.random() * 9)], 0, 50, 50, 3);
        this.fruitList.push(fruit);
        this.fruitCreationTimer = 0;
      }
    }
  }, {
    key: "updateVerticalFruitPosition",
    value: function updateVerticalFruitPosition() {
      var _this9 = this;

      if (this.fruitList.length) {
        this.fruitList.forEach(function (fruit, index) {
          if (fruit.getY() > 500) {
            _this9.fruitList.splice(index, 1);
          } else {
            _this9.drawImage(_this9.loadedImages.fruit, fruit.getX(), fruit.getY(), fruit.getWidth(), fruit.getHeight());

            fruit.setY(fruit.getY() + fruit.getSpeed());
          }
        });
      }
    }
  }, {
    key: "detectCatcherAndFruitCollision",
    value: function detectCatcherAndFruitCollision() {
      var _this10 = this;

      var CATCHER = this.CATCHER,
          fruitList = this.fruitList;

      if (fruitList.length) {
        fruitList.forEach(function (fruit) {
          if (fruit.getX() < CATCHER.getX() + CATCHER.getWidth() && CATCHER.getX() < fruit.getX() + fruit.getWidth() && fruit.getY() < CATCHER.getY() + CATCHER.getHeight() && CATCHER.getY() < fruit.getY() + fruit.getHeight()) {
            _this10.dropSound.play();

            _this10.isGameOver = true;

            _this10.handleGameOver();
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "container"
      }, react_default.a.createElement(components_Instructions, null), react_default.a.createElement("div", {
        className: "row justify-content-center"
      }, react_default.a.createElement("canvas", {
        id: "canvas",
        className: "col col-7",
        ref: this.canvas,
        height: this.canvasHeight,
        width: this.canvasWidth,
        style: {
          border: "2px solid #000000"
        }
      })));
    }
  }]);

  return App;
}(react["Component"]);

/* harmony default export */ var Canvas = (Canvas_App);
// EXTERNAL MODULE: ./src/assets/styles/app.css
var app = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(25);

// CONCATENATED MODULE: ./src/index.js





react_dom_default.a.render(react_default.a.createElement(Canvas, null), document.getElementById('root'));

/***/ })
],[[14,1,2]]]);
//# sourceMappingURL=main.bundle.map