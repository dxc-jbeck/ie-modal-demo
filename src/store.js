import Vue from 'vue'
import Vuex from 'vuex'
import playlist from '@/services/playlist'

Vue.use(Vuex)

export default new Vuex.Store({  
  modules: {
    playlist
  }
})
