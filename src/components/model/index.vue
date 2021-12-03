<template>
  <div class="list-item-wrapper">
    <p class="name">{{ item.name }}</p>
    <p class="peizhi">配置：{{ item.peizhi }}</p>
    <p class="year">出产年份：{{ item.year }}</p>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.list-item-wrapper {
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  border: skyblue 1px solid;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 0.1rem;
  box-shadow: 1px 1px 5px skyblue;
  p {
    font-size: 0.2rem;
    padding: 0.1rem 0;
  }
  .name {
    color: skyblue;
    text-align: center;
    font-size: 0.22rem;
  }
}
</style>
