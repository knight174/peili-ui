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
  'select-font-size': '14px',
};

/** 选择器组件主题变量类型 */
export type SelectCssVarsConfig = Partial<typeof selectVars>;
