const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave: false
  devServer: {
    proxy: {
      "^/api/": {
        target: "https://ss.covid19checkins.com/backend/api/",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
});
