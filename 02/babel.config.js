module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            atoms: "./atoms",
            utils: "./utils",
            assets: "./assets",
            screens: "./screens",
            constants: "./constants",
            components: "./components",
          },
        },
      ],
    ],
  };
};
