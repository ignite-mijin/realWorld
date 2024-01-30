import type { StorybookConfig } from "@storybook/react-webpack5";

const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    // storybook 에 emotion css props babel 설정추가 하기 설정 시 스토리북에서 오류 발생하나, 타입오류가 발생
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          ["react-app", { flow: false, typescript: true }], //타입 오류를 해결하기 위해 typescript: true 추가
          require.resolve("@emotion/babel-preset-css-prop"),
        ],
      },
    });
    config.resolve?.plugins?.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      })
    );
    return config;
  },
  staticDirs: ["../public"],
};
export default config;
