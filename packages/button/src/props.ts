/** @module Button */
import { InferVueDefaults } from '@peili-ui/shared';

export type ButtonVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'ghost'
  | 'link';

/** 按钮组件的属性 */
export interface ButtonProps {
  /**
   * 按钮外观变体
   * @default 'default'
   */
  variant?: ButtonVariant;

  /**
   * 按钮是否不可用
   * @default false
   */
  disabled?: boolean;
}

export function defaultButtonProps() {
  return {
    variant: 'default' as ButtonVariant,
    disabled: false,
  } satisfies Required<InferVueDefaults<ButtonProps>>;
}

/** 按钮组件的插槽信息 */
export interface ButtonSlots {
  default(): any;
}
