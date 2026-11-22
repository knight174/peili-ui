import { getCssVar, cssVarToRgba } from '../../utils';
import type { ThemeCssVarsConfig } from '../theme';

/** 下拉菜单组件的主题变量定义 */
export const dropdownVars = {
  'dropdown-item-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-primary'),
  'dropdown-item-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-hover'),
  'dropdown-item-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-disabled'),
  'dropdown-empty-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-placeholder'),
  'dropdown-divider-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-default'),
  'dropdown-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'dropdown-menu-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xxs'),
  'dropdown-item-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'dropdown-item-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xxs'),
  'dropdown-font-size': getCssVar('font-size-sm'),
  'dropdown-item-height': '32px',
  'dropdown-menu-min-width': '120px',
};

/** 下拉菜单组件主题变量类型 */
export type DropdownCssVarsConfig = Partial<typeof dropdownVars>;
