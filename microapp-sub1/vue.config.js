const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const APP_NAME = require("./package.json").name;
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 10001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: APP_NAME,
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: "umd",
    },
  },
});
