/** @module Dialog */
import { InferVueDefaults } from '@peili-ui/shared';
import type PlDialog from './dialog.vue';

/** 对话框组件的属性 */
export interface DialogProps {
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
   * 宽度
   * @default '50%'
   */
  width?: number | string;

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
   * z-index
   * @default 2000
   */
  zIndex?: number;
}

/** @hidden */
export function defaultDialogProps() {
  return {
    modelValue: false,
    title: '',
    width: '50%' as number | string,
    closeOnClickModal: true,
    showClose: true,
    zIndex: 2000,
  } satisfies InferVueDefaults<DialogProps>;
}

/** 对话框组件的事件 */
export interface DialogEmits {
  (event: 'update:modelValue', visible: boolean): void;
  (event: 'open'): void;
  (event: 'close'): void;
}

/** 对话框组件的插槽 */
export interface DialogSlots {
  default(): any;
  header(): any;
  footer(): any;
}

/** 对话框对外暴露的方法 */
export interface DialogExpose {
  open: () => void;
  close: () => void;
}

export type DialogInstance = InstanceType<typeof PlDialog>;
