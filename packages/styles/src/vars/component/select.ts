import { getCssVar, cssVarToRgba } from '../../utils';
import type { ThemeCssVarsConfig } from '../theme';

/** 选择器组件的主题变量定义 */
export const selectVars = {
  'select-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-primary'),
  'select-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-surface'),
  'select-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-default'),
  'select-hover-border-color': cssVarToRgba('color-primary-200'),
  'select-focus-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-focus'),
  'select-focus-shadow-color': cssVarToRgba('color-primary', 0.15),
  'select-placeholder-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-placeholder'),
  'select-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-disabled'),
  'select-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-disabled'),
  'select-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-disabled'),
  'select-dropdown-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-elevated'),
  'select-option-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-hover'),
  'select-option-selected-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
  'select-option-selected-bg-color': cssVarToRgba('color-bg-selected'),
  'select-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'select-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xs'),
  'select-dropdown-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xxs'),
  'select-option-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  // 选项用固定行高 + 水平 padding，避免 padding-y 把实际高度撑过 token（虚拟列表）
  'select-option-padding-y': '0px',
  'select-font-size': getCssVar('font-size-sm'),
  'select-radius': getCssVar('radius-sm'),
  'select-height': '32px',
  'select-option-height': '32px',
  'select-dropdown-max-height': '240px',
};

/** 选择器组件主题变量类型 */
export type SelectCssVarsConfig = Partial<typeof selectVars>;
