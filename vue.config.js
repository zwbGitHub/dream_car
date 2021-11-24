const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
let isProduction = process.env.NODE_ENV
module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://apis.juhe.cn/',
        ws: true,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  configureWebpack: (config) => {
    // 生产环境相关配置
    if (isProduction == 'production') {
      // 代码压缩
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            //生产环境自动删除 console
            warnings: false,
            compress: {
              // warnings: false, // 若打包错误，则注释这行
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log'],
            },
          },
          parallel: true,
        })
      )
    }
  },
  // 此配置防止生成无用的 source map文件，有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true
}
