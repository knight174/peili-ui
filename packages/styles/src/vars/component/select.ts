import { getCssVar, cssVarToRgba } from '../../utils';
import type { ThemeCssVarsConfig } from '../theme';

export const selectVars = {
  'select-color': cssVarToRgba<ThemeCssVarsConfig>('foreground'),
  'select-bg-color': cssVarToRgba<ThemeCssVarsConfig>('background'),
  'select-border-color': cssVarToRgba<ThemeCssVarsConfig>('input'),
  'select-hover-border-color': cssVarToRgba<ThemeCssVarsConfig>('ring'),
  'select-focus-border-color': cssVarToRgba<ThemeCssVarsConfig>('ring'),
  'select-focus-shadow-color': cssVarToRgba<ThemeCssVarsConfig>('ring', 0.15),
  'select-placeholder-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
  'select-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
  'select-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('muted'),
  'select-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
  'select-dropdown-bg-color': cssVarToRgba<ThemeCssVarsConfig>('popover'),
  'select-option-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('accent'),
  'select-option-selected-color': cssVarToRgba<ThemeCssVarsConfig>('accent-foreground'),
  'select-option-selected-bg-color': cssVarToRgba<ThemeCssVarsConfig>('accent'),
  'select-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'select-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xs'),
  'select-dropdown-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xxs'),
  'select-option-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'select-option-padding-y': '0px',
  'select-font-size': getCssVar('font-size-sm'),
  'select-radius': getCssVar('radius-sm'),
  'select-height': '32px',
  'select-option-height': '32px',
  'select-dropdown-max-height': '240px',
};

export type SelectCssVarsConfig = Partial<typeof selectVars>;
