/** @module Tooltip */
import { InferVueDefaults } from '@peili-ui/shared';
import type { PopupPlacement } from '@peili-ui/popup';
import type PlTooltip from './tooltip.vue';

/** 文字提示组件的属性 */
export interface TooltipProps {
  /**
   * 提示内容
   * @default ''
   */
  content?: string;

  /**
   * 弹出位置
   * @default 'top'
   */
  placement?: PopupPlacement;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 打开延迟（毫秒）
   * @default 100
   */
  openDelay?: number;

  /**
   * 关闭延迟（毫秒）
   * @default 100
   */
  closeDelay?: number;
}

/** @hidden */
export function defaultTooltipProps() {
  return {
    content: '',
    placement: 'top' as PopupPlacement,
    disabled: false,
    openDelay: 100,
    closeDelay: 100,
  } satisfies InferVueDefaults<TooltipProps>;
}

/** 文字提示组件的插槽 */
export interface TooltipSlots {
  /** 触发器 */
  default(): any;

  /** 自定义提示内容 */
  content(): any;
}

export type TooltipInstance = InstanceType<typeof PlTooltip>;
