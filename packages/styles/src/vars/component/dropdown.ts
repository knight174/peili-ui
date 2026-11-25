import { getCssVar, cssVarToRgba } from '../../utils';
import type { ThemeCssVarsConfig } from '../theme';

export const dropdownVars = {
  'dropdown-item-color': cssVarToRgba<ThemeCssVarsConfig>('popover-foreground'),
  'dropdown-item-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('accent'),
  'dropdown-item-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
  'dropdown-empty-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
  'dropdown-divider-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
  'dropdown-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'dropdown-menu-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xxs'),
  'dropdown-item-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'dropdown-item-padding-y': '0px',
  'dropdown-font-size': getCssVar('font-size-sm'),
  'dropdown-item-height': '32px',
  'dropdown-menu-min-width': '120px',
};

export type DropdownCssVarsConfig = Partial<typeof dropdownVars>;
