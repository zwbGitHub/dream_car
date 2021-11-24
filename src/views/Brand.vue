<template>
  <div class="brand-wrapper" @scroll="scrollEvent($event)" ref="scroll">
    <list-item v-for="item of showBrand" :key="item.id" :item="item" />
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
    }
  },
  components: {
    ListItem,
  },
  created() {
    setBrand()
  },
  computed: {
    ...mapState(['showBrand']),
  },
  methods: {
    scrollEvent: debounce(function (e) {
      this.listScroll = e.target.scrollTop
      // console.log(e.target.scrollTop)
    }, 500),
  },
  activated() {
    this.$refs.scroll.scrollTop = this.listScroll
  },
}
</script>

<style lang="less" scoped>
.brand-wrapper {
  padding: 0.1rem 0.07rem 0;
  height: 100%;
  overflow-y: scroll;
}
</style>
