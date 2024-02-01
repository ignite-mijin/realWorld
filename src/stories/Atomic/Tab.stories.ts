import type { Meta, StoryObj } from "@storybook/react";

import Tab from "@/components/atomic/Tab";

const meta = {
  title: "Atomic/Tab",
  component: Tab,
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: "docs",
    layout: "centered",
    componentSubtitle: "Tab 컴포넌트",
    docs: {
      description: {
        component: "Tab 리스트를 인자로 받아 탭을 생성합니다.",
      },
    },
  },
  argTypes: {
    list: {
      description: "tab 타이틀과 아이디값을 가진 배열",
      control: {
        type: "array",
        separator: ",",
      },
      table: {
        type: {
          summary: "Array<{ title: string; id: string }>",
        },
      },
      required: true,
    },
    onClick: {
      description: "탭 클릭시 실행할 함수에 대한 지정, 매개변수로 id값을 받음",
      action: "clicked",
    },
  },
  args: {
    list: [
      { title: "탭1", id: "tab1" },
      { title: "탭2", id: "tab2" },
      { title: "탭3", id: "tab3" },
    ],
  },
} satisfies Meta<typeof Tab>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: [
      { title: "탭1", id: "tab1" },
      { title: "탭2", id: "tab2" },
      { title: "탭3", id: "tab3" },
    ],
    onClick: (id: string) => alert("통신/로직 처리를 해주세요" + id),
  },
};
