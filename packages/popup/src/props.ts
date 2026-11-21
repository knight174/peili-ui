/** @module Popup */
import { InferVueDefaults } from '@peili-ui/shared';
import type PlPopup from './popup.vue';

export type PopupTrigger = 'click' | 'hover' | 'focus' | 'manual';

export type PopupPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

/** 弹出层组件的属性 */
export interface PopupProps {
  /**
   * 是否显示弹出层，支持 v-model:visible
   * @default false
   */
  visible?: boolean;

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

  /**
   * 是否将弹出层插入到 body
   * @default true
   */
  teleported?: boolean;

  /**
   * 弹出层与触发器的间距
   * @default 4
   */
  offset?: number;

  /**
   * 是否显示箭头
   * @default false
   */
  showArrow?: boolean;

  /**
   * 关闭时是否销毁内容
   * @default false
   */
  destroyOnClose?: boolean;

  /**
   * 是否在视口边界自动翻转
   * @default true
   */
  flip?: boolean;

  /**
   * 弹出层宽度是否与触发器一致
   * @default false
   */
  matchTriggerWidth?: boolean;

  /**
   * hover / focus 打开延迟（毫秒）
   * @default 0
   */
  openDelay?: number;

  /**
   * hover 关闭延迟（毫秒）
   * @default 150
   */
  closeDelay?: number;

  /**
   * 过渡动画名称
   * @default 'pl-popup-fade'
   */
  transition?: string;

  /**
   * 弹出层 z-index
   * @default 1000
   */
  zIndex?: number;
}

/** @hidden */
export function defaultPopupProps() {
  return {
    trigger: 'click' as PopupTrigger,
    placement: 'bottom-start' as PopupPlacement,
    disabled: false,
    teleported: true,
    offset: 4,
    showArrow: false,
    destroyOnClose: false,
    flip: true,
    matchTriggerWidth: false,
    openDelay: 0,
    closeDelay: 150,
    transition: 'pl-popup-fade',
    zIndex: 1000,
  } satisfies InferVueDefaults<PopupProps>;
}

/** 弹出层组件的事件 */
export interface PopupEmits {
  (event: 'update:visible', visible: boolean): void;
  (event: 'after-enter'): void;
  (event: 'after-leave'): void;
}

/** 弹出层组件的插槽 */
export interface PopupSlots {
  /** 触发器（锚点） */
  reference(): any;

  /** 弹出层内容 */
  content(): any;
}

/** 弹出层对外暴露的方法 */
export interface PopupExpose {
  /** 更新弹出层位置 */
  updatePosition: () => void;

  /** 打开 */
  open: () => void;

  /** 关闭 */
  close: () => void;
}

export type PopupInstance = InstanceType<typeof PlPopup>;
