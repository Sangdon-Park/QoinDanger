<template>
  <div>
      <nav class="navbar is-fixed-top is-primary">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              {{ title }}
            </a>
            <span class="navbar-burger burger" @click="isMenuShown = !isMenuShown">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div class="navbar-menu" :class="{'is-active': isMenuShown}">
            <div class="navbar-end">
              <span class="navbar-item">
                <a class="button is-primary is-inverted" href="https://github.com/gwangyi/coinjs-vue">
                  <span class="icon">
                    <i class="mdi mdi-github-circle"></i>
                  </span>
                  <span>Github</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    <section class="hero is-fullheight is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            Realtime Coin Monitoring System
          </h2>
          <a href="#main" class="button is-info is-large">
            Start
          </a>
        </div>
      </div>
    </section>
    <section class="section" id="main">
      <div class="container">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
              Config
              </p>
              <a href="#" @click.prevent="isConfigShown = !isConfigShown" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="mdi" :class="{'mdi-chevron-down': !isConfigShown, 'mdi-chevron-up': isConfigShown}" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div v-show="isConfigShown" class="card-content">
              <div class="content">
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Market</label>
                  </div>
                  <div class="field-body">
                    <div class="field is-grouped">
                      <p v-for="m in availableMarkets" :key="m" class="control">
                        <a class="button is-link" :class="{'is-outlined': markets.indexOf(m) === -1}" @click.prevent="toggleMarket(m)">
                          {{ m }}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Currency</label>
                  </div>
                  <div class="field-body">
                    <div class="field is-grouped is-grouped-multiline">
                      <p class="control has-icons-left">
                        <input class="input" type="text" placeholder="Currency" @keyup.space.enter="addCoin(currentCoin.trim())" v-model="currentCoin">
                        <span class="icon is-medium is-left">
                          <i class="mdi mdi-coins"></i>
                        </span>
                      </p>
                      <div v-for="coin in coins" :key="coin + '-tag'" class="control">
                        <div class="tags has-addons">
                          <span class="tag is-success is-medium">
                            <span class="icon is-medium">
                              <i class="mdi" :class="currencyIcon(coin)"></i>
                            </span>
                            {{ coin }}
                          </span>
                          <a class="tag is-medium is-delete" @click="removeCoin(coin)"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="column">
          <table v-if="coins && coins.length > 0 && markets && markets.length > 0" class="table is-fullwidth is-hoverable is-stripped">
            <thead>
              <tr>
                <th class="is-narrow" rowspan="2">Market</th>
                <th v-for="coin in coins" :key="coin + '-header'" colspan="2" class="has-text-centered">
                  <span class="icon is-medium">
                    <i class="mdi" :class="currencyIcon(coin)"></i>
                  </span>
                  {{ coin }}
                </th>
              </tr>
              <tr>
                <th v-for="col in coinColumns" :key="col.coin + '-' + col.type + '-header'" class="has-text-centered">{{ col.type }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="market in markets" :key="market">
                <th @click="referenceMarket = market" :class="{'is-primary': referenceMarket === market}">{{market}}</th>
                <td v-for="col in coinColumns" :key="col.coin + '-' + col.type">
                  <span class="icon is-left">
                    <i class="mdi mdi-currency-krw"></i>
                  </span>
                  <span>{{ information[market][col.coin][col.type].toLocaleString() }}</span>
                  <span v-if="referenceMarket && referenceMarket != market"
                        :class="currencyColor(relativeInformation(market, col.coin, col.type) - 1)">
                    ({{(relativeInformation(market, col.coin, col.type) * 100).toFixed(2) }}%)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <template v-else-if="markets && markets.length > 0">
            <p class="title is-5">No coins are selected!</p>
            <p class="title is-6">Please add coins you want!</p>
          </template>
          <template v-else>
            <p class="title is-5">No markets are selected!</p>
            <p class="title is-6">Please add markets you want!</p>
          </template>
        </div>
      </div>
      <div class="container">
        <div class="column">
          <div class="field">
            <p class="control has-icons-right">
            <textarea class="textarea" :class="{'is-danger': error}" placeholder="Code your script!" v-model="code"></textarea>
            <span v-if="error" class="icon is-small is-right">
              <i class="mdi mdi-alert"></i>
            </span>
            </p>
            <p v-if="error" class="help is-danger">{{error}}</p>
          </div>
          <div class="field has-addons">
            <p class="control">
            <a class="button is-primary" :class="{'is-loading': running}" @click="running || run()">Run</a>
            </p>
            <p class="control">
            <a class="button is-primary" :class="{'is-loading': running, 'is-outlined': !watching}" @click="running || (watching = !watching)">Watch</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="modal" :class="{'is-active': message}">
      <div class="modal-background" @click="message = ''"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          {{ message }}
        </section>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="message = ''"></button>
    </div>
  </div>
</template>

<script>
import coinjs from 'coinjs'
import Interpreter from 'js-interpreter'

const availableMarkets = Object.keys(coinjs)

const currencyIcon = {
  'BTC': 'mdi-currency-btc',
  'BCC': 'mdi-currency-btc',
  'BCH': 'mdi-currency-btc',
  'BCG': 'mdi-currency-btc',
  'ETH': 'mdi-currency-eth',
  'ETC': 'mdi-currency-eth',
}

export default {
  props: {
    title: {
      type: String,
      default: "QoinDanger"
    }
  },

  data () {
    return {
      isConfigShown: true,
      availableMarkets,
      markets: [].concat(availableMarkets),
      currentCoin: '',
      coins: [],
      information: (() => {
        const ret = {}
        for(let m of availableMarkets) ret[m] = {}
        return ret
      })(),
      referenceMarket: '',
      isMenuShown: false,
      code: '',
      message: '',
      error: '',
      runOnUpdate: '',
      running: false,
      watching: false,
    }
  },

  watch: {
    markets (m) {
      document.cookie = "markets=" + escape(JSON.stringify(m))
    },

    coins (c) {
      document.cookie = "coins=" + escape(JSON.stringify(c))
    },

    message (m) {
      this.$emit('message', m)
    },

    code (c) {
      document.cookie = "code=" + escape(JSON.stringify(c))
      try {
        this.$proc = new Interpreter(c, this.prepareInterpreter)
        this.$proc.promise = null
        this.error = ''
      } catch(err) {
        this.error = err.toString()
      }
    },

    watching (w) {
      if(w) {
        this.$on('information', this.run)
      } else {
        this.$off('information', this.run)
      }
    },

    information: {
      handler (i) {
        this.$emit('information', i)
      },
      deep: true
    }

  },

  computed: {
    coinColumns () {
      let ret = []
      for(let coin of this.coins) {
        ret.push({coin, type: 'ask'})
        ret.push({coin, type: 'bid'})
      }
      return ret
    },
  },

  created () {
    this.$coinjs = {}
    this.$watch = {}
    for(let c in coinjs) {
      this.$coinjs[c] = new coinjs[c]()
    }
  },

  mounted () {
    let cookies = {}
    for(let pair of document.cookie.split('; ')) {
      try {
        let [a, b] = pair.split('=')
        cookies[a] = JSON.parse(unescape(b))
      } catch (err) {
      }
    }

    if(cookies.markets !== undefined)
      this.markets = cookies.markets
    if(cookies.coins !== undefined) {
      for(let coin of cookies.coins)
        this.addCoin(coin)
    }
    if(cookies.code !== undefined) {
      this.code = cookies.code
    }
  },

  beforeDestroy () {
    for(let c in this.$coinjs) {
      this.$coinjs[c].close()
    }
  },

  methods: {
    toggleMarket (m) {
      const idx = this.markets.indexOf(m)
      if(idx === -1) this.markets.push(m)
      else this.markets.splice(idx, 1)
    },
    addCoin (c) {
      c = c.toUpperCase()
      const idx = this.coins.indexOf(c)
      if(idx === -1) {
        if(!this.$watch[c]) {
          this.$watch[c] = true
          for(let m in this.$coinjs) {
            this.$set(this.information[m], c, {ask: 0, bid: 0})
            this.$coinjs[m].subscribe(c)
            this.$coinjs[m].on(c.toLowerCase(), e => {
              this.information[m][c].ask = e.ask
              this.information[m][c].bid = e.bid
            })
          }
        }
        this.coins.push(c)
      }
      this.currentCoin = ''
    },
    removeCoin (c) {
      const idx = this.coins.indexOf(c)
      if(idx !== -1) this.coins.splice(idx, 1)
      this.currentCoin = c
    },
    currencyIcon (c) {
      return currencyIcon[c.toUpperCase()] || 'mdi-coins'
    },
    relativeInformation (market, coin, tp) {
      let rtp = tp === 'ask' ? 'bid' : 'ask'
      return this.referenceMarket ? this.information[market][coin][tp] / this.information[this.referenceMarket][coin][rtp] : 1
    },
    currencyColor (i) {
      return i == 0 ? 'has-text-warning' : (i > 0 ? 'has-text-success' : 'has-text-danger')
    },
    run () {
      let proc = this.$proc

      const run = () => {
        this.running = true
        try {
          while(proc.step()) {
            if(proc.promise) {
              proc.promise.then(() => { proc.promise = null; run() }).catch(err => {
                this.message = err.toString()
              })
              return
            }
          }
          this.running = false
        } catch(err) {
          this.message = err.toString()
        }
      }
      run()
    },

    prepareInterpreter (interpreter, scope) {
      interpreter.setProperty(scope, 'getInfo',
        interpreter.createNativeFunction(() => {
          return interpreter.nativeToPseudo(this.information)
        }))
      interpreter.setProperty(scope, 'alert',
        interpreter.createAsyncFunction((text, callback) => {
          interpreter.promise = new Promise((resolve, reject) => {
            this.message = interpreter.pseudoToNative(text)
            this.$nextTick(() => this.$once('message', () => resolve(callback())))
          })
        }))
      interpreter.setProperty(scope, 'sleep',
        interpreter.createAsyncFunction((delay, callback) => {
          interpreter.promise = new Promise((resolve, reject) => {
            setTimeout(() => {
              callback()
              resolve()
            }, delay)
          })
        }))
      interpreter.setProperty(scope, 'get',
        interpreter.createAsyncFunction((url, options, callback) => {
          if(callback === undefined) {
            callback = options
            options = interpreter.nativeToPseudo(undefined)
          }
          interpreter.promise = new Promise((resolve, reject) => {
            this.$http.get(interpreter.pseudoToNative(url),
                           interpreter.pseudoToNative(options))
              .then(response => response.text())
              .then(text => {
                callback(interpreter.nativeToPseudo(text))
                resolve()
              }).catch(reject)
          })
        }))
    }
  }
}
</script>

<style>
section:last-child { height: 100vh; }
</style>
