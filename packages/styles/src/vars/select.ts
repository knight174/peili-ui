import { getCssVar, cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

/** 选择器组件的主题变量定义 */
export const selectVars = {
  'select-color': cssVarToRgba<ThemeCssVarsConfig>('color-header'),
  'select-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-card'),
  'select-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-bd_base'),
  'select-hover-border-color': cssVarToRgba('color-primary-light-5'),
  'select-focus-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
  'select-focus-shadow-color': cssVarToRgba('color-primary', 0.15),
  'select-placeholder-color': cssVarToRgba<ThemeCssVarsConfig>('color-placeholder'),
  'select-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-disabled'),
  'select-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-page'),
  'select-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-bd_light'),
  'select-dropdown-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-card'),
  'select-option-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-page'),
  'select-option-selected-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
  'select-option-selected-bg-color': cssVarToRgba('color-primary-light-9'),
  'select-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'select-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xs'),
  'select-dropdown-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xxs'),
  /** 选项水平内边距（随 size 覆盖 --pl-select-padding-x 即可联动） */
  'select-option-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  /** 选项垂直内边距（box-sizing: border-box） */
  'select-option-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xxs'),
  'select-font-size': '14px',
  /** 触发器最小高度（含边框，box-sizing: border-box） */
  'select-height': '32px',
  /** 下拉选项基准行高（CSS 用 min-height；虚拟列表可作 itemHeight 下限） */
  'select-option-height': '32px',
  /** 下拉面板最大高度 */
  'select-dropdown-max-height': '240px',
};

/** 选择器组件主题变量类型 */
export type SelectCssVarsConfig = Partial<typeof selectVars>;
