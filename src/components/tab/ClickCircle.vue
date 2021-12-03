<template>
  <router-link :to="item.path" class="tab">
    {{ item.name }}
  </router-link>
</template>

<script>
export default {
  name: 'ClickCircle',
  props: {
    item: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="less" scoped>
.tab {
  box-sizing: border-box;
  display: block;
  font-size: 0.16rem;
  color: skyblue;
  border: skyblue 1px solid;
  padding: 0.04rem 0.2rem;
  border-radius: 8px;
  box-shadow: 0 0 8px skyblue;
}
.router-link-active {
  color: white;
  background: skyblue;
}
</style>
