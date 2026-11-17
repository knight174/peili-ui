/** @module Input */
import { InferVueDefaults } from '@peili-ui/shared';
import type PlInput from './input.vue';

export type InputSize = 'small' | 'default' | 'large';

export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url';

/** 输入框组件的属性 */
export interface InputProps {
  /**
   * 输入值，支持 v-model 双向绑定
   * @default ''
   */
  modelValue?: string;

  /**
   * 原生 input 类型
   * @default 'text'
   */
  type?: InputType;

  /**
   * 占位文本
   * @default ''
   */
  placeholder?: string;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否只读
   * @default false
   */
  readonly?: boolean;

  /**
   * 是否可清空
   * @default false
   */
  clearable?: boolean;

  /**
   * 输入框尺寸
   * @default 'default'
   */
  size?: InputSize;

  /**
   * 最大输入长度
   */
  maxlength?: number;
}

/** @hidden */
export function defaultInputProps() {
  return {
    modelValue: '',
    type: 'text' as InputType,
    placeholder: '',
    disabled: false,
    readonly: false,
    clearable: false,
    size: 'default' as InputSize,
  } satisfies InferVueDefaults<InputProps>;
}

/** 输入框组件的事件 */
export interface InputEmits {
  /** 输入值变化时触发（用于 v-model） */
  (event: 'update:modelValue', val: string): void;

  /** 输入时触发 */
  (event: 'input', val: string): void;

  /** 值确认变化时触发（失焦或按下回车） */
  (event: 'change', val: string): void;

  /** 获得焦点时触发 */
  (event: 'focus', e: FocusEvent): void;

  /** 失去焦点时触发 */
  (event: 'blur', e: FocusEvent): void;

  /** 点击清空按钮时触发 */
  (event: 'clear'): void;
}

/** 输入框组件的插槽信息 */
export interface InputSlots {
  /** 前置内容 */
  prefix(): any;

  /** 后置内容 */
  suffix(): any;
}

/** 输入框组件对外暴露的方法 */
export interface InputExpose {
  /** 聚焦输入框 */
  focus: () => void;

  /** 失焦输入框 */
  blur: () => void;

  /** 清空输入框 */
  clear: () => void;
}

export type InputInstance = InstanceType<typeof PlInput>;
