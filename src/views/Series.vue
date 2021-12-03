<template>
  <div class="series-wrapper" @scroll="scrollEvent($event)" ref="scroll">
    <div class="tips">点击以下列表信息查看车系车型</div>
    <list-item v-for="item of seriesData" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ListItem from '../components/series'
import { setBrand, setSeries } from '../service/request.js'
import { mapState } from 'vuex'
import debounce from 'lodash/debounce'
export default {
  name: 'Series',
  data() {
    return {
      brand: {
        brand_name: '劳斯莱斯',
        id: 173
      }
    }
  },
  components: {
    ListItem
  },
  computed: {
    ...mapState(['seriesData', 'brandData'])
  },
  activated() {
    this.$refs.scroll.scrollTop = this.listScroll
    if (this.$route.params.id) {
      this.brand = this.$route.params
      setSeries(this.$route.params.id)
    }
  },
  async created() {
    if (this.brandData.length === 0) {
      await setBrand()
    }
    await setSeries(this.brand.id)
  },
  methods: {
    scrollEvent: debounce(function (e) {
      this.listScroll = e.target.scrollTop
    }, 500)
  }
}
</script>

<style lang="less" scoped>
.series-wrapper {
  padding: 0.28rem 0.07rem 0;
  height: 100%;
  overflow-y: scroll;
  .tips {
    height: 0.17rem;
    line-height: 0.17rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 0.53rem;
    font-size: 0.13rem;
    text-align: center;
    margin-bottom: 0.1rem;
    background: skyblue;
    margin: 0 0.07rem;
    border-radius: 4px;
    z-index: 666;
  }
}
</style>
