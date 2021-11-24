import { getBrand, getSeries, getModel } from './index'
import store from '../store/index.js'

export async function setBrand(letter) {
  const { data } = await getBrand(letter)
  // console.log(data.result)
  if (data.result) {
    store.commit('SetBrand', data.result)
    localStorage.setItem('brandData', JSON.stringify(data.result))
  }
  store.commit('SetErrorCode', data.error_code)
}
export async function getShowBrand(letter) {
  const { data } = await getBrand(letter)
  // console.log(2,data.result)
  if (data.result) store.commit('SetShowBrand', data.result)
  store.commit('SetErrorCode', data.error_code)
}
export async function setSeries(brandId, levelId) {
  const { data } = await getSeries(brandId, levelId)
  // console.log('series',data)
  if (data.result) store.commit('SetSeries', data.result)
  store.commit('SetErrorCode', data.error_code)
}
export async function setModel(seriesId) {
  const { data } = await getModel(seriesId)
  // console.log('Model', data)
  if (data.result) store.commit('SetModel', data.result)
  store.commit('SetErrorCode', data.error_code)
}
