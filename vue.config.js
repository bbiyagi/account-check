const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: process.env.VUE_APP_BASE_API,
    // proxy: {
    //   "/api": {
    //     target: "https://testapi.openbanking.or.kr/v2.0/oauth/2.0/token",
    //     changeOrigin: true,
    //   },
    // },
  },
});
