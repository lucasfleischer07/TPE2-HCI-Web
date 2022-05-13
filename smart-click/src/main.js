import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'

import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'


import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  vuetify: new Vuetify({
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.base,
          secondary: colors.indigo.white,
          accent: colors.teal.base,
          error: "#B30000",
          warning: colors.pink.base,
          info: colors.cyan.base,
          success: "#80ccff"
          // success: "#003d66"

        },
      },
    },
    icons: {
      iconfont: 'md',
    },
  }),

  router,
  store,
  render: h => h(App)
}).$mount('#app')


