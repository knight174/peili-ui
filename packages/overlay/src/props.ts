/** @module Overlay */
import { InferVueDefaults } from '@peili-ui/shared';
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
   * z-index
   * @default 2000
   */
  zIndex?: number;

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
    zIndex: 2000,
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
