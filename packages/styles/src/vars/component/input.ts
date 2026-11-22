import { getCssVar, cssVarToRgba } from '../../utils';
import type { ThemeCssVarsConfig } from '../theme';

/** 输入框组件的主题变量定义 */
export const inputVars = {
  'input-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-primary'),
  'input-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-surface'),
  'input-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-default'),
  'input-hover-border-color': cssVarToRgba('color-primary-200'),
  'input-focus-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-focus'),
  'input-focus-shadow-color': cssVarToRgba('color-primary', 0.15),
  'input-placeholder-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-placeholder'),
  'input-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-disabled'),
  'input-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-disabled'),
  'input-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-disabled'),
  'input-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'input-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xs'),
  'input-font-size': getCssVar('font-size-sm'),
  'input-radius': getCssVar('radius-sm'),
};

/** 输入框组件主题变量类型 */
export type InputCssVarsConfig = Partial<typeof inputVars>;
