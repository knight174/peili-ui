import { getCssVar, cssVarToRgba } from '../../utils';
import type { ThemeCssVarsConfig } from '../theme';

export const inputVars = {
  'input-color': cssVarToRgba<ThemeCssVarsConfig>('foreground'),
  'input-bg-color': cssVarToRgba<ThemeCssVarsConfig>('background'),
  'input-border-color': cssVarToRgba<ThemeCssVarsConfig>('input'),
  'input-hover-border-color': cssVarToRgba<ThemeCssVarsConfig>('ring'),
  'input-focus-border-color': cssVarToRgba<ThemeCssVarsConfig>('ring'),
  'input-focus-shadow-color': cssVarToRgba<ThemeCssVarsConfig>('ring', 0.15),
  'input-placeholder-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
  'input-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
  'input-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('muted'),
  'input-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
  'input-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'input-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xs'),
  'input-font-size': getCssVar('font-size-sm'),
  'input-radius': getCssVar('radius-sm'),
};

export type InputCssVarsConfig = Partial<typeof inputVars>;
