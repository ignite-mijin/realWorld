import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/components/atomic/Input";

const meta = {
  title: "Atomic/Input",
  component: Input,
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: "docs",
    layout: "centered",
    componentSubtitle: "Input 컴포넌트",
    docs: {
      description: {
        component: "text, email, password 등의 input 컴포넌트",
      },
    },
  },
  argTypes: {
    type: {
      description: "Input 기본 type에 대한 지정",
      control: {
        type: "select",
        options: ["text", "email", "password"],
      },
    },
    id: {
      description: "레이블과 같이 사용시 연결",
      control: {
        type: "text",
      },
    },
    placeholder: {
      description: "플레이스홀더에 대한 지정",
      control: {
        type: "text",
      },
    },
    size: {
      description: "Input 사이즈에 대한 지정",
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    fullWidth: {
      description: "Input 전체 너비에 대한 지정",
      control: {
        type: "boolean",
      },
    },
    value: {
      description: "값에 대한 지정",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    defaultValue: {
      description: "초기 기본값에 대한 지정",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    ref: {
      description: "ref에 대한 지정",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "React.Ref<HTMLInputElement>",
        },
      },
    },
    onChange: {
      description: "인풋 값 변경시 실행할 함수에 대한 지정",
      action: "changed",
    },
    onInput: {
      description: "인풋 값 실시간 변경시 실행할 함수에 대한 지정",
      action: "inputed",
    },
    isValid: {
      description: "밸리데이션 처리에대한 값",
      control: {
        type: "boolean",
      },
    },
    errorMessage: {
      description: "에러메시지 문장",
      control: {
        type: "text",
      },
    },
  },
  args: {
    //storybook v7 마이그레이션 이후부터  argTypes.defaultValues가 아닌 args로 변경됨
    type: "text",
    placeholder: "placeholder",
    size: "medium",
    disabled: false,
    defaultValue: "",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "TextInputMedium",
  },
};

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "TextInputLargeMax10",
    size: "large",
    maxLength: 10,
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "EmailInput",
  },
};
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "PasswordInput",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    defaultValue: "error값을 넣어보았다.",
    isValid: false,
    errorMessage: "에러메시지",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
