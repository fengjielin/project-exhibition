module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'services': '@/services',
        'views': '@/views',
      }
    }
  },
  // devServer: {
  //   host: '0.0.0.0',
  //   port: 8080,
  //   disableHostCheck: true,
  //   proxy: {
  //     // 代理 用于解决跨域问题
  //     '/api': {
  //       target: 'https://autumnfish.cn',
  //       pathRewrite: { '/api': '' }
  //     }
  //   }
  // },
}