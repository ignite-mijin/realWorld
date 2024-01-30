import type { Meta, StoryObj } from "@storybook/react";

import Title from "@/components/atomic/Title";

const meta = {
  title: "Atomic/Title",
  component: Title,
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: "docs",
    layout: "centered",
    componentSubtitle: "타이틀 컴포넌트",
    docs: {
      description: {
        component: "titleType에 따라서 기본 스타일이 정의되어 있습니다.",
      },
    },
  },

  argTypes: {
    type: {
      description: "title용도에 따른 지정",
      control: {
        type: "select",
        options: ["page", "section"],
      },
    },
    text: {
      description: "title이름",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string | ReactNode",
        },
      },
    },
    description: {
      description: "subText 내용",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string | ReactNode",
        },
      },
    },
  },
  args: {
    type: "page",
    text: "제목",
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "단독타이틀",
  },
};

export const PageTitle: Story = {
  args: {
    type: "page",
    text: "Jungle",
    description: "welcome to the jungle",
  },
};

export const SectionTitle: Story = {
  args: {
    type: "section",
    text: "ArticleTitle",
    description: "introduce article",
  },
};
