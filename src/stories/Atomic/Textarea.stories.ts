import type { Meta, StoryObj } from "@storybook/react";

import Textarea from "@/components/atomic/Textarea";

const meta = {
  title: "Atomic/Textarea",
  component: Textarea,
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: "docs",
    layout: "centered",
    componentSubtitle: "Textarea 컴포넌트",
    docs: {
      description: {
        component: "자유양식 Textarea 컴포넌트",
      },
    },
  },
  argTypes: {
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
    width: {
      description: "Textarea 가로에 대한 지정",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string | number",
          description: "number로 지정시 px단위로 변환됨",
        },
      },
    },
    height: {
      description: "Textarea 높이에 대한 지정",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string | number",
          description: "number로 지정시 px단위로 변환됨",
        },
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
          summary: "React.Ref<HTMLTextAreaElement>",
        },
      },
    },
    onChange: {
      description: "Textarea 값 변경시 실행할 함수에 대한 지정",
      action: "changed",
    },
    onInput: {
      description: "Textarea 값 실시간 변경시 실행할 함수에 대한 지정",
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
    placeholder: "placeholder",
    width: "100%",
    height: "100px",
    disabled: false,
    defaultValue: "",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "TextArea",
    defaultValue: "default값을 넣어보았다.",
  },
};

export const Text: Story = {
  args: {
    placeholder: "TextArea",
    defaultValue: "default값을 넣어보았다.",
    maxLength: 100,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "disabled",
  },
};
