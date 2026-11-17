import { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import { PlInput } from '@peili-ui/input';

const meta = {
  title: 'UI/PlInput',
  component: PlInput,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'number', 'email', 'tel', 'url'],
    },
  },
  args: {
    modelValue: '',
    placeholder: '请输入内容',
    size: 'default',
    clearable: true,
    'onUpdate:modelValue': fn(),
  },
} satisfies Meta<typeof PlInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { PlInput },
    setup() {
      return { args };
    },
    template: '<PlInput v-bind="args" style="width: 280px" />',
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: '禁用状态',
    disabled: true,
  },
  render: Basic.render,
};
