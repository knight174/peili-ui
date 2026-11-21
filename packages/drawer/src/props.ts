/** @module Drawer */
import { InferVueDefaults } from '@peili-ui/shared';
import type PlDrawer from './drawer.vue';

export type DrawerDirection = 'rtl' | 'ltr' | 'ttb' | 'btt';

/** 抽屉组件的属性 */
export interface DrawerProps {
  /**
   * 是否显示，支持 v-model
   * @default false
   */
  modelValue?: boolean;

  /**
   * 标题
   * @default ''
   */
  title?: string;

  /**
   * 打开方向
   * @default 'rtl'
   */
  direction?: DrawerDirection;

  /**
   * 尺寸（水平为宽度，垂直为高度）
   * @default '30%'
   */
  size?: number | string;

  /**
   * 点击遮罩是否关闭
   * @default true
   */
  closeOnClickModal?: boolean;

  /**
   * 是否显示关闭按钮
   * @default true
   */
  showClose?: boolean;

  /**
   * z-index；未传时打开时按 overlay 语义底自动累加取层
   */
  zIndex?: number;
}

/** @hidden */
export function defaultDrawerProps() {
  return {
    modelValue: false,
    title: '',
    direction: 'rtl' as DrawerDirection,
    size: '30%' as number | string,
    closeOnClickModal: true,
    showClose: true,
    zIndex: undefined as number | undefined,
  } satisfies InferVueDefaults<DrawerProps>;
}

/** 抽屉组件的事件 */
export interface DrawerEmits {
  (event: 'update:modelValue', visible: boolean): void;
  (event: 'open'): void;
  (event: 'close'): void;
}

/** 抽屉组件的插槽 */
export interface DrawerSlots {
  default(): any;
  header(): any;
  footer(): any;
}

/** 抽屉对外暴露的方法 */
export interface DrawerExpose {
  open: () => void;
  close: () => void;
}

export type DrawerInstance = InstanceType<typeof PlDrawer>;
