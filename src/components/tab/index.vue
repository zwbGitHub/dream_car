<template>
  <div class="tab-wrapper">
    <click-circle v-for="(item, index) of tabDatas" :key="index" :item="item" />
  </div>
</template>

<script>
import ClickCircle from './ClickCircle.vue'
export default {
  name: 'Tab',
  data() {
    return {
      tabDatas: [
        { name: '品 牌', path: '/brand' },
        { name: '车 系', path: '/series' },
        { name: '车 型', path: '/model' },
      ],
    }
  },
  components: {
    ClickCircle,
  },
}
</script>

<style lang="less" scoped>
.tab-wrapper {
  width: 100%;
  height: 0.44rem;
  position: fixed;
  background: white;
  border-top: 1px solid skyblue;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
