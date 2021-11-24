<template>
  <div class="error-wrapper">
    <img :src="require('@/assets/img/error.png')" alt="错误" />
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import errorText from '@/data/error.js'
export default {
  name: 'ErrorWall',
  props: {
    errorCode: Number || String,
  },
  data() {
    return {
      title: errorText[this.errorCode],
    }
  },
}
</script>

<style lang="less" scoped>
.error-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 25%;
    margin-top: -0.4rem;
  }
  h1 {
    font-size: 0.2rem;
    color: skyblue;
    margin-top: 0.1rem;
  }
}
</style>
