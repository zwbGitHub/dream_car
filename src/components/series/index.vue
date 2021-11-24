<template>
  <div class="list-item-wrapper" @click="toModel">
    <h1>
      <p>{{ item.sname }}:&nbsp;</p>
      {{ item.name }}
    </h1>
    <h2>类型: {{ item.levelname }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    toModel() {
      this.$router.push({
        name:'model',
        params:this.item
      })
    },
  },
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
  overflow: hidden;
  background: #fff;
  margin-bottom: 0.1rem;
  box-shadow: 1px 1px 5px skyblue;
  h1 {
    color: skyblue;
    position: relative;
    // height: 0.6rem;
    display: flex;
    align-items: center;
    font-size: 0.22rem;
    p {
      color: rgb(117,117,117);
      font-size: 0.20rem;
    }
  }
  h2 {
    margin-top: 0.1rem;
    font-size: 0.15rem;
    color: skyblue;
  }
}
</style>
