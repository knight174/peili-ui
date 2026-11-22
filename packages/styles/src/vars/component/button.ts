import { getCssVar, cssVarToRgba } from '../../utils';
import type { ThemeCssVarsConfig } from '../theme';

/** 按钮组件的主题变量定义 */
export const buttonVars = {
  'button-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-secondary'),
  'button-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-surface'),
  'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-default'),
  'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
  'button-hover-bg-color': cssVarToRgba('color-primary-50'),
  'button-hover-border-color': cssVarToRgba('color-primary-100'),
  'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
  'button-active-bg-color': cssVarToRgba('color-primary-50'),
  'button-active-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
  'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-placeholder'),
  'button-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-surface'),
  'button-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-muted'),
  'button-height': getCssVar<ThemeCssVarsConfig>('spacing-xxl'),
  'button-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-base'),
  'button-radius': getCssVar('radius-sm'),
  'button-font-size': getCssVar('font-size-sm'),
};

/** 按钮组件主题变量类型 */
export type ButtonCssVarsConfig = Partial<typeof buttonVars>;
