/** @module Popup */
import { InferVueDefaults, Z_INDEX } from '@peili-ui/shared';
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
   * 触发方式；可传数组组合（如 Tooltip 的 hover + focus）
   * @default 'click'
   */
  trigger?: PopupTrigger | PopupTrigger[];

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
   * 弹出层 z-index；未传时打开时按 zIndexFloor 自动累加取层
   */
  zIndex?: number;

  /**
   * 自动取层时的下限（语义底）
   * @default Z_INDEX.popup (1000)
   */
  zIndexFloor?: number;
}

/** @hidden */
export function defaultPopupProps() {
  return {
    // 必须显式 undefined：Boolean 类型未传时 Vue 会落成 false，导致误判为受控关闭
    visible: undefined as boolean | undefined,
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
    zIndex: undefined as number | undefined,
    zIndexFloor: Z_INDEX.popup,
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
