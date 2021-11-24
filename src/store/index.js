import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brandData: JSON.parse(localStorage.getItem('brandData')) || [],
    showBrand: [],
    seriesData: [],
    modelData: [],
    modelShowSeries: {
      id: 2490,
      name: '曜影',
      levelname: '跑车',
      sname: '劳斯莱斯',
    },
    errorCode: 200,
  },
  mutations: {
    SetBrand(state, value) {
      state.brandData = value
      state.showBrand = value
    },
    SetShowBrand(state, value) {
      state.showBrand = value
    },
    SetSeries(state, value) {
      state.seriesData = value
    },
    SetModel(state, value) {
      state.modelData = value
    },
    SetModelShowSeries(state, value) {
      state.modelShowSeries = value
    },
    SetErrorCode(state, value) {
      state.errorCode = value
    },
  },
})
