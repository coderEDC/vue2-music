module.exports = {
  configureWebpack: {
    reslove: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        api: "@/api",
        views: "@/views",
        utils: "@/utils",
        mixin: "@/mixin",
      },
    },
  },
};
