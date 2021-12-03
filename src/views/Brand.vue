<template>
  <div class="brand-wrapper" @scroll="scrollEvent($event)" ref="scroll">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in showBrand" :key="item.id" >
      <list-item :item ="item"/>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ListItem from '../components/brand'
import { setBrand } from '../service/request.js'
import debounce from 'lodash/debounce'
export default {
  name: 'Brand',
  data() {
    return {
      listScroll: 0,
      loading: false,
      finished: false
    }
  },
  components: {
    ListItem
  },
  created() {
    setBrand()
  },
  computed: {
    ...mapState(['showBrand','brandData'])
  },
  methods: {
    scrollEvent: debounce(function (e) {
      this.listScroll = e.target.scrollTop
      // console.log(e.target.scrollTop)
    }, 500),
    onLoad() {
      setTimeout(() => {
      let length = this.showBrand.length
          this.showBrand.push(
            ...this.brandData.slice(length,length+21)
          )
        

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.showBrand.length >= this.brandData.length) {
          this.finished = true
        }
      }, 1000)
    }
  },
  activated() {
    this.$refs.scroll.scrollTop = this.listScroll
  }
}
</script>

<style lang="less" scoped>
.brand-wrapper {
  padding: 0.1rem 0.07rem 0;
  height: 100%;
  overflow-y: scroll;
  .van-cell{
    padding: 0;
  }
  .van-cell::after{
    display: none;
  }
}

</style>
