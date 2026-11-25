import { InferVueDefaults } from '@peili-ui/shared';
import type PlButton from './button.vue';
import type { ButtonVariant } from './props';

export interface ButtonProps {
  /** 按钮外观变体 */
  variant?: ButtonVariant;

  /** 按钮是否不可用 */
  disabled?: boolean;
}

export function defaultButtonProps(): Required<InferVueDefaults<ButtonProps>> {
  return {
    variant: 'default',
    disabled: false,
  };
}

export type ButtonInstance = InstanceType<typeof PlButton>;
