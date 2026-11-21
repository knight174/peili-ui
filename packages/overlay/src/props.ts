/** @module Overlay */
import { InferVueDefaults, Z_INDEX } from '@peili-ui/shared';
import type PlOverlay from './overlay.vue';

/** 遮罩层组件的属性 */
export interface OverlayProps {
  /**
   * 是否显示，支持 v-model
   * @default false
   */
  modelValue?: boolean;

  /**
   * 点击遮罩是否关闭
   * @default true
   */
  closeOnClick?: boolean;

  /**
   * 是否插入到 body
   * @default true
   */
  teleported?: boolean;

  /**
   * z-index；未传时打开时按 overlay 语义底自动累加取层
   */
  zIndex?: number;

  /**
   * 自动取层时的下限（语义底）
   * @default Z_INDEX.overlay (2000)
   */
  zIndexFloor?: number;

  /**
   * 过渡动画名称
   * @default 'pl-overlay-fade'
   */
  transition?: string;

  /**
   * 自定义遮罩类名
   * @default ''
   */
  overlayClass?: string;
}

/** @hidden */
export function defaultOverlayProps() {
  return {
    modelValue: false,
    closeOnClick: true,
    teleported: true,
    zIndex: undefined as number | undefined,
    zIndexFloor: Z_INDEX.overlay,
    transition: 'pl-overlay-fade',
    overlayClass: '',
  } satisfies InferVueDefaults<OverlayProps>;
}

/** 遮罩层组件的事件 */
export interface OverlayEmits {
  (event: 'update:modelValue', visible: boolean): void;
  (event: 'click'): void;
}

/** 遮罩层组件的插槽 */
export interface OverlaySlots {
  default(): any;
}

export type OverlayInstance = InstanceType<typeof PlOverlay>;
