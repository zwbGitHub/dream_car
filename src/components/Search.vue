<template>
  <div class="search">
    <input
      type="text"
      v-model.trim="iptValue"
      :placeholder="holderText"
      @keydown.enter="checkValue"
      @input="clearValue"
    />
    <button @click="checkValue" class="iconfont icon-sousuo1"></button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SearchValue, ClearValue } from '../utils/search.js'
import throttle from 'lodash/throttle'
export default {
  data() {
    return {
      iptValue: '',
    }
  },
  computed: {
    ...mapState(['brandData']),
    holderText() {
      switch (this.$route.name) {
        case 'brand':
          return '请输入车名或首字母进行查询（劳斯莱斯/L）'
        case 'series':
          return '请输入车名—车系类型（劳斯莱斯-大型车）'
        case 'model':
          return '请输入车名-车型（劳斯莱斯-曜影）'
        default:
          return '请输入'
      }
    },
  },
  methods: {
    checkValue: throttle(function () {
      if (this.iptValue) SearchValue(this.iptValue, this.$route.name)
    }, 3000),
    clearValue() {
      ClearValue(this.iptValue, this.$route.name)
    },
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        this.iptValue = ''
      },
    },
  },
}
</script>

<style lang="less" scoped>
.search {
  border-bottom: skyblue solid 1px;
  background: rgb(178, 221, 238);
  height: 0.47rem;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.18rem;
  z-index: 999;
  input {
    width: 85%;
    height: 0.3rem;
    border-radius: 4px;
    font-size: 0.12rem;
    margin-left: 0.07rem;
    background: white;
    border: 1px solid skyblue;
    box-shadow: 1px 1px 5px skyblue;
  }
  button {
    width: 10%;
    height: 0.3rem;
    border-radius: 4px;
    background: white;
    margin-right: 0.07rem;
    border: 1px solid skyblue;
    box-shadow: 1px 1px 5px skyblue;
    font-size: 0.18rem;
  }
}
</style>
