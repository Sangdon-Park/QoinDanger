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
exports.push([module.i, "\nsection:last-child { height: 100vh;\n}\n", "", {"version":3,"sources":["/Users/gwangyi/workspace/coinjs-vue/src/src/app.vue"],"names":[],"mappings":";AAkaA,qBAAA,cAAA;CAAA","file":"app.vue","sourcesContent":["<template>\n  <div>\n      <nav class=\"navbar is-fixed-top is-primary\">\n        <div class=\"container\">\n          <div class=\"navbar-brand\">\n            <a class=\"navbar-item\">\n              {{ title }}\n            </a>\n            <span class=\"navbar-burger burger\" @click=\"isMenuShown = !isMenuShown\">\n              <span></span>\n              <span></span>\n              <span></span>\n            </span>\n          </div>\n          <div class=\"navbar-menu\" :class=\"{'is-active': isMenuShown}\">\n            <div class=\"navbar-end\">\n              <span class=\"navbar-item\">\n                <a class=\"button is-primary is-inverted\" href=\"https://github.com/gwangyi/coinjs-vue\">\n                  <span class=\"icon\">\n                    <i class=\"mdi mdi-github-circle\"></i>\n                  </span>\n                  <span>Github</span>\n                </a>\n              </span>\n            </div>\n          </div>\n        </div>\n      </nav>\n    <section class=\"hero is-fullheight is-primary\">\n      <div class=\"hero-body\">\n        <div class=\"container has-text-centered\">\n          <h1 class=\"title\">\n            {{ title }}\n          </h1>\n          <h2 class=\"subtitle\">\n            Realtime Coin Monitoring System\n          </h2>\n          <a href=\"#main\" class=\"button is-info is-large\">\n            Start\n          </a>\n        </div>\n      </div>\n    </section>\n    <section class=\"section\" id=\"main\">\n      <div class=\"container\">\n        <div class=\"column\">\n          <div class=\"card\">\n            <header class=\"card-header\">\n              <p class=\"card-header-title\">\n              Config\n              </p>\n              <a href=\"#\" @click.prevent=\"isConfigShown = !isConfigShown\" class=\"card-header-icon\" aria-label=\"more options\">\n                <span class=\"icon\">\n                  <i class=\"mdi\" :class=\"{'mdi-chevron-down': !isConfigShown, 'mdi-chevron-up': isConfigShown}\" aria-hidden=\"true\"></i>\n                </span>\n              </a>\n            </header>\n            <div v-show=\"isConfigShown\" class=\"card-content\">\n              <div class=\"content\">\n                <div class=\"field is-horizontal\">\n                  <div class=\"field-label is-normal\">\n                    <label class=\"label\">Market</label>\n                  </div>\n                  <div class=\"field-body\">\n                    <div class=\"field is-grouped\">\n                      <p v-for=\"m in availableMarkets\" :key=\"m\" class=\"control\">\n                        <a class=\"button is-link\" :class=\"{'is-outlined': markets.indexOf(m) === -1}\" @click.prevent=\"toggleMarket(m)\">\n                          {{ m }}\n                        </a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"field is-horizontal\">\n                  <div class=\"field-label is-normal\">\n                    <label class=\"label\">Currency</label>\n                  </div>\n                  <div class=\"field-body\">\n                    <div class=\"field is-grouped is-grouped-multiline\">\n                      <p class=\"control has-icons-left\">\n                        <input class=\"input\" type=\"text\" placeholder=\"Currency\" @keyup.space.enter=\"addCoin(currentCoin.trim())\" v-model=\"currentCoin\">\n                        <span class=\"icon is-medium is-left\">\n                          <i class=\"mdi mdi-coins\"></i>\n                        </span>\n                      </p>\n                      <div v-for=\"coin in coins\" :key=\"coin + '-tag'\" class=\"control\">\n                        <div class=\"tags has-addons\">\n                          <span class=\"tag is-success is-medium\">\n                            <span class=\"icon is-medium\">\n                              <i class=\"mdi\" :class=\"currencyIcon(coin)\"></i>\n                            </span>\n                            {{ coin }}\n                          </span>\n                          <a class=\"tag is-medium is-delete\" @click=\"removeCoin(coin)\"></a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"column\">\n          <table v-if=\"coins && coins.length > 0 && markets && markets.length > 0\" class=\"table is-fullwidth is-hoverable is-stripped\">\n            <thead>\n              <tr>\n                <th class=\"is-narrow\" rowspan=\"2\">Market</th>\n                <th v-for=\"coin in coins\" :key=\"coin + '-header'\" colspan=\"2\" class=\"has-text-centered\">\n                  <span class=\"icon is-medium\">\n                    <i class=\"mdi\" :class=\"currencyIcon(coin)\"></i>\n                  </span>\n                  {{ coin }}\n                </th>\n              </tr>\n              <tr>\n                <th v-for=\"col in coinColumns\" :key=\"col.coin + '-' + col.type + '-header'\" class=\"has-text-centered\">{{ col.type }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr v-for=\"market in markets\" :key=\"market\">\n                <th @click=\"referenceMarket = market\" :class=\"{'is-primary': referenceMarket === market}\">{{market}}</th>\n                <td v-for=\"col in coinColumns\" :key=\"col.coin + '-' + col.type\">\n                  <span class=\"icon is-left\">\n                    <i class=\"mdi mdi-currency-krw\"></i>\n                  </span>\n                  <span>{{ information[market][col.coin][col.type].toLocaleString() }}</span>\n                  <span v-if=\"referenceMarket && referenceMarket != market\"\n                        :class=\"currencyColor(relativeInformation(market, col.coin, col.type) - 1)\">\n                    ({{(relativeInformation(market, col.coin, col.type) * 100).toFixed(2) }}%)\n                  </span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <template v-else-if=\"markets && markets.length > 0\">\n            <p class=\"title is-5\">No coins are selected!</p>\n            <p class=\"title is-6\">Please add coins you want!</p>\n          </template>\n          <template v-else>\n            <p class=\"title is-5\">No markets are selected!</p>\n            <p class=\"title is-6\">Please add markets you want!</p>\n          </template>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"column\">\n          <div class=\"field\">\n            <p class=\"control has-icons-right\">\n            <textarea class=\"textarea\" :class=\"{'is-danger': error}\" placeholder=\"Code your script!\" v-model=\"code\"></textarea>\n            <span v-if=\"error\" class=\"icon is-small is-right\">\n              <i class=\"mdi mdi-alert\"></i>\n            </span>\n            </p>\n            <p v-if=\"error\" class=\"help is-danger\">{{error}}</p>\n          </div>\n          <div class=\"field has-addons\">\n            <p class=\"control\">\n            <a class=\"button is-primary\" :class=\"{'is-loading': running}\" @click=\"running || run()\">Run</a>\n            </p>\n            <p class=\"control\">\n            <a class=\"button is-primary\" :class=\"{'is-loading': running, 'is-outlined': !watching}\" @click=\"running || (watching = !watching)\">Watch</a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n    <div class=\"modal\" :class=\"{'is-active': message}\">\n      <div class=\"modal-background\" @click=\"message = ''\"></div>\n      <div class=\"modal-card\">\n        <section class=\"modal-card-body\">\n          {{ message }}\n        </section>\n      </div>\n      <button class=\"modal-close is-large\" aria-label=\"close\" @click=\"message = ''\"></button>\n    </div>\n  </div>\n</template>\n\n<script>\nimport coinjs from 'coinjs'\nimport Interpreter from 'js-interpreter'\n\nconst availableMarkets = Object.keys(coinjs)\n\nconst currencyIcon = {\n  'BTC': 'mdi-currency-btc',\n  'BCC': 'mdi-currency-btc',\n  'BCH': 'mdi-currency-btc',\n  'BCG': 'mdi-currency-btc',\n  'ETH': 'mdi-currency-eth',\n  'ETC': 'mdi-currency-eth',\n}\n\nexport default {\n  props: {\n    title: {\n      type: String,\n      default: \"QoinDanger\"\n    }\n  },\n\n  data () {\n    return {\n      isConfigShown: true,\n      availableMarkets,\n      markets: [].concat(availableMarkets),\n      currentCoin: '',\n      coins: [],\n      information: (() => {\n        const ret = {}\n        for(let m of availableMarkets) ret[m] = {}\n        return ret\n      })(),\n      referenceMarket: '',\n      isMenuShown: false,\n      code: '',\n      message: '',\n      error: '',\n      runOnUpdate: '',\n      running: false,\n      watching: false,\n    }\n  },\n\n  watch: {\n    markets (m) {\n      document.cookie = \"markets=\" + escape(JSON.stringify(m))\n    },\n\n    coins (c) {\n      document.cookie = \"coins=\" + escape(JSON.stringify(c))\n    },\n\n    message (m) {\n      this.$emit('message', m)\n    },\n\n    code (c) {\n      document.cookie = \"code=\" + escape(JSON.stringify(c))\n      try {\n        this.$proc = new Interpreter(c, this.prepareInterpreter)\n        this.$proc.promise = null\n        this.error = ''\n      } catch(err) {\n        this.error = err.toString()\n      }\n    },\n\n    watching (w) {\n      if(w) {\n        this.$on('information', this.run)\n      } else {\n        this.$off('information', this.run)\n      }\n    },\n\n    information: {\n      handler (i) {\n        this.$emit('information', i)\n      },\n      deep: true\n    }\n\n  },\n\n  computed: {\n    coinColumns () {\n      let ret = []\n      for(let coin of this.coins) {\n        ret.push({coin, type: 'ask'})\n        ret.push({coin, type: 'bid'})\n      }\n      return ret\n    },\n  },\n\n  created () {\n    this.$coinjs = {}\n    this.$watch = {}\n    for(let c in coinjs) {\n      this.$coinjs[c] = new coinjs[c]()\n    }\n  },\n\n  mounted () {\n    let cookies = {}\n    for(let pair of document.cookie.split('; ')) {\n      try {\n        let [a, b] = pair.split('=')\n        cookies[a] = JSON.parse(unescape(b))\n      } catch (err) {\n      }\n    }\n\n    if(cookies.markets !== undefined)\n      this.markets = cookies.markets\n    if(cookies.coins !== undefined) {\n      for(let coin of cookies.coins)\n        this.addCoin(coin)\n    }\n    if(cookies.code !== undefined) {\n      this.code = cookies.code\n    }\n  },\n\n  beforeDestroy () {\n    for(let c in this.$coinjs) {\n      this.$coinjs[c].close()\n    }\n  },\n\n  methods: {\n    toggleMarket (m) {\n      const idx = this.markets.indexOf(m)\n      if(idx === -1) this.markets.push(m)\n      else this.markets.splice(idx, 1)\n    },\n    addCoin (c) {\n      c = c.toUpperCase()\n      const idx = this.coins.indexOf(c)\n      if(idx === -1) {\n        if(!this.$watch[c]) {\n          this.$watch[c] = true\n          for(let m in this.$coinjs) {\n            this.$set(this.information[m], c, {ask: 0, bid: 0})\n            this.$coinjs[m].subscribe(c)\n            this.$coinjs[m].on(c.toLowerCase(), e => {\n              this.information[m][c].ask = e.ask\n              this.information[m][c].bid = e.bid\n            })\n          }\n        }\n        this.coins.push(c)\n      }\n      this.currentCoin = ''\n    },\n    removeCoin (c) {\n      const idx = this.coins.indexOf(c)\n      if(idx !== -1) this.coins.splice(idx, 1)\n      this.currentCoin = c\n    },\n    currencyIcon (c) {\n      return currencyIcon[c.toUpperCase()] || 'mdi-coins'\n    },\n    relativeInformation (market, coin, tp) {\n      let rtp = tp === 'ask' ? 'bid' : 'ask'\n      return this.referenceMarket ? this.information[market][coin][tp] / this.information[this.referenceMarket][coin][rtp] : 1\n    },\n    currencyColor (i) {\n      return i == 0 ? 'has-text-warning' : (i > 0 ? 'has-text-success' : 'has-text-danger')\n    },\n    run () {\n      let proc = this.$proc\n\n      const run = () => {\n        this.running = true\n        try {\n          while(proc.step()) {\n            if(proc.promise) {\n              proc.promise.then(() => { proc.promise = null; run() }).catch(err => {\n                this.message = err.toString()\n              })\n              return\n            }\n          }\n          this.running = false\n        } catch(err) {\n          this.message = err.toString()\n        }\n      }\n      run()\n    },\n\n    prepareInterpreter (interpreter, scope) {\n      interpreter.setProperty(scope, 'getInfo',\n        interpreter.createNativeFunction(() => {\n          return interpreter.nativeToPseudo(this.information)\n        }))\n      interpreter.setProperty(scope, 'alert',\n        interpreter.createAsyncFunction((text, callback) => {\n          interpreter.promise = new Promise((resolve, reject) => {\n            this.message = interpreter.pseudoToNative(text)\n            this.$nextTick(() => this.$once('message', () => resolve(callback())))\n          })\n        }))\n      interpreter.setProperty(scope, 'sleep',\n        interpreter.createAsyncFunction((delay, callback) => {\n          interpreter.promise = new Promise((resolve, reject) => {\n            setTimeout(() => {\n              callback()\n              resolve()\n            }, delay)\n          })\n        }))\n      interpreter.setProperty(scope, 'get',\n        interpreter.createAsyncFunction((url, options, callback) => {\n          if(callback === undefined) {\n            callback = options\n            options = interpreter.nativeToPseudo(undefined)\n          }\n          interpreter.promise = new Promise((resolve, reject) => {\n            this.$http.get(interpreter.pseudoToNative(url),\n                           interpreter.pseudoToNative(options))\n              .then(response => response.text())\n              .then(text => {\n                callback(interpreter.nativeToPseudo(text))\n                resolve()\n              }).catch(reject)\n          })\n        }))\n    }\n  }\n}\n</script>\n\n<style>\nsection:last-child { height: 100vh; }\n</style>\n"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5YTdjZTczY2IwN2IyOTc4YmRjOSIsIndlYnBhY2s6Ly8vc3JjL2FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlIiwid2VicGFjazovLy8uL3NyYy9hcHAudnVlPzFiNTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC52dWU/OTlmNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2luanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImpzLWludGVycHJldGVyXCIsXCJjb21tb25qczJcIjpcImpzLWludGVycHJldGVyXCIsXCJhbWRcIjpcImpzLWludGVycHJldGVyXCIsXCJyb290XCI6XCJJbnRlcnByZXRlclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnZ1ZT8yOWJjIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwidnVlXCIsXCJjb21tb25qczJcIjpcInZ1ZVwiLFwiYW1kXCI6XCJ2dWVcIixcInJvb3RcIjpcIlZ1ZVwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInZ1ZS1yZXNvdXJjZVwiLFwiY29tbW9uanMyXCI6XCJ2dWUtcmVzb3VyY2VcIixcImFtZFwiOlwidnVlLXJlc291cmNlXCIsXCJyb290XCI6XCJWdWVSZXNvdXJjZVwifSJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJhcHAiLCIkbW91bnQiLCJkaXNwb3NlZCIsImluamVjdFN0eWxlIiwic3NyQ29udGV4dCIsInJlcXVpcmUiLCJub3JtYWxpemVDb21wb25lbnQiLCJfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18iLCJfX3Z1ZV9zdHlsZXNfXyIsIl9fdnVlX3Njb3BlSWRfXyIsIl9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18iLCJDb21wb25lbnQiLCJvcHRpb25zIiwiX19maWxlIiwiaG90QVBJIiwiaW5zdGFsbCIsImNvbXBhdGlibGUiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJkYXRhIiwiY3JlYXRlUmVjb3JkIiwicmVsb2FkIiwiZGlzcG9zZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRCxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUMsdUJBQXVCLHVDQUF1QztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1Q0FBdUM7QUFDN0QsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1Q0FBdUM7QUFDN0QsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3Q0FBd0M7QUFDL0QsZUFBZSwrQkFBK0I7QUFDOUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JELGVBQWUsc0NBQXNDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQzNsQkEsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6ImNvaW5qcy12dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjb2luanNcIiksIHJlcXVpcmUoXCJqcy1pbnRlcnByZXRlclwiKSwgcmVxdWlyZShcInZ1ZVwiKSwgcmVxdWlyZShcInZ1ZS1yZXNvdXJjZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjb2luanNcIiwgXCJqcy1pbnRlcnByZXRlclwiLCBcInZ1ZVwiLCBcInZ1ZS1yZXNvdXJjZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiY29pbmpzXCIpLCByZXF1aXJlKFwianMtaW50ZXJwcmV0ZXJcIiksIHJlcXVpcmUoXCJ2dWVcIiksIHJlcXVpcmUoXCJ2dWUtcmVzb3VyY2VcIikpIDogZmFjdG9yeShyb290W1wiY29pbmpzXCJdLCByb290W1wiSW50ZXJwcmV0ZXJcIl0sIHJvb3RbXCJWdWVcIl0sIHJvb3RbXCJWdWVSZXNvdXJjZVwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWE3Y2U3M2NiMDdiMjk3OGJkYzkiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIGlzLWZpeGVkLXRvcCBpcy1wcmltYXJ5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci1idXJnZXIgYnVyZ2VyXCIgQGNsaWNrPVwiaXNNZW51U2hvd24gPSAhaXNNZW51U2hvd25cIj5cbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLW1lbnVcIiA6Y2xhc3M9XCJ7J2lzLWFjdGl2ZSc6IGlzTWVudVNob3dufVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1lbmRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnkgaXMtaW52ZXJ0ZWRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d3YW5neWkvY29pbmpzLXZ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpIG1kaS1naXRodWItY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJoZXJvIGlzLWZ1bGxoZWlnaHQgaXMtcHJpbWFyeVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlcm8tYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgUmVhbHRpbWUgQ29pbiBNb25pdG9yaW5nIFN5c3RlbVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNtYWluXCIgY2xhc3M9XCJidXR0b24gaXMtaW5mbyBpcy1sYXJnZVwiPlxuICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiIGlkPVwibWFpblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgIENvbmZpZ1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJpc0NvbmZpZ1Nob3duID0gIWlzQ29uZmlnU2hvd25cIiBjbGFzcz1cImNhcmQtaGVhZGVyLWljb25cIiBhcmlhLWxhYmVsPVwibW9yZSBvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1kaVwiIDpjbGFzcz1cInsnbWRpLWNoZXZyb24tZG93bic6ICFpc0NvbmZpZ1Nob3duLCAnbWRpLWNoZXZyb24tdXAnOiBpc0NvbmZpZ1Nob3dufVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiB2LXNob3c9XCJpc0NvbmZpZ1Nob3duXCIgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPk1hcmtldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1mb3I9XCJtIGluIGF2YWlsYWJsZU1hcmtldHNcIiA6a2V5PVwibVwiIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtbGlua1wiIDpjbGFzcz1cInsnaXMtb3V0bGluZWQnOiBtYXJrZXRzLmluZGV4T2YobSkgPT09IC0xfVwiIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlTWFya2V0KG0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5DdXJyZW5jeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ncm91cGVkIGlzLWdyb3VwZWQtbXVsdGlsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDdXJyZW5jeVwiIEBrZXl1cC5zcGFjZS5lbnRlcj1cImFkZENvaW4oY3VycmVudENvaW4udHJpbSgpKVwiIHYtbW9kZWw9XCJjdXJyZW50Q29pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLW1lZGl1bSBpcy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpIG1kaS1jb2luc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImNvaW4gaW4gY29pbnNcIiA6a2V5PVwiY29pbiArICctdGFnJ1wiIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3MgaGFzLWFkZG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyBpcy1zdWNjZXNzIGlzLW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpXCIgOmNsYXNzPVwiY3VycmVuY3lJY29uKGNvaW4pXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb2luIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0YWcgaXMtbWVkaXVtIGlzLWRlbGV0ZVwiIEBjbGljaz1cInJlbW92ZUNvaW4oY29pbilcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgIDx0YWJsZSB2LWlmPVwiY29pbnMgJiYgY29pbnMubGVuZ3RoID4gMCAmJiBtYXJrZXRzICYmIG1hcmtldHMubGVuZ3RoID4gMFwiIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWhvdmVyYWJsZSBpcy1zdHJpcHBlZFwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiaXMtbmFycm93XCIgcm93c3Bhbj1cIjJcIj5NYXJrZXQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCB2LWZvcj1cImNvaW4gaW4gY29pbnNcIiA6a2V5PVwiY29pbiArICctaGVhZGVyJ1wiIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1kaVwiIDpjbGFzcz1cImN1cnJlbmN5SWNvbihjb2luKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHt7IGNvaW4gfX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHYtZm9yPVwiY29sIGluIGNvaW5Db2x1bW5zXCIgOmtleT1cImNvbC5jb2luICsgJy0nICsgY29sLnR5cGUgKyAnLWhlYWRlcidcIiBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkXCI+e3sgY29sLnR5cGUgfX08L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVwibWFya2V0IGluIG1hcmtldHNcIiA6a2V5PVwibWFya2V0XCI+XG4gICAgICAgICAgICAgICAgPHRoIEBjbGljaz1cInJlZmVyZW5jZU1hcmtldCA9IG1hcmtldFwiIDpjbGFzcz1cInsnaXMtcHJpbWFyeSc6IHJlZmVyZW5jZU1hcmtldCA9PT0gbWFya2V0fVwiPnt7bWFya2V0fX08L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cImNvbCBpbiBjb2luQ29sdW1uc1wiIDprZXk9XCJjb2wuY29pbiArICctJyArIGNvbC50eXBlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1kaSBtZGktY3VycmVuY3kta3J3XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgaW5mb3JtYXRpb25bbWFya2V0XVtjb2wuY29pbl1bY29sLnR5cGVdLnRvTG9jYWxlU3RyaW5nKCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwicmVmZXJlbmNlTWFya2V0ICYmIHJlZmVyZW5jZU1hcmtldCAhPSBtYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiY3VycmVuY3lDb2xvcihyZWxhdGl2ZUluZm9ybWF0aW9uKG1hcmtldCwgY29sLmNvaW4sIGNvbC50eXBlKSAtIDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICh7eyhyZWxhdGl2ZUluZm9ybWF0aW9uKG1hcmtldCwgY29sLmNvaW4sIGNvbC50eXBlKSAqIDEwMCkudG9GaXhlZCgyKSB9fSUpXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwibWFya2V0cyAmJiBtYXJrZXRzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUgaXMtNVwiPk5vIGNvaW5zIGFyZSBzZWxlY3RlZCE8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTZcIj5QbGVhc2UgYWRkIGNvaW5zIHlvdSB3YW50ITwvcD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTVcIj5ObyBtYXJrZXRzIGFyZSBzZWxlY3RlZCE8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTZcIj5QbGVhc2UgYWRkIG1hcmtldHMgeW91IHdhbnQhPC9wPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInRleHRhcmVhXCIgOmNsYXNzPVwieydpcy1kYW5nZXInOiBlcnJvcn1cIiBwbGFjZWhvbGRlcj1cIkNvZGUgeW91ciBzY3JpcHQhXCIgdi1tb2RlbD1cImNvZGVcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cImVycm9yXCIgY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibWRpIG1kaS1hbGVydFwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHYtaWY9XCJlcnJvclwiIGNsYXNzPVwiaGVscCBpcy1kYW5nZXJcIj57e2Vycm9yfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGhhcy1hZGRvbnNcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeVwiIDpjbGFzcz1cInsnaXMtbG9hZGluZyc6IHJ1bm5pbmd9XCIgQGNsaWNrPVwicnVubmluZyB8fCBydW4oKVwiPlJ1bjwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeVwiIDpjbGFzcz1cInsnaXMtbG9hZGluZyc6IHJ1bm5pbmcsICdpcy1vdXRsaW5lZCc6ICF3YXRjaGluZ31cIiBAY2xpY2s9XCJydW5uaW5nIHx8ICh3YXRjaGluZyA9ICF3YXRjaGluZylcIj5XYXRjaDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgOmNsYXNzPVwieydpcy1hY3RpdmUnOiBtZXNzYWdlfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmRcIiBAY2xpY2s9XCJtZXNzYWdlID0gJydcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jYXJkXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtY2FyZC1ib2R5XCI+XG4gICAgICAgICAge3sgbWVzc2FnZSB9fVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbC1jbG9zZSBpcy1sYXJnZVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIEBjbGljaz1cIm1lc3NhZ2UgPSAnJ1wiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgY29pbmpzIGZyb20gJ2NvaW5qcydcbmltcG9ydCBJbnRlcnByZXRlciBmcm9tICdqcy1pbnRlcnByZXRlcidcblxuY29uc3QgYXZhaWxhYmxlTWFya2V0cyA9IE9iamVjdC5rZXlzKGNvaW5qcylcblxuY29uc3QgY3VycmVuY3lJY29uID0ge1xuICAnQlRDJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnQkNDJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnQkNIJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnQkNHJzogJ21kaS1jdXJyZW5jeS1idGMnLFxuICAnRVRIJzogJ21kaS1jdXJyZW5jeS1ldGgnLFxuICAnRVRDJzogJ21kaS1jdXJyZW5jeS1ldGgnLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiUW9pbkRhbmdlclwiXG4gICAgfVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0NvbmZpZ1Nob3duOiB0cnVlLFxuICAgICAgYXZhaWxhYmxlTWFya2V0cyxcbiAgICAgIG1hcmtldHM6IFtdLmNvbmNhdChhdmFpbGFibGVNYXJrZXRzKSxcbiAgICAgIGN1cnJlbnRDb2luOiAnJyxcbiAgICAgIGNvaW5zOiBbXSxcbiAgICAgIGluZm9ybWF0aW9uOiAoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSB7fVxuICAgICAgICBmb3IobGV0IG0gb2YgYXZhaWxhYmxlTWFya2V0cykgcmV0W21dID0ge31cbiAgICAgICAgcmV0dXJuIHJldFxuICAgICAgfSkoKSxcbiAgICAgIHJlZmVyZW5jZU1hcmtldDogJycsXG4gICAgICBpc01lbnVTaG93bjogZmFsc2UsXG4gICAgICBjb2RlOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgZXJyb3I6ICcnLFxuICAgICAgcnVuT25VcGRhdGU6ICcnLFxuICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICB3YXRjaGluZzogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgbWFya2V0cyAobSkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJtYXJrZXRzPVwiICsgZXNjYXBlKEpTT04uc3RyaW5naWZ5KG0pKVxuICAgIH0sXG5cbiAgICBjb2lucyAoYykge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb2lucz1cIiArIGVzY2FwZShKU09OLnN0cmluZ2lmeShjKSlcbiAgICB9LFxuXG4gICAgbWVzc2FnZSAobSkge1xuICAgICAgdGhpcy4kZW1pdCgnbWVzc2FnZScsIG0pXG4gICAgfSxcblxuICAgIGNvZGUgKGMpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29kZT1cIiArIGVzY2FwZShKU09OLnN0cmluZ2lmeShjKSlcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuJHByb2MgPSBuZXcgSW50ZXJwcmV0ZXIoYywgdGhpcy5wcmVwYXJlSW50ZXJwcmV0ZXIpXG4gICAgICAgIHRoaXMuJHByb2MucHJvbWlzZSA9IG51bGxcbiAgICAgICAgdGhpcy5lcnJvciA9ICcnXG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hpbmcgKHcpIHtcbiAgICAgIGlmKHcpIHtcbiAgICAgICAgdGhpcy4kb24oJ2luZm9ybWF0aW9uJywgdGhpcy5ydW4pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRvZmYoJ2luZm9ybWF0aW9uJywgdGhpcy5ydW4pXG4gICAgICB9XG4gICAgfSxcblxuICAgIGluZm9ybWF0aW9uOiB7XG4gICAgICBoYW5kbGVyIChpKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2luZm9ybWF0aW9uJywgaSlcbiAgICAgIH0sXG4gICAgICBkZWVwOiB0cnVlXG4gICAgfVxuXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb2luQ29sdW1ucyAoKSB7XG4gICAgICBsZXQgcmV0ID0gW11cbiAgICAgIGZvcihsZXQgY29pbiBvZiB0aGlzLmNvaW5zKSB7XG4gICAgICAgIHJldC5wdXNoKHtjb2luLCB0eXBlOiAnYXNrJ30pXG4gICAgICAgIHJldC5wdXNoKHtjb2luLCB0eXBlOiAnYmlkJ30pXG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLiRjb2luanMgPSB7fVxuICAgIHRoaXMuJHdhdGNoID0ge31cbiAgICBmb3IobGV0IGMgaW4gY29pbmpzKSB7XG4gICAgICB0aGlzLiRjb2luanNbY10gPSBuZXcgY29pbmpzW2NdKClcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgbGV0IGNvb2tpZXMgPSB7fVxuICAgIGZvcihsZXQgcGFpciBvZiBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBbYSwgYl0gPSBwYWlyLnNwbGl0KCc9JylcbiAgICAgICAgY29va2llc1thXSA9IEpTT04ucGFyc2UodW5lc2NhcGUoYikpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihjb29raWVzLm1hcmtldHMgIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMubWFya2V0cyA9IGNvb2tpZXMubWFya2V0c1xuICAgIGlmKGNvb2tpZXMuY29pbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yKGxldCBjb2luIG9mIGNvb2tpZXMuY29pbnMpXG4gICAgICAgIHRoaXMuYWRkQ29pbihjb2luKVxuICAgIH1cbiAgICBpZihjb29raWVzLmNvZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jb2RlID0gY29va2llcy5jb2RlXG4gICAgfVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIGZvcihsZXQgYyBpbiB0aGlzLiRjb2luanMpIHtcbiAgICAgIHRoaXMuJGNvaW5qc1tjXS5jbG9zZSgpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVNYXJrZXQgKG0pIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMubWFya2V0cy5pbmRleE9mKG0pXG4gICAgICBpZihpZHggPT09IC0xKSB0aGlzLm1hcmtldHMucHVzaChtKVxuICAgICAgZWxzZSB0aGlzLm1hcmtldHMuc3BsaWNlKGlkeCwgMSlcbiAgICB9LFxuICAgIGFkZENvaW4gKGMpIHtcbiAgICAgIGMgPSBjLnRvVXBwZXJDYXNlKClcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuY29pbnMuaW5kZXhPZihjKVxuICAgICAgaWYoaWR4ID09PSAtMSkge1xuICAgICAgICBpZighdGhpcy4kd2F0Y2hbY10pIHtcbiAgICAgICAgICB0aGlzLiR3YXRjaFtjXSA9IHRydWVcbiAgICAgICAgICBmb3IobGV0IG0gaW4gdGhpcy4kY29pbmpzKSB7XG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5pbmZvcm1hdGlvblttXSwgYywge2FzazogMCwgYmlkOiAwfSlcbiAgICAgICAgICAgIHRoaXMuJGNvaW5qc1ttXS5zdWJzY3JpYmUoYylcbiAgICAgICAgICAgIHRoaXMuJGNvaW5qc1ttXS5vbihjLnRvTG93ZXJDYXNlKCksIGUgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmluZm9ybWF0aW9uW21dW2NdLmFzayA9IGUuYXNrXG4gICAgICAgICAgICAgIHRoaXMuaW5mb3JtYXRpb25bbV1bY10uYmlkID0gZS5iaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29pbnMucHVzaChjKVxuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50Q29pbiA9ICcnXG4gICAgfSxcbiAgICByZW1vdmVDb2luIChjKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmNvaW5zLmluZGV4T2YoYylcbiAgICAgIGlmKGlkeCAhPT0gLTEpIHRoaXMuY29pbnMuc3BsaWNlKGlkeCwgMSlcbiAgICAgIHRoaXMuY3VycmVudENvaW4gPSBjXG4gICAgfSxcbiAgICBjdXJyZW5jeUljb24gKGMpIHtcbiAgICAgIHJldHVybiBjdXJyZW5jeUljb25bYy50b1VwcGVyQ2FzZSgpXSB8fCAnbWRpLWNvaW5zJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVJbmZvcm1hdGlvbiAobWFya2V0LCBjb2luLCB0cCkge1xuICAgICAgbGV0IHJ0cCA9IHRwID09PSAnYXNrJyA/ICdiaWQnIDogJ2FzaydcbiAgICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZU1hcmtldCA/IHRoaXMuaW5mb3JtYXRpb25bbWFya2V0XVtjb2luXVt0cF0gLyB0aGlzLmluZm9ybWF0aW9uW3RoaXMucmVmZXJlbmNlTWFya2V0XVtjb2luXVtydHBdIDogMVxuICAgIH0sXG4gICAgY3VycmVuY3lDb2xvciAoaSkge1xuICAgICAgcmV0dXJuIGkgPT0gMCA/ICdoYXMtdGV4dC13YXJuaW5nJyA6IChpID4gMCA/ICdoYXMtdGV4dC1zdWNjZXNzJyA6ICdoYXMtdGV4dC1kYW5nZXInKVxuICAgIH0sXG4gICAgcnVuICgpIHtcbiAgICAgIGxldCBwcm9jID0gdGhpcy4kcHJvY1xuXG4gICAgICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3aGlsZShwcm9jLnN0ZXAoKSkge1xuICAgICAgICAgICAgaWYocHJvYy5wcm9taXNlKSB7XG4gICAgICAgICAgICAgIHByb2MucHJvbWlzZS50aGVuKCgpID0+IHsgcHJvYy5wcm9taXNlID0gbnVsbDsgcnVuKCkgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnIudG9TdHJpbmcoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2VcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnIudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBydW4oKVxuICAgIH0sXG5cbiAgICBwcmVwYXJlSW50ZXJwcmV0ZXIgKGludGVycHJldGVyLCBzY29wZSkge1xuICAgICAgaW50ZXJwcmV0ZXIuc2V0UHJvcGVydHkoc2NvcGUsICdnZXRJbmZvJyxcbiAgICAgICAgaW50ZXJwcmV0ZXIuY3JlYXRlTmF0aXZlRnVuY3Rpb24oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBpbnRlcnByZXRlci5uYXRpdmVUb1BzZXVkbyh0aGlzLmluZm9ybWF0aW9uKVxuICAgICAgICB9KSlcbiAgICAgIGludGVycHJldGVyLnNldFByb3BlcnR5KHNjb3BlLCAnYWxlcnQnLFxuICAgICAgICBpbnRlcnByZXRlci5jcmVhdGVBc3luY0Z1bmN0aW9uKCh0ZXh0LCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgIGludGVycHJldGVyLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBpbnRlcnByZXRlci5wc2V1ZG9Ub05hdGl2ZSh0ZXh0KVxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy4kb25jZSgnbWVzc2FnZScsICgpID0+IHJlc29sdmUoY2FsbGJhY2soKSkpKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pKVxuICAgICAgaW50ZXJwcmV0ZXIuc2V0UHJvcGVydHkoc2NvcGUsICdzbGVlcCcsXG4gICAgICAgIGludGVycHJldGVyLmNyZWF0ZUFzeW5jRnVuY3Rpb24oKGRlbGF5LCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgIGludGVycHJldGVyLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgIH0sIGRlbGF5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pKVxuICAgICAgaW50ZXJwcmV0ZXIuc2V0UHJvcGVydHkoc2NvcGUsICdnZXQnLFxuICAgICAgICBpbnRlcnByZXRlci5jcmVhdGVBc3luY0Z1bmN0aW9uKCh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgaWYoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zXG4gICAgICAgICAgICBvcHRpb25zID0gaW50ZXJwcmV0ZXIubmF0aXZlVG9Qc2V1ZG8odW5kZWZpbmVkKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpbnRlcnByZXRlci5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoaW50ZXJwcmV0ZXIucHNldWRvVG9OYXRpdmUodXJsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJldGVyLnBzZXVkb1RvTmF0aXZlKG9wdGlvbnMpKVxuICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgICAgICAgIC50aGVuKHRleHQgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGludGVycHJldGVyLm5hdGl2ZVRvUHNldWRvKHRleHQpKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuc2VjdGlvbjpsYXN0LWNoaWxkIHsgaGVpZ2h0OiAxMDB2aDsgfVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwLnZ1ZSIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAudnVlJ1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgVnVlUmVzb3VyY2UgZnJvbSAndnVlLXJlc291cmNlJ1xuXG5WdWUudXNlKFZ1ZVJlc291cmNlKVxuXG52YXIgYXBwID0gbmV3IFZ1ZShBcHApXG5hcHAuJG1vdW50KCcjYXBwJylcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWY0ODk1OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXBwLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2FwcC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2FwcC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjQ4OTU4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXBwLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZWY0ODk1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlZjQ4OTU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjQ4OTU4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hcHAudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwMTQ4Y2JjZFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWY0ODk1OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXBwLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWY0ODk1OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXBwLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWY0ODk1OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9hcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5zZWN0aW9uOmxhc3QtY2hpbGQgeyBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2d3YW5neWkvd29ya3NwYWNlL2NvaW5qcy12dWUvc3JjL3NyYy9hcHAudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFrYUEscUJBQUEsY0FBQTtDQUFBXCIsXCJmaWxlXCI6XCJhcHAudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXY+XFxuICAgICAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIGlzLWZpeGVkLXRvcCBpcy1wcmltYXJ5XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIHt7IHRpdGxlIH19XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJuYXZiYXItYnVyZ2VyIGJ1cmdlclxcXCIgQGNsaWNrPVxcXCJpc01lbnVTaG93biA9ICFpc01lbnVTaG93blxcXCI+XFxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLW1lbnVcXFwiIDpjbGFzcz1cXFwieydpcy1hY3RpdmUnOiBpc01lbnVTaG93bn1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1lbmRcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5hdmJhci1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWludmVydGVkXFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vZ3dhbmd5aS9jb2luanMtdnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWRpIG1kaS1naXRodWItY2lyY2xlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkdpdGh1Yjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvbmF2PlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiaGVybyBpcy1mdWxsaGVpZ2h0IGlzLXByaW1hcnlcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlcm8tYm9keVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICA8aDEgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICB7eyB0aXRsZSB9fVxcbiAgICAgICAgICA8L2gxPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcInN1YnRpdGxlXFxcIj5cXG4gICAgICAgICAgICBSZWFsdGltZSBDb2luIE1vbml0b3JpbmcgU3lzdGVtXFxuICAgICAgICAgIDwvaDI+XFxuICAgICAgICAgIDxhIGhyZWY9XFxcIiNtYWluXFxcIiBjbGFzcz1cXFwiYnV0dG9uIGlzLWluZm8gaXMtbGFyZ2VcXFwiPlxcbiAgICAgICAgICAgIFN0YXJ0XFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uXFxcIiBpZD1cXFwibWFpblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLWhlYWRlci10aXRsZVxcXCI+XFxuICAgICAgICAgICAgICBDb25maWdcXG4gICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIEBjbGljay5wcmV2ZW50PVxcXCJpc0NvbmZpZ1Nob3duID0gIWlzQ29uZmlnU2hvd25cXFwiIGNsYXNzPVxcXCJjYXJkLWhlYWRlci1pY29uXFxcIiBhcmlhLWxhYmVsPVxcXCJtb3JlIG9wdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1kaVxcXCIgOmNsYXNzPVxcXCJ7J21kaS1jaGV2cm9uLWRvd24nOiAhaXNDb25maWdTaG93biwgJ21kaS1jaGV2cm9uLXVwJzogaXNDb25maWdTaG93bn1cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2hlYWRlcj5cXG4gICAgICAgICAgICA8ZGl2IHYtc2hvdz1cXFwiaXNDb25maWdTaG93blxcXCIgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQgaXMtaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiPk1hcmtldDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZCBpcy1ncm91cGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPHAgdi1mb3I9XFxcIm0gaW4gYXZhaWxhYmxlTWFya2V0c1xcXCIgOmtleT1cXFwibVxcXCIgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtbGlua1xcXCIgOmNsYXNzPVxcXCJ7J2lzLW91dGxpbmVkJzogbWFya2V0cy5pbmRleE9mKG0pID09PSAtMX1cXFwiIEBjbGljay5wcmV2ZW50PVxcXCJ0b2dnbGVNYXJrZXQobSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZCBpcy1ob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCI+Q3VycmVuY3k8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQgaXMtZ3JvdXBlZCBpcy1ncm91cGVkLW11bHRpbGluZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiQ3VycmVuY3lcXFwiIEBrZXl1cC5zcGFjZS5lbnRlcj1cXFwiYWRkQ29pbihjdXJyZW50Q29pbi50cmltKCkpXFxcIiB2LW1vZGVsPVxcXCJjdXJyZW50Q29pblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtbWVkaXVtIGlzLWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1kaSBtZGktY29pbnNcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwiY29pbiBpbiBjb2luc1xcXCIgOmtleT1cXFwiY29pbiArICctdGFnJ1xcXCIgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhZ3MgaGFzLWFkZG9uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFnIGlzLXN1Y2Nlc3MgaXMtbWVkaXVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtbWVkaXVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWRpXFxcIiA6Y2xhc3M9XFxcImN1cnJlbmN5SWNvbihjb2luKVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvaW4gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJ0YWcgaXMtbWVkaXVtIGlzLWRlbGV0ZVxcXCIgQGNsaWNrPVxcXCJyZW1vdmVDb2luKGNvaW4pXFxcIj48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgIDx0YWJsZSB2LWlmPVxcXCJjb2lucyAmJiBjb2lucy5sZW5ndGggPiAwICYmIG1hcmtldHMgJiYgbWFya2V0cy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWhvdmVyYWJsZSBpcy1zdHJpcHBlZFxcXCI+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImlzLW5hcnJvd1xcXCIgcm93c3Bhbj1cXFwiMlxcXCI+TWFya2V0PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIHYtZm9yPVxcXCJjb2luIGluIGNvaW5zXFxcIiA6a2V5PVxcXCJjb2luICsgJy1oZWFkZXInXFxcIiBjb2xzcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwiaGFzLXRleHQtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLW1lZGl1bVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWRpXFxcIiA6Y2xhc3M9XFxcImN1cnJlbmN5SWNvbihjb2luKVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjb2luIH19XFxuICAgICAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggdi1mb3I9XFxcImNvbCBpbiBjb2luQ29sdW1uc1xcXCIgOmtleT1cXFwiY29sLmNvaW4gKyAnLScgKyBjb2wudHlwZSArICctaGVhZGVyJ1xcXCIgY2xhc3M9XFxcImhhcy10ZXh0LWNlbnRlcmVkXFxcIj57eyBjb2wudHlwZSB9fTwvdGg+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCJtYXJrZXQgaW4gbWFya2V0c1xcXCIgOmtleT1cXFwibWFya2V0XFxcIj5cXG4gICAgICAgICAgICAgICAgPHRoIEBjbGljaz1cXFwicmVmZXJlbmNlTWFya2V0ID0gbWFya2V0XFxcIiA6Y2xhc3M9XFxcInsnaXMtcHJpbWFyeSc6IHJlZmVyZW5jZU1hcmtldCA9PT0gbWFya2V0fVxcXCI+e3ttYXJrZXR9fTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cXFwiY29sIGluIGNvaW5Db2x1bW5zXFxcIiA6a2V5PVxcXCJjb2wuY29pbiArICctJyArIGNvbC50eXBlXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtZGkgbWRpLWN1cnJlbmN5LWtyd1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57eyBpbmZvcm1hdGlvblttYXJrZXRdW2NvbC5jb2luXVtjb2wudHlwZV0udG9Mb2NhbGVTdHJpbmcoKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJyZWZlcmVuY2VNYXJrZXQgJiYgcmVmZXJlbmNlTWFya2V0ICE9IG1hcmtldFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcImN1cnJlbmN5Q29sb3IocmVsYXRpdmVJbmZvcm1hdGlvbihtYXJrZXQsIGNvbC5jb2luLCBjb2wudHlwZSkgLSAxKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAoe3socmVsYXRpdmVJbmZvcm1hdGlvbihtYXJrZXQsIGNvbC5jb2luLCBjb2wudHlwZSkgKiAxMDApLnRvRml4ZWQoMikgfX0lKVxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cXFwibWFya2V0cyAmJiBtYXJrZXRzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy01XFxcIj5ObyBjb2lucyBhcmUgc2VsZWN0ZWQhPC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy02XFxcIj5QbGVhc2UgYWRkIGNvaW5zIHlvdSB3YW50ITwvcD5cXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGl0bGUgaXMtNVxcXCI+Tm8gbWFya2V0cyBhcmUgc2VsZWN0ZWQhPC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy02XFxcIj5QbGVhc2UgYWRkIG1hcmtldHMgeW91IHdhbnQhPC9wPlxcbiAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwidGV4dGFyZWFcXFwiIDpjbGFzcz1cXFwieydpcy1kYW5nZXInOiBlcnJvcn1cXFwiIHBsYWNlaG9sZGVyPVxcXCJDb2RlIHlvdXIgc2NyaXB0IVxcXCIgdi1tb2RlbD1cXFwiY29kZVxcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJlcnJvclxcXCIgY2xhc3M9XFxcImljb24gaXMtc21hbGwgaXMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1kaSBtZGktYWxlcnRcXFwiPjwvaT5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDxwIHYtaWY9XFxcImVycm9yXFxcIiBjbGFzcz1cXFwiaGVscCBpcy1kYW5nZXJcXFwiPnt7ZXJyb3J9fTwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkIGhhcy1hZGRvbnNcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLXByaW1hcnlcXFwiIDpjbGFzcz1cXFwieydpcy1sb2FkaW5nJzogcnVubmluZ31cXFwiIEBjbGljaz1cXFwicnVubmluZyB8fCBydW4oKVxcXCI+UnVuPC9hPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1wcmltYXJ5XFxcIiA6Y2xhc3M9XFxcInsnaXMtbG9hZGluZyc6IHJ1bm5pbmcsICdpcy1vdXRsaW5lZCc6ICF3YXRjaGluZ31cXFwiIEBjbGljaz1cXFwicnVubmluZyB8fCAod2F0Y2hpbmcgPSAhd2F0Y2hpbmcpXFxcIj5XYXRjaDwvYT5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIDpjbGFzcz1cXFwieydpcy1hY3RpdmUnOiBtZXNzYWdlfVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYmFja2dyb3VuZFxcXCIgQGNsaWNrPVxcXCJtZXNzYWdlID0gJydcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNhcmRcXFwiPlxcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcIm1vZGFsLWNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgIHt7IG1lc3NhZ2UgfX1cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJtb2RhbC1jbG9zZSBpcy1sYXJnZVxcXCIgYXJpYS1sYWJlbD1cXFwiY2xvc2VcXFwiIEBjbGljaz1cXFwibWVzc2FnZSA9ICcnXFxcIj48L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGNvaW5qcyBmcm9tICdjb2luanMnXFxuaW1wb3J0IEludGVycHJldGVyIGZyb20gJ2pzLWludGVycHJldGVyJ1xcblxcbmNvbnN0IGF2YWlsYWJsZU1hcmtldHMgPSBPYmplY3Qua2V5cyhjb2luanMpXFxuXFxuY29uc3QgY3VycmVuY3lJY29uID0ge1xcbiAgJ0JUQyc6ICdtZGktY3VycmVuY3ktYnRjJyxcXG4gICdCQ0MnOiAnbWRpLWN1cnJlbmN5LWJ0YycsXFxuICAnQkNIJzogJ21kaS1jdXJyZW5jeS1idGMnLFxcbiAgJ0JDRyc6ICdtZGktY3VycmVuY3ktYnRjJyxcXG4gICdFVEgnOiAnbWRpLWN1cnJlbmN5LWV0aCcsXFxuICAnRVRDJzogJ21kaS1jdXJyZW5jeS1ldGgnLFxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBwcm9wczoge1xcbiAgICB0aXRsZToge1xcbiAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICBkZWZhdWx0OiBcXFwiUW9pbkRhbmdlclxcXCJcXG4gICAgfVxcbiAgfSxcXG5cXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGlzQ29uZmlnU2hvd246IHRydWUsXFxuICAgICAgYXZhaWxhYmxlTWFya2V0cyxcXG4gICAgICBtYXJrZXRzOiBbXS5jb25jYXQoYXZhaWxhYmxlTWFya2V0cyksXFxuICAgICAgY3VycmVudENvaW46ICcnLFxcbiAgICAgIGNvaW5zOiBbXSxcXG4gICAgICBpbmZvcm1hdGlvbjogKCgpID0+IHtcXG4gICAgICAgIGNvbnN0IHJldCA9IHt9XFxuICAgICAgICBmb3IobGV0IG0gb2YgYXZhaWxhYmxlTWFya2V0cykgcmV0W21dID0ge31cXG4gICAgICAgIHJldHVybiByZXRcXG4gICAgICB9KSgpLFxcbiAgICAgIHJlZmVyZW5jZU1hcmtldDogJycsXFxuICAgICAgaXNNZW51U2hvd246IGZhbHNlLFxcbiAgICAgIGNvZGU6ICcnLFxcbiAgICAgIG1lc3NhZ2U6ICcnLFxcbiAgICAgIGVycm9yOiAnJyxcXG4gICAgICBydW5PblVwZGF0ZTogJycsXFxuICAgICAgcnVubmluZzogZmFsc2UsXFxuICAgICAgd2F0Y2hpbmc6IGZhbHNlLFxcbiAgICB9XFxuICB9LFxcblxcbiAgd2F0Y2g6IHtcXG4gICAgbWFya2V0cyAobSkge1xcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFxcXCJtYXJrZXRzPVxcXCIgKyBlc2NhcGUoSlNPTi5zdHJpbmdpZnkobSkpXFxuICAgIH0sXFxuXFxuICAgIGNvaW5zIChjKSB7XFxuICAgICAgZG9jdW1lbnQuY29va2llID0gXFxcImNvaW5zPVxcXCIgKyBlc2NhcGUoSlNPTi5zdHJpbmdpZnkoYykpXFxuICAgIH0sXFxuXFxuICAgIG1lc3NhZ2UgKG0pIHtcXG4gICAgICB0aGlzLiRlbWl0KCdtZXNzYWdlJywgbSlcXG4gICAgfSxcXG5cXG4gICAgY29kZSAoYykge1xcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFxcXCJjb2RlPVxcXCIgKyBlc2NhcGUoSlNPTi5zdHJpbmdpZnkoYykpXFxuICAgICAgdHJ5IHtcXG4gICAgICAgIHRoaXMuJHByb2MgPSBuZXcgSW50ZXJwcmV0ZXIoYywgdGhpcy5wcmVwYXJlSW50ZXJwcmV0ZXIpXFxuICAgICAgICB0aGlzLiRwcm9jLnByb21pc2UgPSBudWxsXFxuICAgICAgICB0aGlzLmVycm9yID0gJydcXG4gICAgICB9IGNhdGNoKGVycikge1xcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci50b1N0cmluZygpXFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICB3YXRjaGluZyAodykge1xcbiAgICAgIGlmKHcpIHtcXG4gICAgICAgIHRoaXMuJG9uKCdpbmZvcm1hdGlvbicsIHRoaXMucnVuKVxcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLiRvZmYoJ2luZm9ybWF0aW9uJywgdGhpcy5ydW4pXFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBpbmZvcm1hdGlvbjoge1xcbiAgICAgIGhhbmRsZXIgKGkpIHtcXG4gICAgICAgIHRoaXMuJGVtaXQoJ2luZm9ybWF0aW9uJywgaSlcXG4gICAgICB9LFxcbiAgICAgIGRlZXA6IHRydWVcXG4gICAgfVxcblxcbiAgfSxcXG5cXG4gIGNvbXB1dGVkOiB7XFxuICAgIGNvaW5Db2x1bW5zICgpIHtcXG4gICAgICBsZXQgcmV0ID0gW11cXG4gICAgICBmb3IobGV0IGNvaW4gb2YgdGhpcy5jb2lucykge1xcbiAgICAgICAgcmV0LnB1c2goe2NvaW4sIHR5cGU6ICdhc2snfSlcXG4gICAgICAgIHJldC5wdXNoKHtjb2luLCB0eXBlOiAnYmlkJ30pXFxuICAgICAgfVxcbiAgICAgIHJldHVybiByZXRcXG4gICAgfSxcXG4gIH0sXFxuXFxuICBjcmVhdGVkICgpIHtcXG4gICAgdGhpcy4kY29pbmpzID0ge31cXG4gICAgdGhpcy4kd2F0Y2ggPSB7fVxcbiAgICBmb3IobGV0IGMgaW4gY29pbmpzKSB7XFxuICAgICAgdGhpcy4kY29pbmpzW2NdID0gbmV3IGNvaW5qc1tjXSgpXFxuICAgIH1cXG4gIH0sXFxuXFxuICBtb3VudGVkICgpIHtcXG4gICAgbGV0IGNvb2tpZXMgPSB7fVxcbiAgICBmb3IobGV0IHBhaXIgb2YgZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpKSB7XFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGxldCBbYSwgYl0gPSBwYWlyLnNwbGl0KCc9JylcXG4gICAgICAgIGNvb2tpZXNbYV0gPSBKU09OLnBhcnNlKHVuZXNjYXBlKGIpKVxcbiAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBpZihjb29raWVzLm1hcmtldHMgIT09IHVuZGVmaW5lZClcXG4gICAgICB0aGlzLm1hcmtldHMgPSBjb29raWVzLm1hcmtldHNcXG4gICAgaWYoY29va2llcy5jb2lucyAhPT0gdW5kZWZpbmVkKSB7XFxuICAgICAgZm9yKGxldCBjb2luIG9mIGNvb2tpZXMuY29pbnMpXFxuICAgICAgICB0aGlzLmFkZENvaW4oY29pbilcXG4gICAgfVxcbiAgICBpZihjb29raWVzLmNvZGUgIT09IHVuZGVmaW5lZCkge1xcbiAgICAgIHRoaXMuY29kZSA9IGNvb2tpZXMuY29kZVxcbiAgICB9XFxuICB9LFxcblxcbiAgYmVmb3JlRGVzdHJveSAoKSB7XFxuICAgIGZvcihsZXQgYyBpbiB0aGlzLiRjb2luanMpIHtcXG4gICAgICB0aGlzLiRjb2luanNbY10uY2xvc2UoKVxcbiAgICB9XFxuICB9LFxcblxcbiAgbWV0aG9kczoge1xcbiAgICB0b2dnbGVNYXJrZXQgKG0pIHtcXG4gICAgICBjb25zdCBpZHggPSB0aGlzLm1hcmtldHMuaW5kZXhPZihtKVxcbiAgICAgIGlmKGlkeCA9PT0gLTEpIHRoaXMubWFya2V0cy5wdXNoKG0pXFxuICAgICAgZWxzZSB0aGlzLm1hcmtldHMuc3BsaWNlKGlkeCwgMSlcXG4gICAgfSxcXG4gICAgYWRkQ29pbiAoYykge1xcbiAgICAgIGMgPSBjLnRvVXBwZXJDYXNlKClcXG4gICAgICBjb25zdCBpZHggPSB0aGlzLmNvaW5zLmluZGV4T2YoYylcXG4gICAgICBpZihpZHggPT09IC0xKSB7XFxuICAgICAgICBpZighdGhpcy4kd2F0Y2hbY10pIHtcXG4gICAgICAgICAgdGhpcy4kd2F0Y2hbY10gPSB0cnVlXFxuICAgICAgICAgIGZvcihsZXQgbSBpbiB0aGlzLiRjb2luanMpIHtcXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5pbmZvcm1hdGlvblttXSwgYywge2FzazogMCwgYmlkOiAwfSlcXG4gICAgICAgICAgICB0aGlzLiRjb2luanNbbV0uc3Vic2NyaWJlKGMpXFxuICAgICAgICAgICAgdGhpcy4kY29pbmpzW21dLm9uKGMudG9Mb3dlckNhc2UoKSwgZSA9PiB7XFxuICAgICAgICAgICAgICB0aGlzLmluZm9ybWF0aW9uW21dW2NdLmFzayA9IGUuYXNrXFxuICAgICAgICAgICAgICB0aGlzLmluZm9ybWF0aW9uW21dW2NdLmJpZCA9IGUuYmlkXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgdGhpcy5jb2lucy5wdXNoKGMpXFxuICAgICAgfVxcbiAgICAgIHRoaXMuY3VycmVudENvaW4gPSAnJ1xcbiAgICB9LFxcbiAgICByZW1vdmVDb2luIChjKSB7XFxuICAgICAgY29uc3QgaWR4ID0gdGhpcy5jb2lucy5pbmRleE9mKGMpXFxuICAgICAgaWYoaWR4ICE9PSAtMSkgdGhpcy5jb2lucy5zcGxpY2UoaWR4LCAxKVxcbiAgICAgIHRoaXMuY3VycmVudENvaW4gPSBjXFxuICAgIH0sXFxuICAgIGN1cnJlbmN5SWNvbiAoYykge1xcbiAgICAgIHJldHVybiBjdXJyZW5jeUljb25bYy50b1VwcGVyQ2FzZSgpXSB8fCAnbWRpLWNvaW5zJ1xcbiAgICB9LFxcbiAgICByZWxhdGl2ZUluZm9ybWF0aW9uIChtYXJrZXQsIGNvaW4sIHRwKSB7XFxuICAgICAgbGV0IHJ0cCA9IHRwID09PSAnYXNrJyA/ICdiaWQnIDogJ2FzaydcXG4gICAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VNYXJrZXQgPyB0aGlzLmluZm9ybWF0aW9uW21hcmtldF1bY29pbl1bdHBdIC8gdGhpcy5pbmZvcm1hdGlvblt0aGlzLnJlZmVyZW5jZU1hcmtldF1bY29pbl1bcnRwXSA6IDFcXG4gICAgfSxcXG4gICAgY3VycmVuY3lDb2xvciAoaSkge1xcbiAgICAgIHJldHVybiBpID09IDAgPyAnaGFzLXRleHQtd2FybmluZycgOiAoaSA+IDAgPyAnaGFzLXRleHQtc3VjY2VzcycgOiAnaGFzLXRleHQtZGFuZ2VyJylcXG4gICAgfSxcXG4gICAgcnVuICgpIHtcXG4gICAgICBsZXQgcHJvYyA9IHRoaXMuJHByb2NcXG5cXG4gICAgICBjb25zdCBydW4gPSAoKSA9PiB7XFxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlXFxuICAgICAgICB0cnkge1xcbiAgICAgICAgICB3aGlsZShwcm9jLnN0ZXAoKSkge1xcbiAgICAgICAgICAgIGlmKHByb2MucHJvbWlzZSkge1xcbiAgICAgICAgICAgICAgcHJvYy5wcm9taXNlLnRoZW4oKCkgPT4geyBwcm9jLnByb21pc2UgPSBudWxsOyBydW4oKSB9KS5jYXRjaChlcnIgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnIudG9TdHJpbmcoKVxcbiAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgIHJldHVyblxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZVxcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyLnRvU3RyaW5nKClcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgcnVuKClcXG4gICAgfSxcXG5cXG4gICAgcHJlcGFyZUludGVycHJldGVyIChpbnRlcnByZXRlciwgc2NvcGUpIHtcXG4gICAgICBpbnRlcnByZXRlci5zZXRQcm9wZXJ0eShzY29wZSwgJ2dldEluZm8nLFxcbiAgICAgICAgaW50ZXJwcmV0ZXIuY3JlYXRlTmF0aXZlRnVuY3Rpb24oKCkgPT4ge1xcbiAgICAgICAgICByZXR1cm4gaW50ZXJwcmV0ZXIubmF0aXZlVG9Qc2V1ZG8odGhpcy5pbmZvcm1hdGlvbilcXG4gICAgICAgIH0pKVxcbiAgICAgIGludGVycHJldGVyLnNldFByb3BlcnR5KHNjb3BlLCAnYWxlcnQnLFxcbiAgICAgICAgaW50ZXJwcmV0ZXIuY3JlYXRlQXN5bmNGdW5jdGlvbigodGV4dCwgY2FsbGJhY2spID0+IHtcXG4gICAgICAgICAgaW50ZXJwcmV0ZXIucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBpbnRlcnByZXRlci5wc2V1ZG9Ub05hdGl2ZSh0ZXh0KVxcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuJG9uY2UoJ21lc3NhZ2UnLCAoKSA9PiByZXNvbHZlKGNhbGxiYWNrKCkpKSlcXG4gICAgICAgICAgfSlcXG4gICAgICAgIH0pKVxcbiAgICAgIGludGVycHJldGVyLnNldFByb3BlcnR5KHNjb3BlLCAnc2xlZXAnLFxcbiAgICAgICAgaW50ZXJwcmV0ZXIuY3JlYXRlQXN5bmNGdW5jdGlvbigoZGVsYXksIGNhbGxiYWNrKSA9PiB7XFxuICAgICAgICAgIGludGVycHJldGVyLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XFxuICAgICAgICAgICAgICBjYWxsYmFjaygpXFxuICAgICAgICAgICAgICByZXNvbHZlKClcXG4gICAgICAgICAgICB9LCBkZWxheSlcXG4gICAgICAgICAgfSlcXG4gICAgICAgIH0pKVxcbiAgICAgIGludGVycHJldGVyLnNldFByb3BlcnR5KHNjb3BlLCAnZ2V0JyxcXG4gICAgICAgIGludGVycHJldGVyLmNyZWF0ZUFzeW5jRnVuY3Rpb24oKHVybCwgb3B0aW9ucywgY2FsbGJhY2spID0+IHtcXG4gICAgICAgICAgaWYoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICAgIGNhbGxiYWNrID0gb3B0aW9uc1xcbiAgICAgICAgICAgIG9wdGlvbnMgPSBpbnRlcnByZXRlci5uYXRpdmVUb1BzZXVkbyh1bmRlZmluZWQpXFxuICAgICAgICAgIH1cXG4gICAgICAgICAgaW50ZXJwcmV0ZXIucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcXG4gICAgICAgICAgICB0aGlzLiRodHRwLmdldChpbnRlcnByZXRlci5wc2V1ZG9Ub05hdGl2ZSh1cmwpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHJldGVyLnBzZXVkb1RvTmF0aXZlKG9wdGlvbnMpKVxcbiAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxcbiAgICAgICAgICAgICAgLnRoZW4odGV4dCA9PiB7XFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGludGVycHJldGVyLm5hdGl2ZVRvUHNldWRvKHRleHQpKVxcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcXG4gICAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdClcXG4gICAgICAgICAgfSlcXG4gICAgICAgIH0pKVxcbiAgICB9XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5zZWN0aW9uOmxhc3QtY2hpbGQgeyBoZWlnaHQ6IDEwMHZoOyB9XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWVmNDg5NThcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvYXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbikge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29pbmpzXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImpzLWludGVycHJldGVyXCIsXCJjb21tb25qczJcIjpcImpzLWludGVycHJldGVyXCIsXCJhbWRcIjpcImpzLWludGVycHJldGVyXCIsXCJyb290XCI6XCJJbnRlcnByZXRlclwifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJuYXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXIgaXMtZml4ZWQtdG9wIGlzLXByaW1hcnlcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItYnJhbmRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgICAgICAgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZiYXItYnVyZ2VyIGJ1cmdlclwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5pc01lbnVTaG93biA9ICFfdm0uaXNNZW51U2hvd25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJzcGFuXCIpLCBfdm0uX3YoXCIgXCIpLCBfYyhcInNwYW5cIiksIF92bS5fdihcIiBcIiksIF9jKFwic3BhblwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci1tZW51XCIsXG4gICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0uaXNNZW51U2hvd24gfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fbSgwKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlcm8gaXMtZnVsbGhlaWdodCBpcy1wcmltYXJ5XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZXJvLWJvZHlcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgICAgIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFJlYWx0aW1lIENvaW4gTW9uaXRvcmluZyBTeXN0ZW1cXG4gICAgICAgIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWluZm8gaXMtbGFyZ2VcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjbWFpblwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIFN0YXJ0XFxuICAgICAgICBcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcInNlY3Rpb25cIiwgYXR0cnM6IHsgaWQ6IFwibWFpblwiIH0gfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaGVhZGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIENvbmZpZ1xcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItaWNvblwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIsIFwiYXJpYS1sYWJlbFwiOiBcIm1vcmUgb3B0aW9uc1wiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNDb25maWdTaG93biA9ICFfdm0uaXNDb25maWdTaG93blxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kaVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1kaS1jaGV2cm9uLWRvd25cIjogIV92bS5pc0NvbmZpZ1Nob3duLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZGktY2hldnJvbi11cFwiOiBfdm0uaXNDb25maWdTaG93blxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQ29uZmlnU2hvd24sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNDb25maWdTaG93blwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZCBpcy1ob3Jpem9udGFsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpZWxkIGlzLWdyb3VwZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hdmFpbGFibGVNYXJrZXRzLCBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInBcIiwgeyBrZXk6IG0sIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLW91dGxpbmVkXCI6IF92bS5tYXJrZXRzLmluZGV4T2YobSkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVNYXJrZXQobSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhtKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkIGlzLWhvcml6b250YWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmllbGQgaXMtZ3JvdXBlZCBpcy1ncm91cGVkLW11bHRpbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudENvaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50Q29pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkN1cnJlbmN5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY3VycmVudENvaW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKFwiYnV0dG9uXCIgaW4gJGV2ZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZENvaW4oX3ZtLmN1cnJlbnRDb2luLnRyaW0oKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50Q29pbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvaW5zLCBmdW5jdGlvbihjb2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBjb2luICsgXCItdGFnXCIsIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhZ3MgaGFzLWFkZG9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWcgaXMtc3VjY2VzcyBpcy1tZWRpdW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtbWVkaXVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5jdXJyZW5jeUljb24oY29pbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhjb2luKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhZyBpcy1tZWRpdW0gaXMtZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbW92ZUNvaW4oY29pbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5cIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5jb2lucyAmJlxuICAgICAgICAgICAgX3ZtLmNvaW5zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIF92bS5tYXJrZXRzICYmXG4gICAgICAgICAgICBfdm0ubWFya2V0cy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlIGlzLWZ1bGx3aWR0aCBpcy1ob3ZlcmFibGUgaXMtc3RyaXBwZWRcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpcy1uYXJyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3NwYW46IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNYXJrZXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29pbnMsIGZ1bmN0aW9uKGNvaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogY29pbiArIFwiLWhlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoYXMtdGV4dC1jZW50ZXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLW1lZGl1bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWRpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmN1cnJlbmN5SWNvbihjb2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGNvaW4pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvaW5Db2x1bW5zLCBmdW5jdGlvbihjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGNvbC5jb2luICsgXCItXCIgKyBjb2wudHlwZSArIFwiLWhlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGFzLXRleHQtY2VudGVyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoY29sLnR5cGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5tYXJrZXRzLCBmdW5jdGlvbihtYXJrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbWFya2V0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLXByaW1hcnlcIjogX3ZtLnJlZmVyZW5jZU1hcmtldCA9PT0gbWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZmVyZW5jZU1hcmtldCA9IG1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG1hcmtldCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvaW5Db2x1bW5zLCBmdW5jdGlvbihjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogY29sLmNvaW4gKyBcIi1cIiArIGNvbC50eXBlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNCwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmluZm9ybWF0aW9uW21hcmtldF1bY29sLmNvaW5dW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZmVyZW5jZU1hcmtldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWZlcmVuY2VNYXJrZXQgIT0gbWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uY3VycmVuY3lDb2xvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbGF0aXZlSW5mb3JtYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbC5jb2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbC50eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWxhdGl2ZUluZm9ybWF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wuY29pbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wudHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiUpXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0ubWFya2V0cyAmJiBfdm0ubWFya2V0cy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm8gY29pbnMgYXJlIHNlbGVjdGVkIVwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgaXMtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQbGVhc2UgYWRkIGNvaW5zIHlvdSB3YW50IVwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBpcy01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5vIG1hcmtldHMgYXJlIHNlbGVjdGVkIVwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgaXMtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQbGVhc2UgYWRkIG1hcmtldHMgeW91IHdhbnQhXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtblwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvZGVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWRhbmdlclwiOiBfdm0uZXJyb3IgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJDb2RlIHlvdXIgc2NyaXB0IVwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb2RlIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNvZGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmVycm9yXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWFsZXJ0XCIgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmVycm9yXG4gICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVscCBpcy1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcikpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZCBoYXMtYWRkb25zXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtbG9hZGluZ1wiOiBfdm0ucnVubmluZyB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5ydW5uaW5nIHx8IF92bS5ydW4oKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUnVuXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpcy1sb2FkaW5nXCI6IF92bS5ydW5uaW5nLFxuICAgICAgICAgICAgICAgICAgICBcImlzLW91dGxpbmVkXCI6ICFfdm0ud2F0Y2hpbmdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJ1bm5pbmcgfHwgKF92bS53YXRjaGluZyA9ICFfdm0ud2F0Y2hpbmcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJXYXRjaFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWxcIiwgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogX3ZtLm1lc3NhZ2UgfSB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJhY2tncm91bmRcIixcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0ubWVzc2FnZSA9IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2FyZFwiIH0sIFtcbiAgICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1lc3NhZ2UpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2xvc2UgaXMtbGFyZ2VcIixcbiAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiY2xvc2VcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5tZXNzYWdlID0gXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItZW5kXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWl0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWludmVydGVkXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nd2FuZ3lpL2NvaW5qcy12dWVcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWdpdGh1Yi1jaXJjbGVcIiB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJHaXRodWJcIildKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCJNYXJrZXRcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCIgfSwgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIkN1cnJlbmN5XCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLW1lZGl1bSBpcy1sZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1jb2luc1wiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1sZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1jdXJyZW5jeS1rcndcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZWY0ODk1OFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVlZjQ4OTU4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ2dWVcIixcImNvbW1vbmpzMlwiOlwidnVlXCIsXCJhbWRcIjpcInZ1ZVwiLFwicm9vdFwiOlwiVnVlXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwidnVlLXJlc291cmNlXCIsXCJjb21tb25qczJcIjpcInZ1ZS1yZXNvdXJjZVwiLFwiYW1kXCI6XCJ2dWUtcmVzb3VyY2VcIixcInJvb3RcIjpcIlZ1ZVJlc291cmNlXCJ9XG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9