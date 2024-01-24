import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/atomic/Button";

const meta = {
  title: "Atomic/Button",
  component: Button,
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: "docs",
    layout: "centered",
    componentSubtitle: "버튼 컴포넌트",
    docs: {
      description: {
        component: "buttonType에 따라서 기본 스타일이 정의되어 있습니다.",
      },
    },
  },
  argTypes: {
    type: {
      description: "DOM버튼 기본 type에 대한 지정",
      control: {
        type: "select",
        options: ["button", "submit", "reset"],
      },
    },
    buttonType: {
      description:
        "버튼 용도에 맞추어 지정 - 사실 여기서는 기능에 정의된 스타일",
      control: {
        type: "select",
        options: ["primary", "secondary", "notice"],
      },
    },
    size: {
      description: "버튼 사이즈에 대한 지정",
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    disabled: {
      description: "버튼 비활성화 여부에 대한 지정",
      control: {
        type: "boolean",
      },
    },
    children: {
      description: "버튼 내용에 대한 지정 - text or elelment",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string | ReactNode",
        },
      },
    },
    loading: {
      description: "버튼 로딩 여부에 대한 지정",
      control: {
        type: "boolean",
      },
    },
    handleClick: {
      description: "버튼 클릭시 실행할 함수에 대한 지정",
      action: "clicked",
    },
  },
  args: {
    //storybook v7 마이그레이션 이후부터  argTypes.defaultValues가 아닌 args로 변경됨
    type: "button",
    disabled: false,
    loading: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "정의된 공통스타일 외의 기본 버튼",
  },
};

export const Primary: Story = {
  args: {
    buttonType: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    buttonType: "secondary",
    size: "medium",
  },
};
export const Notice: Story = {
  args: {
    buttonType: "secondary",
    size: "medium",
  },
};
export const Disabled: Story = {
  args: {
    buttonType: "primary",
    size: "medium",
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    buttonType: "primary",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    buttonType: "primary",
    size: "small",
  },
};
