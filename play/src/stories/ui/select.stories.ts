import { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import { PlSelect } from '@peili-ui/select';

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄（禁用）', value: 'grape', disabled: true },
];

const meta = {
  title: 'UI/PlSelect',
  component: PlSelect,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
  },
  args: {
    modelValue: null,
    options,
    placeholder: '请选择',
    clearable: true,
    size: 'default',
    'onUpdate:modelValue': fn(),
  },
} satisfies Meta<typeof PlSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { PlSelect },
    setup() {
      return { args };
    },
    template: '<PlSelect v-bind="args" style="width: 280px" />',
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: 'apple',
    disabled: true,
  },
  render: Basic.render,
};
