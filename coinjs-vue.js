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
      referenceMarket: '',
      isMenuShown: false
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
exports.push([module.i, "\nsection:last-child { height: 100vh;\n}\n", "", {"version":3,"sources":["/Users/gwangyi/workspace/coinjs-vue/src/src/app.vue"],"names":[],"mappings":";AA8RA,qBAAA,cAAA;CAAA","file":"app.vue","sourcesContent":["<template>\n  <div>\n      <nav class=\"navbar is-fixed-top is-primary\">\n        <div class=\"container\">\n          <div class=\"navbar-brand\">\n            <a class=\"navbar-item\">\n              {{ title }}\n            </a>\n            <span class=\"navbar-burger burger\" @click=\"isMenuShown = !isMenuShown\">\n              <span></span>\n              <span></span>\n              <span></span>\n            </span>\n          </div>\n          <div class=\"navbar-menu\" :class=\"{'is-active': isMenuShown}\">\n            <div class=\"navbar-end\">\n              <span class=\"navbar-item\">\n                <a class=\"button is-primary is-inverted\" href=\"https://github.com/gwangyi/coinjs-vue\">\n                  <span class=\"icon\">\n                    <i class=\"mdi mdi-github-circle\"></i>\n                  </span>\n                  <span>Github</span>\n                </a>\n              </span>\n            </div>\n          </div>\n        </div>\n      </nav>\n    <section class=\"hero is-fullheight is-primary\">\n      <div class=\"hero-body\">\n        <div class=\"container has-text-centered\">\n          <h1 class=\"title\">\n            {{ title }}\n          </h1>\n          <h2 class=\"subtitle\">\n            Realtime Coin Monitoring System\n          </h2>\n          <a href=\"#main\" class=\"button is-info is-large\">\n            Start\n          </a>\n        </div>\n      </div>\n    </section>\n    <section class=\"section\" id=\"main\">\n      <div class=\"container\">\n        <div class=\"column\">\n          <div class=\"card\">\n            <header class=\"card-header\">\n              <p class=\"card-header-title\">\n              Config\n              </p>\n              <a href=\"#\" @click.prevent=\"isConfigShown = !isConfigShown\" class=\"card-header-icon\" aria-label=\"more options\">\n                <span class=\"icon\">\n                  <i class=\"mdi\" :class=\"{'mdi-chevron-down': !isConfigShown, 'mdi-chevron-up': isConfigShown}\" aria-hidden=\"true\"></i>\n                </span>\n              </a>\n            </header>\n            <div v-show=\"isConfigShown\" class=\"card-content\">\n              <div class=\"content\">\n                <div class=\"field is-horizontal\">\n                  <div class=\"field-label is-normal\">\n                    <label class=\"label\">Market</label>\n                  </div>\n                  <div class=\"field-body\">\n                    <div class=\"field is-grouped\">\n                      <p v-for=\"m in availableMarkets\" :key=\"m\" class=\"control\">\n                        <a class=\"button is-link\" :class=\"{'is-outlined': markets.indexOf(m) === -1}\" @click.prevent=\"toggleMarket(m)\">\n                          {{ m }}\n                        </a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"field is-horizontal\">\n                  <div class=\"field-label is-normal\">\n                    <label class=\"label\">Currency</label>\n                  </div>\n                  <div class=\"field-body\">\n                    <div class=\"field is-grouped is-grouped-multiline\">\n                      <p class=\"control has-icons-left\">\n                        <input class=\"input\" type=\"text\" placeholder=\"Currency\" @keyup.space.enter=\"addCoin(currentCoin.trim())\" v-model=\"currentCoin\">\n                        <span class=\"icon is-medium is-left\">\n                          <i class=\"mdi mdi-coins\"></i>\n                        </span>\n                      </p>\n                      <div v-for=\"coin in coins\" :key=\"coin + '-tag'\" class=\"control\">\n                        <div class=\"tags has-addons\">\n                          <span class=\"tag is-success is-medium\">\n                            <span class=\"icon is-medium\">\n                              <i class=\"mdi\" :class=\"currencyIcon(coin)\"></i>\n                            </span>\n                            {{ coin }}\n                          </span>\n                          <a class=\"tag is-medium is-delete\" @click=\"removeCoin(coin)\"></a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"column\">\n          <table v-if=\"coins && coins.length > 0 && markets && markets.length > 0\" class=\"table is-fullwidth is-hoverable is-stripped\">\n            <thead>\n              <tr>\n                <th class=\"is-narrow\" rowspan=\"2\">Market</th>\n                <th v-for=\"coin in coins\" :key=\"coin + '-header'\" colspan=\"2\" class=\"has-text-centered\">\n                  <span class=\"icon is-medium\">\n                    <i class=\"mdi\" :class=\"currencyIcon(coin)\"></i>\n                  </span>\n                  {{ coin }}\n                </th>\n              </tr>\n              <tr>\n                <th v-for=\"col in coinColumns\" :key=\"col.coin + '-' + col.type + '-header'\" class=\"has-text-centered\">{{ col.type }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr v-for=\"market in markets\" :key=\"market\">\n                <th @click=\"referenceMarket = market\" :class=\"{'is-primary': referenceMarket === market}\">{{market}}</th>\n                <td v-for=\"col in coinColumns\" :key=\"col.coin + '-' + col.type\">\n                  <span class=\"icon is-left\">\n                    <i class=\"mdi mdi-currency-krw\"></i>\n                  </span>\n                  <span>{{ information[market][col.coin][col.type].toLocaleString() }}</span>\n                  <span v-if=\"referenceMarket && referenceMarket != market\"\n                        :class=\"currencyColor(relativeInformation(market, col.coin, col.type) - 1)\">\n                    ({{(relativeInformation(market, col.coin, col.type) * 100).toFixed(2) }}%)\n                  </span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <template v-else-if=\"markets && markets.length > 0\">\n            <p class=\"title is-5\">No coins are selected!</p>\n            <p class=\"title is-6\">Please add coins you want!</p>\n          </template>\n          <template v-else>\n            <p class=\"title is-5\">No markets are selected!</p>\n            <p class=\"title is-6\">Please add markets you want!</p>\n          </template>\n        </div>\n      </div>\n    </section>\n  </div>\n</template>\n\n<script>\nimport coinjs from 'coinjs'\n\nconst availableMarkets = Object.keys(coinjs)\n\nconst currencyIcon = {\n  'BTC': 'mdi-currency-btc',\n  'BCC': 'mdi-currency-btc',\n  'BCH': 'mdi-currency-btc',\n  'BCG': 'mdi-currency-btc',\n  'ETH': 'mdi-currency-eth',\n  'ETC': 'mdi-currency-eth',\n}\n\nexport default {\n  props: {\n    title: {\n      type: String,\n      default: \"QoinDanger\"\n    }\n  },\n\n  data () {\n    return {\n      isConfigShown: true,\n      availableMarkets,\n      markets: [].concat(availableMarkets),\n      currentCoin: '',\n      coins: [],\n      information: (() => {\n        const ret = {}\n        for(let m of availableMarkets) ret[m] = {}\n        return ret\n      })(),\n      referenceMarket: '',\n      isMenuShown: false\n    }\n  },\n\n  watch: {\n    markets (m) {\n      document.cookie = \"markets=\" + escape(JSON.stringify(m))\n    },\n\n    coins (c) {\n      document.cookie = \"coins=\" + escape(JSON.stringify(c))\n    }\n  },\n\n  computed: {\n    coinColumns () {\n      let ret = []\n      for(let coin of this.coins) {\n        ret.push({coin, type: 'ask'})\n        ret.push({coin, type: 'bid'})\n      }\n      return ret\n    },\n  },\n\n  created () {\n    this.$coinjs = {}\n    this.$watch = {}\n    for(let c in coinjs) {\n      this.$coinjs[c] = new coinjs[c]()\n    }\n  },\n\n  mounted () {\n    let cookies = {}\n    for(let pair of document.cookie.split('; ')) {\n      try {\n        let [a, b] = pair.split('=')\n        cookies[a] = JSON.parse(unescape(b))\n      } catch (err) {\n      }\n    }\n\n    if(cookies.markets !== undefined)\n      this.markets = cookies.markets\n    if(cookies.coins !== undefined) {\n      for(let coin of cookies.coins)\n        this.addCoin(coin)\n    }\n  },\n\n  beforeDestroy () {\n    for(let c in this.$coinjs) {\n      this.$coinjs[c].close()\n    }\n  },\n\n  methods: {\n    toggleMarket (m) {\n      const idx = this.markets.indexOf(m)\n      if(idx === -1) this.markets.push(m)\n      else this.markets.splice(idx, 1)\n    },\n    addCoin (c) {\n      c = c.toUpperCase()\n      const idx = this.coins.indexOf(c)\n      if(idx === -1) {\n        if(!this.$watch[c]) {\n          this.$watch[c] = true\n          for(let m in this.$coinjs) {\n            this.$set(this.information[m], c, {ask: 0, bid: 0})\n            this.$coinjs[m].subscribe(c)\n            this.$coinjs[m].on(c.toLowerCase(), e => {\n              this.information[m][c].ask = e.ask\n              this.information[m][c].bid = e.bid\n            })\n          }\n        }\n        this.coins.push(c)\n      }\n      this.currentCoin = ''\n    },\n    removeCoin (c) {\n      const idx = this.coins.indexOf(c)\n      if(idx !== -1) this.coins.splice(idx, 1)\n      this.currentCoin = c\n    },\n    currencyIcon (c) {\n      return currencyIcon[c.toUpperCase()] || 'mdi-coins'\n    },\n    relativeInformation (market, coin, tp) {\n      return this.referenceMarket ? this.information[market][coin][tp] / this.information[this.referenceMarket][coin][tp] : 1\n    },\n    currencyColor (i) {\n      return i == 0 ? 'has-text-warning' : (i > 0 ? 'has-text-success' : 'has-text-danger')\n    }\n  }\n}\n</script>\n\n<style>\nsection:last-child { height: 100vh; }\n</style>\n"],"sourceRoot":""}]);

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
          _c(
            "span",
            {
              staticClass: "navbar-burger burger",
              on: {
                click: function($event) {
                  _vm.isMenuShown = !_vm.isMenuShown
                }
              }
            },
            [_c("span"), _vm._v(" "), _c("span"), _vm._v(" "), _c("span")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "navbar-menu",
            class: { "is-active": _vm.isMenuShown }
          },
          [_vm._m(0)]
        )
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
                    _vm._m(1),
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
                    _vm._m(2),
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
                                    ) &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
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
                            _vm._m(3)
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
                                  _vm._m(4, true),
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
    return _c("div", { staticClass: "navbar-end" }, [
      _c("span", { staticClass: "navbar-item" }, [
        _c(
          "a",
          {
            staticClass: "button is-primary is-inverted",
            attrs: { href: "https://github.com/gwangyi/coinjs-vue" }
          },
          [
            _c("span", { staticClass: "icon" }, [
              _c("i", { staticClass: "mdi mdi-github-circle" })
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Github")])
          ]
        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkYmViMDk3ZDc0MzZjOWEzZDc1ZCIsIndlYnBhY2s6Ly8vc3JjL2FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlPzFiNTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC52dWU/OTlmNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnZ1ZT8yOWJjIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwidnVlXCIsXCJjb21tb25qczJcIjpcInZ1ZVwiLFwiYW1kXCI6XCJ2dWVcIixcInJvb3RcIjpcIlZ1ZVwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2luanNcIiJdLCJuYW1lcyI6WyJhcHAiLCIkbW91bnQiLCJkaXNwb3NlZCIsImluamVjdFN0eWxlIiwic3NyQ29udGV4dCIsInJlcXVpcmUiLCJub3JtYWxpemVDb21wb25lbnQiLCJfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18iLCJfX3Z1ZV9zdHlsZXNfXyIsIl9fdnVlX3Njb3BlSWRfXyIsIl9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18iLCJDb21wb25lbnQiLCJvcHRpb25zIiwiX19maWxlIiwiaG90QVBJIiwiaW5zdGFsbCIsImNvbXBhdGlibGUiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJkYXRhIiwiY3JlYXRlUmVjb3JkIiwicmVsb2FkIiwiZGlzcG9zZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMEZBO0FBRUE7QUFFQTtTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtBQU5BO0FBUUE7OztZQUlBO2VBSUE7QUFMQTtBQURBOztTQU9BOztxQkFFQTtBQUNBO3lCQUNBO21CQUNBO2FBQ0E7MEJBQ0E7b0JBQ0E7O2lEQUNBOztlQUNBO0FBQ0E7dUJBQ0E7bUJBRUE7QUFiQTtBQWVBOzs7ZUFFQTsyREFDQTtBQUVBOzthQUNBO3lEQUNBO0FBR0E7O0FBVEE7O2tCQVdBO2dCQUNBOzttQ0FDQTs7O2dCQUNBOzs7O2dCQUNB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QUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ROQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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R0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRCxlQUFlLHNDQUFzQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNoZkEsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6ImNvaW5qcy12dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ2dWVcIiksIHJlcXVpcmUoXCJjb2luanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1widnVlXCIsIFwiY29pbmpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJ2dWVcIiksIHJlcXVpcmUoXCJjb2luanNcIikpIDogZmFjdG9yeShyb290W1wiVnVlXCJdLCByb290W1wiY29pbmpzXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYmViMDk3ZDc0MzZjOWEzZDc1ZCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgaXMtZml4ZWQtdG9wIGlzLXByaW1hcnlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLWJ1cmdlciBidXJnZXJcIiBAY2xpY2s9XCJpc01lbnVTaG93biA9ICFpc01lbnVTaG93blwiPlxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItbWVudVwiIDpjbGFzcz1cInsnaXMtYWN0aXZlJzogaXNNZW51U2hvd259XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWVuZFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1pbnZlcnRlZFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3dhbmd5aS9jb2luanMtdnVlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtZGkgbWRpLWdpdGh1Yi1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5HaXRodWI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImhlcm8gaXMtZnVsbGhlaWdodCBpcy1wcmltYXJ5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVyby1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoMiBjbGFzcz1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICBSZWFsdGltZSBDb2luIE1vbml0b3JpbmcgU3lzdGVtXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8YSBocmVmPVwiI21haW5cIiBjbGFzcz1cImJ1dHRvbiBpcy1pbmZvIGlzLWxhcmdlXCI+XG4gICAgICAgICAgICBTdGFydFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uXCIgaWQ9XCJtYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1oZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgQ29uZmlnXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cImlzQ29uZmlnU2hvd24gPSAhaXNDb25maWdTaG93blwiIGNsYXNzPVwiY2FyZC1oZWFkZXItaWNvblwiIGFyaWEtbGFiZWw9XCJtb3JlIG9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpXCIgOmNsYXNzPVwieydtZGktY2hldnJvbi1kb3duJzogIWlzQ29uZmlnU2hvd24sICdtZGktY2hldnJvbi11cCc6IGlzQ29uZmlnU2hvd259XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImlzQ29uZmlnU2hvd25cIiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+TWFya2V0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCB2LWZvcj1cIm0gaW4gYXZhaWxhYmxlTWFya2V0c1wiIDprZXk9XCJtXCIgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBpcy1saW5rXCIgOmNsYXNzPVwieydpcy1vdXRsaW5lZCc6IG1hcmtldHMuaW5kZXhPZihtKSA9PT0gLTF9XCIgQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVNYXJrZXQobSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPkN1cnJlbmN5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWdyb3VwZWQgaXMtZ3JvdXBlZC1tdWx0aWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkN1cnJlbmN5XCIgQGtleXVwLnNwYWNlLmVudGVyPVwiYWRkQ29pbihjdXJyZW50Q29pbi50cmltKCkpXCIgdi1tb2RlbD1cImN1cnJlbnRDb2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtbWVkaXVtIGlzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtZGkgbWRpLWNvaW5zXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiY29pbiBpbiBjb2luc1wiIDprZXk9XCJjb2luICsgJy10YWcnXCIgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFncyBoYXMtYWRkb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIGlzLXN1Y2Nlc3MgaXMtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtZGlcIiA6Y2xhc3M9XCJjdXJyZW5jeUljb24oY29pbilcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvaW4gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInRhZyBpcy1tZWRpdW0gaXMtZGVsZXRlXCIgQGNsaWNrPVwicmVtb3ZlQ29pbihjb2luKVwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgPHRhYmxlIHYtaWY9XCJjb2lucyAmJiBjb2lucy5sZW5ndGggPiAwICYmIG1hcmtldHMgJiYgbWFya2V0cy5sZW5ndGggPiAwXCIgY2xhc3M9XCJ0YWJsZSBpcy1mdWxsd2lkdGggaXMtaG92ZXJhYmxlIGlzLXN0cmlwcGVkXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJpcy1uYXJyb3dcIiByb3dzcGFuPVwiMlwiPk1hcmtldDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHYtZm9yPVwiY29pbiBpbiBjb2luc1wiIDprZXk9XCJjb2luICsgJy1oZWFkZXInXCIgY29sc3Bhbj1cIjJcIiBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpXCIgOmNsYXNzPVwiY3VycmVuY3lJY29uKGNvaW4pXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAge3sgY29pbiB9fVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggdi1mb3I9XCJjb2wgaW4gY29pbkNvbHVtbnNcIiA6a2V5PVwiY29sLmNvaW4gKyAnLScgKyBjb2wudHlwZSArICctaGVhZGVyJ1wiIGNsYXNzPVwiaGFzLXRleHQtY2VudGVyZWRcIj57eyBjb2wudHlwZSB9fTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJtYXJrZXQgaW4gbWFya2V0c1wiIDprZXk9XCJtYXJrZXRcIj5cbiAgICAgICAgICAgICAgICA8dGggQGNsaWNrPVwicmVmZXJlbmNlTWFya2V0ID0gbWFya2V0XCIgOmNsYXNzPVwieydpcy1wcmltYXJ5JzogcmVmZXJlbmNlTWFya2V0ID09PSBtYXJrZXR9XCI+e3ttYXJrZXR9fTwvdGg+XG4gICAgICAgICAgICAgICAgPHRkIHYtZm9yPVwiY29sIGluIGNvaW5Db2x1bW5zXCIgOmtleT1cImNvbC5jb2luICsgJy0nICsgY29sLnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpIG1kaS1jdXJyZW5jeS1rcndcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57eyBpbmZvcm1hdGlvblttYXJrZXRdW2NvbC5jb2luXVtjb2wudHlwZV0udG9Mb2NhbGVTdHJpbmcoKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJyZWZlcmVuY2VNYXJrZXQgJiYgcmVmZXJlbmNlTWFya2V0ICE9IG1hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJjdXJyZW5jeUNvbG9yKHJlbGF0aXZlSW5mb3JtYXRpb24obWFya2V0LCBjb2wuY29pbiwgY29sLnR5cGUpIC0gMSlcIj5cbiAgICAgICAgICAgICAgICAgICAgKHt7KHJlbGF0aXZlSW5mb3JtYXRpb24obWFya2V0LCBjb2wuY29pbiwgY29sLnR5cGUpICogMTAwKS50b0ZpeGVkKDIpIH19JSlcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJtYXJrZXRzICYmIG1hcmtldHMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZSBpcy01XCI+Tm8gY29pbnMgYXJlIHNlbGVjdGVkITwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUgaXMtNlwiPlBsZWFzZSBhZGQgY29pbnMgeW91IHdhbnQhPC9wPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUgaXMtNVwiPk5vIG1hcmtldHMgYXJlIHNlbGVjdGVkITwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUgaXMtNlwiPlBsZWFzZSBhZGQgbWFya2V0cyB5b3Ugd2FudCE8L3A+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBjb2luanMgZnJvbSAnY29pbmpzJ1xuXG5jb25zdCBhdmFpbGFibGVNYXJrZXRzID0gT2JqZWN0LmtleXMoY29pbmpzKVxuXG5jb25zdCBjdXJyZW5jeUljb24gPSB7XG4gICdCVEMnOiAnbWRpLWN1cnJlbmN5LWJ0YycsXG4gICdCQ0MnOiAnbWRpLWN1cnJlbmN5LWJ0YycsXG4gICdCQ0gnOiAnbWRpLWN1cnJlbmN5LWJ0YycsXG4gICdCQ0cnOiAnbWRpLWN1cnJlbmN5LWJ0YycsXG4gICdFVEgnOiAnbWRpLWN1cnJlbmN5LWV0aCcsXG4gICdFVEMnOiAnbWRpLWN1cnJlbmN5LWV0aCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJRb2luRGFuZ2VyXCJcbiAgICB9XG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQ29uZmlnU2hvd246IHRydWUsXG4gICAgICBhdmFpbGFibGVNYXJrZXRzLFxuICAgICAgbWFya2V0czogW10uY29uY2F0KGF2YWlsYWJsZU1hcmtldHMpLFxuICAgICAgY3VycmVudENvaW46ICcnLFxuICAgICAgY29pbnM6IFtdLFxuICAgICAgaW5mb3JtYXRpb246ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IHt9XG4gICAgICAgIGZvcihsZXQgbSBvZiBhdmFpbGFibGVNYXJrZXRzKSByZXRbbV0gPSB7fVxuICAgICAgICByZXR1cm4gcmV0XG4gICAgICB9KSgpLFxuICAgICAgcmVmZXJlbmNlTWFya2V0OiAnJyxcbiAgICAgIGlzTWVudVNob3duOiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICB3YXRjaDoge1xuICAgIG1hcmtldHMgKG0pIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwibWFya2V0cz1cIiArIGVzY2FwZShKU09OLnN0cmluZ2lmeShtKSlcbiAgICB9LFxuXG4gICAgY29pbnMgKGMpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29pbnM9XCIgKyBlc2NhcGUoSlNPTi5zdHJpbmdpZnkoYykpXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29pbkNvbHVtbnMgKCkge1xuICAgICAgbGV0IHJldCA9IFtdXG4gICAgICBmb3IobGV0IGNvaW4gb2YgdGhpcy5jb2lucykge1xuICAgICAgICByZXQucHVzaCh7Y29pbiwgdHlwZTogJ2Fzayd9KVxuICAgICAgICByZXQucHVzaCh7Y29pbiwgdHlwZTogJ2JpZCd9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldFxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy4kY29pbmpzID0ge31cbiAgICB0aGlzLiR3YXRjaCA9IHt9XG4gICAgZm9yKGxldCBjIGluIGNvaW5qcykge1xuICAgICAgdGhpcy4kY29pbmpzW2NdID0gbmV3IGNvaW5qc1tjXSgpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIGxldCBjb29raWVzID0ge31cbiAgICBmb3IobGV0IHBhaXIgb2YgZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgW2EsIGJdID0gcGFpci5zcGxpdCgnPScpXG4gICAgICAgIGNvb2tpZXNbYV0gPSBKU09OLnBhcnNlKHVuZXNjYXBlKGIpKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoY29va2llcy5tYXJrZXRzICE9PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLm1hcmtldHMgPSBjb29raWVzLm1hcmtldHNcbiAgICBpZihjb29raWVzLmNvaW5zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvcihsZXQgY29pbiBvZiBjb29raWVzLmNvaW5zKVxuICAgICAgICB0aGlzLmFkZENvaW4oY29pbilcbiAgICB9XG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgZm9yKGxldCBjIGluIHRoaXMuJGNvaW5qcykge1xuICAgICAgdGhpcy4kY29pbmpzW2NdLmNsb3NlKClcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZU1hcmtldCAobSkge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5tYXJrZXRzLmluZGV4T2YobSlcbiAgICAgIGlmKGlkeCA9PT0gLTEpIHRoaXMubWFya2V0cy5wdXNoKG0pXG4gICAgICBlbHNlIHRoaXMubWFya2V0cy5zcGxpY2UoaWR4LCAxKVxuICAgIH0sXG4gICAgYWRkQ29pbiAoYykge1xuICAgICAgYyA9IGMudG9VcHBlckNhc2UoKVxuICAgICAgY29uc3QgaWR4ID0gdGhpcy5jb2lucy5pbmRleE9mKGMpXG4gICAgICBpZihpZHggPT09IC0xKSB7XG4gICAgICAgIGlmKCF0aGlzLiR3YXRjaFtjXSkge1xuICAgICAgICAgIHRoaXMuJHdhdGNoW2NdID0gdHJ1ZVxuICAgICAgICAgIGZvcihsZXQgbSBpbiB0aGlzLiRjb2luanMpIHtcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmluZm9ybWF0aW9uW21dLCBjLCB7YXNrOiAwLCBiaWQ6IDB9KVxuICAgICAgICAgICAgdGhpcy4kY29pbmpzW21dLnN1YnNjcmliZShjKVxuICAgICAgICAgICAgdGhpcy4kY29pbmpzW21dLm9uKGMudG9Mb3dlckNhc2UoKSwgZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5mb3JtYXRpb25bbV1bY10uYXNrID0gZS5hc2tcbiAgICAgICAgICAgICAgdGhpcy5pbmZvcm1hdGlvblttXVtjXS5iaWQgPSBlLmJpZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2lucy5wdXNoKGMpXG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRDb2luID0gJydcbiAgICB9LFxuICAgIHJlbW92ZUNvaW4gKGMpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuY29pbnMuaW5kZXhPZihjKVxuICAgICAgaWYoaWR4ICE9PSAtMSkgdGhpcy5jb2lucy5zcGxpY2UoaWR4LCAxKVxuICAgICAgdGhpcy5jdXJyZW50Q29pbiA9IGNcbiAgICB9LFxuICAgIGN1cnJlbmN5SWNvbiAoYykge1xuICAgICAgcmV0dXJuIGN1cnJlbmN5SWNvbltjLnRvVXBwZXJDYXNlKCldIHx8ICdtZGktY29pbnMnXG4gICAgfSxcbiAgICByZWxhdGl2ZUluZm9ybWF0aW9uIChtYXJrZXQsIGNvaW4sIHRwKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VNYXJrZXQgPyB0aGlzLmluZm9ybWF0aW9uW21hcmtldF1bY29pbl1bdHBdIC8gdGhpcy5pbmZvcm1hdGlvblt0aGlzLnJlZmVyZW5jZU1hcmtldF1bY29pbl1bdHBdIDogMVxuICAgIH0sXG4gICAgY3VycmVuY3lDb2xvciAoaSkge1xuICAgICAgcmV0dXJuIGkgPT0gMCA/ICdoYXMtdGV4dC13YXJuaW5nJyA6IChpID4gMCA/ICdoYXMtdGV4dC1zdWNjZXNzJyA6ICdoYXMtdGV4dC1kYW5nZXInKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbnNlY3Rpb246bGFzdC1jaGlsZCB7IGhlaWdodDogMTAwdmg7IH1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwcC52dWUiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwLnZ1ZSdcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG52YXIgYXBwID0gbmV3IFZ1ZShBcHApXG5hcHAuJG1vdW50KCcjYXBwJylcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWY0ODk1OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXBwLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2FwcC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2FwcC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjQ4OTU4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXBwLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZWY0ODk1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlZjQ4OTU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjQ4OTU4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHAudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwMTQ4Y2JjZFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWY0ODk1OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXBwLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWY0ODk1OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXBwLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWY0ODk1OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9hcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5zZWN0aW9uOmxhc3QtY2hpbGQgeyBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2d3YW5neWkvd29ya3NwYWNlL2NvaW5qcy12dWUvc3JjL3NyYy9hcHAudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4UkEscUJBQUEsY0FBQTtDQUFBXCIsXCJmaWxlXCI6XCJhcHAudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXY+XFxuICAgICAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIGlzLWZpeGVkLXRvcCBpcy1wcmltYXJ5XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIHt7IHRpdGxlIH19XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJuYXZiYXItYnVyZ2VyIGJ1cmdlclxcXCIgQGNsaWNrPVxcXCJpc01lbnVTaG93biA9ICFpc01lbnVTaG93blxcXCI+XFxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLW1lbnVcXFwiIDpjbGFzcz1cXFwieydpcy1hY3RpdmUnOiBpc01lbnVTaG93bn1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1lbmRcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5hdmJhci1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWludmVydGVkXFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vZ3dhbmd5aS9jb2luanMtdnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWRpIG1kaS1naXRodWItY2lyY2xlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkdpdGh1Yjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvbmF2PlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiaGVybyBpcy1mdWxsaGVpZ2h0IGlzLXByaW1hcnlcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlcm8tYm9keVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICA8aDEgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICB7eyB0aXRsZSB9fVxcbiAgICAgICAgICA8L2gxPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcInN1YnRpdGxlXFxcIj5cXG4gICAgICAgICAgICBSZWFsdGltZSBDb2luIE1vbml0b3JpbmcgU3lzdGVtXFxuICAgICAgICAgIDwvaDI+XFxuICAgICAgICAgIDxhIGhyZWY9XFxcIiNtYWluXFxcIiBjbGFzcz1cXFwiYnV0dG9uIGlzLWluZm8gaXMtbGFyZ2VcXFwiPlxcbiAgICAgICAgICAgIFN0YXJ0XFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uXFxcIiBpZD1cXFwibWFpblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLWhlYWRlci10aXRsZVxcXCI+XFxuICAgICAgICAgICAgICBDb25maWdcXG4gICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIEBjbGljay5wcmV2ZW50PVxcXCJpc0NvbmZpZ1Nob3duID0gIWlzQ29uZmlnU2hvd25cXFwiIGNsYXNzPVxcXCJjYXJkLWhlYWRlci1pY29uXFxcIiBhcmlhLWxhYmVsPVxcXCJtb3JlIG9wdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1kaVxcXCIgOmNsYXNzPVxcXCJ7J21kaS1jaGV2cm9uLWRvd24nOiAhaXNDb25maWdTaG93biwgJ21kaS1jaGV2cm9uLXVwJzogaXNDb25maWdTaG93bn1cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2hlYWRlcj5cXG4gICAgICAgICAgICA8ZGl2IHYtc2hvdz1cXFwiaXNDb25maWdTaG93blxcXCIgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQgaXMtaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiPk1hcmtldDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZCBpcy1ncm91cGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1mb3I9XFxcIm0gaW4gYXZhaWxhYmxlTWFya2V0c1xcXCIgOmtleT1cXFwibVxcXCIgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtbGlua1xcXCIgOmNsYXNzPVxcXCJ7J2lzLW91dGxpbmVkJzogbWFya2V0cy5pbmRleE9mKG0pID09PSAtMX1cXFwiIEBjbGljay5wcmV2ZW50PVxcXCJ0b2dnbGVNYXJrZXQobSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZCBpcy1ob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCI+Q3VycmVuY3k8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQgaXMtZ3JvdXBlZCBpcy1ncm91cGVkLW11bHRpbGluZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiQ3VycmVuY3lcXFwiIEBrZXl1cC5zcGFjZS5lbnRlcj1cXFwiYWRkQ29pbihjdXJyZW50Q29pbi50cmltKCkpXFxcIiB2LW1vZGVsPVxcXCJjdXJyZW50Q29pblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtbWVkaXVtIGlzLWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1kaSBtZGktY29pbnNcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwiY29pbiBpbiBjb2luc1xcXCIgOmtleT1cXFwiY29pbiArICctdGFnJ1xcXCIgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhZ3MgaGFzLWFkZG9uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFnIGlzLXN1Y2Nlc3MgaXMtbWVkaXVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtbWVkaXVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWRpXFxcIiA6Y2xhc3M9XFxcImN1cnJlbmN5SWNvbihjb2luKVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvaW4gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJ0YWcgaXMtbWVkaXVtIGlzLWRlbGV0ZVxcXCIgQGNsaWNrPVxcXCJyZW1vdmVDb2luKGNvaW4pXFxcIj48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgIDx0YWJsZSB2LWlmPVxcXCJjb2lucyAmJiBjb2lucy5sZW5ndGggPiAwICYmIG1hcmtldHMgJiYgbWFya2V0cy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWhvdmVyYWJsZSBpcy1zdHJpcHBlZFxcXCI+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImlzLW5hcnJvd1xcXCIgcm93c3Bhbj1cXFwiMlxcXCI+TWFya2V0PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIHYtZm9yPVxcXCJjb2luIGluIGNvaW5zXFxcIiA6a2V5PVxcXCJjb2luICsgJy1oZWFkZXInXFxcIiBjb2xzcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwiaGFzLXRleHQtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLW1lZGl1bVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWRpXFxcIiA6Y2xhc3M9XFxcImN1cnJlbmN5SWNvbihjb2luKVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjb2luIH19XFxuICAgICAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggdi1mb3I9XFxcImNvbCBpbiBjb2luQ29sdW1uc1xcXCIgOmtleT1cXFwiY29sLmNvaW4gKyAnLScgKyBjb2wudHlwZSArICctaGVhZGVyJ1xcXCIgY2xhc3M9XFxcImhhcy10ZXh0LWNlbnRlcmVkXFxcIj57eyBjb2wudHlwZSB9fTwvdGg+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCJtYXJrZXQgaW4gbWFya2V0c1xcXCIgOmtleT1cXFwibWFya2V0XFxcIj5cXG4gICAgICAgICAgICAgICAgPHRoIEBjbGljaz1cXFwicmVmZXJlbmNlTWFya2V0ID0gbWFya2V0XFxcIiA6Y2xhc3M9XFxcInsnaXMtcHJpbWFyeSc6IHJlZmVyZW5jZU1hcmtldCA9PT0gbWFya2V0fVxcXCI+e3ttYXJrZXR9fTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cXFwiY29sIGluIGNvaW5Db2x1bW5zXFxcIiA6a2V5PVxcXCJjb2wuY29pbiArICctJyArIGNvbC50eXBlXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtZGkgbWRpLWN1cnJlbmN5LWtyd1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57eyBpbmZvcm1hdGlvblttYXJrZXRdW2NvbC5jb2luXVtjb2wudHlwZV0udG9Mb2NhbGVTdHJpbmcoKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJyZWZlcmVuY2VNYXJrZXQgJiYgcmVmZXJlbmNlTWFya2V0ICE9IG1hcmtldFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcImN1cnJlbmN5Q29sb3IocmVsYXRpdmVJbmZvcm1hdGlvbihtYXJrZXQsIGNvbC5jb2luLCBjb2wudHlwZSkgLSAxKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAoe3socmVsYXRpdmVJbmZvcm1hdGlvbihtYXJrZXQsIGNvbC5jb2luLCBjb2wudHlwZSkgKiAxMDApLnRvRml4ZWQoMikgfX0lKVxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cXFwibWFya2V0cyAmJiBtYXJrZXRzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy01XFxcIj5ObyBjb2lucyBhcmUgc2VsZWN0ZWQhPC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy02XFxcIj5QbGVhc2UgYWRkIGNvaW5zIHlvdSB3YW50ITwvcD5cXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGl0bGUgaXMtNVxcXCI+Tm8gbWFya2V0cyBhcmUgc2VsZWN0ZWQhPC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy02XFxcIj5QbGVhc2UgYWRkIG1hcmtldHMgeW91IHdhbnQhPC9wPlxcbiAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgY29pbmpzIGZyb20gJ2NvaW5qcydcXG5cXG5jb25zdCBhdmFpbGFibGVNYXJrZXRzID0gT2JqZWN0LmtleXMoY29pbmpzKVxcblxcbmNvbnN0IGN1cnJlbmN5SWNvbiA9IHtcXG4gICdCVEMnOiAnbWRpLWN1cnJlbmN5LWJ0YycsXFxuICAnQkNDJzogJ21kaS1jdXJyZW5jeS1idGMnLFxcbiAgJ0JDSCc6ICdtZGktY3VycmVuY3ktYnRjJyxcXG4gICdCQ0cnOiAnbWRpLWN1cnJlbmN5LWJ0YycsXFxuICAnRVRIJzogJ21kaS1jdXJyZW5jeS1ldGgnLFxcbiAgJ0VUQyc6ICdtZGktY3VycmVuY3ktZXRoJyxcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgcHJvcHM6IHtcXG4gICAgdGl0bGU6IHtcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgZGVmYXVsdDogXFxcIlFvaW5EYW5nZXJcXFwiXFxuICAgIH1cXG4gIH0sXFxuXFxuICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBpc0NvbmZpZ1Nob3duOiB0cnVlLFxcbiAgICAgIGF2YWlsYWJsZU1hcmtldHMsXFxuICAgICAgbWFya2V0czogW10uY29uY2F0KGF2YWlsYWJsZU1hcmtldHMpLFxcbiAgICAgIGN1cnJlbnRDb2luOiAnJyxcXG4gICAgICBjb2luczogW10sXFxuICAgICAgaW5mb3JtYXRpb246ICgoKSA9PiB7XFxuICAgICAgICBjb25zdCByZXQgPSB7fVxcbiAgICAgICAgZm9yKGxldCBtIG9mIGF2YWlsYWJsZU1hcmtldHMpIHJldFttXSA9IHt9XFxuICAgICAgICByZXR1cm4gcmV0XFxuICAgICAgfSkoKSxcXG4gICAgICByZWZlcmVuY2VNYXJrZXQ6ICcnLFxcbiAgICAgIGlzTWVudVNob3duOiBmYWxzZVxcbiAgICB9XFxuICB9LFxcblxcbiAgd2F0Y2g6IHtcXG4gICAgbWFya2V0cyAobSkge1xcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFxcXCJtYXJrZXRzPVxcXCIgKyBlc2NhcGUoSlNPTi5zdHJpbmdpZnkobSkpXFxuICAgIH0sXFxuXFxuICAgIGNvaW5zIChjKSB7XFxuICAgICAgZG9jdW1lbnQuY29va2llID0gXFxcImNvaW5zPVxcXCIgKyBlc2NhcGUoSlNPTi5zdHJpbmdpZnkoYykpXFxuICAgIH1cXG4gIH0sXFxuXFxuICBjb21wdXRlZDoge1xcbiAgICBjb2luQ29sdW1ucyAoKSB7XFxuICAgICAgbGV0IHJldCA9IFtdXFxuICAgICAgZm9yKGxldCBjb2luIG9mIHRoaXMuY29pbnMpIHtcXG4gICAgICAgIHJldC5wdXNoKHtjb2luLCB0eXBlOiAnYXNrJ30pXFxuICAgICAgICByZXQucHVzaCh7Y29pbiwgdHlwZTogJ2JpZCd9KVxcbiAgICAgIH1cXG4gICAgICByZXR1cm4gcmV0XFxuICAgIH0sXFxuICB9LFxcblxcbiAgY3JlYXRlZCAoKSB7XFxuICAgIHRoaXMuJGNvaW5qcyA9IHt9XFxuICAgIHRoaXMuJHdhdGNoID0ge31cXG4gICAgZm9yKGxldCBjIGluIGNvaW5qcykge1xcbiAgICAgIHRoaXMuJGNvaW5qc1tjXSA9IG5ldyBjb2luanNbY10oKVxcbiAgICB9XFxuICB9LFxcblxcbiAgbW91bnRlZCAoKSB7XFxuICAgIGxldCBjb29raWVzID0ge31cXG4gICAgZm9yKGxldCBwYWlyIG9mIGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSkge1xcbiAgICAgIHRyeSB7XFxuICAgICAgICBsZXQgW2EsIGJdID0gcGFpci5zcGxpdCgnPScpXFxuICAgICAgICBjb29raWVzW2FdID0gSlNPTi5wYXJzZSh1bmVzY2FwZShiKSlcXG4gICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgaWYoY29va2llcy5tYXJrZXRzICE9PSB1bmRlZmluZWQpXFxuICAgICAgdGhpcy5tYXJrZXRzID0gY29va2llcy5tYXJrZXRzXFxuICAgIGlmKGNvb2tpZXMuY29pbnMgIT09IHVuZGVmaW5lZCkge1xcbiAgICAgIGZvcihsZXQgY29pbiBvZiBjb29raWVzLmNvaW5zKVxcbiAgICAgICAgdGhpcy5hZGRDb2luKGNvaW4pXFxuICAgIH1cXG4gIH0sXFxuXFxuICBiZWZvcmVEZXN0cm95ICgpIHtcXG4gICAgZm9yKGxldCBjIGluIHRoaXMuJGNvaW5qcykge1xcbiAgICAgIHRoaXMuJGNvaW5qc1tjXS5jbG9zZSgpXFxuICAgIH1cXG4gIH0sXFxuXFxuICBtZXRob2RzOiB7XFxuICAgIHRvZ2dsZU1hcmtldCAobSkge1xcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMubWFya2V0cy5pbmRleE9mKG0pXFxuICAgICAgaWYoaWR4ID09PSAtMSkgdGhpcy5tYXJrZXRzLnB1c2gobSlcXG4gICAgICBlbHNlIHRoaXMubWFya2V0cy5zcGxpY2UoaWR4LCAxKVxcbiAgICB9LFxcbiAgICBhZGRDb2luIChjKSB7XFxuICAgICAgYyA9IGMudG9VcHBlckNhc2UoKVxcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuY29pbnMuaW5kZXhPZihjKVxcbiAgICAgIGlmKGlkeCA9PT0gLTEpIHtcXG4gICAgICAgIGlmKCF0aGlzLiR3YXRjaFtjXSkge1xcbiAgICAgICAgICB0aGlzLiR3YXRjaFtjXSA9IHRydWVcXG4gICAgICAgICAgZm9yKGxldCBtIGluIHRoaXMuJGNvaW5qcykge1xcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmluZm9ybWF0aW9uW21dLCBjLCB7YXNrOiAwLCBiaWQ6IDB9KVxcbiAgICAgICAgICAgIHRoaXMuJGNvaW5qc1ttXS5zdWJzY3JpYmUoYylcXG4gICAgICAgICAgICB0aGlzLiRjb2luanNbbV0ub24oYy50b0xvd2VyQ2FzZSgpLCBlID0+IHtcXG4gICAgICAgICAgICAgIHRoaXMuaW5mb3JtYXRpb25bbV1bY10uYXNrID0gZS5hc2tcXG4gICAgICAgICAgICAgIHRoaXMuaW5mb3JtYXRpb25bbV1bY10uYmlkID0gZS5iaWRcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICB0aGlzLmNvaW5zLnB1c2goYylcXG4gICAgICB9XFxuICAgICAgdGhpcy5jdXJyZW50Q29pbiA9ICcnXFxuICAgIH0sXFxuICAgIHJlbW92ZUNvaW4gKGMpIHtcXG4gICAgICBjb25zdCBpZHggPSB0aGlzLmNvaW5zLmluZGV4T2YoYylcXG4gICAgICBpZihpZHggIT09IC0xKSB0aGlzLmNvaW5zLnNwbGljZShpZHgsIDEpXFxuICAgICAgdGhpcy5jdXJyZW50Q29pbiA9IGNcXG4gICAgfSxcXG4gICAgY3VycmVuY3lJY29uIChjKSB7XFxuICAgICAgcmV0dXJuIGN1cnJlbmN5SWNvbltjLnRvVXBwZXJDYXNlKCldIHx8ICdtZGktY29pbnMnXFxuICAgIH0sXFxuICAgIHJlbGF0aXZlSW5mb3JtYXRpb24gKG1hcmtldCwgY29pbiwgdHApIHtcXG4gICAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VNYXJrZXQgPyB0aGlzLmluZm9ybWF0aW9uW21hcmtldF1bY29pbl1bdHBdIC8gdGhpcy5pbmZvcm1hdGlvblt0aGlzLnJlZmVyZW5jZU1hcmtldF1bY29pbl1bdHBdIDogMVxcbiAgICB9LFxcbiAgICBjdXJyZW5jeUNvbG9yIChpKSB7XFxuICAgICAgcmV0dXJuIGkgPT0gMCA/ICdoYXMtdGV4dC13YXJuaW5nJyA6IChpID4gMCA/ICdoYXMtdGV4dC1zdWNjZXNzJyA6ICdoYXMtdGV4dC1kYW5nZXInKVxcbiAgICB9XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5zZWN0aW9uOmxhc3QtY2hpbGQgeyBoZWlnaHQ6IDEwMHZoOyB9XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWVmNDg5NThcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvYXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbikge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhciBpcy1maXhlZC10b3AgaXMtcHJpbWFyeVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci1icmFuZFwiIH0sIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICAgICAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci1idXJnZXIgYnVyZ2VyXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmlzTWVudVNob3duID0gIV92bS5pc01lbnVTaG93blxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInNwYW5cIiksIF92bS5fdihcIiBcIiksIF9jKFwic3BhblwiKSwgX3ZtLl92KFwiIFwiKSwgX2MoXCJzcGFuXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2YmFyLW1lbnVcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IF92bS5pc01lbnVTaG93biB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl9tKDApXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVybyBpcy1mdWxsaGVpZ2h0IGlzLXByaW1hcnlcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlcm8tYm9keVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwic3VidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgUmVhbHRpbWUgQ29pbiBNb25pdG9yaW5nIFN5c3RlbVxcbiAgICAgICAgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtaW5mbyBpcy1sYXJnZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNtYWluXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgU3RhcnRcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwic2VjdGlvblwiLCBhdHRyczogeyBpZDogXCJtYWluXCIgfSB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5cIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoZWFkZXJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgQ29uZmlnXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlci1pY29uXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiwgXCJhcmlhLWxhYmVsXCI6IFwibW9yZSBvcHRpb25zXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5pc0NvbmZpZ1Nob3duID0gIV92bS5pc0NvbmZpZ1Nob3duXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWRpLWNoZXZyb24tZG93blwiOiAhX3ZtLmlzQ29uZmlnU2hvd24sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1kaS1jaGV2cm9uLXVwXCI6IF92bS5pc0NvbmZpZ1Nob3duXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNDb25maWdTaG93bixcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0NvbmZpZ1Nob3duXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkIGlzLWhvcml6b250YWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQgaXMtZ3JvdXBlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmF2YWlsYWJsZU1hcmtldHMsIGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCB7IGtleTogbSwgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtb3V0bGluZWRcIjogX3ZtLm1hcmtldHMuaW5kZXhPZihtKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZU1hcmtldChtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQgaXMtaG9yaXpvbnRhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWVsZCBpcy1ncm91cGVkIGlzLWdyb3VwZWQtbXVsdGlsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50Q29pbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRDb2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiQ3VycmVuY3lcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jdXJyZW50Q29pbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoXCJidXR0b25cIiBpbiAkZXZlbnQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkQ29pbihfdm0uY3VycmVudENvaW4udHJpbSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRDb2luID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29pbnMsIGZ1bmN0aW9uKGNvaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGNvaW4gKyBcIi10YWdcIiwgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFncyBoYXMtYWRkb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhZyBpcy1zdWNjZXNzIGlzLW1lZGl1bVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1tZWRpdW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmN1cnJlbmN5SWNvbihjb2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGNvaW4pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFnIGlzLW1lZGl1bSBpcy1kZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVtb3ZlQ29pbihjb2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbHVtblwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLmNvaW5zICYmXG4gICAgICAgICAgICBfdm0uY29pbnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgX3ZtLm1hcmtldHMgJiZcbiAgICAgICAgICAgIF92bS5tYXJrZXRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWhvdmVyYWJsZSBpcy1zdHJpcHBlZFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlzLW5hcnJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1hcmtldFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2lucywgZnVuY3Rpb24oY29pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBjb2luICsgXCItaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LWNlbnRlcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtbWVkaXVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uY3VycmVuY3lJY29uKGNvaW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoY29pbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29pbkNvbHVtbnMsIGZ1bmN0aW9uKGNvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogY29sLmNvaW4gKyBcIi1cIiArIGNvbC50eXBlICsgXCItaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoYXMtdGV4dC1jZW50ZXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhjb2wudHlwZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm1hcmtldHMsIGZ1bmN0aW9uKG1hcmtldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBtYXJrZXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtcHJpbWFyeVwiOiBfdm0ucmVmZXJlbmNlTWFya2V0ID09PSBtYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVmZXJlbmNlTWFya2V0ID0gbWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobWFya2V0KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29pbkNvbHVtbnMsIGZ1bmN0aW9uKGNvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBjb2wuY29pbiArIFwiLVwiICsgY29sLnR5cGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg0LCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5mb3JtYXRpb25bbWFya2V0XVtjb2wuY29pbl1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wudHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVmZXJlbmNlTWFya2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZmVyZW5jZU1hcmtldCAhPSBtYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5jdXJyZW5jeUNvbG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVsYXRpdmVJbmZvcm1hdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sLmNvaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbGF0aXZlSW5mb3JtYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbC5jb2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbC50eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJSlcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5tYXJrZXRzICYmIF92bS5tYXJrZXRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgaXMtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJObyBjb2lucyBhcmUgc2VsZWN0ZWQhXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBpcy02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBsZWFzZSBhZGQgY29pbnMgeW91IHdhbnQhXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm8gbWFya2V0cyBhcmUgc2VsZWN0ZWQhXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBpcy02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBsZWFzZSBhZGQgbWFya2V0cyB5b3Ugd2FudCFcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItZW5kXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWl0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWludmVydGVkXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nd2FuZ3lpL2NvaW5qcy12dWVcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWdpdGh1Yi1jaXJjbGVcIiB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJHaXRodWJcIildKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCJNYXJrZXRcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCIgfSwgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIkN1cnJlbmN5XCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLW1lZGl1bSBpcy1sZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1jb2luc1wiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1sZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1jdXJyZW5jeS1rcndcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZWY0ODk1OFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVlZjQ4OTU4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInZ1ZVwiLFwiY29tbW9uanMyXCI6XCJ2dWVcIixcImFtZFwiOlwidnVlXCIsXCJyb290XCI6XCJWdWVcIn1cbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29pbmpzXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=