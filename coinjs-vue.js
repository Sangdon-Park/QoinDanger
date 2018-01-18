(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("coinjs"));
	else if(typeof define === 'function' && define.amd)
		define(["vue", "coinjs"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("vue"), require("coinjs")) : factory(root["Vue"], root["coinjs"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_coinjs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_coinjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_coinjs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const availableMarkets = Object.keys(__WEBPACK_IMPORTED_MODULE_0_coinjs___default.a);
const currencyIcon = {
  'BTC': 'mdi-currency-btc',
  'BCC': 'mdi-currency-btc',
  'BCH': 'mdi-currency-btc',
  'BCG': 'mdi-currency-btc',
  'ETH': 'mdi-currency-eth',
  'ETC': 'mdi-currency-eth'
};
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    title: {
      type: String,
      default: "QoinDanger"
    }
  },

  data() {
    return {
      isConfigShown: true,
      availableMarkets,
      markets: [].concat(availableMarkets),
      currentCoin: '',
      coins: [],
      information: (() => {
        const ret = {};

        for (let m of availableMarkets) ret[m] = {};

        return ret;
      })(),
      referenceMarket: ''
    };
  },

  watch: {
    markets(m) {
      document.cookie = "markets=" + escape(JSON.stringify(m));
    },

    coins(c) {
      document.cookie = "coins=" + escape(JSON.stringify(c));
    }

  },
  computed: {
    coinColumns() {
      let ret = [];

      for (let coin of this.coins) {
        ret.push({
          coin,
          type: 'ask'
        });
        ret.push({
          coin,
          type: 'bid'
        });
      }

      return ret;
    }

  },

  created() {
    this.$coinjs = {};
    this.$watch = {};

    for (let c in __WEBPACK_IMPORTED_MODULE_0_coinjs___default.a) {
      this.$coinjs[c] = new __WEBPACK_IMPORTED_MODULE_0_coinjs___default.a[c]();
    }
  },

  mounted() {
    let cookies = {};

    for (let pair of document.cookie.split('; ')) {
      try {
        let [a, b] = pair.split('=');
        cookies[a] = JSON.parse(unescape(b));
      } catch (err) {}
    }

    if (cookies.markets !== undefined) this.markets = cookies.markets;

    if (cookies.coins !== undefined) {
      for (let coin of cookies.coins) this.addCoin(coin);
    }
  },

  beforeDestroy() {
    for (let c in this.$coinjs) {
      this.$coinjs[c].close();
    }
  },

  methods: {
    toggleMarket(m) {
      const idx = this.markets.indexOf(m);
      if (idx === -1) this.markets.push(m);else this.markets.splice(idx, 1);
    },

    addCoin(c) {
      c = c.toUpperCase();
      const idx = this.coins.indexOf(c);

      if (idx === -1) {
        if (!this.$watch[c]) {
          this.$watch[c] = true;

          for (let m in this.$coinjs) {
            this.$set(this.information[m], c, {
              ask: 0,
              bid: 0
            });
            this.$coinjs[m].subscribe(c);
            this.$coinjs[m].on(c.toLowerCase(), e => {
              this.information[m][c].ask = e.ask;
              this.information[m][c].bid = e.bid;
            });
          }
        }

        this.coins.push(c);
      }

      this.currentCoin = '';
    },

    removeCoin(c) {
      const idx = this.coins.indexOf(c);
      if (idx !== -1) this.coins.splice(idx, 1);
      this.currentCoin = c;
    },

    currencyIcon(c) {
      return currencyIcon[c.toUpperCase()] || 'mdi-coins';
    },

    relativeInformation(market, coin, tp) {
      return this.referenceMarket ? this.information[market][coin][tp] / this.information[this.referenceMarket][coin][tp] : 1;
    },

    currencyColor(i) {
      return i == 0 ? 'has-text-warning' : i > 0 ? 'has-text-success' : 'has-text-danger';
    }

  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);


var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0__app_vue__["a" /* default */]);
app.$mount('#app');

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef48958_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(9);
var disposed = false;

function injectStyle(ssrContext) {
  if (disposed) return;

  __webpack_require__(3);
}

var normalizeComponent = __webpack_require__(8);
/* script */




/* template */


/* template functional */

var __vue_template_functional__ = false;
/* styles */

var __vue_styles__ = injectStyle;
/* scopeId */

var __vue_scopeId__ = null;
/* moduleIdentifier (server only) */

var __vue_module_identifier__ = null;
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef48958_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
Component.options.__file = "src/app.vue";
/* hot reload */

if (false) {
  (function () {
    var hotAPI = require("vue-hot-reload-api");

    hotAPI.install(require("vue"), false);
    if (!hotAPI.compatible) return;
    module.hot.accept();

    if (!module.hot.data) {
      hotAPI.createRecord("data-v-5ef48958", Component.options);
    } else {
      hotAPI.reload("data-v-5ef48958", Component.options);
    }

    module.hot.dispose(function (data) {
      disposed = true;
    });
  })();
}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("0148cbcd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ef48958\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ef48958\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\nsection:last-child { height: 100vh;\n}\n", "", {"version":3,"sources":["/Users/gwangyi/workspace/coinjs-vue/src/src/app.vue"],"names":[],"mappings":";AA6RA,qBAAA,cAAA;CAAA","file":"app.vue","sourcesContent":["<template>\n  <div>\n      <nav class=\"navbar is-fixed-top is-primary\">\n        <div class=\"container\">\n          <div class=\"navbar-brand\">\n            <a class=\"navbar-item\">\n              {{ title }}\n            </a>\n            <span class=\"navbar-burger burger\">\n              <span></span>\n              <span></span>\n              <span></span>\n            </span>\n          </div>\n          <div class=\"navbar-menu\">\n            <div class=\"navbar-end\">\n              <span class=\"navbar-item\">\n                <a class=\"button is-primary is-inverted\">\n                  <span class=\"icon\">\n                    <i class=\"mdi mdi-github-circle\"></i>\n                  </span>\n                  <span>Github</span>\n                </a>\n              </span>\n            </div>\n          </div>\n        </div>\n      </nav>\n    <section class=\"hero is-fullheight is-primary\">\n      <div class=\"hero-body\">\n        <div class=\"container has-text-centered\">\n          <h1 class=\"title\">\n            {{ title }}\n          </h1>\n          <h2 class=\"subtitle\">\n            Realtime Coin Monitoring System\n          </h2>\n          <a href=\"#main\" class=\"button is-info is-large\">\n            Start\n          </a>\n        </div>\n      </div>\n    </section>\n    <section class=\"section\" id=\"main\">\n      <div class=\"container\">\n        <div class=\"column\">\n          <div class=\"card\">\n            <header class=\"card-header\">\n              <p class=\"card-header-title\">\n              Config\n              </p>\n              <a href=\"#\" @click.prevent=\"isConfigShown = !isConfigShown\" class=\"card-header-icon\" aria-label=\"more options\">\n                <span class=\"icon\">\n                  <i class=\"mdi\" :class=\"{'mdi-chevron-down': !isConfigShown, 'mdi-chevron-up': isConfigShown}\" aria-hidden=\"true\"></i>\n                </span>\n              </a>\n            </header>\n            <div v-show=\"isConfigShown\" class=\"card-content\">\n              <div class=\"content\">\n                <div class=\"field is-horizontal\">\n                  <div class=\"field-label is-normal\">\n                    <label class=\"label\">Market</label>\n                  </div>\n                  <div class=\"field-body\">\n                    <div class=\"field is-grouped\">\n                      <p v-for=\"m in availableMarkets\" :key=\"m\" class=\"control\">\n                        <a class=\"button is-link\" :class=\"{'is-outlined': markets.indexOf(m) === -1}\" @click.prevent=\"toggleMarket(m)\">\n                          {{ m }}\n                        </a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"field is-horizontal\">\n                  <div class=\"field-label is-normal\">\n                    <label class=\"label\">Currency</label>\n                  </div>\n                  <div class=\"field-body\">\n                    <div class=\"field is-grouped is-grouped-multiline\">\n                      <p class=\"control has-icons-left\">\n                        <input class=\"input\" type=\"text\" placeholder=\"Currency\" @keyup.space=\"addCoin(currentCoin.trim())\" v-model=\"currentCoin\">\n                        <span class=\"icon is-medium is-left\">\n                          <i class=\"mdi mdi-coins\"></i>\n                        </span>\n                      </p>\n                      <div v-for=\"coin in coins\" :key=\"coin + '-tag'\" class=\"control\">\n                        <div class=\"tags has-addons\">\n                          <span class=\"tag is-success is-medium\">\n                            <span class=\"icon is-medium\">\n                              <i class=\"mdi\" :class=\"currencyIcon(coin)\"></i>\n                            </span>\n                            {{ coin }}\n                          </span>\n                          <a class=\"tag is-medium is-delete\" @click=\"removeCoin(coin)\"></a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"column\">\n          <table v-if=\"coins && coins.length > 0 && markets && markets.length > 0\" class=\"table is-fullwidth is-hoverable is-stripped\">\n            <thead>\n              <tr>\n                <th class=\"is-narrow\" rowspan=\"2\">Market</th>\n                <th v-for=\"coin in coins\" :key=\"coin + '-header'\" colspan=\"2\" class=\"has-text-centered\">\n                  <span class=\"icon is-medium\">\n                    <i class=\"mdi\" :class=\"currencyIcon(coin)\"></i>\n                  </span>\n                  {{ coin }}\n                </th>\n              </tr>\n              <tr>\n                <th v-for=\"col in coinColumns\" :key=\"col.coin + '-' + col.type + '-header'\" class=\"has-text-centered\">{{ col.type }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr v-for=\"market in markets\" :key=\"market\">\n                <th @click=\"referenceMarket = market\" :class=\"{'is-primary': referenceMarket === market}\">{{market}}</th>\n                <td v-for=\"col in coinColumns\" :key=\"col.coin + '-' + col.type\">\n                  <span class=\"icon is-left\">\n                    <i class=\"mdi mdi-currency-krw\"></i>\n                  </span>\n                  <span>{{ information[market][col.coin][col.type].toLocaleString() }}</span>\n                  <span v-if=\"referenceMarket && referenceMarket != market\"\n                        :class=\"currencyColor(relativeInformation(market, col.coin, col.type) - 1)\">\n                    ({{(relativeInformation(market, col.coin, col.type) * 100).toFixed(2) }}%)\n                  </span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <template v-else-if=\"markets && markets.length > 0\">\n            <p class=\"title is-5\">No coins are selected!</p>\n            <p class=\"title is-6\">Please add coins you want!</p>\n          </template>\n          <template v-else>\n            <p class=\"title is-5\">No markets are selected!</p>\n            <p class=\"title is-6\">Please add markets you want!</p>\n          </template>\n        </div>\n      </div>\n    </section>\n  </div>\n</template>\n\n<script>\nimport coinjs from 'coinjs'\n\nconst availableMarkets = Object.keys(coinjs)\n\nconst currencyIcon = {\n  'BTC': 'mdi-currency-btc',\n  'BCC': 'mdi-currency-btc',\n  'BCH': 'mdi-currency-btc',\n  'BCG': 'mdi-currency-btc',\n  'ETH': 'mdi-currency-eth',\n  'ETC': 'mdi-currency-eth',\n}\n\nexport default {\n  props: {\n    title: {\n      type: String,\n      default: \"QoinDanger\"\n    }\n  },\n\n  data () {\n    return {\n      isConfigShown: true,\n      availableMarkets,\n      markets: [].concat(availableMarkets),\n      currentCoin: '',\n      coins: [],\n      information: (() => {\n        const ret = {}\n        for(let m of availableMarkets) ret[m] = {}\n        return ret\n      })(),\n      referenceMarket: '',\n    }\n  },\n\n  watch: {\n    markets (m) {\n      document.cookie = \"markets=\" + escape(JSON.stringify(m))\n    },\n\n    coins (c) {\n      document.cookie = \"coins=\" + escape(JSON.stringify(c))\n    }\n  },\n\n  computed: {\n    coinColumns () {\n      let ret = []\n      for(let coin of this.coins) {\n        ret.push({coin, type: 'ask'})\n        ret.push({coin, type: 'bid'})\n      }\n      return ret\n    },\n  },\n\n  created () {\n    this.$coinjs = {}\n    this.$watch = {}\n    for(let c in coinjs) {\n      this.$coinjs[c] = new coinjs[c]()\n    }\n  },\n\n  mounted () {\n    let cookies = {}\n    for(let pair of document.cookie.split('; ')) {\n      try {\n        let [a, b] = pair.split('=')\n        cookies[a] = JSON.parse(unescape(b))\n      } catch (err) {\n      }\n    }\n\n    if(cookies.markets !== undefined)\n      this.markets = cookies.markets\n    if(cookies.coins !== undefined) {\n      for(let coin of cookies.coins)\n        this.addCoin(coin)\n    }\n  },\n\n  beforeDestroy () {\n    for(let c in this.$coinjs) {\n      this.$coinjs[c].close()\n    }\n  },\n\n  methods: {\n    toggleMarket (m) {\n      const idx = this.markets.indexOf(m)\n      if(idx === -1) this.markets.push(m)\n      else this.markets.splice(idx, 1)\n    },\n    addCoin (c) {\n      c = c.toUpperCase()\n      const idx = this.coins.indexOf(c)\n      if(idx === -1) {\n        if(!this.$watch[c]) {\n          this.$watch[c] = true\n          for(let m in this.$coinjs) {\n            this.$set(this.information[m], c, {ask: 0, bid: 0})\n            this.$coinjs[m].subscribe(c)\n            this.$coinjs[m].on(c.toLowerCase(), e => {\n              this.information[m][c].ask = e.ask\n              this.information[m][c].bid = e.bid\n            })\n          }\n        }\n        this.coins.push(c)\n      }\n      this.currentCoin = ''\n    },\n    removeCoin (c) {\n      const idx = this.coins.indexOf(c)\n      if(idx !== -1) this.coins.splice(idx, 1)\n      this.currentCoin = c\n    },\n    currencyIcon (c) {\n      return currencyIcon[c.toUpperCase()] || 'mdi-coins'\n    },\n    relativeInformation (market, coin, tp) {\n      return this.referenceMarket ? this.information[market][coin][tp] / this.information[this.referenceMarket][coin][tp] : 1\n    },\n    currencyColor (i) {\n      return i == 0 ? 'has-text-warning' : (i > 0 ? 'has-text-success' : 'has-text-danger')\n    }\n  }\n}\n</script>\n\n<style>\nsection:last-child { height: 100vh; }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("nav", { staticClass: "navbar is-fixed-top is-primary" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "navbar-brand" }, [
          _c("a", { staticClass: "navbar-item" }, [
            _vm._v("\n            " + _vm._s(_vm.title) + "\n          ")
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _vm._m(1)
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "hero is-fullheight is-primary" }, [
      _c("div", { staticClass: "hero-body" }, [
        _c("div", { staticClass: "container has-text-centered" }, [
          _c("h1", { staticClass: "title" }, [
            _vm._v("\n          " + _vm._s(_vm.title) + "\n        ")
          ]),
          _vm._v(" "),
          _c("h2", { staticClass: "subtitle" }, [
            _vm._v("\n          Realtime Coin Monitoring System\n        ")
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "button is-info is-large",
              attrs: { href: "#main" }
            },
            [_vm._v("\n          Start\n        ")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "section", attrs: { id: "main" } }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "card" }, [
            _c("header", { staticClass: "card-header" }, [
              _c("p", { staticClass: "card-header-title" }, [
                _vm._v("\n            Config\n            ")
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "card-header-icon",
                  attrs: { href: "#", "aria-label": "more options" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.isConfigShown = !_vm.isConfigShown
                    }
                  }
                },
                [
                  _c("span", { staticClass: "icon" }, [
                    _c("i", {
                      staticClass: "mdi",
                      class: {
                        "mdi-chevron-down": !_vm.isConfigShown,
                        "mdi-chevron-up": _vm.isConfigShown
                      },
                      attrs: { "aria-hidden": "true" }
                    })
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isConfigShown,
                    expression: "isConfigShown"
                  }
                ],
                staticClass: "card-content"
              },
              [
                _c("div", { staticClass: "content" }, [
                  _c("div", { staticClass: "field is-horizontal" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "field-body" }, [
                      _c(
                        "div",
                        { staticClass: "field is-grouped" },
                        _vm._l(_vm.availableMarkets, function(m) {
                          return _c("p", { key: m, staticClass: "control" }, [
                            _c(
                              "a",
                              {
                                staticClass: "button is-link",
                                class: {
                                  "is-outlined": _vm.markets.indexOf(m) === -1
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.toggleMarket(m)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(m) +
                                    "\n                      "
                                )
                              ]
                            )
                          ])
                        })
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "field is-horizontal" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "field-body" }, [
                      _c(
                        "div",
                        {
                          staticClass: "field is-grouped is-grouped-multiline"
                        },
                        [
                          _c("p", { staticClass: "control has-icons-left" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.currentCoin,
                                  expression: "currentCoin"
                                }
                              ],
                              staticClass: "input",
                              attrs: { type: "text", placeholder: "Currency" },
                              domProps: { value: _vm.currentCoin },
                              on: {
                                keyup: function($event) {
                                  if (
                                    !("button" in $event) &&
                                    _vm._k(
                                      $event.keyCode,
                                      "space",
                                      32,
                                      $event.key
                                    )
                                  ) {
                                    return null
                                  }
                                  _vm.addCoin(_vm.currentCoin.trim())
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.currentCoin = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(4)
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.coins, function(coin) {
                            return _c(
                              "div",
                              { key: coin + "-tag", staticClass: "control" },
                              [
                                _c("div", { staticClass: "tags has-addons" }, [
                                  _c(
                                    "span",
                                    { staticClass: "tag is-success is-medium" },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "icon is-medium" },
                                        [
                                          _c("i", {
                                            staticClass: "mdi",
                                            class: _vm.currencyIcon(coin)
                                          })
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                          " +
                                          _vm._s(coin) +
                                          "\n                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("a", {
                                    staticClass: "tag is-medium is-delete",
                                    on: {
                                      click: function($event) {
                                        _vm.removeCoin(coin)
                                      }
                                    }
                                  })
                                ])
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "column" },
          [
            _vm.coins &&
            _vm.coins.length > 0 &&
            _vm.markets &&
            _vm.markets.length > 0
              ? _c(
                  "table",
                  {
                    staticClass: "table is-fullwidth is-hoverable is-stripped"
                  },
                  [
                    _c("thead", [
                      _c(
                        "tr",
                        [
                          _c(
                            "th",
                            {
                              staticClass: "is-narrow",
                              attrs: { rowspan: "2" }
                            },
                            [_vm._v("Market")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.coins, function(coin) {
                            return _c(
                              "th",
                              {
                                key: coin + "-header",
                                staticClass: "has-text-centered",
                                attrs: { colspan: "2" }
                              },
                              [
                                _c("span", { staticClass: "icon is-medium" }, [
                                  _c("i", {
                                    staticClass: "mdi",
                                    class: _vm.currencyIcon(coin)
                                  })
                                ]),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(coin) +
                                    "\n              "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "tr",
                        _vm._l(_vm.coinColumns, function(col) {
                          return _c(
                            "th",
                            {
                              key: col.coin + "-" + col.type + "-header",
                              staticClass: "has-text-centered"
                            },
                            [_vm._v(_vm._s(col.type))]
                          )
                        })
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.markets, function(market) {
                        return _c(
                          "tr",
                          { key: market },
                          [
                            _c(
                              "th",
                              {
                                class: {
                                  "is-primary": _vm.referenceMarket === market
                                },
                                on: {
                                  click: function($event) {
                                    _vm.referenceMarket = market
                                  }
                                }
                              },
                              [_vm._v(_vm._s(market))]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.coinColumns, function(col) {
                              return _c(
                                "td",
                                { key: col.coin + "-" + col.type },
                                [
                                  _vm._m(5, true),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.information[market][col.coin][
                                          col.type
                                        ].toLocaleString()
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm.referenceMarket &&
                                  _vm.referenceMarket != market
                                    ? _c(
                                        "span",
                                        {
                                          class: _vm.currencyColor(
                                            _vm.relativeInformation(
                                              market,
                                              col.coin,
                                              col.type
                                            ) - 1
                                          )
                                        },
                                        [
                                          _vm._v(
                                            "\n                  (" +
                                              _vm._s(
                                                (
                                                  _vm.relativeInformation(
                                                    market,
                                                    col.coin,
                                                    col.type
                                                  ) * 100
                                                ).toFixed(2)
                                              ) +
                                              "%)\n                "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            })
                          ],
                          2
                        )
                      })
                    )
                  ]
                )
              : _vm.markets && _vm.markets.length > 0
                ? [
                    _c("p", { staticClass: "title is-5" }, [
                      _vm._v("No coins are selected!")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "title is-6" }, [
                      _vm._v("Please add coins you want!")
                    ])
                  ]
                : [
                    _c("p", { staticClass: "title is-5" }, [
                      _vm._v("No markets are selected!")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "title is-6" }, [
                      _vm._v("Please add markets you want!")
                    ])
                  ]
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "navbar-burger burger" }, [
      _c("span"),
      _vm._v(" "),
      _c("span"),
      _vm._v(" "),
      _c("span")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-menu" }, [
      _c("div", { staticClass: "navbar-end" }, [
        _c("span", { staticClass: "navbar-item" }, [
          _c("a", { staticClass: "button is-primary is-inverted" }, [
            _c("span", { staticClass: "icon" }, [
              _c("i", { staticClass: "mdi mdi-github-circle" })
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Github")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field-label is-normal" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Market")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field-label is-normal" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Currency")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-medium is-left" }, [
      _c("i", { staticClass: "mdi mdi-coins" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-left" }, [
      _c("i", { staticClass: "mdi mdi-currency-krw" })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ef48958", esExports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwYTAwZmY4ZjA3NjlmZjVmYzQ5ZiIsIndlYnBhY2s6Ly8vc3JjL2FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlPzFiNTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC52dWU/OTlmNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnZ1ZT8yOWJjIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwidnVlXCIsXCJjb21tb25qczJcIjpcInZ1ZVwiLFwiYW1kXCI6XCJ2dWVcIixcInJvb3RcIjpcIlZ1ZVwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2luanNcIiJdLCJuYW1lcyI6WyJhcHAiLCIkbW91bnQiLCJkaXNwb3NlZCIsImluamVjdFN0eWxlIiwic3NyQ29udGV4dCIsInJlcXVpcmUiLCJub3JtYWxpemVDb21wb25lbnQiLCJfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18iLCJfX3Z1ZV9zdHlsZXNfXyIsIl9fdnVlX3Njb3BlSWRfXyIsIl9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18iLCJDb21wb25lbnQiLCJvcHRpb25zIiwiX19maWxlIiwiaG90QVBJIiwiaW5zdGFsbCIsImNvbXBhdGlibGUiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJkYXRhIiwiY3JlYXRlUmVjb3JkIiwicmVsb2FkIiwiZGlzcG9zZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMEZBO0FBRUE7QUFFQTtTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtBQU5BO0FBUUE7OztZQUlBO2VBSUE7QUFMQTtBQURBOztTQU9BOztxQkFFQTtBQUNBO3lCQUNBO21CQUNBO2FBQ0E7MEJBQ0E7b0JBQ0E7O2lEQUNBOztlQUNBO0FBQ0E7dUJBRUE7QUFaQTtBQWNBOzs7ZUFFQTsyREFDQTtBQUVBOzthQUNBO3lEQUNBO0FBR0E7O0FBVEE7O2tCQVdBO2dCQUNBOzttQ0FDQTs7O2dCQUNBOzs7O2dCQUNBOztBQUNB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QSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDL2RBLGdEOzs7Ozs7QUNBQSxnRCIsImZpbGUiOiJjb2luanMtdnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidnVlXCIpLCByZXF1aXJlKFwiY29pbmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInZ1ZVwiLCBcImNvaW5qc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwidnVlXCIpLCByZXF1aXJlKFwiY29pbmpzXCIpKSA6IGZhY3Rvcnkocm9vdFtcIlZ1ZVwiXSwgcm9vdFtcImNvaW5qc1wiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGEwMGZmOGYwNzY5ZmY1ZmM0OWYiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIGlzLWZpeGVkLXRvcCBpcy1wcmltYXJ5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci1idXJnZXIgYnVyZ2VyXCI+XG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1tZW51XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWVuZFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1pbnZlcnRlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpIG1kaS1naXRodWItY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJoZXJvIGlzLWZ1bGxoZWlnaHQgaXMtcHJpbWFyeVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlcm8tYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgUmVhbHRpbWUgQ29pbiBNb25pdG9yaW5nIFN5c3RlbVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNtYWluXCIgY2xhc3M9XCJidXR0b24gaXMtaW5mbyBpcy1sYXJnZVwiPlxuICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiIGlkPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgIENvbmZpZ1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJpc0NvbmZpZ1Nob3duID0gIWlzQ29uZmlnU2hvd25cIiBjbGFzcz1cImNhcmQtaGVhZGVyLWljb25cIiBhcmlhLWxhYmVsPVwibW9yZSBvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1kaVwiIDpjbGFzcz1cInsnbWRpLWNoZXZyb24tZG93bic6ICFpc0NvbmZpZ1Nob3duLCAnbWRpLWNoZXZyb24tdXAnOiBpc0NvbmZpZ1Nob3dufVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiB2LXNob3c9XCJpc0NvbmZpZ1Nob3duXCIgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPk1hcmtldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1mb3I9XCJtIGluIGF2YWlsYWJsZU1hcmtldHNcIiA6a2V5PVwibVwiIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtbGlua1wiIDpjbGFzcz1cInsnaXMtb3V0bGluZWQnOiBtYXJrZXRzLmluZGV4T2YobSkgPT09IC0xfVwiIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlTWFya2V0KG0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5DdXJyZW5jeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ncm91cGVkIGlzLWdyb3VwZWQtbXVsdGlsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDdXJyZW5jeVwiIEBrZXl1cC5zcGFjZT1cImFkZENvaW4oY3VycmVudENvaW4udHJpbSgpKVwiIHYtbW9kZWw9XCJjdXJyZW50Q29pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLW1lZGl1bSBpcy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpIG1kaS1jb2luc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImNvaW4gaW4gY29pbnNcIiA6a2V5PVwiY29pbiArICctdGFnJ1wiIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3MgaGFzLWFkZG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyBpcy1zdWNjZXNzIGlzLW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpXCIgOmNsYXNzPVwiY3VycmVuY3lJY29uKGNvaW4pXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb2luIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0YWcgaXMtbWVkaXVtIGlzLWRlbGV0ZVwiIEBjbGljaz1cInJlbW92ZUNvaW4oY29pbilcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgIDx0YWJsZSB2LWlmPVwiY29pbnMgJiYgY29pbnMubGVuZ3RoID4gMCAmJiBtYXJrZXRzICYmIG1hcmtldHMubGVuZ3RoID4gMFwiIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWhvdmVyYWJsZSBpcy1zdHJpcHBlZFwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiaXMtbmFycm93XCIgcm93c3Bhbj1cIjJcIj5NYXJrZXQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCB2LWZvcj1cImNvaW4gaW4gY29pbnNcIiA6a2V5PVwiY29pbiArICctaGVhZGVyJ1wiIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1kaVwiIDpjbGFzcz1cImN1cnJlbmN5SWNvbihjb2luKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHt7IGNvaW4gfX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHYtZm9yPVwiY29sIGluIGNvaW5Db2x1bW5zXCIgOmtleT1cImNvbC5jb2luICsgJy0nICsgY29sLnR5cGUgKyAnLWhlYWRlcidcIiBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkXCI+e3sgY29sLnR5cGUgfX08L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVwibWFya2V0IGluIG1hcmtldHNcIiA6a2V5PVwibWFya2V0XCI+XG4gICAgICAgICAgICAgICAgPHRoIEBjbGljaz1cInJlZmVyZW5jZU1hcmtldCA9IG1hcmtldFwiIDpjbGFzcz1cInsnaXMtcHJpbWFyeSc6IHJlZmVyZW5jZU1hcmtldCA9PT0gbWFya2V0fVwiPnt7bWFya2V0fX08L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cImNvbCBpbiBjb2luQ29sdW1uc1wiIDprZXk9XCJjb2wuY29pbiArICctJyArIGNvbC50eXBlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1kaSBtZGktY3VycmVuY3kta3J3XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgaW5mb3JtYXRpb25bbWFya2V0XVtjb2wuY29pbl1bY29sLnR5cGVdLnRvTG9jYWxlU3RyaW5nKCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwicmVmZXJlbmNlTWFya2V0ICYmIHJlZmVyZW5jZU1hcmtldCAhPSBtYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiY3VycmVuY3lDb2xvcihyZWxhdGl2ZUluZm9ybWF0aW9uKG1hcmtldCwgY29sLmNvaW4sIGNvbC50eXBlKSAtIDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICh7eyhyZWxhdGl2ZUluZm9ybWF0aW9uKG1hcmtldCwgY29sLmNvaW4sIGNvbC50eXBlKSAqIDEwMCkudG9GaXhlZCgyKSB9fSUpXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwibWFya2V0cyAmJiBtYXJrZXRzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUgaXMtNVwiPk5vIGNvaW5zIGFyZSBzZWxlY3RlZCE8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTZcIj5QbGVhc2UgYWRkIGNvaW5zIHlvdSB3YW50ITwvcD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTVcIj5ObyBtYXJrZXRzIGFyZSBzZWxlY3RlZCE8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTZcIj5QbGVhc2UgYWRkIG1hcmtldHMgeW91IHdhbnQhPC9wPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgY29pbmpzIGZyb20gJ2NvaW5qcydcblxuY29uc3QgYXZhaWxhYmxlTWFya2V0cyA9IE9iamVjdC5rZXlzKGNvaW5qcylcblxuY29uc3QgY3VycmVuY3lJY29uID0ge1xuICAnQlRDJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnQkNDJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnQkNIJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnQkNHJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnRVRIJzogJ21kaS1jdXJyZW5jeS1ldGgnLFxuICAnRVRDJzogJ21kaS1jdXJyZW5jeS1ldGgnLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiUW9pbkRhbmdlclwiXG4gICAgfVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0NvbmZpZ1Nob3duOiB0cnVlLFxuICAgICAgYXZhaWxhYmxlTWFya2V0cyxcbiAgICAgIG1hcmtldHM6IFtdLmNvbmNhdChhdmFpbGFibGVNYXJrZXRzKSxcbiAgICAgIGN1cnJlbnRDb2luOiAnJyxcbiAgICAgIGNvaW5zOiBbXSxcbiAgICAgIGluZm9ybWF0aW9uOiAoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSB7fVxuICAgICAgICBmb3IobGV0IG0gb2YgYXZhaWxhYmxlTWFya2V0cykgcmV0W21dID0ge31cbiAgICAgICAgcmV0dXJuIHJldFxuICAgICAgfSkoKSxcbiAgICAgIHJlZmVyZW5jZU1hcmtldDogJycsXG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgbWFya2V0cyAobSkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJtYXJrZXRzPVwiICsgZXNjYXBlKEpTT04uc3RyaW5naWZ5KG0pKVxuICAgIH0sXG5cbiAgICBjb2lucyAoYykge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb2lucz1cIiArIGVzY2FwZShKU09OLnN0cmluZ2lmeShjKSlcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb2luQ29sdW1ucyAoKSB7XG4gICAgICBsZXQgcmV0ID0gW11cbiAgICAgIGZvcihsZXQgY29pbiBvZiB0aGlzLmNvaW5zKSB7XG4gICAgICAgIHJldC5wdXNoKHtjb2luLCB0eXBlOiAnYXNrJ30pXG4gICAgICAgIHJldC5wdXNoKHtjb2luLCB0eXBlOiAnYmlkJ30pXG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLiRjb2luanMgPSB7fVxuICAgIHRoaXMuJHdhdGNoID0ge31cbiAgICBmb3IobGV0IGMgaW4gY29pbmpzKSB7XG4gICAgICB0aGlzLiRjb2luanNbY10gPSBuZXcgY29pbmpzW2NdKClcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgbGV0IGNvb2tpZXMgPSB7fVxuICAgIGZvcihsZXQgcGFpciBvZiBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBbYSwgYl0gPSBwYWlyLnNwbGl0KCc9JylcbiAgICAgICAgY29va2llc1thXSA9IEpTT04ucGFyc2UodW5lc2NhcGUoYikpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihjb29raWVzLm1hcmtldHMgIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMubWFya2V0cyA9IGNvb2tpZXMubWFya2V0c1xuICAgIGlmKGNvb2tpZXMuY29pbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yKGxldCBjb2luIG9mIGNvb2tpZXMuY29pbnMpXG4gICAgICAgIHRoaXMuYWRkQ29pbihjb2luKVxuICAgIH1cbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICBmb3IobGV0IGMgaW4gdGhpcy4kY29pbmpzKSB7XG4gICAgICB0aGlzLiRjb2luanNbY10uY2xvc2UoKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlTWFya2V0IChtKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLm1hcmtldHMuaW5kZXhPZihtKVxuICAgICAgaWYoaWR4ID09PSAtMSkgdGhpcy5tYXJrZXRzLnB1c2gobSlcbiAgICAgIGVsc2UgdGhpcy5tYXJrZXRzLnNwbGljZShpZHgsIDEpXG4gICAgfSxcbiAgICBhZGRDb2luIChjKSB7XG4gICAgICBjID0gYy50b1VwcGVyQ2FzZSgpXG4gICAgICBjb25zdCBpZHggPSB0aGlzLmNvaW5zLmluZGV4T2YoYylcbiAgICAgIGlmKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgaWYoIXRoaXMuJHdhdGNoW2NdKSB7XG4gICAgICAgICAgdGhpcy4kd2F0Y2hbY10gPSB0cnVlXG4gICAgICAgICAgZm9yKGxldCBtIGluIHRoaXMuJGNvaW5qcykge1xuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuaW5mb3JtYXRpb25bbV0sIGMsIHthc2s6IDAsIGJpZDogMH0pXG4gICAgICAgICAgICB0aGlzLiRjb2luanNbbV0uc3Vic2NyaWJlKGMpXG4gICAgICAgICAgICB0aGlzLiRjb2luanNbbV0ub24oYy50b0xvd2VyQ2FzZSgpLCBlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvblttXVtjXS5hc2sgPSBlLmFza1xuICAgICAgICAgICAgICB0aGlzLmluZm9ybWF0aW9uW21dW2NdLmJpZCA9IGUuYmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvaW5zLnB1c2goYylcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudENvaW4gPSAnJ1xuICAgIH0sXG4gICAgcmVtb3ZlQ29pbiAoYykge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5jb2lucy5pbmRleE9mKGMpXG4gICAgICBpZihpZHggIT09IC0xKSB0aGlzLmNvaW5zLnNwbGljZShpZHgsIDEpXG4gICAgICB0aGlzLmN1cnJlbnRDb2luID0gY1xuICAgIH0sXG4gICAgY3VycmVuY3lJY29uIChjKSB7XG4gICAgICByZXR1cm4gY3VycmVuY3lJY29uW2MudG9VcHBlckNhc2UoKV0gfHwgJ21kaS1jb2lucydcbiAgICB9LFxuICAgIHJlbGF0aXZlSW5mb3JtYXRpb24gKG1hcmtldCwgY29pbiwgdHApIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZU1hcmtldCA/IHRoaXMuaW5mb3JtYXRpb25bbWFya2V0XVtjb2luXVt0cF0gLyB0aGlzLmluZm9ybWF0aW9uW3RoaXMucmVmZXJlbmNlTWFya2V0XVtjb2luXVt0cF0gOiAxXG4gICAgfSxcbiAgICBjdXJyZW5jeUNvbG9yIChpKSB7XG4gICAgICByZXR1cm4gaSA9PSAwID8gJ2hhcy10ZXh0LXdhcm5pbmcnIDogKGkgPiAwID8gJ2hhcy10ZXh0LXN1Y2Nlc3MnIDogJ2hhcy10ZXh0LWRhbmdlcicpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuc2VjdGlvbjpsYXN0LWNoaWxkIHsgaGVpZ2h0OiAxMDB2aDsgfVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwLnZ1ZSIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAudnVlJ1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbnZhciBhcHAgPSBuZXcgVnVlKEFwcClcbmFwcC4kbW91bnQoJyNhcHAnKVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjQ4OTU4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHAudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXBwLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXBwLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWVmNDg5NThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHAudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9hcHAudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlZjQ4OTU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWVmNDg5NThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC52dWUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWVmNDg5NThcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2FwcC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjAxNDhjYmNkXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjQ4OTU4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHAudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjQ4OTU4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHAudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlZjQ4OTU4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbnNlY3Rpb246bGFzdC1jaGlsZCB7IGhlaWdodDogMTAwdmg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZ3dhbmd5aS93b3Jrc3BhY2UvY29pbmpzLXZ1ZS9zcmMvc3JjL2FwcC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZSQSxxQkFBQSxjQUFBO0NBQUFcIixcImZpbGVcIjpcImFwcC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdj5cXG4gICAgICA8bmF2IGNsYXNzPVxcXCJuYXZiYXIgaXMtZml4ZWQtdG9wIGlzLXByaW1hcnlcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAge3sgdGl0bGUgfX1cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5hdmJhci1idXJnZXIgYnVyZ2VyXFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cXG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cXG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItbWVudVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWVuZFxcXCI+XFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLXByaW1hcnkgaXMtaW52ZXJ0ZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtZGkgbWRpLWdpdGh1Yi1jaXJjbGVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9uYXY+XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJoZXJvIGlzLWZ1bGxoZWlnaHQgaXMtcHJpbWFyeVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVyby1ib2R5XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBoYXMtdGV4dC1jZW50ZXJlZFxcXCI+XFxuICAgICAgICAgIDxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPlxcbiAgICAgICAgICAgIHt7IHRpdGxlIH19XFxuICAgICAgICAgIDwvaDE+XFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwic3VidGl0bGVcXFwiPlxcbiAgICAgICAgICAgIFJlYWx0aW1lIENvaW4gTW9uaXRvcmluZyBTeXN0ZW1cXG4gICAgICAgICAgPC9oMj5cXG4gICAgICAgICAgPGEgaHJlZj1cXFwiI21haW5cXFwiIGNsYXNzPVxcXCJidXR0b24gaXMtaW5mbyBpcy1sYXJnZVxcXCI+XFxuICAgICAgICAgICAgU3RhcnRcXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNlY3Rpb25cXFwiIGlkPVxcXCJtYWluXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtaGVhZGVyLXRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgIENvbmZpZ1xcbiAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgQGNsaWNrLnByZXZlbnQ9XFxcImlzQ29uZmlnU2hvd24gPSAhaXNDb25maWdTaG93blxcXCIgY2xhc3M9XFxcImNhcmQtaGVhZGVyLWljb25cXFwiIGFyaWEtbGFiZWw9XFxcIm1vcmUgb3B0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWRpXFxcIiA6Y2xhc3M9XFxcInsnbWRpLWNoZXZyb24tZG93bic6ICFpc0NvbmZpZ1Nob3duLCAnbWRpLWNoZXZyb24tdXAnOiBpc0NvbmZpZ1Nob3dufVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvaGVhZGVyPlxcbiAgICAgICAgICAgIDxkaXYgdi1zaG93PVxcXCJpc0NvbmZpZ1Nob3duXFxcIiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZCBpcy1ob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCI+TWFya2V0PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkIGlzLWdyb3VwZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWZvcj1cXFwibSBpbiBhdmFpbGFibGVNYXJrZXRzXFxcIiA6a2V5PVxcXCJtXFxcIiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1saW5rXFxcIiA6Y2xhc3M9XFxcInsnaXMtb3V0bGluZWQnOiBtYXJrZXRzLmluZGV4T2YobSkgPT09IC0xfVxcXCIgQGNsaWNrLnByZXZlbnQ9XFxcInRvZ2dsZU1hcmtldChtKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBtIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkIGlzLWhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLWxhYmVsIGlzLW5vcm1hbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsXFxcIj5DdXJyZW5jeTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZCBpcy1ncm91cGVkIGlzLWdyb3VwZWQtbXVsdGlsaW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNvbnRyb2wgaGFzLWljb25zLWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJDdXJyZW5jeVxcXCIgQGtleXVwLnNwYWNlPVxcXCJhZGRDb2luKGN1cnJlbnRDb2luLnRyaW0oKSlcXFwiIHYtbW9kZWw9XFxcImN1cnJlbnRDb2luXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1tZWRpdW0gaXMtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWRpIG1kaS1jb2luc1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVxcXCJjb2luIGluIGNvaW5zXFxcIiA6a2V5PVxcXCJjb2luICsgJy10YWcnXFxcIiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFncyBoYXMtYWRkb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWcgaXMtc3VjY2VzcyBpcy1tZWRpdW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1tZWRpdW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtZGlcXFwiIDpjbGFzcz1cXFwiY3VycmVuY3lJY29uKGNvaW4pXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY29pbiB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInRhZyBpcy1tZWRpdW0gaXMtZGVsZXRlXFxcIiBAY2xpY2s9XFxcInJlbW92ZUNvaW4oY29pbilcXFwiPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uXFxcIj5cXG4gICAgICAgICAgPHRhYmxlIHYtaWY9XFxcImNvaW5zICYmIGNvaW5zLmxlbmd0aCA+IDAgJiYgbWFya2V0cyAmJiBtYXJrZXRzLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJ0YWJsZSBpcy1mdWxsd2lkdGggaXMtaG92ZXJhYmxlIGlzLXN0cmlwcGVkXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiaXMtbmFycm93XFxcIiByb3dzcGFuPVxcXCIyXFxcIj5NYXJrZXQ8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggdi1mb3I9XFxcImNvaW4gaW4gY29pbnNcXFwiIDprZXk9XFxcImNvaW4gKyAnLWhlYWRlcidcXFwiIGNvbHNwYW49XFxcIjJcXFwiIGNsYXNzPVxcXCJoYXMtdGV4dC1jZW50ZXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtbWVkaXVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtZGlcXFwiIDpjbGFzcz1cXFwiY3VycmVuY3lJY29uKGNvaW4pXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIHt7IGNvaW4gfX1cXG4gICAgICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCB2LWZvcj1cXFwiY29sIGluIGNvaW5Db2x1bW5zXFxcIiA6a2V5PVxcXCJjb2wuY29pbiArICctJyArIGNvbC50eXBlICsgJy1oZWFkZXInXFxcIiBjbGFzcz1cXFwiaGFzLXRleHQtY2VudGVyZWRcXFwiPnt7IGNvbC50eXBlIH19PC90aD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcIm1hcmtldCBpbiBtYXJrZXRzXFxcIiA6a2V5PVxcXCJtYXJrZXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGggQGNsaWNrPVxcXCJyZWZlcmVuY2VNYXJrZXQgPSBtYXJrZXRcXFwiIDpjbGFzcz1cXFwieydpcy1wcmltYXJ5JzogcmVmZXJlbmNlTWFya2V0ID09PSBtYXJrZXR9XFxcIj57e21hcmtldH19PC90aD5cXG4gICAgICAgICAgICAgICAgPHRkIHYtZm9yPVxcXCJjb2wgaW4gY29pbkNvbHVtbnNcXFwiIDprZXk9XFxcImNvbC5jb2luICsgJy0nICsgY29sLnR5cGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1kaSBtZGktY3VycmVuY3kta3J3XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGluZm9ybWF0aW9uW21hcmtldF1bY29sLmNvaW5dW2NvbC50eXBlXS50b0xvY2FsZVN0cmluZygpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcInJlZmVyZW5jZU1hcmtldCAmJiByZWZlcmVuY2VNYXJrZXQgIT0gbWFya2V0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiY3VycmVuY3lDb2xvcihyZWxhdGl2ZUluZm9ybWF0aW9uKG1hcmtldCwgY29sLmNvaW4sIGNvbC50eXBlKSAtIDEpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICh7eyhyZWxhdGl2ZUluZm9ybWF0aW9uKG1hcmtldCwgY29sLmNvaW4sIGNvbC50eXBlKSAqIDEwMCkudG9GaXhlZCgyKSB9fSUpXFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVxcXCJtYXJrZXRzICYmIG1hcmtldHMubGVuZ3RoID4gMFxcXCI+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRpdGxlIGlzLTVcXFwiPk5vIGNvaW5zIGFyZSBzZWxlY3RlZCE8L3A+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRpdGxlIGlzLTZcXFwiPlBsZWFzZSBhZGQgY29pbnMgeW91IHdhbnQhPC9wPlxcbiAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy01XFxcIj5ObyBtYXJrZXRzIGFyZSBzZWxlY3RlZCE8L3A+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRpdGxlIGlzLTZcXFwiPlBsZWFzZSBhZGQgbWFya2V0cyB5b3Ugd2FudCE8L3A+XFxuICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBjb2luanMgZnJvbSAnY29pbmpzJ1xcblxcbmNvbnN0IGF2YWlsYWJsZU1hcmtldHMgPSBPYmplY3Qua2V5cyhjb2luanMpXFxuXFxuY29uc3QgY3VycmVuY3lJY29uID0ge1xcbiAgJ0JUQyc6ICdtZGktY3VycmVuY3ktYnRjJyxcXG4gICdCQ0MnOiAnbWRpLWN1cnJlbmN5LWJ0YycsXFxuICAnQkNIJzogJ21kaS1jdXJyZW5jeS1idGMnLFxcbiAgJ0JDRyc6ICdtZGktY3VycmVuY3ktYnRjJyxcXG4gICdFVEgnOiAnbWRpLWN1cnJlbmN5LWV0aCcsXFxuICAnRVRDJzogJ21kaS1jdXJyZW5jeS1ldGgnLFxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBwcm9wczoge1xcbiAgICB0aXRsZToge1xcbiAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICBkZWZhdWx0OiBcXFwiUW9pbkRhbmdlclxcXCJcXG4gICAgfVxcbiAgfSxcXG5cXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGlzQ29uZmlnU2hvd246IHRydWUsXFxuICAgICAgYXZhaWxhYmxlTWFya2V0cyxcXG4gICAgICBtYXJrZXRzOiBbXS5jb25jYXQoYXZhaWxhYmxlTWFya2V0cyksXFxuICAgICAgY3VycmVudENvaW46ICcnLFxcbiAgICAgIGNvaW5zOiBbXSxcXG4gICAgICBpbmZvcm1hdGlvbjogKCgpID0+IHtcXG4gICAgICAgIGNvbnN0IHJldCA9IHt9XFxuICAgICAgICBmb3IobGV0IG0gb2YgYXZhaWxhYmxlTWFya2V0cykgcmV0W21dID0ge31cXG4gICAgICAgIHJldHVybiByZXRcXG4gICAgICB9KSgpLFxcbiAgICAgIHJlZmVyZW5jZU1hcmtldDogJycsXFxuICAgIH1cXG4gIH0sXFxuXFxuICB3YXRjaDoge1xcbiAgICBtYXJrZXRzIChtKSB7XFxuICAgICAgZG9jdW1lbnQuY29va2llID0gXFxcIm1hcmtldHM9XFxcIiArIGVzY2FwZShKU09OLnN0cmluZ2lmeShtKSlcXG4gICAgfSxcXG5cXG4gICAgY29pbnMgKGMpIHtcXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcXFwiY29pbnM9XFxcIiArIGVzY2FwZShKU09OLnN0cmluZ2lmeShjKSlcXG4gICAgfVxcbiAgfSxcXG5cXG4gIGNvbXB1dGVkOiB7XFxuICAgIGNvaW5Db2x1bW5zICgpIHtcXG4gICAgICBsZXQgcmV0ID0gW11cXG4gICAgICBmb3IobGV0IGNvaW4gb2YgdGhpcy5jb2lucykge1xcbiAgICAgICAgcmV0LnB1c2goe2NvaW4sIHR5cGU6ICdhc2snfSlcXG4gICAgICAgIHJldC5wdXNoKHtjb2luLCB0eXBlOiAnYmlkJ30pXFxuICAgICAgfVxcbiAgICAgIHJldHVybiByZXRcXG4gICAgfSxcXG4gIH0sXFxuXFxuICBjcmVhdGVkICgpIHtcXG4gICAgdGhpcy4kY29pbmpzID0ge31cXG4gICAgdGhpcy4kd2F0Y2ggPSB7fVxcbiAgICBmb3IobGV0IGMgaW4gY29pbmpzKSB7XFxuICAgICAgdGhpcy4kY29pbmpzW2NdID0gbmV3IGNvaW5qc1tjXSgpXFxuICAgIH1cXG4gIH0sXFxuXFxuICBtb3VudGVkICgpIHtcXG4gICAgbGV0IGNvb2tpZXMgPSB7fVxcbiAgICBmb3IobGV0IHBhaXIgb2YgZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpKSB7XFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGxldCBbYSwgYl0gPSBwYWlyLnNwbGl0KCc9JylcXG4gICAgICAgIGNvb2tpZXNbYV0gPSBKU09OLnBhcnNlKHVuZXNjYXBlKGIpKVxcbiAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBpZihjb29raWVzLm1hcmtldHMgIT09IHVuZGVmaW5lZClcXG4gICAgICB0aGlzLm1hcmtldHMgPSBjb29raWVzLm1hcmtldHNcXG4gICAgaWYoY29va2llcy5jb2lucyAhPT0gdW5kZWZpbmVkKSB7XFxuICAgICAgZm9yKGxldCBjb2luIG9mIGNvb2tpZXMuY29pbnMpXFxuICAgICAgICB0aGlzLmFkZENvaW4oY29pbilcXG4gICAgfVxcbiAgfSxcXG5cXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xcbiAgICBmb3IobGV0IGMgaW4gdGhpcy4kY29pbmpzKSB7XFxuICAgICAgdGhpcy4kY29pbmpzW2NdLmNsb3NlKClcXG4gICAgfVxcbiAgfSxcXG5cXG4gIG1ldGhvZHM6IHtcXG4gICAgdG9nZ2xlTWFya2V0IChtKSB7XFxuICAgICAgY29uc3QgaWR4ID0gdGhpcy5tYXJrZXRzLmluZGV4T2YobSlcXG4gICAgICBpZihpZHggPT09IC0xKSB0aGlzLm1hcmtldHMucHVzaChtKVxcbiAgICAgIGVsc2UgdGhpcy5tYXJrZXRzLnNwbGljZShpZHgsIDEpXFxuICAgIH0sXFxuICAgIGFkZENvaW4gKGMpIHtcXG4gICAgICBjID0gYy50b1VwcGVyQ2FzZSgpXFxuICAgICAgY29uc3QgaWR4ID0gdGhpcy5jb2lucy5pbmRleE9mKGMpXFxuICAgICAgaWYoaWR4ID09PSAtMSkge1xcbiAgICAgICAgaWYoIXRoaXMuJHdhdGNoW2NdKSB7XFxuICAgICAgICAgIHRoaXMuJHdhdGNoW2NdID0gdHJ1ZVxcbiAgICAgICAgICBmb3IobGV0IG0gaW4gdGhpcy4kY29pbmpzKSB7XFxuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuaW5mb3JtYXRpb25bbV0sIGMsIHthc2s6IDAsIGJpZDogMH0pXFxuICAgICAgICAgICAgdGhpcy4kY29pbmpzW21dLnN1YnNjcmliZShjKVxcbiAgICAgICAgICAgIHRoaXMuJGNvaW5qc1ttXS5vbihjLnRvTG93ZXJDYXNlKCksIGUgPT4ge1xcbiAgICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvblttXVtjXS5hc2sgPSBlLmFza1xcbiAgICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvblttXVtjXS5iaWQgPSBlLmJpZFxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIHRoaXMuY29pbnMucHVzaChjKVxcbiAgICAgIH1cXG4gICAgICB0aGlzLmN1cnJlbnRDb2luID0gJydcXG4gICAgfSxcXG4gICAgcmVtb3ZlQ29pbiAoYykge1xcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuY29pbnMuaW5kZXhPZihjKVxcbiAgICAgIGlmKGlkeCAhPT0gLTEpIHRoaXMuY29pbnMuc3BsaWNlKGlkeCwgMSlcXG4gICAgICB0aGlzLmN1cnJlbnRDb2luID0gY1xcbiAgICB9LFxcbiAgICBjdXJyZW5jeUljb24gKGMpIHtcXG4gICAgICByZXR1cm4gY3VycmVuY3lJY29uW2MudG9VcHBlckNhc2UoKV0gfHwgJ21kaS1jb2lucydcXG4gICAgfSxcXG4gICAgcmVsYXRpdmVJbmZvcm1hdGlvbiAobWFya2V0LCBjb2luLCB0cCkge1xcbiAgICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZU1hcmtldCA/IHRoaXMuaW5mb3JtYXRpb25bbWFya2V0XVtjb2luXVt0cF0gLyB0aGlzLmluZm9ybWF0aW9uW3RoaXMucmVmZXJlbmNlTWFya2V0XVtjb2luXVt0cF0gOiAxXFxuICAgIH0sXFxuICAgIGN1cnJlbmN5Q29sb3IgKGkpIHtcXG4gICAgICByZXR1cm4gaSA9PSAwID8gJ2hhcy10ZXh0LXdhcm5pbmcnIDogKGkgPiAwID8gJ2hhcy10ZXh0LXN1Y2Nlc3MnIDogJ2hhcy10ZXh0LWRhbmdlcicpXFxuICAgIH1cXG4gIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbnNlY3Rpb246bGFzdC1jaGlsZCB7IGhlaWdodDogMTAwdmg7IH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWY0ODk1OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9hcHAudnVlXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi9cbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIHZhciBmdW5jdGlvbmFsID0gb3B0aW9ucy5mdW5jdGlvbmFsXG4gICAgdmFyIGV4aXN0aW5nID0gZnVuY3Rpb25hbFxuICAgICAgPyBvcHRpb25zLnJlbmRlclxuICAgICAgOiBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuXG4gICAgaWYgKCFmdW5jdGlvbmFsKSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwibmF2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyIGlzLWZpeGVkLXRvcCBpcy1wcmltYXJ5XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWJyYW5kXCIgfSwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgICAgICAgIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJoZXJvIGlzLWZ1bGxoZWlnaHQgaXMtcHJpbWFyeVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVyby1ib2R5XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBoYXMtdGV4dC1jZW50ZXJlZFwiIH0sIFtcbiAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgICAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJzdWJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBSZWFsdGltZSBDb2luIE1vbml0b3JpbmcgU3lzdGVtXFxuICAgICAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1pbmZvIGlzLWxhcmdlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI21haW5cIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBTdGFydFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJzZWN0aW9uXCIsIGF0dHJzOiB7IGlkOiBcIm1haW5cIiB9IH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtblwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImhlYWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlci10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBDb25maWdcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyLWljb25cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiLCBcImFyaWEtbGFiZWxcIjogXCJtb3JlIG9wdGlvbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzQ29uZmlnU2hvd24gPSAhX3ZtLmlzQ29uZmlnU2hvd25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZGlcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZGktY2hldnJvbi1kb3duXCI6ICFfdm0uaXNDb25maWdTaG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWRpLWNoZXZyb24tdXBcIjogX3ZtLmlzQ29uZmlnU2hvd25cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0NvbmZpZ1Nob3duLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQ29uZmlnU2hvd25cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1jb250ZW50XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQgaXMtaG9yaXpvbnRhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWVsZCBpcy1ncm91cGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYXZhaWxhYmxlTWFya2V0cywgZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwXCIsIHsga2V5OiBtLCBzdGF0aWNDbGFzczogXCJjb250cm9sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1vdXRsaW5lZFwiOiBfdm0ubWFya2V0cy5pbmRleE9mKG0pID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlTWFya2V0KG0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MobSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZCBpcy1ob3Jpem9udGFsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpZWxkIGlzLWdyb3VwZWQgaXMtZ3JvdXBlZC1tdWx0aWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRDb2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudENvaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJDdXJyZW5jeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmN1cnJlbnRDb2luIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShcImJ1dHRvblwiIGluICRldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRDb2luKF92bS5jdXJyZW50Q29pbi50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudENvaW4gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2lucywgZnVuY3Rpb24oY29pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogY29pbiArIFwiLXRhZ1wiLCBzdGF0aWNDbGFzczogXCJjb250cm9sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWdzIGhhcy1hZGRvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFnIGlzLXN1Y2Nlc3MgaXMtbWVkaXVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLW1lZGl1bVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uY3VycmVuY3lJY29uKGNvaW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoY29pbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWcgaXMtbWVkaXVtIGlzLWRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW1vdmVDb2luKGNvaW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uY29pbnMgJiZcbiAgICAgICAgICAgIF92bS5jb2lucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBfdm0ubWFya2V0cyAmJlxuICAgICAgICAgICAgX3ZtLm1hcmtldHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSBpcy1mdWxsd2lkdGggaXMtaG92ZXJhYmxlIGlzLXN0cmlwcGVkXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXMtbmFycm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzcGFuOiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWFya2V0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvaW5zLCBmdW5jdGlvbihjb2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGNvaW4gKyBcIi1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGFzLXRleHQtY2VudGVyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1tZWRpdW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5jdXJyZW5jeUljb24oY29pbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhjb2luKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2luQ29sdW1ucywgZnVuY3Rpb24oY29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBjb2wuY29pbiArIFwiLVwiICsgY29sLnR5cGUgKyBcIi1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGNvbC50eXBlKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubWFya2V0cywgZnVuY3Rpb24obWFya2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IG1hcmtldCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1wcmltYXJ5XCI6IF92bS5yZWZlcmVuY2VNYXJrZXQgPT09IG1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWZlcmVuY2VNYXJrZXQgPSBtYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhtYXJrZXQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2luQ29sdW1ucywgZnVuY3Rpb24oY29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGNvbC5jb2luICsgXCItXCIgKyBjb2wudHlwZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDUsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZvcm1hdGlvblttYXJrZXRdW2NvbC5jb2luXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbC50eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWZlcmVuY2VNYXJrZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVmZXJlbmNlTWFya2V0ICE9IG1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmN1cnJlbmN5Q29sb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWxhdGl2ZUluZm9ybWF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wuY29pbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wudHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVsYXRpdmVJbmZvcm1hdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sLmNvaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIlKVxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLm1hcmtldHMgJiYgX3ZtLm1hcmtldHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBpcy01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5vIGNvaW5zIGFyZSBzZWxlY3RlZCFcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUGxlYXNlIGFkZCBjb2lucyB5b3Ugd2FudCFcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgaXMtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJObyBtYXJrZXRzIGFyZSBzZWxlY3RlZCFcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUGxlYXNlIGFkZCBtYXJrZXRzIHlvdSB3YW50IVwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItYnVyZ2VyIGJ1cmdlclwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIpXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItbWVudVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWVuZFwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXByaW1hcnkgaXMtaW52ZXJ0ZWRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWdpdGh1Yi1jaXJjbGVcIiB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJHaXRodWJcIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCIgfSwgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIk1hcmtldFwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiQ3VycmVuY3lcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtbWVkaXVtIGlzLWxlZnRcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWNvaW5zXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLWxlZnRcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWN1cnJlbmN5LWtyd1wiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlZjQ4OTU4XCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWVmNDg5NThcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvYXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwidnVlXCIsXCJjb21tb25qczJcIjpcInZ1ZVwiLFwiYW1kXCI6XCJ2dWVcIixcInJvb3RcIjpcIlZ1ZVwifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2luanNcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==