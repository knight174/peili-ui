import { getCssVar, cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

/** 输入框组件的主题变量定义 */
export const inputVars = {
  'input-color': cssVarToRgba<ThemeCssVarsConfig>('color-header'),
  'input-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-card'),
  'input-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-bd_base'),
  'input-hover-border-color': cssVarToRgba('color-primary-light-5'),
  'input-focus-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
  'input-focus-shadow-color': cssVarToRgba('color-primary', 0.15),
  'input-placeholder-color': cssVarToRgba<ThemeCssVarsConfig>('color-placeholder'),
  'input-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-disabled'),
  'input-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-page'),
  'input-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-bd_light'),
  'input-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'input-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xs'),
  'input-font-size': '0.875rem',
};

/** 输入框组件主题变量类型 */
export type InputCssVarsConfig = Partial<typeof inputVars>;
