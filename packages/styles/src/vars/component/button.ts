import { getCssVar, cssVarToRgba } from '../../utils';
import type { ThemeCssVarsConfig } from '../theme';

/** 按钮基座 = secondary 外观；各 variant 用 modifier 覆盖 */
export const buttonVars = {
  'button-color': cssVarToRgba<ThemeCssVarsConfig>('secondary-foreground'),
  'button-bg-color': cssVarToRgba<ThemeCssVarsConfig>('secondary'),
  'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
  'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('accent-foreground'),
  'button-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('accent'),
  'button-hover-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
  'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('accent-foreground'),
  'button-active-bg-color': cssVarToRgba<ThemeCssVarsConfig>('accent'),
  'button-active-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
  'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
  'button-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('muted'),
  'button-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
  'button-height': getCssVar<ThemeCssVarsConfig>('spacing-xxl'),
  'button-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-base'),
  'button-radius': getCssVar('radius-sm'),
  'button-font-size': getCssVar('font-size-sm'),
};

export type ButtonCssVarsConfig = Partial<typeof buttonVars>;
