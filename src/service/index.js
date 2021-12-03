import getAxios from '../utils/http.js'

function getBrand(letter) {
  return getAxios({
    url: '/api/cxdq/brand',
    data: {
      first_letter: letter
    }
  })
}
function getSeries(brandId, levelId) {
  return getAxios({
    url: '/api/cxdq/series',
    data: {
      brandid: brandId,
      levelid: levelId
    }
  })
}
function getModel(seriesId) {
  return getAxios({
    url: '/api/cxdq/models',
    data: {
      series_id: seriesId
    }
  })
}

export { getBrand, getSeries, getModel }
