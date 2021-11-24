<template>
  <div class="model-wrapper" @scroll="scrollEvent($event)" ref="scroll">
    <div class="title-text">
      <div class="car-type">{{ modelShowSeries.levelname }}:</div>
      <div class="car-name">
        {{ modelShowSeries.sname }} - {{ modelShowSeries.name }}
      </div>
    </div>
    <list-item
      v-for="item of modelData"
      :key="item.id"
      :item="item"
    ></list-item>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ListItem from '../components/model'
import { setModel, setBrand } from '../service/request'
import debounce from 'lodash/debounce'
export default {
  name: 'Model',
  components: {
    ListItem,
  },
  computed: {
    ...mapState(['modelData', 'modelShowSeries', 'brandData']),
  },
  activated() {
    this.$refs.scroll.scrollTop = this.listScroll
    if (this.$route.params.id) {
      this.$store.commit('SetModelShowSeries', this.$route.params)
      setModel(this.$route.params.id)
    }
  },
  async created() {
    if (this.brandData.length === 0) {
      await setBrand()
    }
    await setModel(this.modelShowSeries.id)
  },
  methods: {
    scrollEvent: debounce(function (e) {
      this.listScroll = e.target.scrollTop
    }, 500),
  },
}
</script>

<style lang="less" scoped>
.model-wrapper {
  padding: 0.1rem 0.07rem 0;
  height: 100%;
  overflow-y: scroll;
  .title-text {
    border: 1px solid skyblue;
    padding: 0.1rem;
    border-radius: 8px;
    background: #fff;
    margin-bottom: 0.1rem;
    box-shadow: 1px 1px 5px skyblue;
    .car-type {
      font-size: 0.17rem;
      color: skyblue;
    }
    .car-name {
      text-align: center;
      padding: 0.1rem 0;
      font-family: monospace;
      font-size: 0.25rem;
    }
  }
}
</style>
