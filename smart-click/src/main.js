import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'

import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'


import router from './router'


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
          // error: colors.red.base,
          error: "#006bb3",
          warning: colors.pink.base,
          info: colors.cyan.base,
          // success: colors.green.base
          success: "#80ccff"
        },
        dark: {
          error: "#006bb3",
          success: "#80ccff"
        }
      },
    },
    icons: {
      iconfont: 'md',
    },
  }),
  router,
  render: h => h(App)
}).$mount('#app')


