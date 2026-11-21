import type { SelectSize } from './props';

/**
 * 各尺寸下拉选项固定行高（px）。
 * 与 CSS `--pl-select-option-height` 保持一致，供后续虚拟列表 itemHeight 使用。
 */
export const SELECT_OPTION_HEIGHT = {
  small: 24,
  default: 32,
  large: 40,
} as const satisfies Record<SelectSize, number>;

/**
 * 各尺寸触发器高度（px）。
 * 与 CSS `--pl-select-height` 保持一致。
 */
export const SELECT_HEIGHT = {
  small: 24,
  default: 32,
  large: 40,
} as const satisfies Record<SelectSize, number>;
