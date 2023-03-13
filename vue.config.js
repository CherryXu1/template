const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path')
// const proxyConfig = require("./vue.proxy.config");

// eslint-disable-next-line no-unused-vars
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 生产-分析包
const plugins = [
  new webpack.ProvidePlugin({
    _: 'lodash',
    Axios: 'axios'
  })
]
const version = new Date().getTime()
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  productionSourceMap: false,
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugin('html').tap((args) => {
      args[0].title = '云济'
      return args
    })
    if (process.env.NODE_ENV === 'production') {
      config.plugin('compression').use(CompressionWebpackPlugin, [
        {
          test: /\.js$|\.css$/,
          algorithm: 'gzip',
          threshold: 1024 * 512
        }
      ])
    }
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: '@import "@/styles/variables";',
  //     },
  //   },
  // },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    https: false,
    open: true
    // proxy: proxyConfig,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@views': path.resolve(__dirname, 'src/views'),

        '@utils': path.resolve(__dirname, 'src/utils')
      }
    },
    plugins: plugins,
    output: {
      filename: `js/[name].${version}.js`,
      chunkFilename: `js/[name].${version}.js`
    }
  }
}
