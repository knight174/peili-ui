/** @module Dropdown */
import { InferVueDefaults } from '@peili-ui/shared';
import type { PopupPlacement, PopupTrigger } from '@peili-ui/popup';
import type PlDropdown from './dropdown.vue';

export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  divided?: boolean;
}

/** 下拉菜单组件的属性 */
export interface DropdownProps {
  /**
   * 菜单项
   * @default []
   */
  options?: DropdownOption[];

  /**
   * 触发方式
   * @default 'click'
   */
  trigger?: PopupTrigger;

  /**
   * 弹出位置
   * @default 'bottom-start'
   */
  placement?: PopupPlacement;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
}

/** @hidden */
export function defaultDropdownProps() {
  return {
    options: () => [] as DropdownOption[],
    trigger: 'click' as PopupTrigger,
    placement: 'bottom-start' as PopupPlacement,
    disabled: false,
  } satisfies InferVueDefaults<DropdownProps>;
}

/** 下拉菜单组件的事件 */
export interface DropdownEmits {
  (event: 'command', value: string | number): void;
  (event: 'visible-change', visible: boolean): void;
}

/** 下拉菜单组件的插槽 */
export interface DropdownSlots {
  /** 触发器 */
  default(): any;
}

export type DropdownInstance = InstanceType<typeof PlDropdown>;
