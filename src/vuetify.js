import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import manifestJSON from '../public/manifest.json'

Vue.use(Vuetify, {
  theme: {
    primary: manifestJSON.theme_color
  }
})
