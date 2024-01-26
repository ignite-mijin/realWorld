//webpack settings for file path aliases
const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  babel: {
    //babel settings for css prop
    presets: ["@emotion/babel-preset-css-prop"],
  },
  plugins: [
    {
      //plugin for file path aliases
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
