/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    font-family: serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    display: flex;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\np {\n    flex-grow: 1;\n    min-height: 18px;\n    text-align: center;\n    vertical-align: middle;\n    padding: 5px 10px;\n}\n\n.cold4 {\n    background-color: rgb(0, 140, 255);\n    color: white;\n}\n\n.cold3 {\n    background-color: rgb(72, 197, 255);\n    color: white;\n}\n\n.cold2 {\n    background-color: rgb(144, 242, 255);\n}\n\n.cold1 {\n    background-color: rgb(206, 249, 255);\n}\n\n.warm1 {\n    background-color: rgb(255, 255, 194);\n}\n\n.warm2 {\n    background-color: rgb(255, 255, 50);\n}\n\n.warm3 {\n    background-color: rgb(255, 190, 51);\n}\n\n.warm4 {\n    background-color: rgb(253, 110, 67);\n    color: white;\n}\n\n.warm5 {\n    background-color: rgb(255, 49, 34);\n    color: white;\n}\n\n\n\n.content {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n}\n\n.search {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n}\n\n.search div {\n    display: flex;\n    gap: 8px;\n}\n\nlabel {\n    font-size: 1.2rem;\n}\n\ninput {\n    padding: 2px 4px;\n    border: black 1px solid;\n    border-radius: 10px;\n    font-size: 1rem;\n    font-family: serif;\n    width: 220px;\n}\n\ninput::placeholder {\n    font-size: 0.9rem;\n}\n\nbutton {\n    padding: 3px 18px;\n    border: black 1px solid;\n    border-radius: 10px;\n    font-size: 1rem;\n    background-color: rgb(238, 238, 238);\n    color: black;\n}\n\nbutton:hover {\n    background-color: rgb(202, 202, 202);\n    cursor: grab;\n}\n\n.start {\n    display: flex;\n    justify-content: center;\n}\n\n.start img {\n    width: auto;\n    height: 40vw;\n}\n\n.container,\n.error {\n    display: none;\n}\n\n.error-container {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.error-container div {\n    text-align: center;\n    font-weight: bold;\n}\n\n.error-container img {\n    width: auto;\n    height: 40vw;\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    width: fit-content;\n    gap: 5px;\n}\n\n.name-and-temp {\n    display: flex;\n    justify-content: space-between;\n    font-size: clamp(2rem, 4.8vw, 3rem);\n    font-weight: bold;\n    gap: 30px;\n}\n\n.weather-and-image {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.main {\n    font-size: clamp(1.8rem, 4.5vw, 2.8rem);\n}\n\n.description {\n    font-size: clamp(1.4rem, 3.5vw, 2.2rem);\n}\n\n.weather-and-image img {\n    height: clamp(3.3rem, 8vw, 5rem);\n    width: auto;\n    margin-right: 10px;\n}\n\n.feels-like {\n    font-size: clamp(1.2rem, 2.4vw, 1.5rem);\n    font-weight: bold;\n}\n\n.cloudiness,\n.humidity,\n.wind,\n.visibility,\n.city-time,\n.time {\n    font-size: clamp(1rem, 1.9vw, 1.2rem);\n}\n\n.sun {\n    display: flex;\n    justify-content: space-between;\n    font-size: clamp(1.2rem, 2.4vw, 1.5rem);\n    font-weight: bold;\n}\n\n.button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.toggle {\n    margin-top: 5px;\n}\n\n.footer {\n    background-color: rgb(155, 155, 155);\n    color: white;\n    font-weight: bold;\n    padding: 5px;\n    display: flex;\n    gap: 30px;\n    justify-content: center;\n}\n\n.links {\n    text-align: center;\n    font-size: clamp(0.7rem, 1.8vw, 1rem);\n}\n\na {\n    color: white;\n}\n\na:visited {\n    color: rgb(46, 46, 46);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;;;AAIA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,gCAAgC;IAChC,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;IACvC,iBAAiB;AACrB;;AAEA;;;;;;IAMI,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uCAAuC;IACvC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    font-family: serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    display: flex;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\np {\n    flex-grow: 1;\n    min-height: 18px;\n    text-align: center;\n    vertical-align: middle;\n    padding: 5px 10px;\n}\n\n.cold4 {\n    background-color: rgb(0, 140, 255);\n    color: white;\n}\n\n.cold3 {\n    background-color: rgb(72, 197, 255);\n    color: white;\n}\n\n.cold2 {\n    background-color: rgb(144, 242, 255);\n}\n\n.cold1 {\n    background-color: rgb(206, 249, 255);\n}\n\n.warm1 {\n    background-color: rgb(255, 255, 194);\n}\n\n.warm2 {\n    background-color: rgb(255, 255, 50);\n}\n\n.warm3 {\n    background-color: rgb(255, 190, 51);\n}\n\n.warm4 {\n    background-color: rgb(253, 110, 67);\n    color: white;\n}\n\n.warm5 {\n    background-color: rgb(255, 49, 34);\n    color: white;\n}\n\n\n\n.content {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n}\n\n.search {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n}\n\n.search div {\n    display: flex;\n    gap: 8px;\n}\n\nlabel {\n    font-size: 1.2rem;\n}\n\ninput {\n    padding: 2px 4px;\n    border: black 1px solid;\n    border-radius: 10px;\n    font-size: 1rem;\n    font-family: serif;\n    width: 220px;\n}\n\ninput::placeholder {\n    font-size: 0.9rem;\n}\n\nbutton {\n    padding: 3px 18px;\n    border: black 1px solid;\n    border-radius: 10px;\n    font-size: 1rem;\n    background-color: rgb(238, 238, 238);\n    color: black;\n}\n\nbutton:hover {\n    background-color: rgb(202, 202, 202);\n    cursor: grab;\n}\n\n.start {\n    display: flex;\n    justify-content: center;\n}\n\n.start img {\n    width: auto;\n    height: 40vw;\n}\n\n.container,\n.error {\n    display: none;\n}\n\n.error-container {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.error-container div {\n    text-align: center;\n    font-weight: bold;\n}\n\n.error-container img {\n    width: auto;\n    height: 40vw;\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    width: fit-content;\n    gap: 5px;\n}\n\n.name-and-temp {\n    display: flex;\n    justify-content: space-between;\n    font-size: clamp(2rem, 4.8vw, 3rem);\n    font-weight: bold;\n    gap: 30px;\n}\n\n.weather-and-image {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.main {\n    font-size: clamp(1.8rem, 4.5vw, 2.8rem);\n}\n\n.description {\n    font-size: clamp(1.4rem, 3.5vw, 2.2rem);\n}\n\n.weather-and-image img {\n    height: clamp(3.3rem, 8vw, 5rem);\n    width: auto;\n    margin-right: 10px;\n}\n\n.feels-like {\n    font-size: clamp(1.2rem, 2.4vw, 1.5rem);\n    font-weight: bold;\n}\n\n.cloudiness,\n.humidity,\n.wind,\n.visibility,\n.city-time,\n.time {\n    font-size: clamp(1rem, 1.9vw, 1.2rem);\n}\n\n.sun {\n    display: flex;\n    justify-content: space-between;\n    font-size: clamp(1.2rem, 2.4vw, 1.5rem);\n    font-weight: bold;\n}\n\n.button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.toggle {\n    margin-top: 5px;\n}\n\n.footer {\n    background-color: rgb(155, 155, 155);\n    color: white;\n    font-weight: bold;\n    padding: 5px;\n    display: flex;\n    gap: 30px;\n    justify-content: center;\n}\n\n.links {\n    text-align: center;\n    font-size: clamp(0.7rem, 1.8vw, 1rem);\n}\n\na {\n    color: white;\n}\n\na:visited {\n    color: rgb(46, 46, 46);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTemp": () => (/* binding */ convertTemp),
/* harmony export */   "deleteTemp": () => (/* binding */ deleteTemp),
/* harmony export */   "displayError": () => (/* binding */ displayError),
/* harmony export */   "displayWeather": () => (/* binding */ displayWeather),
/* harmony export */   "mediaQuery": () => (/* binding */ mediaQuery),
/* harmony export */   "toggle": () => (/* binding */ toggle)
/* harmony export */ });
const start = document.querySelector(".start");
const container = document.querySelector(".container");
const nameAndTemp = document.querySelector(".name-and-temp");
const name = document.querySelector(".name");
const temp = document.querySelector(".temp");
const main = document.querySelector(".main");
const description = document.querySelector(".description");
const image = document.querySelector(".weather-and-image img");
const feelsLike = document.querySelector(".feels-like");
const cloudiness = document.querySelector(".cloudiness");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const visibility = document.querySelector(".visibility");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const cityTime = document.querySelector(".city-time");
const time = document.querySelector(".time");
const toggle = document.querySelector(".toggle");
const error = document.querySelector(".error");

const displayError = function (err) {
    console.log(err.message);

    error.style.display = "block";
    container.style.display = "none";
    start.style.display = "none";
};

function displayWeather(obj) {
    name.textContent = `${obj.name}, ${obj.country}`;
    temp.textContent = `${obj.temp} °C`;

    colorHeader(obj.temp);

    main.textContent = obj.main;
    description.textContent = obj.description.charAt(0).toUpperCase() + obj.description.slice(1);

    chooseImage(obj.main, obj.description, obj.time, obj.sunrise, obj.sunset);

    feelsLike.textContent = `Feels like: ${obj.feels_like} °C`;
    cloudiness.textContent = `Cloudiness: ${obj.clouds} %`;
    humidity.textContent = `Humidity: ${obj.humidity} %`;
    wind.textContent = `Wind speed: ${obj.speed} m/s`;
    visibility.textContent = `Visibility: ${obj.visibility} m`;
    sunrise.textContent = `Sunrise: ${convertTime(obj.sunrise)}`;
    sunset.textContent = `Sunset: ${convertTime(obj.sunset)}`;
    cityTime.textContent = `Time in ${obj.name}: ${convertDate(obj.time)}`;
    time.textContent = `Time of request: ${convertToLocalDate(obj.dt)}`;

    toggle.textContent = "Convert °C to °F";

    start.style.display = "none";
    container.style.display = "block";
    error.style.display = "none";
};

function chooseImage(main, description, time, sunrise, sunset) {
    if (description === "light thunderstorm" || description === "thunderstorm" || description === "heavy thunderstorm" || description === "ragged thunderstorm") {
        image.setAttribute("src", "cloud-with-lightning-svgrepo-com.svg");
    } else if (main === "Thunderstorm" && (description !== "light thunderstorm" || description !== "thunderstorm" || description !== "heavy thunderstorm" || description !== "ragged thunderstorm")) {
        image.setAttribute("src", "cloud-with-lightning-and-rain-svgrepo-com.svg");
    } else if (main === "Drizzle" || main === "Rain") {
        image.setAttribute("src", "cloud-with-rain-svgrepo-com.svg");
    } else if (main === "Snow") {
        image.setAttribute("src", "cloud-with-snow-svgrepo-com.svg");
    } else if (main === "Mist" || main === "Fog") {
        image.setAttribute("src", "mist-fog-svgrepo-com.svg");
    } else if (main === "Smoke" || main === "Haze") {
        image.setAttribute("src", "smoke-haze-svgrepo-com.svg");
    } else if (main === "Sand" || main === "Dust") {
        image.setAttribute("src", "dust-sand-svgrepo-com.svg");
    } else if (main === "Ash") {
        image.setAttribute("src", "volcano-svgrepo-com.svg");
    } else if (main === "Squall") {
        image.setAttribute("src", "squall-svgrepo-com.svg");
    } else if (main === "Tornado") {
        image.setAttribute("src", "tornado-svgrepo-com.svg");
    } else if (main === "Clear" && time >= sunrise && time <= sunset) {
        image.setAttribute("src", "sunny-svgrepo-com.svg");
    } else if (main === "Clear" && (time < sunrise || time > sunset)) {
        image.setAttribute("src", "moon-svgrepo-com.svg");
    } else if (description === "few clouds" && time >= sunrise && time <= sunset) {
        image.setAttribute("src", "cloudy-few-svgrepo-com.svg");
    } else if (description === "few clouds" && (time < sunrise || time > sunset)) {
        image.setAttribute("src", "cloudy-few-moon-svgrepo-com.svg");
    } else if (description === "scattered clouds" && time >= sunrise && time <= sunset) {
        image.setAttribute("src", "cloudy-scattered-svgrepo-com.svg");
    } else if (description === "scattered clouds" && (time < sunrise || time > sunset)) {
        image.setAttribute("src", "cloudy-scattered-moon-svgrepo-com.svg");
    } else if (description === "broken clouds" && time >= sunrise && time <= sunset) {
        image.setAttribute("src", "cloudy-broken-svgrepo-com.svg");
    } else if (description === "broken clouds" && (time < sunrise || time > sunset)) {
        image.setAttribute("src", "cloudy-broken-moon-svgrepo-com.svg");
    } else if (description === "overcast clouds") {
        image.setAttribute("src", "cloud-svgrepo-com.svg");
    }
};

function colorHeader(temp) {
    if (temp < -30) {
        nameAndTemp.style.backgroundColor = "rgb(0, 140, 255)";
        nameAndTemp.style.color = "white";
    } else if (temp >= -30 && temp < -20) {
        nameAndTemp.style.backgroundColor = "rgb(72, 197, 255)";
        nameAndTemp.style.color = "white";
    } else if (temp >= -20 && temp < -10) {
        nameAndTemp.style.backgroundColor = "rgb(144, 242, 255)";
        nameAndTemp.style.color = "black";
    } else if (temp >= -10 && temp < -5) {
        nameAndTemp.style.backgroundColor = "rgb(206, 249, 255)";
        nameAndTemp.style.color = "black";
    } else if (temp >= -5 && temp < 5) {
        nameAndTemp.style.backgroundColor = "white";
        nameAndTemp.style.color = "black";
    } else if (temp >= 5 && temp < 10) {
        nameAndTemp.style.backgroundColor = "rgb(255, 255, 194)";
        nameAndTemp.style.color = "black";
    } else if (temp >= 10 && temp < 20) {
        nameAndTemp.style.backgroundColor = "rgb(255, 255, 50)";
        nameAndTemp.style.color = "black";
    } else if (temp >= 20 && temp < 30) {
        nameAndTemp.style.backgroundColor = "rgb(255, 190, 51)";
        nameAndTemp.style.color = "black";
    } else if (temp >= 30 && temp <= 40) {
        nameAndTemp.style.backgroundColor = "rgb(253, 110, 67)";
        nameAndTemp.style.color = "white";
    } else if (temp > 40) {
        nameAndTemp.style.backgroundColor = "rgb(255, 49, 34)";
        nameAndTemp.style.color = "white";
    }
};

function convertTime(unix_timestamp) {
    let date = new Date(unix_timestamp * 1000);
    let timeString = date.toUTCString();
    let formattedTime = timeString.slice(-12, -7);
    return formattedTime;
};

function convertDate(unix_timestamp) {
    let date = new Date(unix_timestamp * 1000);
    let timeString = date.toUTCString();
    let formattedTime = timeString.slice(0, -3);
    return formattedTime;
};

function convertToLocalDate(unix_timestamp) {
    let date = new Date(unix_timestamp * 1000);
    return date;
};

let celsius;
let celsiusFeels;
let fahr;
let fahrFeels;

function convertTemp() {
    if (toggle.textContent === "Convert °C to °F") {
        celsius = temp.textContent.slice(0, -3);
        celsiusFeels = feelsLike.textContent.slice(12, -3);
        fahr = Math.round(celsius * 9 / 5 + 32);
        fahrFeels = Math.round(celsiusFeels * 9 / 5 + 32);
        temp.textContent = `${fahr} °F`;
        feelsLike.textContent = `Feels like: ${fahrFeels} °F`;
        toggle.textContent = "Convert °F to °C";
    } else if (toggle.textContent === "Convert °F to °C") {
        temp.textContent = `${celsius} °C`;
        feelsLike.textContent = `Feels like: ${celsiusFeels} °C`;
        toggle.textContent = "Convert °C to °F";
    }
};

const mediaQuery = window.matchMedia('(max-width: 750px)');

function deleteTemp() {

    const cold4 = document.querySelector('.cold4');
    const cold3 = document.querySelector('.cold3');
    const cold2 = document.querySelector('.cold2');
    const cold1 = document.querySelector('.cold1');
    const zero = document.querySelector('.zero');
    const warm1 = document.querySelector('.warm1');
    const warm2 = document.querySelector('.warm2');
    const warm3 = document.querySelector('.warm3');
    const warm4 = document.querySelector('.warm4');
    const warm5 = document.querySelector('.warm5');

    if (mediaQuery.matches) {
        cold4.textContent = "";
        cold3.textContent = "";
        cold2.textContent = "";
        cold1.textContent = "";
        zero.textContent = "";
        warm1.textContent = "";
        warm2.textContent = "";
        warm3.textContent = "";
        warm4.textContent = "";
        warm5.textContent = "";
    } else {
        cold4.textContent = "below -30 °C";
        cold3.textContent = "-30 °C to -20 °C";
        cold2.textContent = "-20 °C to -10 °C";
        cold1.textContent = "-10 °C to -5 °C";
        zero.textContent = "-5 °C to 5 °C";
        warm1.textContent = "5 °C to 10 °C";
        warm2.textContent = "10 °C to 20 °C";
        warm3.textContent = "20 °C to 30 °C";
        warm4.textContent = "30 °C to 40 °C";
        warm5.textContent = "above 40 °C";
    }
};



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getObject": () => (/* binding */ getObject),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(city) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=eaf888eb0081733be52de7887c53f741&units=metric`);
        console.log(city, "response.ok", response.ok);
        let weather = await response.json();
        console.log(weather);
        return weather;
    } catch (error) {
        console.log(error);
    }
}

const getObject = function (weather) {
    if ("name" in weather) {
        const obj = {
            name: weather.name,
            country: weather.sys.country,
            dt: weather.dt,
            timezone: weather.timezone,
            time: weather.dt + weather.timezone,
            sunrise: weather.sys.sunrise + weather.timezone,
            sunset: weather.sys.sunset + weather.timezone,
            main: weather.weather[0].main,
            description: weather.weather[0].description,
            temp: Math.round(weather.main.temp),
            feels_like: Math.round(weather.main.feels_like),
            humidity: weather.main.humidity,
            visibility: weather.visibility,
            speed: Math.round(weather.wind.speed * 10) / 10,
            clouds: weather.clouds.all,
        }
        console.log(obj);
        return obj;
    } else {
        const obj = {
            cod: weather.cod,
            message: weather.message,
        }
        console.log(obj.message);
        throw new Error("Whoops!");
    }
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





const input = document.querySelector("input");
const find = document.querySelector(".find");

find.addEventListener("click", () => {
    console.log(input.value);
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.getWeather)(input.value).then(_logic__WEBPACK_IMPORTED_MODULE_1__.getObject).then(_dom__WEBPACK_IMPORTED_MODULE_2__.displayWeather).catch(_dom__WEBPACK_IMPORTED_MODULE_2__.displayError);
});


_dom__WEBPACK_IMPORTED_MODULE_2__.toggle.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_2__.convertTemp);


(0,_dom__WEBPACK_IMPORTED_MODULE_2__.deleteTemp)();
_dom__WEBPACK_IMPORTED_MODULE_2__.mediaQuery.addEventListener('change', _dom__WEBPACK_IMPORTED_MODULE_2__.deleteTemp);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixNQUFNO0FBQ3BDLCtDQUErQyxXQUFXO0FBQzFEO0FBQ0EsTUFBTTtBQUNOLDhCQUE4QixTQUFTO0FBQ3ZDLCtDQUErQyxjQUFjO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTkE7QUFDQTtBQUNBLHdGQUF3RixLQUFLO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN6Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQzBCO0FBQ2tEOzs7QUFHbEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxrREFBVSxtQkFBbUIsNkNBQVMsT0FBTyxnREFBYyxRQUFRLDhDQUFZO0FBQ25GLENBQUM7OztBQUdELHlEQUF1QixVQUFVLDZDQUFXOzs7QUFHNUMsZ0RBQVU7QUFDViw2REFBMkIsV0FBVyw0Q0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5wIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtaW4taGVpZ2h0OiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4uY29sZDQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTQwLCAyNTUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb2xkMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MiwgMTk3LCAyNTUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb2xkMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDI0MiwgMjU1KTtcXG59XFxuXFxuLmNvbGQxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjQ5LCAyNTUpO1xcbn1cXG5cXG4ud2FybTEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDE5NCk7XFxufVxcblxcbi53YXJtMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgNTApO1xcbn1cXG5cXG4ud2FybTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTAsIDUxKTtcXG59XFxuXFxuLndhcm00IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMTEwLCA2Nyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndhcm01IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDksIDM0KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc2VhcmNoIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDJweCA0cHg7XFxuICAgIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogM3B4IDE4cHg7XFxuICAgIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMDIsIDIwMik7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLnN0YXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdGFydCBpbWcge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4uY29udGFpbmVyLFxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lcnJvci1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZXJyb3ItY29udGFpbmVyIGRpdiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lcnJvci1jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogNDB2dztcXG59XFxuXFxuLmNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ubmFtZS1hbmQtdGVtcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA0Ljh2dywgM3JlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi53ZWF0aGVyLWFuZC1pbWFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuOHJlbSwgNC41dncsIDIuOHJlbSk7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAzLjV2dywgMi4ycmVtKTtcXG59XFxuXFxuLndlYXRoZXItYW5kLWltYWdlIGltZyB7XFxuICAgIGhlaWdodDogY2xhbXAoMy4zcmVtLCA4dncsIDVyZW0pO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uZmVlbHMtbGlrZSB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjR2dywgMS41cmVtKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG91ZGluZXNzLFxcbi5odW1pZGl0eSxcXG4ud2luZCxcXG4udmlzaWJpbGl0eSxcXG4uY2l0eS10aW1lLFxcbi50aW1lIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjl2dywgMS4ycmVtKTtcXG59XFxuXFxuLnN1biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNHZ3LCAxLjVyZW0pO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NSwgMTU1LCAxNTUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5saW5rcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjdyZW0sIDEuOHZ3LCAxcmVtKTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGlu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MDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbnAge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5jb2xkNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNDAsIDI1NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbGQzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcyLCAxOTcsIDI1NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbGQyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NCwgMjQyLCAyNTUpO1xcbn1cXG5cXG4uY29sZDEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyNDksIDI1NSk7XFxufVxcblxcbi53YXJtMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMTk0KTtcXG59XFxuXFxuLndhcm0yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCA1MCk7XFxufVxcblxcbi53YXJtMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MCwgNTEpO1xcbn1cXG5cXG4ud2FybTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAxMTAsIDY3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2FybTUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0OSwgMzQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcbi5jb250ZW50IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5zZWFyY2ggZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogMnB4IDRweDtcXG4gICAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbiAgICB3aWR0aDogMjIwcHg7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAzcHggMThweDtcXG4gICAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN0YXJ0IGltZyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDQwdnc7XFxufVxcblxcbi5jb250YWluZXIsXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVycm9yLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lcnJvci1jb250YWluZXIgZGl2IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmVycm9yLWNvbnRhaW5lciBpbWcge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5uYW1lLWFuZC10ZW1wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDQuOHZ3LCAzcmVtKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLndlYXRoZXItYW5kLWltYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS44cmVtLCA0LjV2dywgMi44cmVtKTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjRyZW0sIDMuNXZ3LCAyLjJyZW0pO1xcbn1cXG5cXG4ud2VhdGhlci1hbmQtaW1hZ2UgaW1nIHtcXG4gICAgaGVpZ2h0OiBjbGFtcCgzLjNyZW0sIDh2dywgNXJlbSk7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5mZWVscy1saWtlIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNHZ3LCAxLjVyZW0pO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3VkaW5lc3MsXFxuLmh1bWlkaXR5LFxcbi53aW5kLFxcbi52aXNpYmlsaXR5LFxcbi5jaXR5LXRpbWUsXFxuLnRpbWUge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuOXZ3LCAxLjJyZW0pO1xcbn1cXG5cXG4uc3VuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi40dncsIDEuNXJlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2dnbGUge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCAxNTUsIDE1NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxpbmtzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAuN3JlbSwgMS44dncsIDFyZW0pO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFwiKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuY29uc3QgbmFtZUFuZFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtYW5kLXRlbXBcIik7XG5jb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1hbmQtaW1hZ2UgaW1nXCIpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVscy1saWtlXCIpO1xuY29uc3QgY2xvdWRpbmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvdWRpbmVzc1wiKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRcIik7XG5jb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNpYmlsaXR5XCIpO1xuY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VucmlzZVwiKTtcbmNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Vuc2V0XCIpO1xuY29uc3QgY2l0eVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktdGltZVwiKTtcbmNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVcIik7XG5jb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZVwiKTtcbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKTtcblxuY29uc3QgZGlzcGxheUVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcblxuICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihvYmopIHtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7b2JqLm5hbWV9LCAke29iai5jb3VudHJ5fWA7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke29iai50ZW1wfSDCsENgO1xuXG4gICAgY29sb3JIZWFkZXIob2JqLnRlbXApO1xuXG4gICAgbWFpbi50ZXh0Q29udGVudCA9IG9iai5tYWluO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2JqLmRlc2NyaXB0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgb2JqLmRlc2NyaXB0aW9uLnNsaWNlKDEpO1xuXG4gICAgY2hvb3NlSW1hZ2Uob2JqLm1haW4sIG9iai5kZXNjcmlwdGlvbiwgb2JqLnRpbWUsIG9iai5zdW5yaXNlLCBvYmouc3Vuc2V0KTtcblxuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke29iai5mZWVsc19saWtlfSDCsENgO1xuICAgIGNsb3VkaW5lc3MudGV4dENvbnRlbnQgPSBgQ2xvdWRpbmVzczogJHtvYmouY2xvdWRzfSAlYDtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtvYmouaHVtaWRpdHl9ICVgO1xuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZCBzcGVlZDogJHtvYmouc3BlZWR9IG0vc2A7XG4gICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IGBWaXNpYmlsaXR5OiAke29iai52aXNpYmlsaXR5fSBtYDtcbiAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gYFN1bnJpc2U6ICR7Y29udmVydFRpbWUob2JqLnN1bnJpc2UpfWA7XG4gICAgc3Vuc2V0LnRleHRDb250ZW50ID0gYFN1bnNldDogJHtjb252ZXJ0VGltZShvYmouc3Vuc2V0KX1gO1xuICAgIGNpdHlUaW1lLnRleHRDb250ZW50ID0gYFRpbWUgaW4gJHtvYmoubmFtZX06ICR7Y29udmVydERhdGUob2JqLnRpbWUpfWA7XG4gICAgdGltZS50ZXh0Q29udGVudCA9IGBUaW1lIG9mIHJlcXVlc3Q6ICR7Y29udmVydFRvTG9jYWxEYXRlKG9iai5kdCl9YDtcblxuICAgIHRvZ2dsZS50ZXh0Q29udGVudCA9IFwiQ29udmVydCDCsEMgdG8gwrBGXCI7XG5cbiAgICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcblxuZnVuY3Rpb24gY2hvb3NlSW1hZ2UobWFpbiwgZGVzY3JpcHRpb24sIHRpbWUsIHN1bnJpc2UsIHN1bnNldCkge1xuICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gXCJsaWdodCB0aHVuZGVyc3Rvcm1cIiB8fCBkZXNjcmlwdGlvbiA9PT0gXCJ0aHVuZGVyc3Rvcm1cIiB8fCBkZXNjcmlwdGlvbiA9PT0gXCJoZWF2eSB0aHVuZGVyc3Rvcm1cIiB8fCBkZXNjcmlwdGlvbiA9PT0gXCJyYWdnZWQgdGh1bmRlcnN0b3JtXCIpIHtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiY2xvdWQtd2l0aC1saWdodG5pbmctc3ZncmVwby1jb20uc3ZnXCIpO1xuICAgIH0gZWxzZSBpZiAobWFpbiA9PT0gXCJUaHVuZGVyc3Rvcm1cIiAmJiAoZGVzY3JpcHRpb24gIT09IFwibGlnaHQgdGh1bmRlcnN0b3JtXCIgfHwgZGVzY3JpcHRpb24gIT09IFwidGh1bmRlcnN0b3JtXCIgfHwgZGVzY3JpcHRpb24gIT09IFwiaGVhdnkgdGh1bmRlcnN0b3JtXCIgfHwgZGVzY3JpcHRpb24gIT09IFwicmFnZ2VkIHRodW5kZXJzdG9ybVwiKSkge1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJjbG91ZC13aXRoLWxpZ2h0bmluZy1hbmQtcmFpbi1zdmdyZXBvLWNvbS5zdmdcIik7XG4gICAgfSBlbHNlIGlmIChtYWluID09PSBcIkRyaXp6bGVcIiB8fCBtYWluID09PSBcIlJhaW5cIikge1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJjbG91ZC13aXRoLXJhaW4tc3ZncmVwby1jb20uc3ZnXCIpO1xuICAgIH0gZWxzZSBpZiAobWFpbiA9PT0gXCJTbm93XCIpIHtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiY2xvdWQtd2l0aC1zbm93LXN2Z3JlcG8tY29tLnN2Z1wiKTtcbiAgICB9IGVsc2UgaWYgKG1haW4gPT09IFwiTWlzdFwiIHx8IG1haW4gPT09IFwiRm9nXCIpIHtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwibWlzdC1mb2ctc3ZncmVwby1jb20uc3ZnXCIpO1xuICAgIH0gZWxzZSBpZiAobWFpbiA9PT0gXCJTbW9rZVwiIHx8IG1haW4gPT09IFwiSGF6ZVwiKSB7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcInNtb2tlLWhhemUtc3ZncmVwby1jb20uc3ZnXCIpO1xuICAgIH0gZWxzZSBpZiAobWFpbiA9PT0gXCJTYW5kXCIgfHwgbWFpbiA9PT0gXCJEdXN0XCIpIHtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiZHVzdC1zYW5kLXN2Z3JlcG8tY29tLnN2Z1wiKTtcbiAgICB9IGVsc2UgaWYgKG1haW4gPT09IFwiQXNoXCIpIHtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwidm9sY2Fuby1zdmdyZXBvLWNvbS5zdmdcIik7XG4gICAgfSBlbHNlIGlmIChtYWluID09PSBcIlNxdWFsbFwiKSB7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcInNxdWFsbC1zdmdyZXBvLWNvbS5zdmdcIik7XG4gICAgfSBlbHNlIGlmIChtYWluID09PSBcIlRvcm5hZG9cIikge1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJ0b3JuYWRvLXN2Z3JlcG8tY29tLnN2Z1wiKTtcbiAgICB9IGVsc2UgaWYgKG1haW4gPT09IFwiQ2xlYXJcIiAmJiB0aW1lID49IHN1bnJpc2UgJiYgdGltZSA8PSBzdW5zZXQpIHtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwic3Vubnktc3ZncmVwby1jb20uc3ZnXCIpO1xuICAgIH0gZWxzZSBpZiAobWFpbiA9PT0gXCJDbGVhclwiICYmICh0aW1lIDwgc3VucmlzZSB8fCB0aW1lID4gc3Vuc2V0KSkge1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJtb29uLXN2Z3JlcG8tY29tLnN2Z1wiKTtcbiAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uID09PSBcImZldyBjbG91ZHNcIiAmJiB0aW1lID49IHN1bnJpc2UgJiYgdGltZSA8PSBzdW5zZXQpIHtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiY2xvdWR5LWZldy1zdmdyZXBvLWNvbS5zdmdcIik7XG4gICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbiA9PT0gXCJmZXcgY2xvdWRzXCIgJiYgKHRpbWUgPCBzdW5yaXNlIHx8IHRpbWUgPiBzdW5zZXQpKSB7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImNsb3VkeS1mZXctbW9vbi1zdmdyZXBvLWNvbS5zdmdcIik7XG4gICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbiA9PT0gXCJzY2F0dGVyZWQgY2xvdWRzXCIgJiYgdGltZSA+PSBzdW5yaXNlICYmIHRpbWUgPD0gc3Vuc2V0KSB7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImNsb3VkeS1zY2F0dGVyZWQtc3ZncmVwby1jb20uc3ZnXCIpO1xuICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24gPT09IFwic2NhdHRlcmVkIGNsb3Vkc1wiICYmICh0aW1lIDwgc3VucmlzZSB8fCB0aW1lID4gc3Vuc2V0KSkge1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJjbG91ZHktc2NhdHRlcmVkLW1vb24tc3ZncmVwby1jb20uc3ZnXCIpO1xuICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24gPT09IFwiYnJva2VuIGNsb3Vkc1wiICYmIHRpbWUgPj0gc3VucmlzZSAmJiB0aW1lIDw9IHN1bnNldCkge1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJjbG91ZHktYnJva2VuLXN2Z3JlcG8tY29tLnN2Z1wiKTtcbiAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uID09PSBcImJyb2tlbiBjbG91ZHNcIiAmJiAodGltZSA8IHN1bnJpc2UgfHwgdGltZSA+IHN1bnNldCkpIHtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiY2xvdWR5LWJyb2tlbi1tb29uLXN2Z3JlcG8tY29tLnN2Z1wiKTtcbiAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uID09PSBcIm92ZXJjYXN0IGNsb3Vkc1wiKSB7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImNsb3VkLXN2Z3JlcG8tY29tLnN2Z1wiKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjb2xvckhlYWRlcih0ZW1wKSB7XG4gICAgaWYgKHRlbXAgPCAtMzApIHtcbiAgICAgICAgbmFtZUFuZFRlbXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMCwgMTQwLCAyNTUpXCI7XG4gICAgICAgIG5hbWVBbmRUZW1wLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIH0gZWxzZSBpZiAodGVtcCA+PSAtMzAgJiYgdGVtcCA8IC0yMCkge1xuICAgICAgICBuYW1lQW5kVGVtcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYig3MiwgMTk3LCAyNTUpXCI7XG4gICAgICAgIG5hbWVBbmRUZW1wLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIH0gZWxzZSBpZiAodGVtcCA+PSAtMjAgJiYgdGVtcCA8IC0xMCkge1xuICAgICAgICBuYW1lQW5kVGVtcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxNDQsIDI0MiwgMjU1KVwiO1xuICAgICAgICBuYW1lQW5kVGVtcC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9IGVsc2UgaWYgKHRlbXAgPj0gLTEwICYmIHRlbXAgPCAtNSkge1xuICAgICAgICBuYW1lQW5kVGVtcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMDYsIDI0OSwgMjU1KVwiO1xuICAgICAgICBuYW1lQW5kVGVtcC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9IGVsc2UgaWYgKHRlbXAgPj0gLTUgJiYgdGVtcCA8IDUpIHtcbiAgICAgICAgbmFtZUFuZFRlbXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBuYW1lQW5kVGVtcC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9IGVsc2UgaWYgKHRlbXAgPj0gNSAmJiB0ZW1wIDwgMTApIHtcbiAgICAgICAgbmFtZUFuZFRlbXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LCAyNTUsIDE5NClcIjtcbiAgICAgICAgbmFtZUFuZFRlbXAuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgfSBlbHNlIGlmICh0ZW1wID49IDEwICYmIHRlbXAgPCAyMCkge1xuICAgICAgICBuYW1lQW5kVGVtcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsIDI1NSwgNTApXCI7XG4gICAgICAgIG5hbWVBbmRUZW1wLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIH0gZWxzZSBpZiAodGVtcCA+PSAyMCAmJiB0ZW1wIDwgMzApIHtcbiAgICAgICAgbmFtZUFuZFRlbXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LCAxOTAsIDUxKVwiO1xuICAgICAgICBuYW1lQW5kVGVtcC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9IGVsc2UgaWYgKHRlbXAgPj0gMzAgJiYgdGVtcCA8PSA0MCkge1xuICAgICAgICBuYW1lQW5kVGVtcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTMsIDExMCwgNjcpXCI7XG4gICAgICAgIG5hbWVBbmRUZW1wLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIH0gZWxzZSBpZiAodGVtcCA+IDQwKSB7XG4gICAgICAgIG5hbWVBbmRUZW1wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwgNDksIDM0KVwiO1xuICAgICAgICBuYW1lQW5kVGVtcC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjb252ZXJ0VGltZSh1bml4X3RpbWVzdGFtcCkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUodW5peF90aW1lc3RhbXAgKiAxMDAwKTtcbiAgICBsZXQgdGltZVN0cmluZyA9IGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICBsZXQgZm9ybWF0dGVkVGltZSA9IHRpbWVTdHJpbmcuc2xpY2UoLTEyLCAtNyk7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFRpbWU7XG59O1xuXG5mdW5jdGlvbiBjb252ZXJ0RGF0ZSh1bml4X3RpbWVzdGFtcCkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUodW5peF90aW1lc3RhbXAgKiAxMDAwKTtcbiAgICBsZXQgdGltZVN0cmluZyA9IGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICBsZXQgZm9ybWF0dGVkVGltZSA9IHRpbWVTdHJpbmcuc2xpY2UoMCwgLTMpO1xuICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xufTtcblxuZnVuY3Rpb24gY29udmVydFRvTG9jYWxEYXRlKHVuaXhfdGltZXN0YW1wKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh1bml4X3RpbWVzdGFtcCAqIDEwMDApO1xuICAgIHJldHVybiBkYXRlO1xufTtcblxubGV0IGNlbHNpdXM7XG5sZXQgY2Vsc2l1c0ZlZWxzO1xubGV0IGZhaHI7XG5sZXQgZmFockZlZWxzO1xuXG5mdW5jdGlvbiBjb252ZXJ0VGVtcCgpIHtcbiAgICBpZiAodG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkNvbnZlcnQgwrBDIHRvIMKwRlwiKSB7XG4gICAgICAgIGNlbHNpdXMgPSB0ZW1wLnRleHRDb250ZW50LnNsaWNlKDAsIC0zKTtcbiAgICAgICAgY2Vsc2l1c0ZlZWxzID0gZmVlbHNMaWtlLnRleHRDb250ZW50LnNsaWNlKDEyLCAtMyk7XG4gICAgICAgIGZhaHIgPSBNYXRoLnJvdW5kKGNlbHNpdXMgKiA5IC8gNSArIDMyKTtcbiAgICAgICAgZmFockZlZWxzID0gTWF0aC5yb3VuZChjZWxzaXVzRmVlbHMgKiA5IC8gNSArIDMyKTtcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2ZhaHJ9IMKwRmA7XG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2ZhaHJGZWVsc30gwrBGYDtcbiAgICAgICAgdG9nZ2xlLnRleHRDb250ZW50ID0gXCJDb252ZXJ0IMKwRiB0byDCsENcIjtcbiAgICB9IGVsc2UgaWYgKHRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJDb252ZXJ0IMKwRiB0byDCsENcIikge1xuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7Y2Vsc2l1c30gwrBDYDtcbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7Y2Vsc2l1c0ZlZWxzfSDCsENgO1xuICAgICAgICB0b2dnbGUudGV4dENvbnRlbnQgPSBcIkNvbnZlcnQgwrBDIHRvIMKwRlwiO1xuICAgIH1cbn07XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzUwcHgpJyk7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRlbXAoKSB7XG5cbiAgICBjb25zdCBjb2xkNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xkNCcpO1xuICAgIGNvbnN0IGNvbGQzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGQzJyk7XG4gICAgY29uc3QgY29sZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sZDInKTtcbiAgICBjb25zdCBjb2xkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xkMScpO1xuICAgIGNvbnN0IHplcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuemVybycpO1xuICAgIGNvbnN0IHdhcm0xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndhcm0xJyk7XG4gICAgY29uc3Qgd2FybTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2FybTInKTtcbiAgICBjb25zdCB3YXJtMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53YXJtMycpO1xuICAgIGNvbnN0IHdhcm00ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndhcm00Jyk7XG4gICAgY29uc3Qgd2FybTUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2FybTUnKTtcblxuICAgIGlmIChtZWRpYVF1ZXJ5Lm1hdGNoZXMpIHtcbiAgICAgICAgY29sZDQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBjb2xkMy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGNvbGQyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgY29sZDEudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICB6ZXJvLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgd2FybTEudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICB3YXJtMi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHdhcm0zLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgd2FybTQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICB3YXJtNS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29sZDQudGV4dENvbnRlbnQgPSBcImJlbG93IC0zMCDCsENcIjtcbiAgICAgICAgY29sZDMudGV4dENvbnRlbnQgPSBcIi0zMCDCsEMgdG8gLTIwIMKwQ1wiO1xuICAgICAgICBjb2xkMi50ZXh0Q29udGVudCA9IFwiLTIwIMKwQyB0byAtMTAgwrBDXCI7XG4gICAgICAgIGNvbGQxLnRleHRDb250ZW50ID0gXCItMTAgwrBDIHRvIC01IMKwQ1wiO1xuICAgICAgICB6ZXJvLnRleHRDb250ZW50ID0gXCItNSDCsEMgdG8gNSDCsENcIjtcbiAgICAgICAgd2FybTEudGV4dENvbnRlbnQgPSBcIjUgwrBDIHRvIDEwIMKwQ1wiO1xuICAgICAgICB3YXJtMi50ZXh0Q29udGVudCA9IFwiMTAgwrBDIHRvIDIwIMKwQ1wiO1xuICAgICAgICB3YXJtMy50ZXh0Q29udGVudCA9IFwiMjAgwrBDIHRvIDMwIMKwQ1wiO1xuICAgICAgICB3YXJtNC50ZXh0Q29udGVudCA9IFwiMzAgwrBDIHRvIDQwIMKwQ1wiO1xuICAgICAgICB3YXJtNS50ZXh0Q29udGVudCA9IFwiYWJvdmUgNDAgwrBDXCI7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgZGlzcGxheUVycm9yLCBkaXNwbGF5V2VhdGhlciwgY29udmVydFRlbXAsIGRlbGV0ZVRlbXAsIHRvZ2dsZSwgbWVkaWFRdWVyeSB9OyIsImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9ZWFmODg4ZWIwMDgxNzMzYmU1MmRlNzg4N2M1M2Y3NDEmdW5pdHM9bWV0cmljYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNpdHksIFwicmVzcG9uc2Uub2tcIiwgcmVzcG9uc2Uub2spO1xuICAgICAgICBsZXQgd2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gICAgICAgIHJldHVybiB3ZWF0aGVyO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldE9iamVjdCA9IGZ1bmN0aW9uICh3ZWF0aGVyKSB7XG4gICAgaWYgKFwibmFtZVwiIGluIHdlYXRoZXIpIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgbmFtZTogd2VhdGhlci5uYW1lLFxuICAgICAgICAgICAgY291bnRyeTogd2VhdGhlci5zeXMuY291bnRyeSxcbiAgICAgICAgICAgIGR0OiB3ZWF0aGVyLmR0LFxuICAgICAgICAgICAgdGltZXpvbmU6IHdlYXRoZXIudGltZXpvbmUsXG4gICAgICAgICAgICB0aW1lOiB3ZWF0aGVyLmR0ICsgd2VhdGhlci50aW1lem9uZSxcbiAgICAgICAgICAgIHN1bnJpc2U6IHdlYXRoZXIuc3lzLnN1bnJpc2UgKyB3ZWF0aGVyLnRpbWV6b25lLFxuICAgICAgICAgICAgc3Vuc2V0OiB3ZWF0aGVyLnN5cy5zdW5zZXQgKyB3ZWF0aGVyLnRpbWV6b25lLFxuICAgICAgICAgICAgbWFpbjogd2VhdGhlci53ZWF0aGVyWzBdLm1haW4sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogd2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGVtcDogTWF0aC5yb3VuZCh3ZWF0aGVyLm1haW4udGVtcCksXG4gICAgICAgICAgICBmZWVsc19saWtlOiBNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi5mZWVsc19saWtlKSxcbiAgICAgICAgICAgIGh1bWlkaXR5OiB3ZWF0aGVyLm1haW4uaHVtaWRpdHksXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB3ZWF0aGVyLnZpc2liaWxpdHksXG4gICAgICAgICAgICBzcGVlZDogTWF0aC5yb3VuZCh3ZWF0aGVyLndpbmQuc3BlZWQgKiAxMCkgLyAxMCxcbiAgICAgICAgICAgIGNsb3Vkczogd2VhdGhlci5jbG91ZHMuYWxsLFxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgY29kOiB3ZWF0aGVyLmNvZCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHdlYXRoZXIubWVzc2FnZSxcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhvYmoubWVzc2FnZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIldob29wcyFcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgZ2V0V2VhdGhlciwgZ2V0T2JqZWN0IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciwgZ2V0T2JqZWN0IH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IGRpc3BsYXlFcnJvciwgZGlzcGxheVdlYXRoZXIsIGNvbnZlcnRUZW1wLCBkZWxldGVUZW1wLCB0b2dnbGUsIG1lZGlhUXVlcnkgfSBmcm9tIFwiLi9kb21cIjtcblxuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbmNvbnN0IGZpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbmRcIik7XG5cbmZpbmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSk7XG4gICAgZ2V0V2VhdGhlcihpbnB1dC52YWx1ZSkudGhlbihnZXRPYmplY3QpLnRoZW4oZGlzcGxheVdlYXRoZXIpLmNhdGNoKGRpc3BsYXlFcnJvcik7XG59KTtcblxuXG50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnZlcnRUZW1wKTtcblxuXG5kZWxldGVUZW1wKCk7XG5tZWRpYVF1ZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRlbGV0ZVRlbXApO1xuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=