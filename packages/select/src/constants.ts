import type { SelectSize } from './props';

/**
 * 各尺寸下拉选项行高（px）。
 * 与 CSS `--pl-select-option-height`（min-height）一致；
 * 选项仅水平 padding，默认根字号下实际高度等于本常量，可直接作虚拟列表 itemHeight。
 */
export const SELECT_OPTION_HEIGHT = {
  small: 24,
  default: 32,
  large: 40,
} as const satisfies Record<SelectSize, number>;

/**
 * 各尺寸触发器基准高度（px）。
 * 与 CSS `--pl-select-height`（min-height）一致；触发器可随文字放大增高。
 */
export const SELECT_HEIGHT = {
  small: 24,
  default: 32,
  large: 40,
} as const satisfies Record<SelectSize, number>;
