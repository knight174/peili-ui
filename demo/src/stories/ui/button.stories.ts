import { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
// import { action } from '@storybook/addon-actions';
import { Button as MyButton } from '@peili-ui/button';

// 用于描述组件的元信息
const meta = {
  title: 'UI/my-button',
  component: MyButton,
  tags: ['autodocs'], // 自动生成文档
  argTypes: {
    // 配置类型
    type: {
      // 控制类型
      control: 'select',
      // 配置可选项
      options: ['primary', 'secondary', 'danger'],
    },
  },
  args: {
    // 配置默认值
    type: 'primary',
    // 配置事件
    // onClick: action('click'),
    onClick: fn(),
  },
} satisfies Meta<typeof MyButton>;

export default meta;

// 定义 story 的类型
type Story = StoryObj<typeof meta>;

// 导出 story
export const Primary: Story = {
  args: {
    type: 'primary',
  },
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: '<MyButton v-bind="args">Primary Button</MyButton>',
  }),
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: '<MyButton v-bind="args">Secondary Button</MyButton>',
  }),
};

export const Danger: Story = {
  args: {
    type: 'danger',
  },
  // 配置测试
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: '<MyButton v-bind="args">Danger Button</MyButton>',
  }),
};
