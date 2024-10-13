const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // eslint 룰을 삭제하여 ESLint를 비활성화합니다.
    config.module.rules.delete('eslint')
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})