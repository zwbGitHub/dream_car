<template>
  <div class="list-item-wrapper" @click="toSeries">
    <img :src="item.brand_logo" :alt="item.brand_name" />
    <h1>{{ item.brand_name || 加载失败 }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    toSeries() {
      this.$router.push({
        name: 'series',
        params: {
          ...this.item
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.list-item-wrapper {
  padding: 0.1rem;
  display: flex;
  justify-content: left;
  align-items: center;
  border: skyblue 1px solid;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  margin-bottom: 0.1rem;
  box-shadow: 1px 1px 5px skyblue;
  img {
    height: 0.7rem;
    width: 0.7rem;
    margin: 0 0.4rem;
  }
  h1 {
    color: skyblue;
    position: relative;
    height: 0.7rem;
    display: flex;
    align-items: center;
    font-size: 0.25rem;
    &::before {
      content: '';
      position: absolute;
      display: block;
      top: 0.05rem;
      left: -0.2rem;
      height: 0.6rem;
      width: 2px;
      background: rgba(0, 0, 0, 0.247);
    }
  }
}
</style>
