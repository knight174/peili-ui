import type { SelectSize } from './props';

/**
 * 各尺寸下拉选项基准行高（px）。
 * 与 CSS `--pl-select-option-height`（min-height）一致，供后续虚拟列表 itemHeight 下限使用。
 */
export const SELECT_OPTION_HEIGHT = {
  small: 24,
  default: 32,
  large: 40,
} as const satisfies Record<SelectSize, number>;

/**
 * 各尺寸触发器基准高度（px）。
 * 与 CSS `--pl-select-height`（min-height）一致。
 */
export const SELECT_HEIGHT = {
  small: 24,
  default: 32,
  large: 40,
} as const satisfies Record<SelectSize, number>;
