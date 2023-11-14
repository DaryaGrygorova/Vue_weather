const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "docs",
  // publicPath: process.env.VUE_APP_NODE_ENV === "production" ? "/Vue_weather/" : "/",
});
