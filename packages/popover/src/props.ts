/** @module Popover */
import { InferVueDefaults } from '@peili-ui/shared';
import type { PopupPlacement, PopupTrigger } from '@peili-ui/popup';
import type PlPopover from './popover.vue';

/** 气泡卡片组件的属性 */
export interface PopoverProps {
  /**
   * 标题
   * @default ''
   */
  title?: string;

  /**
   * 内容（无默认插槽 content 时使用）
   * @default ''
   */
  content?: string;

  /**
   * 触发方式
   * @default 'click'
   */
  trigger?: PopupTrigger;

  /**
   * 弹出位置
   * @default 'bottom'
   */
  placement?: PopupPlacement;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 宽度
   * @default 240
   */
  width?: number | string;
}

/** @hidden */
export function defaultPopoverProps() {
  return {
    title: '',
    content: '',
    trigger: 'click' as PopupTrigger,
    placement: 'bottom' as PopupPlacement,
    disabled: false,
    width: 240 as number | string,
  } satisfies InferVueDefaults<PopoverProps>;
}

/** 气泡卡片组件的事件 */
export interface PopoverEmits {
  (event: 'update:visible', visible: boolean): void;
  (event: 'visible-change', visible: boolean): void;
}

/** 气泡卡片组件的插槽 */
export interface PopoverSlots {
  /** 触发器 */
  default(): any;

  /** 自定义内容 */
  content(): any;
}

export type PopoverInstance = InstanceType<typeof PlPopover>;
