(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("coinjs"), require("js-interpreter"), require("vue"), require("vue-resource"));
	else if(typeof define === 'function' && define.amd)
		define(["coinjs", "js-interpreter", "vue", "vue-resource"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("coinjs"), require("js-interpreter"), require("vue"), require("vue-resource")) : factory(root["coinjs"], root["Interpreter"], root["Vue"], root["VueResource"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_coinjs__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_coinjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_coinjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_interpreter__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_interpreter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_interpreter__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isMenuShown: false,
      code: '',
      message: '',
      error: '',
      runOnUpdate: '',
      running: false,
      watching: false
    };
  },

  watch: {
    markets(m) {
      document.cookie = "markets=" + escape(JSON.stringify(m));
    },

    coins(c) {
      document.cookie = "coins=" + escape(JSON.stringify(c));
    },

    message(m) {
      this.$emit('message', m);
    },

    code(c) {
      document.cookie = "code=" + escape(JSON.stringify(c));

      try {
        this.$proc = new __WEBPACK_IMPORTED_MODULE_1_js_interpreter___default.a(c, this.prepareInterpreter);
        this.$proc.promise = null;
        this.error = '';
      } catch (err) {
        this.error = err.toString();
      }
    },

    watching(w) {
      if (w) {
        this.$on('information', this.run);
      } else {
        this.$off('information', this.run);
      }
    },

    information: {
      handler(i) {
        this.$emit('information', i);
      },

      deep: true
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

    if (cookies.code !== undefined) {
      this.code = cookies.code;
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
      let rtp = tp === 'ask' ? 'bid' : 'ask';
      return this.referenceMarket ? this.information[market][coin][tp] / this.information[this.referenceMarket][coin][rtp] : 1;
    },

    currencyColor(i) {
      return i == 0 ? 'has-text-warning' : i > 0 ? 'has-text-success' : 'has-text-danger';
    },

    run() {
      let proc = this.$proc;

      const run = () => {
        this.running = true;

        try {
          while (proc.step()) {
            if (proc.promise) {
              proc.promise.then(() => {
                proc.promise = null;
                run();
              }).catch(err => {
                this.message = err.toString();
              });
              return;
            }
          }

          this.running = false;
        } catch (err) {
          this.message = err.toString();
        }
      };

      run();
    },

    prepareInterpreter(interpreter, scope) {
      interpreter.setProperty(scope, 'getInfo', interpreter.createNativeFunction(() => {
        return interpreter.nativeToPseudo(this.information);
      }));
      interpreter.setProperty(scope, 'alert', interpreter.createAsyncFunction((text, callback) => {
        interpreter.promise = new Promise((resolve, reject) => {
          this.message = interpreter.pseudoToNative(text);
          this.$nextTick(() => this.$once('message', () => resolve(callback())));
        });
      }));
      interpreter.setProperty(scope, 'sleep', interpreter.createAsyncFunction((delay, callback) => {
        interpreter.promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            callback();
            resolve();
          }, delay);
        });
      }));
      interpreter.setProperty(scope, 'get', interpreter.createAsyncFunction((url, options, callback) => {
        if (callback === undefined) {
          callback = options;
          options = interpreter.nativeToPseudo(undefined);
        }

        interpreter.promise = new Promise((resolve, reject) => {
          this.$http.get(interpreter.pseudoToNative(url), interpreter.pseudoToNative(options)).then(response => response.text()).then(text => {
            callback(interpreter.nativeToPseudo(text));
            resolve();
          }).catch(reject);
        });
      }));
    }

  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_resource__);



__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_resource___default.a);
var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0__app_vue__["a" /* default */]);
app.$mount('#app');

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef48958_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(11);
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
exports.push([module.i, "\n#main { height: 100vh;\n}\n", "", {"version":3,"sources":["/Users/gwangyi/workspace/coinjs-vue/src/src/app.vue"],"names":[],"mappings":";AAkaA,QAAA,cAAA;CAAA","file":"app.vue","sourcesContent":["<template>\n  <div>\n      <nav class=\"navbar is-fixed-top is-primary\">\n        <div class=\"container\">\n          <div class=\"navbar-brand\">\n            <a class=\"navbar-item\">\n              {{ title }}\n            </a>\n            <span class=\"navbar-burger burger\" @click=\"isMenuShown = !isMenuShown\">\n              <span></span>\n              <span></span>\n              <span></span>\n            </span>\n          </div>\n          <div class=\"navbar-menu\" :class=\"{'is-active': isMenuShown}\">\n            <div class=\"navbar-end\">\n              <span class=\"navbar-item\">\n                <a class=\"button is-primary is-inverted\" href=\"https://github.com/gwangyi/coinjs-vue\">\n                  <span class=\"icon\">\n                    <i class=\"mdi mdi-github-circle\"></i>\n                  </span>\n                  <span>Github</span>\n                </a>\n              </span>\n            </div>\n          </div>\n        </div>\n      </nav>\n    <section class=\"hero is-fullheight is-primary\">\n      <div class=\"hero-body\">\n        <div class=\"container has-text-centered\">\n          <h1 class=\"title\">\n            {{ title }}\n          </h1>\n          <h2 class=\"subtitle\">\n            Realtime Coin Monitoring System\n          </h2>\n          <a href=\"#main\" class=\"button is-info is-large\">\n            Start\n          </a>\n        </div>\n      </div>\n    </section>\n    <section class=\"section\" id=\"main\">\n      <div class=\"container\">\n        <div class=\"column\">\n          <div class=\"card\">\n            <header class=\"card-header\">\n              <p class=\"card-header-title\">\n              Config\n              </p>\n              <a href=\"#\" @click.prevent=\"isConfigShown = !isConfigShown\" class=\"card-header-icon\" aria-label=\"more options\">\n                <span class=\"icon\">\n                  <i class=\"mdi\" :class=\"{'mdi-chevron-down': !isConfigShown, 'mdi-chevron-up': isConfigShown}\" aria-hidden=\"true\"></i>\n                </span>\n              </a>\n            </header>\n            <div v-show=\"isConfigShown\" class=\"card-content\">\n              <div class=\"content\">\n                <div class=\"field is-horizontal\">\n                  <div class=\"field-label is-normal\">\n                    <label class=\"label\">Market</label>\n                  </div>\n                  <div class=\"field-body\">\n                    <div class=\"field is-grouped\">\n                      <p v-for=\"m in availableMarkets\" :key=\"m\" class=\"control\">\n                        <a class=\"button is-link\" :class=\"{'is-outlined': markets.indexOf(m) === -1}\" @click.prevent=\"toggleMarket(m)\">\n                          {{ m }}\n                        </a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"field is-horizontal\">\n                  <div class=\"field-label is-normal\">\n                    <label class=\"label\">Currency</label>\n                  </div>\n                  <div class=\"field-body\">\n                    <div class=\"field is-grouped is-grouped-multiline\">\n                      <p class=\"control has-icons-left\">\n                        <input class=\"input\" type=\"text\" placeholder=\"Currency\" @keyup.space.enter=\"addCoin(currentCoin.trim())\" v-model=\"currentCoin\">\n                        <span class=\"icon is-medium is-left\">\n                          <i class=\"mdi mdi-coins\"></i>\n                        </span>\n                      </p>\n                      <div v-for=\"coin in coins\" :key=\"coin + '-tag'\" class=\"control\">\n                        <div class=\"tags has-addons\">\n                          <span class=\"tag is-success is-medium\">\n                            <span class=\"icon is-medium\">\n                              <i class=\"mdi\" :class=\"currencyIcon(coin)\"></i>\n                            </span>\n                            {{ coin }}\n                          </span>\n                          <a class=\"tag is-medium is-delete\" @click=\"removeCoin(coin)\"></a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"column\">\n          <table v-if=\"coins && coins.length > 0 && markets && markets.length > 0\" class=\"table is-fullwidth is-hoverable is-stripped\">\n            <thead>\n              <tr>\n                <th class=\"is-narrow\" rowspan=\"2\">Market</th>\n                <th v-for=\"coin in coins\" :key=\"coin + '-header'\" colspan=\"2\" class=\"has-text-centered\">\n                  <span class=\"icon is-medium\">\n                    <i class=\"mdi\" :class=\"currencyIcon(coin)\"></i>\n                  </span>\n                  {{ coin }}\n                </th>\n              </tr>\n              <tr>\n                <th v-for=\"col in coinColumns\" :key=\"col.coin + '-' + col.type + '-header'\" class=\"has-text-centered\">{{ col.type }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr v-for=\"market in markets\" :key=\"market\">\n                <th @click=\"referenceMarket = market\" :class=\"{'is-primary': referenceMarket === market}\">{{market}}</th>\n                <td v-for=\"col in coinColumns\" :key=\"col.coin + '-' + col.type\">\n                  <span class=\"icon is-left\">\n                    <i class=\"mdi mdi-currency-krw\"></i>\n                  </span>\n                  <span>{{ information[market][col.coin][col.type].toLocaleString() }}</span>\n                  <span v-if=\"referenceMarket && referenceMarket != market\"\n                        :class=\"currencyColor(relativeInformation(market, col.coin, col.type) - 1)\">\n                    ({{(relativeInformation(market, col.coin, col.type) * 100).toFixed(2) }}%)\n                  </span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <template v-else-if=\"markets && markets.length > 0\">\n            <p class=\"title is-5\">No coins are selected!</p>\n            <p class=\"title is-6\">Please add coins you want!</p>\n          </template>\n          <template v-else>\n            <p class=\"title is-5\">No markets are selected!</p>\n            <p class=\"title is-6\">Please add markets you want!</p>\n          </template>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"column\">\n          <div class=\"field\">\n            <p class=\"control has-icons-right\">\n            <textarea class=\"textarea\" :class=\"{'is-danger': error}\" placeholder=\"Code your script!\" v-model=\"code\"></textarea>\n            <span v-if=\"error\" class=\"icon is-small is-right\">\n              <i class=\"mdi mdi-alert\"></i>\n            </span>\n            </p>\n            <p v-if=\"error\" class=\"help is-danger\">{{error}}</p>\n          </div>\n          <div class=\"field has-addons\">\n            <p class=\"control\">\n            <a class=\"button is-primary\" :class=\"{'is-loading': running}\" @click=\"running || run()\">Run</a>\n            </p>\n            <p class=\"control\">\n            <a class=\"button is-primary\" :class=\"{'is-loading': running, 'is-outlined': !watching}\" @click=\"running || (watching = !watching)\">Watch</a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n    <div class=\"modal\" :class=\"{'is-active': message}\">\n      <div class=\"modal-background\" @click=\"message = ''\"></div>\n      <div class=\"modal-card\">\n        <section class=\"modal-card-body\">\n          {{ message }}\n        </section>\n      </div>\n      <button class=\"modal-close is-large\" aria-label=\"close\" @click=\"message = ''\"></button>\n    </div>\n  </div>\n</template>\n\n<script>\nimport coinjs from 'coinjs'\nimport Interpreter from 'js-interpreter'\n\nconst availableMarkets = Object.keys(coinjs)\n\nconst currencyIcon = {\n  'BTC': 'mdi-currency-btc',\n  'BCC': 'mdi-currency-btc',\n  'BCH': 'mdi-currency-btc',\n  'BCG': 'mdi-currency-btc',\n  'ETH': 'mdi-currency-eth',\n  'ETC': 'mdi-currency-eth',\n}\n\nexport default {\n  props: {\n    title: {\n      type: String,\n      default: \"QoinDanger\"\n    }\n  },\n\n  data () {\n    return {\n      isConfigShown: true,\n      availableMarkets,\n      markets: [].concat(availableMarkets),\n      currentCoin: '',\n      coins: [],\n      information: (() => {\n        const ret = {}\n        for(let m of availableMarkets) ret[m] = {}\n        return ret\n      })(),\n      referenceMarket: '',\n      isMenuShown: false,\n      code: '',\n      message: '',\n      error: '',\n      runOnUpdate: '',\n      running: false,\n      watching: false,\n    }\n  },\n\n  watch: {\n    markets (m) {\n      document.cookie = \"markets=\" + escape(JSON.stringify(m))\n    },\n\n    coins (c) {\n      document.cookie = \"coins=\" + escape(JSON.stringify(c))\n    },\n\n    message (m) {\n      this.$emit('message', m)\n    },\n\n    code (c) {\n      document.cookie = \"code=\" + escape(JSON.stringify(c))\n      try {\n        this.$proc = new Interpreter(c, this.prepareInterpreter)\n        this.$proc.promise = null\n        this.error = ''\n      } catch(err) {\n        this.error = err.toString()\n      }\n    },\n\n    watching (w) {\n      if(w) {\n        this.$on('information', this.run)\n      } else {\n        this.$off('information', this.run)\n      }\n    },\n\n    information: {\n      handler (i) {\n        this.$emit('information', i)\n      },\n      deep: true\n    }\n\n  },\n\n  computed: {\n    coinColumns () {\n      let ret = []\n      for(let coin of this.coins) {\n        ret.push({coin, type: 'ask'})\n        ret.push({coin, type: 'bid'})\n      }\n      return ret\n    },\n  },\n\n  created () {\n    this.$coinjs = {}\n    this.$watch = {}\n    for(let c in coinjs) {\n      this.$coinjs[c] = new coinjs[c]()\n    }\n  },\n\n  mounted () {\n    let cookies = {}\n    for(let pair of document.cookie.split('; ')) {\n      try {\n        let [a, b] = pair.split('=')\n        cookies[a] = JSON.parse(unescape(b))\n      } catch (err) {\n      }\n    }\n\n    if(cookies.markets !== undefined)\n      this.markets = cookies.markets\n    if(cookies.coins !== undefined) {\n      for(let coin of cookies.coins)\n        this.addCoin(coin)\n    }\n    if(cookies.code !== undefined) {\n      this.code = cookies.code\n    }\n  },\n\n  beforeDestroy () {\n    for(let c in this.$coinjs) {\n      this.$coinjs[c].close()\n    }\n  },\n\n  methods: {\n    toggleMarket (m) {\n      const idx = this.markets.indexOf(m)\n      if(idx === -1) this.markets.push(m)\n      else this.markets.splice(idx, 1)\n    },\n    addCoin (c) {\n      c = c.toUpperCase()\n      const idx = this.coins.indexOf(c)\n      if(idx === -1) {\n        if(!this.$watch[c]) {\n          this.$watch[c] = true\n          for(let m in this.$coinjs) {\n            this.$set(this.information[m], c, {ask: 0, bid: 0})\n            this.$coinjs[m].subscribe(c)\n            this.$coinjs[m].on(c.toLowerCase(), e => {\n              this.information[m][c].ask = e.ask\n              this.information[m][c].bid = e.bid\n            })\n          }\n        }\n        this.coins.push(c)\n      }\n      this.currentCoin = ''\n    },\n    removeCoin (c) {\n      const idx = this.coins.indexOf(c)\n      if(idx !== -1) this.coins.splice(idx, 1)\n      this.currentCoin = c\n    },\n    currencyIcon (c) {\n      return currencyIcon[c.toUpperCase()] || 'mdi-coins'\n    },\n    relativeInformation (market, coin, tp) {\n      let rtp = tp === 'ask' ? 'bid' : 'ask'\n      return this.referenceMarket ? this.information[market][coin][tp] / this.information[this.referenceMarket][coin][rtp] : 1\n    },\n    currencyColor (i) {\n      return i == 0 ? 'has-text-warning' : (i > 0 ? 'has-text-success' : 'has-text-danger')\n    },\n    run () {\n      let proc = this.$proc\n\n      const run = () => {\n        this.running = true\n        try {\n          while(proc.step()) {\n            if(proc.promise) {\n              proc.promise.then(() => { proc.promise = null; run() }).catch(err => {\n                this.message = err.toString()\n              })\n              return\n            }\n          }\n          this.running = false\n        } catch(err) {\n          this.message = err.toString()\n        }\n      }\n      run()\n    },\n\n    prepareInterpreter (interpreter, scope) {\n      interpreter.setProperty(scope, 'getInfo',\n        interpreter.createNativeFunction(() => {\n          return interpreter.nativeToPseudo(this.information)\n        }))\n      interpreter.setProperty(scope, 'alert',\n        interpreter.createAsyncFunction((text, callback) => {\n          interpreter.promise = new Promise((resolve, reject) => {\n            this.message = interpreter.pseudoToNative(text)\n            this.$nextTick(() => this.$once('message', () => resolve(callback())))\n          })\n        }))\n      interpreter.setProperty(scope, 'sleep',\n        interpreter.createAsyncFunction((delay, callback) => {\n          interpreter.promise = new Promise((resolve, reject) => {\n            setTimeout(() => {\n              callback()\n              resolve()\n            }, delay)\n          })\n        }))\n      interpreter.setProperty(scope, 'get',\n        interpreter.createAsyncFunction((url, options, callback) => {\n          if(callback === undefined) {\n            callback = options\n            options = interpreter.nativeToPseudo(undefined)\n          }\n          interpreter.promise = new Promise((resolve, reject) => {\n            this.$http.get(interpreter.pseudoToNative(url),\n                           interpreter.pseudoToNative(options))\n              .then(response => response.text())\n              .then(text => {\n                callback(interpreter.nativeToPseudo(text))\n                resolve()\n              }).catch(reject)\n          })\n        }))\n    }\n  }\n}\n</script>\n\n<style>\n#main { height: 100vh; }\n</style>\n"],"sourceRoot":""}]);

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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
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
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("p", { staticClass: "control has-icons-right" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.code,
                    expression: "code"
                  }
                ],
                staticClass: "textarea",
                class: { "is-danger": _vm.error },
                attrs: { placeholder: "Code your script!" },
                domProps: { value: _vm.code },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.code = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _vm.error
                ? _c("span", { staticClass: "icon is-small is-right" }, [
                    _c("i", { staticClass: "mdi mdi-alert" })
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.error
              ? _c("p", { staticClass: "help is-danger" }, [
                  _vm._v(_vm._s(_vm.error))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "field has-addons" }, [
            _c("p", { staticClass: "control" }, [
              _c(
                "a",
                {
                  staticClass: "button is-primary",
                  class: { "is-loading": _vm.running },
                  on: {
                    click: function($event) {
                      _vm.running || _vm.run()
                    }
                  }
                },
                [_vm._v("Run")]
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "control" }, [
              _c(
                "a",
                {
                  staticClass: "button is-primary",
                  class: {
                    "is-loading": _vm.running,
                    "is-outlined": !_vm.watching
                  },
                  on: {
                    click: function($event) {
                      _vm.running || (_vm.watching = !_vm.watching)
                    }
                  }
                },
                [_vm._v("Watch")]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal", class: { "is-active": _vm.message } }, [
      _c("div", {
        staticClass: "modal-background",
        on: {
          click: function($event) {
            _vm.message = ""
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "modal-card" }, [
        _c("section", { staticClass: "modal-card-body" }, [
          _vm._v("\n        " + _vm._s(_vm.message) + "\n      ")
        ])
      ]),
      _vm._v(" "),
      _c("button", {
        staticClass: "modal-close is-large",
        attrs: { "aria-label": "close" },
        on: {
          click: function($event) {
            _vm.message = ""
          }
        }
      })
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
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiYmUyZTFmZDkxMzRmOTYwMjRmNSIsIndlYnBhY2s6Ly8vc3JjL2FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlPzFiNTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC52dWU/OTlmNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2luanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImpzLWludGVycHJldGVyXCIsXCJjb21tb25qczJcIjpcImpzLWludGVycHJldGVyXCIsXCJhbWRcIjpcImpzLWludGVycHJldGVyXCIsXCJyb290XCI6XCJJbnRlcnByZXRlclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnZ1ZT8yOWJjIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwidnVlXCIsXCJjb21tb25qczJcIjpcInZ1ZVwiLFwiYW1kXCI6XCJ2dWVcIixcInJvb3RcIjpcIlZ1ZVwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInZ1ZS1yZXNvdXJjZVwiLFwiY29tbW9uanMyXCI6XCJ2dWUtcmVzb3VyY2VcIixcImFtZFwiOlwidnVlLXJlc291cmNlXCIsXCJyb290XCI6XCJWdWVSZXNvdXJjZVwifSJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJhcHAiLCIkbW91bnQiLCJkaXNwb3NlZCIsImluamVjdFN0eWxlIiwic3NyQ29udGV4dCIsInJlcXVpcmUiLCJub3JtYWxpemVDb21wb25lbnQiLCJfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18iLCJfX3Z1ZV9zdHlsZXNfXyIsIl9fdnVlX3Njb3BlSWRfXyIsIl9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18iLCJDb21wb25lbnQiLCJvcHRpb25zIiwiX19maWxlIiwiaG90QVBJIiwiaW5zdGFsbCIsImNvbXBhdGlibGUiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJkYXRhIiwiY3JlYXRlUmVjb3JkIiwicmVsb2FkIiwiZGlzcG9zZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRCxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUMsdUJBQXVCLHVDQUF1QztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1Q0FBdUM7QUFDN0QsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1Q0FBdUM7QUFDN0QsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3Q0FBd0M7QUFDL0QsZUFBZSwrQkFBK0I7QUFDOUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JELGVBQWUsc0NBQXNDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQzNsQkEsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6ImNvaW5qcy12dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjb2luanNcIiksIHJlcXVpcmUoXCJqcy1pbnRlcnByZXRlclwiKSwgcmVxdWlyZShcInZ1ZVwiKSwgcmVxdWlyZShcInZ1ZS1yZXNvdXJjZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjb2luanNcIiwgXCJqcy1pbnRlcnByZXRlclwiLCBcInZ1ZVwiLCBcInZ1ZS1yZXNvdXJjZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiY29pbmpzXCIpLCByZXF1aXJlKFwianMtaW50ZXJwcmV0ZXJcIiksIHJlcXVpcmUoXCJ2dWVcIiksIHJlcXVpcmUoXCJ2dWUtcmVzb3VyY2VcIikpIDogZmFjdG9yeShyb290W1wiY29pbmpzXCJdLCByb290W1wiSW50ZXJwcmV0ZXJcIl0sIHJvb3RbXCJWdWVcIl0sIHJvb3RbXCJWdWVSZXNvdXJjZVwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmJlMmUxZmQ5MTM0Zjk2MDI0ZjUiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIGlzLWZpeGVkLXRvcCBpcy1wcmltYXJ5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci1idXJnZXIgYnVyZ2VyXCIgQGNsaWNrPVwiaXNNZW51U2hvd24gPSAhaXNNZW51U2hvd25cIj5cbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLW1lbnVcIiA6Y2xhc3M9XCJ7J2lzLWFjdGl2ZSc6IGlzTWVudVNob3dufVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1lbmRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnkgaXMtaW52ZXJ0ZWRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d3YW5neWkvY29pbmpzLXZ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpIG1kaS1naXRodWItY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJoZXJvIGlzLWZ1bGxoZWlnaHQgaXMtcHJpbWFyeVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlcm8tYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgUmVhbHRpbWUgQ29pbiBNb25pdG9yaW5nIFN5c3RlbVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNtYWluXCIgY2xhc3M9XCJidXR0b24gaXMtaW5mbyBpcy1sYXJnZVwiPlxuICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiIGlkPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgIENvbmZpZ1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJpc0NvbmZpZ1Nob3duID0gIWlzQ29uZmlnU2hvd25cIiBjbGFzcz1cImNhcmQtaGVhZGVyLWljb25cIiBhcmlhLWxhYmVsPVwibW9yZSBvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1kaVwiIDpjbGFzcz1cInsnbWRpLWNoZXZyb24tZG93bic6ICFpc0NvbmZpZ1Nob3duLCAnbWRpLWNoZXZyb24tdXAnOiBpc0NvbmZpZ1Nob3dufVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiB2LXNob3c9XCJpc0NvbmZpZ1Nob3duXCIgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPk1hcmtldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1mb3I9XCJtIGluIGF2YWlsYWJsZU1hcmtldHNcIiA6a2V5PVwibVwiIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtbGlua1wiIDpjbGFzcz1cInsnaXMtb3V0bGluZWQnOiBtYXJrZXRzLmluZGV4T2YobSkgPT09IC0xfVwiIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlTWFya2V0KG0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5DdXJyZW5jeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ncm91cGVkIGlzLWdyb3VwZWQtbXVsdGlsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDdXJyZW5jeVwiIEBrZXl1cC5zcGFjZS5lbnRlcj1cImFkZENvaW4oY3VycmVudENvaW4udHJpbSgpKVwiIHYtbW9kZWw9XCJjdXJyZW50Q29pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLW1lZGl1bSBpcy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpIG1kaS1jb2luc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImNvaW4gaW4gY29pbnNcIiA6a2V5PVwiY29pbiArICctdGFnJ1wiIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3MgaGFzLWFkZG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyBpcy1zdWNjZXNzIGlzLW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpXCIgOmNsYXNzPVwiY3VycmVuY3lJY29uKGNvaW4pXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb2luIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0YWcgaXMtbWVkaXVtIGlzLWRlbGV0ZVwiIEBjbGljaz1cInJlbW92ZUNvaW4oY29pbilcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgIDx0YWJsZSB2LWlmPVwiY29pbnMgJiYgY29pbnMubGVuZ3RoID4gMCAmJiBtYXJrZXRzICYmIG1hcmtldHMubGVuZ3RoID4gMFwiIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWhvdmVyYWJsZSBpcy1zdHJpcHBlZFwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiaXMtbmFycm93XCIgcm93c3Bhbj1cIjJcIj5NYXJrZXQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCB2LWZvcj1cImNvaW4gaW4gY29pbnNcIiA6a2V5PVwiY29pbiArICctaGVhZGVyJ1wiIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1kaVwiIDpjbGFzcz1cImN1cnJlbmN5SWNvbihjb2luKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHt7IGNvaW4gfX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHYtZm9yPVwiY29sIGluIGNvaW5Db2x1bW5zXCIgOmtleT1cImNvbC5jb2luICsgJy0nICsgY29sLnR5cGUgKyAnLWhlYWRlcidcIiBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkXCI+e3sgY29sLnR5cGUgfX08L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVwibWFya2V0IGluIG1hcmtldHNcIiA6a2V5PVwibWFya2V0XCI+XG4gICAgICAgICAgICAgICAgPHRoIEBjbGljaz1cInJlZmVyZW5jZU1hcmtldCA9IG1hcmtldFwiIDpjbGFzcz1cInsnaXMtcHJpbWFyeSc6IHJlZmVyZW5jZU1hcmtldCA9PT0gbWFya2V0fVwiPnt7bWFya2V0fX08L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cImNvbCBpbiBjb2luQ29sdW1uc1wiIDprZXk9XCJjb2wuY29pbiArICctJyArIGNvbC50eXBlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1kaSBtZGktY3VycmVuY3kta3J3XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgaW5mb3JtYXRpb25bbWFya2V0XVtjb2wuY29pbl1bY29sLnR5cGVdLnRvTG9jYWxlU3RyaW5nKCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwicmVmZXJlbmNlTWFya2V0ICYmIHJlZmVyZW5jZU1hcmtldCAhPSBtYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiY3VycmVuY3lDb2xvcihyZWxhdGl2ZUluZm9ybWF0aW9uKG1hcmtldCwgY29sLmNvaW4sIGNvbC50eXBlKSAtIDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICh7eyhyZWxhdGl2ZUluZm9ybWF0aW9uKG1hcmtldCwgY29sLmNvaW4sIGNvbC50eXBlKSAqIDEwMCkudG9GaXhlZCgyKSB9fSUpXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwibWFya2V0cyAmJiBtYXJrZXRzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUgaXMtNVwiPk5vIGNvaW5zIGFyZSBzZWxlY3RlZCE8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTZcIj5QbGVhc2UgYWRkIGNvaW5zIHlvdSB3YW50ITwvcD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTVcIj5ObyBtYXJrZXRzIGFyZSBzZWxlY3RlZCE8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTZcIj5QbGVhc2UgYWRkIG1hcmtldHMgeW91IHdhbnQhPC9wPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInRleHRhcmVhXCIgOmNsYXNzPVwieydpcy1kYW5nZXInOiBlcnJvcn1cIiBwbGFjZWhvbGRlcj1cIkNvZGUgeW91ciBzY3JpcHQhXCIgdi1tb2RlbD1cImNvZGVcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cImVycm9yXCIgY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpIG1kaS1hbGVydFwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHYtaWY9XCJlcnJvclwiIGNsYXNzPVwiaGVscCBpcy1kYW5nZXJcIj57e2Vycm9yfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGhhcy1hZGRvbnNcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeVwiIDpjbGFzcz1cInsnaXMtbG9hZGluZyc6IHJ1bm5pbmd9XCIgQGNsaWNrPVwicnVubmluZyB8fCBydW4oKVwiPlJ1bjwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeVwiIDpjbGFzcz1cInsnaXMtbG9hZGluZyc6IHJ1bm5pbmcsICdpcy1vdXRsaW5lZCc6ICF3YXRjaGluZ31cIiBAY2xpY2s9XCJydW5uaW5nIHx8ICh3YXRjaGluZyA9ICF3YXRjaGluZylcIj5XYXRjaDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgOmNsYXNzPVwieydpcy1hY3RpdmUnOiBtZXNzYWdlfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmRcIiBAY2xpY2s9XCJtZXNzYWdlID0gJydcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jYXJkXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtY2FyZC1ib2R5XCI+XG4gICAgICAgICAge3sgbWVzc2FnZSB9fVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbC1jbG9zZSBpcy1sYXJnZVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIEBjbGljaz1cIm1lc3NhZ2UgPSAnJ1wiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgY29pbmpzIGZyb20gJ2NvaW5qcydcbmltcG9ydCBJbnRlcnByZXRlciBmcm9tICdqcy1pbnRlcnByZXRlcidcblxuY29uc3QgYXZhaWxhYmxlTWFya2V0cyA9IE9iamVjdC5rZXlzKGNvaW5qcylcblxuY29uc3QgY3VycmVuY3lJY29uID0ge1xuICAnQlRDJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnQkNDJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnQkNIJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnQkNHJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnRVRIJzogJ21kaS1jdXJyZW5jeS1ldGgnLFxuICAnRVRDJzogJ21kaS1jdXJyZW5jeS1ldGgnLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiUW9pbkRhbmdlclwiXG4gICAgfVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0NvbmZpZ1Nob3duOiB0cnVlLFxuICAgICAgYXZhaWxhYmxlTWFya2V0cyxcbiAgICAgIG1hcmtldHM6IFtdLmNvbmNhdChhdmFpbGFibGVNYXJrZXRzKSxcbiAgICAgIGN1cnJlbnRDb2luOiAnJyxcbiAgICAgIGNvaW5zOiBbXSxcbiAgICAgIGluZm9ybWF0aW9uOiAoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSB7fVxuICAgICAgICBmb3IobGV0IG0gb2YgYXZhaWxhYmxlTWFya2V0cykgcmV0W21dID0ge31cbiAgICAgICAgcmV0dXJuIHJldFxuICAgICAgfSkoKSxcbiAgICAgIHJlZmVyZW5jZU1hcmtldDogJycsXG4gICAgICBpc01lbnVTaG93bjogZmFsc2UsXG4gICAgICBjb2RlOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgZXJyb3I6ICcnLFxuICAgICAgcnVuT25VcGRhdGU6ICcnLFxuICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICB3YXRjaGluZzogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgbWFya2V0cyAobSkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJtYXJrZXRzPVwiICsgZXNjYXBlKEpTT04uc3RyaW5naWZ5KG0pKVxuICAgIH0sXG5cbiAgICBjb2lucyAoYykge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb2lucz1cIiArIGVzY2FwZShKU09OLnN0cmluZ2lmeShjKSlcbiAgICB9LFxuXG4gICAgbWVzc2FnZSAobSkge1xuICAgICAgdGhpcy4kZW1pdCgnbWVzc2FnZScsIG0pXG4gICAgfSxcblxuICAgIGNvZGUgKGMpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29kZT1cIiArIGVzY2FwZShKU09OLnN0cmluZ2lmeShjKSlcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuJHByb2MgPSBuZXcgSW50ZXJwcmV0ZXIoYywgdGhpcy5wcmVwYXJlSW50ZXJwcmV0ZXIpXG4gICAgICAgIHRoaXMuJHByb2MucHJvbWlzZSA9IG51bGxcbiAgICAgICAgdGhpcy5lcnJvciA9ICcnXG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hpbmcgKHcpIHtcbiAgICAgIGlmKHcpIHtcbiAgICAgICAgdGhpcy4kb24oJ2luZm9ybWF0aW9uJywgdGhpcy5ydW4pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRvZmYoJ2luZm9ybWF0aW9uJywgdGhpcy5ydW4pXG4gICAgICB9XG4gICAgfSxcblxuICAgIGluZm9ybWF0aW9uOiB7XG4gICAgICBoYW5kbGVyIChpKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2luZm9ybWF0aW9uJywgaSlcbiAgICAgIH0sXG4gICAgICBkZWVwOiB0cnVlXG4gICAgfVxuXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb2luQ29sdW1ucyAoKSB7XG4gICAgICBsZXQgcmV0ID0gW11cbiAgICAgIGZvcihsZXQgY29pbiBvZiB0aGlzLmNvaW5zKSB7XG4gICAgICAgIHJldC5wdXNoKHtjb2luLCB0eXBlOiAnYXNrJ30pXG4gICAgICAgIHJldC5wdXNoKHtjb2luLCB0eXBlOiAnYmlkJ30pXG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLiRjb2luanMgPSB7fVxuICAgIHRoaXMuJHdhdGNoID0ge31cbiAgICBmb3IobGV0IGMgaW4gY29pbmpzKSB7XG4gICAgICB0aGlzLiRjb2luanNbY10gPSBuZXcgY29pbmpzW2NdKClcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgbGV0IGNvb2tpZXMgPSB7fVxuICAgIGZvcihsZXQgcGFpciBvZiBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBbYSwgYl0gPSBwYWlyLnNwbGl0KCc9JylcbiAgICAgICAgY29va2llc1thXSA9IEpTT04ucGFyc2UodW5lc2NhcGUoYikpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihjb29raWVzLm1hcmtldHMgIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMubWFya2V0cyA9IGNvb2tpZXMubWFya2V0c1xuICAgIGlmKGNvb2tpZXMuY29pbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yKGxldCBjb2luIG9mIGNvb2tpZXMuY29pbnMpXG4gICAgICAgIHRoaXMuYWRkQ29pbihjb2luKVxuICAgIH1cbiAgICBpZihjb29raWVzLmNvZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jb2RlID0gY29va2llcy5jb2RlXG4gICAgfVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIGZvcihsZXQgYyBpbiB0aGlzLiRjb2luanMpIHtcbiAgICAgIHRoaXMuJGNvaW5qc1tjXS5jbG9zZSgpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVNYXJrZXQgKG0pIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMubWFya2V0cy5pbmRleE9mKG0pXG4gICAgICBpZihpZHggPT09IC0xKSB0aGlzLm1hcmtldHMucHVzaChtKVxuICAgICAgZWxzZSB0aGlzLm1hcmtldHMuc3BsaWNlKGlkeCwgMSlcbiAgICB9LFxuICAgIGFkZENvaW4gKGMpIHtcbiAgICAgIGMgPSBjLnRvVXBwZXJDYXNlKClcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuY29pbnMuaW5kZXhPZihjKVxuICAgICAgaWYoaWR4ID09PSAtMSkge1xuICAgICAgICBpZighdGhpcy4kd2F0Y2hbY10pIHtcbiAgICAgICAgICB0aGlzLiR3YXRjaFtjXSA9IHRydWVcbiAgICAgICAgICBmb3IobGV0IG0gaW4gdGhpcy4kY29pbmpzKSB7XG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5pbmZvcm1hdGlvblttXSwgYywge2FzazogMCwgYmlkOiAwfSlcbiAgICAgICAgICAgIHRoaXMuJGNvaW5qc1ttXS5zdWJzY3JpYmUoYylcbiAgICAgICAgICAgIHRoaXMuJGNvaW5qc1ttXS5vbihjLnRvTG93ZXJDYXNlKCksIGUgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmluZm9ybWF0aW9uW21dW2NdLmFzayA9IGUuYXNrXG4gICAgICAgICAgICAgIHRoaXMuaW5mb3JtYXRpb25bbV1bY10uYmlkID0gZS5iaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29pbnMucHVzaChjKVxuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50Q29pbiA9ICcnXG4gICAgfSxcbiAgICByZW1vdmVDb2luIChjKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmNvaW5zLmluZGV4T2YoYylcbiAgICAgIGlmKGlkeCAhPT0gLTEpIHRoaXMuY29pbnMuc3BsaWNlKGlkeCwgMSlcbiAgICAgIHRoaXMuY3VycmVudENvaW4gPSBjXG4gICAgfSxcbiAgICBjdXJyZW5jeUljb24gKGMpIHtcbiAgICAgIHJldHVybiBjdXJyZW5jeUljb25bYy50b1VwcGVyQ2FzZSgpXSB8fCAnbWRpLWNvaW5zJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVJbmZvcm1hdGlvbiAobWFya2V0LCBjb2luLCB0cCkge1xuICAgICAgbGV0IHJ0cCA9IHRwID09PSAnYXNrJyA/ICdiaWQnIDogJ2FzaydcbiAgICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZU1hcmtldCA/IHRoaXMuaW5mb3JtYXRpb25bbWFya2V0XVtjb2luXVt0cF0gLyB0aGlzLmluZm9ybWF0aW9uW3RoaXMucmVmZXJlbmNlTWFya2V0XVtjb2luXVtydHBdIDogMVxuICAgIH0sXG4gICAgY3VycmVuY3lDb2xvciAoaSkge1xuICAgICAgcmV0dXJuIGkgPT0gMCA/ICdoYXMtdGV4dC13YXJuaW5nJyA6IChpID4gMCA/ICdoYXMtdGV4dC1zdWNjZXNzJyA6ICdoYXMtdGV4dC1kYW5nZXInKVxuICAgIH0sXG4gICAgcnVuICgpIHtcbiAgICAgIGxldCBwcm9jID0gdGhpcy4kcHJvY1xuXG4gICAgICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3aGlsZShwcm9jLnN0ZXAoKSkge1xuICAgICAgICAgICAgaWYocHJvYy5wcm9taXNlKSB7XG4gICAgICAgICAgICAgIHByb2MucHJvbWlzZS50aGVuKCgpID0+IHsgcHJvYy5wcm9taXNlID0gbnVsbDsgcnVuKCkgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnIudG9TdHJpbmcoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2VcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnIudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBydW4oKVxuICAgIH0sXG5cbiAgICBwcmVwYXJlSW50ZXJwcmV0ZXIgKGludGVycHJldGVyLCBzY29wZSkge1xuICAgICAgaW50ZXJwcmV0ZXIuc2V0UHJvcGVydHkoc2NvcGUsICdnZXRJbmZvJyxcbiAgICAgICAgaW50ZXJwcmV0ZXIuY3JlYXRlTmF0aXZlRnVuY3Rpb24oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBpbnRlcnByZXRlci5uYXRpdmVUb1BzZXVkbyh0aGlzLmluZm9ybWF0aW9uKVxuICAgICAgICB9KSlcbiAgICAgIGludGVycHJldGVyLnNldFByb3BlcnR5KHNjb3BlLCAnYWxlcnQnLFxuICAgICAgICBpbnRlcnByZXRlci5jcmVhdGVBc3luY0Z1bmN0aW9uKCh0ZXh0LCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgIGludGVycHJldGVyLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBpbnRlcnByZXRlci5wc2V1ZG9Ub05hdGl2ZSh0ZXh0KVxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy4kb25jZSgnbWVzc2FnZScsICgpID0+IHJlc29sdmUoY2FsbGJhY2soKSkpKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pKVxuICAgICAgaW50ZXJwcmV0ZXIuc2V0UHJvcGVydHkoc2NvcGUsICdzbGVlcCcsXG4gICAgICAgIGludGVycHJldGVyLmNyZWF0ZUFzeW5jRnVuY3Rpb24oKGRlbGF5LCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgIGludGVycHJldGVyLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgIH0sIGRlbGF5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pKVxuICAgICAgaW50ZXJwcmV0ZXIuc2V0UHJvcGVydHkoc2NvcGUsICdnZXQnLFxuICAgICAgICBpbnRlcnByZXRlci5jcmVhdGVBc3luY0Z1bmN0aW9uKCh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgaWYoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zXG4gICAgICAgICAgICBvcHRpb25zID0gaW50ZXJwcmV0ZXIubmF0aXZlVG9Qc2V1ZG8odW5kZWZpbmVkKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpbnRlcnByZXRlci5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoaW50ZXJwcmV0ZXIucHNldWRvVG9OYXRpdmUodXJsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJldGVyLnBzZXVkb1RvTmF0aXZlKG9wdGlvbnMpKVxuICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgICAgICAgIC50aGVuKHRleHQgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGludGVycHJldGVyLm5hdGl2ZVRvUHNldWRvKHRleHQpKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuI21haW4geyBoZWlnaHQ6IDEwMHZoOyB9XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAudnVlIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcC52dWUnXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWVSZXNvdXJjZSBmcm9tICd2dWUtcmVzb3VyY2UnXG5cblZ1ZS51c2UoVnVlUmVzb3VyY2UpXG5cbnZhciBhcHAgPSBuZXcgVnVlKEFwcClcbmFwcC4kbW91bnQoJyNhcHAnKVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjQ4OTU4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHAudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXBwLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXBwLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWVmNDg5NThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHAudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9hcHAudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlZjQ4OTU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWVmNDg5NThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC52dWUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWVmNDg5NThcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2FwcC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjAxNDhjYmNkXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjQ4OTU4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHAudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjQ4OTU4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHAudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlZjQ4OTU4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNtYWluIHsgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9nd2FuZ3lpL3dvcmtzcGFjZS9jb2luanMtdnVlL3NyYy9zcmMvYXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBa2FBLFFBQUEsY0FBQTtDQUFBXCIsXCJmaWxlXCI6XCJhcHAudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXY+XFxuICAgICAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIGlzLWZpeGVkLXRvcCBpcy1wcmltYXJ5XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIHt7IHRpdGxlIH19XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJuYXZiYXItYnVyZ2VyIGJ1cmdlclxcXCIgQGNsaWNrPVxcXCJpc01lbnVTaG93biA9ICFpc01lbnVTaG93blxcXCI+XFxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLW1lbnVcXFwiIDpjbGFzcz1cXFwieydpcy1hY3RpdmUnOiBpc01lbnVTaG93bn1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1lbmRcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5hdmJhci1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWludmVydGVkXFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vZ3dhbmd5aS9jb2luanMtdnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWRpIG1kaS1naXRodWItY2lyY2xlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkdpdGh1Yjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvbmF2PlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiaGVybyBpcy1mdWxsaGVpZ2h0IGlzLXByaW1hcnlcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlcm8tYm9keVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICA8aDEgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICB7eyB0aXRsZSB9fVxcbiAgICAgICAgICA8L2gxPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcInN1YnRpdGxlXFxcIj5cXG4gICAgICAgICAgICBSZWFsdGltZSBDb2luIE1vbml0b3JpbmcgU3lzdGVtXFxuICAgICAgICAgIDwvaDI+XFxuICAgICAgICAgIDxhIGhyZWY9XFxcIiNtYWluXFxcIiBjbGFzcz1cXFwiYnV0dG9uIGlzLWluZm8gaXMtbGFyZ2VcXFwiPlxcbiAgICAgICAgICAgIFN0YXJ0XFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uXFxcIiBpZD1cXFwibWFpblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLWhlYWRlci10aXRsZVxcXCI+XFxuICAgICAgICAgICAgICBDb25maWdcXG4gICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIEBjbGljay5wcmV2ZW50PVxcXCJpc0NvbmZpZ1Nob3duID0gIWlzQ29uZmlnU2hvd25cXFwiIGNsYXNzPVxcXCJjYXJkLWhlYWRlci1pY29uXFxcIiBhcmlhLWxhYmVsPVxcXCJtb3JlIG9wdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1kaVxcXCIgOmNsYXNzPVxcXCJ7J21kaS1jaGV2cm9uLWRvd24nOiAhaXNDb25maWdTaG93biwgJ21kaS1jaGV2cm9uLXVwJzogaXNDb25maWdTaG93bn1cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2hlYWRlcj5cXG4gICAgICAgICAgICA8ZGl2IHYtc2hvdz1cXFwiaXNDb25maWdTaG93blxcXCIgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQgaXMtaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiPk1hcmtldDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZCBpcy1ncm91cGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1mb3I9XFxcIm0gaW4gYXZhaWxhYmxlTWFya2V0c1xcXCIgOmtleT1cXFwibVxcXCIgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtbGlua1xcXCIgOmNsYXNzPVxcXCJ7J2lzLW91dGxpbmVkJzogbWFya2V0cy5pbmRleE9mKG0pID09PSAtMX1cXFwiIEBjbGljay5wcmV2ZW50PVxcXCJ0b2dnbGVNYXJrZXQobSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZCBpcy1ob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCI+Q3VycmVuY3k8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQgaXMtZ3JvdXBlZCBpcy1ncm91cGVkLW11bHRpbGluZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiQ3VycmVuY3lcXFwiIEBrZXl1cC5zcGFjZS5lbnRlcj1cXFwiYWRkQ29pbihjdXJyZW50Q29pbi50cmltKCkpXFxcIiB2LW1vZGVsPVxcXCJjdXJyZW50Q29pblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtbWVkaXVtIGlzLWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1kaSBtZGktY29pbnNcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwiY29pbiBpbiBjb2luc1xcXCIgOmtleT1cXFwiY29pbiArICctdGFnJ1xcXCIgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhZ3MgaGFzLWFkZG9uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFnIGlzLXN1Y2Nlc3MgaXMtbWVkaXVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtbWVkaXVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWRpXFxcIiA6Y2xhc3M9XFxcImN1cnJlbmN5SWNvbihjb2luKVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvaW4gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJ0YWcgaXMtbWVkaXVtIGlzLWRlbGV0ZVxcXCIgQGNsaWNrPVxcXCJyZW1vdmVDb2luKGNvaW4pXFxcIj48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgIDx0YWJsZSB2LWlmPVxcXCJjb2lucyAmJiBjb2lucy5sZW5ndGggPiAwICYmIG1hcmtldHMgJiYgbWFya2V0cy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWhvdmVyYWJsZSBpcy1zdHJpcHBlZFxcXCI+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImlzLW5hcnJvd1xcXCIgcm93c3Bhbj1cXFwiMlxcXCI+TWFya2V0PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIHYtZm9yPVxcXCJjb2luIGluIGNvaW5zXFxcIiA6a2V5PVxcXCJjb2luICsgJy1oZWFkZXInXFxcIiBjb2xzcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwiaGFzLXRleHQtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLW1lZGl1bVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWRpXFxcIiA6Y2xhc3M9XFxcImN1cnJlbmN5SWNvbihjb2luKVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjb2luIH19XFxuICAgICAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggdi1mb3I9XFxcImNvbCBpbiBjb2luQ29sdW1uc1xcXCIgOmtleT1cXFwiY29sLmNvaW4gKyAnLScgKyBjb2wudHlwZSArICctaGVhZGVyJ1xcXCIgY2xhc3M9XFxcImhhcy10ZXh0LWNlbnRlcmVkXFxcIj57eyBjb2wudHlwZSB9fTwvdGg+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCJtYXJrZXQgaW4gbWFya2V0c1xcXCIgOmtleT1cXFwibWFya2V0XFxcIj5cXG4gICAgICAgICAgICAgICAgPHRoIEBjbGljaz1cXFwicmVmZXJlbmNlTWFya2V0ID0gbWFya2V0XFxcIiA6Y2xhc3M9XFxcInsnaXMtcHJpbWFyeSc6IHJlZmVyZW5jZU1hcmtldCA9PT0gbWFya2V0fVxcXCI+e3ttYXJrZXR9fTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cXFwiY29sIGluIGNvaW5Db2x1bW5zXFxcIiA6a2V5PVxcXCJjb2wuY29pbiArICctJyArIGNvbC50eXBlXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtZGkgbWRpLWN1cnJlbmN5LWtyd1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57eyBpbmZvcm1hdGlvblttYXJrZXRdW2NvbC5jb2luXVtjb2wudHlwZV0udG9Mb2NhbGVTdHJpbmcoKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJyZWZlcmVuY2VNYXJrZXQgJiYgcmVmZXJlbmNlTWFya2V0ICE9IG1hcmtldFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcImN1cnJlbmN5Q29sb3IocmVsYXRpdmVJbmZvcm1hdGlvbihtYXJrZXQsIGNvbC5jb2luLCBjb2wudHlwZSkgLSAxKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAoe3socmVsYXRpdmVJbmZvcm1hdGlvbihtYXJrZXQsIGNvbC5jb2luLCBjb2wudHlwZSkgKiAxMDApLnRvRml4ZWQoMikgfX0lKVxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cXFwibWFya2V0cyAmJiBtYXJrZXRzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy01XFxcIj5ObyBjb2lucyBhcmUgc2VsZWN0ZWQhPC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy02XFxcIj5QbGVhc2UgYWRkIGNvaW5zIHlvdSB3YW50ITwvcD5cXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGl0bGUgaXMtNVxcXCI+Tm8gbWFya2V0cyBhcmUgc2VsZWN0ZWQhPC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy02XFxcIj5QbGVhc2UgYWRkIG1hcmtldHMgeW91IHdhbnQhPC9wPlxcbiAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwidGV4dGFyZWFcXFwiIDpjbGFzcz1cXFwieydpcy1kYW5nZXInOiBlcnJvcn1cXFwiIHBsYWNlaG9sZGVyPVxcXCJDb2RlIHlvdXIgc2NyaXB0IVxcXCIgdi1tb2RlbD1cXFwiY29kZVxcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJlcnJvclxcXCIgY2xhc3M9XFxcImljb24gaXMtc21hbGwgaXMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1kaSBtZGktYWxlcnRcXFwiPjwvaT5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDxwIHYtaWY9XFxcImVycm9yXFxcIiBjbGFzcz1cXFwiaGVscCBpcy1kYW5nZXJcXFwiPnt7ZXJyb3J9fTwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkIGhhcy1hZGRvbnNcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLXByaW1hcnlcXFwiIDpjbGFzcz1cXFwieydpcy1sb2FkaW5nJzogcnVubmluZ31cXFwiIEBjbGljaz1cXFwicnVubmluZyB8fCBydW4oKVxcXCI+UnVuPC9hPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1wcmltYXJ5XFxcIiA6Y2xhc3M9XFxcInsnaXMtbG9hZGluZyc6IHJ1bm5pbmcsICdpcy1vdXRsaW5lZCc6ICF3YXRjaGluZ31cXFwiIEBjbGljaz1cXFwicnVubmluZyB8fCAod2F0Y2hpbmcgPSAhd2F0Y2hpbmcpXFxcIj5XYXRjaDwvYT5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIDpjbGFzcz1cXFwieydpcy1hY3RpdmUnOiBtZXNzYWdlfVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYmFja2dyb3VuZFxcXCIgQGNsaWNrPVxcXCJtZXNzYWdlID0gJydcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNhcmRcXFwiPlxcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcIm1vZGFsLWNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgIHt7IG1lc3NhZ2UgfX1cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJtb2RhbC1jbG9zZSBpcy1sYXJnZVxcXCIgYXJpYS1sYWJlbD1cXFwiY2xvc2VcXFwiIEBjbGljaz1cXFwibWVzc2FnZSA9ICcnXFxcIj48L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGNvaW5qcyBmcm9tICdjb2luanMnXFxuaW1wb3J0IEludGVycHJldGVyIGZyb20gJ2pzLWludGVycHJldGVyJ1xcblxcbmNvbnN0IGF2YWlsYWJsZU1hcmtldHMgPSBPYmplY3Qua2V5cyhjb2luanMpXFxuXFxuY29uc3QgY3VycmVuY3lJY29uID0ge1xcbiAgJ0JUQyc6ICdtZGktY3VycmVuY3ktYnRjJyxcXG4gICdCQ0MnOiAnbWRpLWN1cnJlbmN5LWJ0YycsXFxuICAnQkNIJzogJ21kaS1jdXJyZW5jeS1idGMnLFxcbiAgJ0JDRyc6ICdtZGktY3VycmVuY3ktYnRjJyxcXG4gICdFVEgnOiAnbWRpLWN1cnJlbmN5LWV0aCcsXFxuICAnRVRDJzogJ21kaS1jdXJyZW5jeS1ldGgnLFxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBwcm9wczoge1xcbiAgICB0aXRsZToge1xcbiAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICBkZWZhdWx0OiBcXFwiUW9pbkRhbmdlclxcXCJcXG4gICAgfVxcbiAgfSxcXG5cXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGlzQ29uZmlnU2hvd246IHRydWUsXFxuICAgICAgYXZhaWxhYmxlTWFya2V0cyxcXG4gICAgICBtYXJrZXRzOiBbXS5jb25jYXQoYXZhaWxhYmxlTWFya2V0cyksXFxuICAgICAgY3VycmVudENvaW46ICcnLFxcbiAgICAgIGNvaW5zOiBbXSxcXG4gICAgICBpbmZvcm1hdGlvbjogKCgpID0+IHtcXG4gICAgICAgIGNvbnN0IHJldCA9IHt9XFxuICAgICAgICBmb3IobGV0IG0gb2YgYXZhaWxhYmxlTWFya2V0cykgcmV0W21dID0ge31cXG4gICAgICAgIHJldHVybiByZXRcXG4gICAgICB9KSgpLFxcbiAgICAgIHJlZmVyZW5jZU1hcmtldDogJycsXFxuICAgICAgaXNNZW51U2hvd246IGZhbHNlLFxcbiAgICAgIGNvZGU6ICcnLFxcbiAgICAgIG1lc3NhZ2U6ICcnLFxcbiAgICAgIGVycm9yOiAnJyxcXG4gICAgICBydW5PblVwZGF0ZTogJycsXFxuICAgICAgcnVubmluZzogZmFsc2UsXFxuICAgICAgd2F0Y2hpbmc6IGZhbHNlLFxcbiAgICB9XFxuICB9LFxcblxcbiAgd2F0Y2g6IHtcXG4gICAgbWFya2V0cyAobSkge1xcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFxcXCJtYXJrZXRzPVxcXCIgKyBlc2NhcGUoSlNPTi5zdHJpbmdpZnkobSkpXFxuICAgIH0sXFxuXFxuICAgIGNvaW5zIChjKSB7XFxuICAgICAgZG9jdW1lbnQuY29va2llID0gXFxcImNvaW5zPVxcXCIgKyBlc2NhcGUoSlNPTi5zdHJpbmdpZnkoYykpXFxuICAgIH0sXFxuXFxuICAgIG1lc3NhZ2UgKG0pIHtcXG4gICAgICB0aGlzLiRlbWl0KCdtZXNzYWdlJywgbSlcXG4gICAgfSxcXG5cXG4gICAgY29kZSAoYykge1xcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFxcXCJjb2RlPVxcXCIgKyBlc2NhcGUoSlNPTi5zdHJpbmdpZnkoYykpXFxuICAgICAgdHJ5IHtcXG4gICAgICAgIHRoaXMuJHByb2MgPSBuZXcgSW50ZXJwcmV0ZXIoYywgdGhpcy5wcmVwYXJlSW50ZXJwcmV0ZXIpXFxuICAgICAgICB0aGlzLiRwcm9jLnByb21pc2UgPSBudWxsXFxuICAgICAgICB0aGlzLmVycm9yID0gJydcXG4gICAgICB9IGNhdGNoKGVycikge1xcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci50b1N0cmluZygpXFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICB3YXRjaGluZyAodykge1xcbiAgICAgIGlmKHcpIHtcXG4gICAgICAgIHRoaXMuJG9uKCdpbmZvcm1hdGlvbicsIHRoaXMucnVuKVxcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLiRvZmYoJ2luZm9ybWF0aW9uJywgdGhpcy5ydW4pXFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBpbmZvcm1hdGlvbjoge1xcbiAgICAgIGhhbmRsZXIgKGkpIHtcXG4gICAgICAgIHRoaXMuJGVtaXQoJ2luZm9ybWF0aW9uJywgaSlcXG4gICAgICB9LFxcbiAgICAgIGRlZXA6IHRydWVcXG4gICAgfVxcblxcbiAgfSxcXG5cXG4gIGNvbXB1dGVkOiB7XFxuICAgIGNvaW5Db2x1bW5zICgpIHtcXG4gICAgICBsZXQgcmV0ID0gW11cXG4gICAgICBmb3IobGV0IGNvaW4gb2YgdGhpcy5jb2lucykge1xcbiAgICAgICAgcmV0LnB1c2goe2NvaW4sIHR5cGU6ICdhc2snfSlcXG4gICAgICAgIHJldC5wdXNoKHtjb2luLCB0eXBlOiAnYmlkJ30pXFxuICAgICAgfVxcbiAgICAgIHJldHVybiByZXRcXG4gICAgfSxcXG4gIH0sXFxuXFxuICBjcmVhdGVkICgpIHtcXG4gICAgdGhpcy4kY29pbmpzID0ge31cXG4gICAgdGhpcy4kd2F0Y2ggPSB7fVxcbiAgICBmb3IobGV0IGMgaW4gY29pbmpzKSB7XFxuICAgICAgdGhpcy4kY29pbmpzW2NdID0gbmV3IGNvaW5qc1tjXSgpXFxuICAgIH1cXG4gIH0sXFxuXFxuICBtb3VudGVkICgpIHtcXG4gICAgbGV0IGNvb2tpZXMgPSB7fVxcbiAgICBmb3IobGV0IHBhaXIgb2YgZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpKSB7XFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGxldCBbYSwgYl0gPSBwYWlyLnNwbGl0KCc9JylcXG4gICAgICAgIGNvb2tpZXNbYV0gPSBKU09OLnBhcnNlKHVuZXNjYXBlKGIpKVxcbiAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBpZihjb29raWVzLm1hcmtldHMgIT09IHVuZGVmaW5lZClcXG4gICAgICB0aGlzLm1hcmtldHMgPSBjb29raWVzLm1hcmtldHNcXG4gICAgaWYoY29va2llcy5jb2lucyAhPT0gdW5kZWZpbmVkKSB7XFxuICAgICAgZm9yKGxldCBjb2luIG9mIGNvb2tpZXMuY29pbnMpXFxuICAgICAgICB0aGlzLmFkZENvaW4oY29pbilcXG4gICAgfVxcbiAgICBpZihjb29raWVzLmNvZGUgIT09IHVuZGVmaW5lZCkge1xcbiAgICAgIHRoaXMuY29kZSA9IGNvb2tpZXMuY29kZVxcbiAgICB9XFxuICB9LFxcblxcbiAgYmVmb3JlRGVzdHJveSAoKSB7XFxuICAgIGZvcihsZXQgYyBpbiB0aGlzLiRjb2luanMpIHtcXG4gICAgICB0aGlzLiRjb2luanNbY10uY2xvc2UoKVxcbiAgICB9XFxuICB9LFxcblxcbiAgbWV0aG9kczoge1xcbiAgICB0b2dnbGVNYXJrZXQgKG0pIHtcXG4gICAgICBjb25zdCBpZHggPSB0aGlzLm1hcmtldHMuaW5kZXhPZihtKVxcbiAgICAgIGlmKGlkeCA9PT0gLTEpIHRoaXMubWFya2V0cy5wdXNoKG0pXFxuICAgICAgZWxzZSB0aGlzLm1hcmtldHMuc3BsaWNlKGlkeCwgMSlcXG4gICAgfSxcXG4gICAgYWRkQ29pbiAoYykge1xcbiAgICAgIGMgPSBjLnRvVXBwZXJDYXNlKClcXG4gICAgICBjb25zdCBpZHggPSB0aGlzLmNvaW5zLmluZGV4T2YoYylcXG4gICAgICBpZihpZHggPT09IC0xKSB7XFxuICAgICAgICBpZighdGhpcy4kd2F0Y2hbY10pIHtcXG4gICAgICAgICAgdGhpcy4kd2F0Y2hbY10gPSB0cnVlXFxuICAgICAgICAgIGZvcihsZXQgbSBpbiB0aGlzLiRjb2luanMpIHtcXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5pbmZvcm1hdGlvblttXSwgYywge2FzazogMCwgYmlkOiAwfSlcXG4gICAgICAgICAgICB0aGlzLiRjb2luanNbbV0uc3Vic2NyaWJlKGMpXFxuICAgICAgICAgICAgdGhpcy4kY29pbmpzW21dLm9uKGMudG9Mb3dlckNhc2UoKSwgZSA9PiB7XFxuICAgICAgICAgICAgICB0aGlzLmluZm9ybWF0aW9uW21dW2NdLmFzayA9IGUuYXNrXFxuICAgICAgICAgICAgICB0aGlzLmluZm9ybWF0aW9uW21dW2NdLmJpZCA9IGUuYmlkXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgdGhpcy5jb2lucy5wdXNoKGMpXFxuICAgICAgfVxcbiAgICAgIHRoaXMuY3VycmVudENvaW4gPSAnJ1xcbiAgICB9LFxcbiAgICByZW1vdmVDb2luIChjKSB7XFxuICAgICAgY29uc3QgaWR4ID0gdGhpcy5jb2lucy5pbmRleE9mKGMpXFxuICAgICAgaWYoaWR4ICE9PSAtMSkgdGhpcy5jb2lucy5zcGxpY2UoaWR4LCAxKVxcbiAgICAgIHRoaXMuY3VycmVudENvaW4gPSBjXFxuICAgIH0sXFxuICAgIGN1cnJlbmN5SWNvbiAoYykge1xcbiAgICAgIHJldHVybiBjdXJyZW5jeUljb25bYy50b1VwcGVyQ2FzZSgpXSB8fCAnbWRpLWNvaW5zJ1xcbiAgICB9LFxcbiAgICByZWxhdGl2ZUluZm9ybWF0aW9uIChtYXJrZXQsIGNvaW4sIHRwKSB7XFxuICAgICAgbGV0IHJ0cCA9IHRwID09PSAnYXNrJyA/ICdiaWQnIDogJ2FzaydcXG4gICAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VNYXJrZXQgPyB0aGlzLmluZm9ybWF0aW9uW21hcmtldF1bY29pbl1bdHBdIC8gdGhpcy5pbmZvcm1hdGlvblt0aGlzLnJlZmVyZW5jZU1hcmtldF1bY29pbl1bcnRwXSA6IDFcXG4gICAgfSxcXG4gICAgY3VycmVuY3lDb2xvciAoaSkge1xcbiAgICAgIHJldHVybiBpID09IDAgPyAnaGFzLXRleHQtd2FybmluZycgOiAoaSA+IDAgPyAnaGFzLXRleHQtc3VjY2VzcycgOiAnaGFzLXRleHQtZGFuZ2VyJylcXG4gICAgfSxcXG4gICAgcnVuICgpIHtcXG4gICAgICBsZXQgcHJvYyA9IHRoaXMuJHByb2NcXG5cXG4gICAgICBjb25zdCBydW4gPSAoKSA9PiB7XFxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlXFxuICAgICAgICB0cnkge1xcbiAgICAgICAgICB3aGlsZShwcm9jLnN0ZXAoKSkge1xcbiAgICAgICAgICAgIGlmKHByb2MucHJvbWlzZSkge1xcbiAgICAgICAgICAgICAgcHJvYy5wcm9taXNlLnRoZW4oKCkgPT4geyBwcm9jLnByb21pc2UgPSBudWxsOyBydW4oKSB9KS5jYXRjaChlcnIgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnIudG9TdHJpbmcoKVxcbiAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgIHJldHVyblxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZVxcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyLnRvU3RyaW5nKClcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgcnVuKClcXG4gICAgfSxcXG5cXG4gICAgcHJlcGFyZUludGVycHJldGVyIChpbnRlcnByZXRlciwgc2NvcGUpIHtcXG4gICAgICBpbnRlcnByZXRlci5zZXRQcm9wZXJ0eShzY29wZSwgJ2dldEluZm8nLFxcbiAgICAgICAgaW50ZXJwcmV0ZXIuY3JlYXRlTmF0aXZlRnVuY3Rpb24oKCkgPT4ge1xcbiAgICAgICAgICByZXR1cm4gaW50ZXJwcmV0ZXIubmF0aXZlVG9Qc2V1ZG8odGhpcy5pbmZvcm1hdGlvbilcXG4gICAgICAgIH0pKVxcbiAgICAgIGludGVycHJldGVyLnNldFByb3BlcnR5KHNjb3BlLCAnYWxlcnQnLFxcbiAgICAgICAgaW50ZXJwcmV0ZXIuY3JlYXRlQXN5bmNGdW5jdGlvbigodGV4dCwgY2FsbGJhY2spID0+IHtcXG4gICAgICAgICAgaW50ZXJwcmV0ZXIucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBpbnRlcnByZXRlci5wc2V1ZG9Ub05hdGl2ZSh0ZXh0KVxcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuJG9uY2UoJ21lc3NhZ2UnLCAoKSA9PiByZXNvbHZlKGNhbGxiYWNrKCkpKSlcXG4gICAgICAgICAgfSlcXG4gICAgICAgIH0pKVxcbiAgICAgIGludGVycHJldGVyLnNldFByb3BlcnR5KHNjb3BlLCAnc2xlZXAnLFxcbiAgICAgICAgaW50ZXJwcmV0ZXIuY3JlYXRlQXN5bmNGdW5jdGlvbigoZGVsYXksIGNhbGxiYWNrKSA9PiB7XFxuICAgICAgICAgIGludGVycHJldGVyLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XFxuICAgICAgICAgICAgICBjYWxsYmFjaygpXFxuICAgICAgICAgICAgICByZXNvbHZlKClcXG4gICAgICAgICAgICB9LCBkZWxheSlcXG4gICAgICAgICAgfSlcXG4gICAgICAgIH0pKVxcbiAgICAgIGludGVycHJldGVyLnNldFByb3BlcnR5KHNjb3BlLCAnZ2V0JyxcXG4gICAgICAgIGludGVycHJldGVyLmNyZWF0ZUFzeW5jRnVuY3Rpb24oKHVybCwgb3B0aW9ucywgY2FsbGJhY2spID0+IHtcXG4gICAgICAgICAgaWYoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICAgIGNhbGxiYWNrID0gb3B0aW9uc1xcbiAgICAgICAgICAgIG9wdGlvbnMgPSBpbnRlcnByZXRlci5uYXRpdmVUb1BzZXVkbyh1bmRlZmluZWQpXFxuICAgICAgICAgIH1cXG4gICAgICAgICAgaW50ZXJwcmV0ZXIucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcXG4gICAgICAgICAgICB0aGlzLiRodHRwLmdldChpbnRlcnByZXRlci5wc2V1ZG9Ub05hdGl2ZSh1cmwpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJldGVyLnBzZXVkb1RvTmF0aXZlKG9wdGlvbnMpKVxcbiAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxcbiAgICAgICAgICAgICAgLnRoZW4odGV4dCA9PiB7XFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGludGVycHJldGVyLm5hdGl2ZVRvUHNldWRvKHRleHQpKVxcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcXG4gICAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdClcXG4gICAgICAgICAgfSlcXG4gICAgICAgIH0pKVxcbiAgICB9XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4jbWFpbiB7IGhlaWdodDogMTAwdmg7IH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWY0ODk1OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9hcHAudnVlXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi9cbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIHZhciBmdW5jdGlvbmFsID0gb3B0aW9ucy5mdW5jdGlvbmFsXG4gICAgdmFyIGV4aXN0aW5nID0gZnVuY3Rpb25hbFxuICAgICAgPyBvcHRpb25zLnJlbmRlclxuICAgICAgOiBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuXG4gICAgaWYgKCFmdW5jdGlvbmFsKSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2luanNcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwianMtaW50ZXJwcmV0ZXJcIixcImNvbW1vbmpzMlwiOlwianMtaW50ZXJwcmV0ZXJcIixcImFtZFwiOlwianMtaW50ZXJwcmV0ZXJcIixcInJvb3RcIjpcIkludGVycHJldGVyXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhciBpcy1maXhlZC10b3AgaXMtcHJpbWFyeVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci1icmFuZFwiIH0sIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICAgICAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci1idXJnZXIgYnVyZ2VyXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmlzTWVudVNob3duID0gIV92bS5pc01lbnVTaG93blxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInNwYW5cIiksIF92bS5fdihcIiBcIiksIF9jKFwic3BhblwiKSwgX3ZtLl92KFwiIFwiKSwgX2MoXCJzcGFuXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2YmFyLW1lbnVcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IF92bS5pc01lbnVTaG93biB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl9tKDApXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVybyBpcy1mdWxsaGVpZ2h0IGlzLXByaW1hcnlcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlcm8tYm9keVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwic3VidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgUmVhbHRpbWUgQ29pbiBNb25pdG9yaW5nIFN5c3RlbVxcbiAgICAgICAgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtaW5mbyBpcy1sYXJnZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNtYWluXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgU3RhcnRcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwic2VjdGlvblwiLCBhdHRyczogeyBpZDogXCJtYWluXCIgfSB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5cIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoZWFkZXJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgQ29uZmlnXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlci1pY29uXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiwgXCJhcmlhLWxhYmVsXCI6IFwibW9yZSBvcHRpb25zXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5pc0NvbmZpZ1Nob3duID0gIV92bS5pc0NvbmZpZ1Nob3duXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWRpLWNoZXZyb24tZG93blwiOiAhX3ZtLmlzQ29uZmlnU2hvd24sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1kaS1jaGV2cm9uLXVwXCI6IF92bS5pc0NvbmZpZ1Nob3duXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNDb25maWdTaG93bixcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0NvbmZpZ1Nob3duXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkIGlzLWhvcml6b250YWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQgaXMtZ3JvdXBlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmF2YWlsYWJsZU1hcmtldHMsIGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCB7IGtleTogbSwgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtb3V0bGluZWRcIjogX3ZtLm1hcmtldHMuaW5kZXhPZihtKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZU1hcmtldChtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQgaXMtaG9yaXpvbnRhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWVsZCBpcy1ncm91cGVkIGlzLWdyb3VwZWQtbXVsdGlsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50Q29pbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRDb2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiQ3VycmVuY3lcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jdXJyZW50Q29pbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoXCJidXR0b25cIiBpbiAkZXZlbnQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkQ29pbihfdm0uY3VycmVudENvaW4udHJpbSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRDb2luID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29pbnMsIGZ1bmN0aW9uKGNvaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGNvaW4gKyBcIi10YWdcIiwgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFncyBoYXMtYWRkb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhZyBpcy1zdWNjZXNzIGlzLW1lZGl1bVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1tZWRpdW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmN1cnJlbmN5SWNvbihjb2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGNvaW4pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFnIGlzLW1lZGl1bSBpcy1kZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVtb3ZlQ29pbihjb2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbHVtblwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLmNvaW5zICYmXG4gICAgICAgICAgICBfdm0uY29pbnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgX3ZtLm1hcmtldHMgJiZcbiAgICAgICAgICAgIF92bS5tYXJrZXRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWhvdmVyYWJsZSBpcy1zdHJpcHBlZFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlzLW5hcnJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1hcmtldFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2lucywgZnVuY3Rpb24oY29pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBjb2luICsgXCItaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LWNlbnRlcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtbWVkaXVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uY3VycmVuY3lJY29uKGNvaW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoY29pbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29pbkNvbHVtbnMsIGZ1bmN0aW9uKGNvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogY29sLmNvaW4gKyBcIi1cIiArIGNvbC50eXBlICsgXCItaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoYXMtdGV4dC1jZW50ZXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhjb2wudHlwZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm1hcmtldHMsIGZ1bmN0aW9uKG1hcmtldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBtYXJrZXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtcHJpbWFyeVwiOiBfdm0ucmVmZXJlbmNlTWFya2V0ID09PSBtYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVmZXJlbmNlTWFya2V0ID0gbWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobWFya2V0KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29pbkNvbHVtbnMsIGZ1bmN0aW9uKGNvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBjb2wuY29pbiArIFwiLVwiICsgY29sLnR5cGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg0LCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5mb3JtYXRpb25bbWFya2V0XVtjb2wuY29pbl1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wudHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVmZXJlbmNlTWFya2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZmVyZW5jZU1hcmtldCAhPSBtYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5jdXJyZW5jeUNvbG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVsYXRpdmVJbmZvcm1hdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sLmNvaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbGF0aXZlSW5mb3JtYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbC5jb2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbC50eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJSlcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5tYXJrZXRzICYmIF92bS5tYXJrZXRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgaXMtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJObyBjb2lucyBhcmUgc2VsZWN0ZWQhXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBpcy02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBsZWFzZSBhZGQgY29pbnMgeW91IHdhbnQhXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm8gbWFya2V0cyBhcmUgc2VsZWN0ZWQhXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBpcy02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBsZWFzZSBhZGQgbWFya2V0cyB5b3Ugd2FudCFcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1pY29ucy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29kZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtZGFuZ2VyXCI6IF92bS5lcnJvciB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIkNvZGUgeW91ciBzY3JpcHQhXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvZGUgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uY29kZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZXJyb3JcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktYWxlcnRcIiB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uZXJyb3JcbiAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJoZWxwIGlzLWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkIGhhcy1hZGRvbnNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1sb2FkaW5nXCI6IF92bS5ydW5uaW5nIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJ1bm5pbmcgfHwgX3ZtLnJ1bigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSdW5cIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBcImlzLWxvYWRpbmdcIjogX3ZtLnJ1bm5pbmcsXG4gICAgICAgICAgICAgICAgICAgIFwiaXMtb3V0bGluZWRcIjogIV92bS53YXRjaGluZ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucnVubmluZyB8fCAoX3ZtLndhdGNoaW5nID0gIV92bS53YXRjaGluZylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIldhdGNoXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbFwiLCBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0ubWVzc2FnZSB9IH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYmFja2dyb3VuZFwiLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5tZXNzYWdlID0gXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jYXJkXCIgfSwgW1xuICAgICAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0ubWVzc2FnZSkgKyBcIlxcbiAgICAgIFwiKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJidXR0b25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jbG9zZSBpcy1sYXJnZVwiLFxuICAgICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJjbG9zZVwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLm1lc3NhZ2UgPSBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci1lbmRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXByaW1hcnkgaXMtaW52ZXJ0ZWRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2d3YW5neWkvY29pbmpzLXZ1ZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktZ2l0aHViLWNpcmNsZVwiIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkdpdGh1YlwiKV0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCIgfSwgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIk1hcmtldFwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwiQ3VycmVuY3lcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtbWVkaXVtIGlzLWxlZnRcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWNvaW5zXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLWxlZnRcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWN1cnJlbmN5LWtyd1wiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlZjQ4OTU4XCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWVmNDg5NThcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvYXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInZ1ZVwiLFwiY29tbW9uanMyXCI6XCJ2dWVcIixcImFtZFwiOlwidnVlXCIsXCJyb290XCI6XCJWdWVcIn1cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ2dWUtcmVzb3VyY2VcIixcImNvbW1vbmpzMlwiOlwidnVlLXJlc291cmNlXCIsXCJhbWRcIjpcInZ1ZS1yZXNvdXJjZVwiLFwicm9vdFwiOlwiVnVlUmVzb3VyY2VcIn1cbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=