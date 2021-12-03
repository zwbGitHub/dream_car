<template>
  <div class="layout-wrapper">
    <search />
    <div class="container">
      <keep-alive v-if="errorCode === 0 || errorCode === 200">
        <router-view></router-view>
      </keep-alive>
      <error-wall :errorCode="errorCode" v-else></error-wall>
    </div>
    <tab />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Search from '../components/Search.vue'
import Tab from '../components/tab'
import ErrorWall from '../components/error'
export default {
  name: 'Layout',
  components: {
    Search,
    Tab,
    ErrorWall
  },
  computed: {
    ...mapState(['errorCode'])
  }
}
</script>

<style lang="less" scoped>
.layout-wrapper {
  height: 100%;
}
</style>
