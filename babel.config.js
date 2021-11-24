// 判断是否为产品打包阶段来动态添加console的移除指令
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // 去除console
  plugins: [...prodPlugins],
}
