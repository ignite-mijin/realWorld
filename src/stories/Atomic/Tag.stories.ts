import type { Meta, StoryObj } from "@storybook/react";

import Tag from "@/components/atomic/Tag";

const meta = {
  title: "Atomic/Tag",
  component: Tag,
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: "docs",
    layout: "centered",
    componentSubtitle: "Tag 컴포넌트",
    docs: {
      description: {
        component: "Tag",
      },
    },
  },

  argTypes: {
    text: {
      description: "tag 내용",
      control: {
        type: "text",
      },
    },
  },
  args: {
    text: "storybook",
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "storybook",
  },
};
