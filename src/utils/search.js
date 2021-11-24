import { getShowBrand, setSeries, setModel } from '../service/request'
import store from '../store'
import { getSeries } from '../service'
import levels from '../data/levels'
export function SearchValue(value, path) {
  switch (path) {
    case 'brand':
      var iCode = value.charCodeAt(0)
      if (value.length === 1 && iCode >= 0 && iCode <= 255) {
        getShowBrand(value)
      } else {
        let data = store.state.brandData.filter((item) => {
          return item.brand_name.includes(value)
        })
        store.commit('SetShowBrand', data)
      }
      break
    case 'series':
      var brand = ''
      var level = ''
      if (value.includes('-')) {
        var arr = value.split('-')
        brand = arr[0]
        level = arr[1]
        var levelIdx = levels.findIndex((item) => item === level) + 1
      } else {
        brand = value
      }
      var brandIdx = 0
      store.state.brandData.forEach((item) => {
        if (item.brand_name === brand) {
          brandIdx = item.id
        }
      })
      if (levelIdx !== 0) {
        setSeries(brandIdx, levelIdx)
      } else {
        setSeries(brandIdx)
      }

      break
    case 'model':
      if (value.indexOf('-' !== -1)) {
        let searchArr = value.split('-')
        let brandIdx
        store.state.brandData.forEach((item) => {
          if (item.brand_name === searchArr[0]) {
            brandIdx = item.id
          }
        })
        getSeries(brandIdx)
          .then((response) => {
            // console.log(response)
            const seriesImd = response.data.result
            let series = seriesImd.find((item) => item.name === searchArr[1])
            setModel(series.id).then(() => {
              store.commit('SetModelShowSeries', series)
            })
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        alert('输入错误，请按提示输入正确格式')
      }
      break
    default:
      break
  }
}
export function ClearValue(value, path) {
  switch (path) {
    case 'brand':
      if (value === '') {
        store.commit('SetShowBrand', store.state.brandData)
      }
      break
    case 'series':
      break
    case 'model':
      break
    default:
      break
  }
}
