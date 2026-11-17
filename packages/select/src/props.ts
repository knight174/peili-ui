/** @module Select */
import { InferVueDefaults } from '@peili-ui/shared';
import type PlSelect from './select.vue';

export type SelectSize = 'small' | 'default' | 'large';

export type SelectValue = string | number | null;

/** 下拉选项 */
export interface SelectOption {
  /** 选项展示文本 */
  label: string;

  /** 选项值 */
  value: string | number;

  /** 是否禁用该选项 */
  disabled?: boolean;
}

/** 选择器组件的属性 */
export interface SelectProps {
  /**
   * 选中值，支持 v-model 双向绑定
   * @default null
   */
  modelValue?: SelectValue;

  /**
   * 选项列表
   * @default []
   */
  options?: SelectOption[];

  /**
   * 占位文本
   * @default '请选择'
   */
  placeholder?: string;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否可清空
   * @default false
   */
  clearable?: boolean;

  /**
   * 选择器尺寸
   * @default 'default'
   */
  size?: SelectSize;
}

/** @hidden */
export function defaultSelectProps() {
  return {
    modelValue: null as SelectValue,
    options: () => [] as SelectOption[],
    placeholder: '请选择',
    disabled: false,
    clearable: false,
    size: 'default' as SelectSize,
  } satisfies InferVueDefaults<SelectProps>;
}

/** 选择器组件的事件 */
export interface SelectEmits {
  /** 选中值变化时触发（用于 v-model） */
  (event: 'update:modelValue', val: SelectValue): void;

  /** 选中值变化时触发 */
  (event: 'change', val: SelectValue): void;

  /** 下拉框显示状态变化时触发 */
  (event: 'visible-change', visible: boolean): void;

  /** 点击清空按钮时触发 */
  (event: 'clear'): void;
}

/** 选择器组件对外暴露的方法 */
export interface SelectExpose {
  /** 打开下拉面板 */
  open: () => void;

  /** 关闭下拉面板 */
  close: () => void;

  /** 清空选中值 */
  clear: () => void;
}

export type SelectInstance = InstanceType<typeof PlSelect>;
