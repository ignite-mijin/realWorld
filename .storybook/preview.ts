import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalStyles from "./GlobalStyles"; //스토리북에서 공통 스타일 사용을 위한 글로벌 컴포넌트

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    //스토리북에 글로벌 스타일 적용
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
  ],
};

export default preview;
