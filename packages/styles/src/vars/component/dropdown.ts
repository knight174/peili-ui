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
  // 菜单项用固定行高 + 水平 padding，实际高度与 token / DROPDOWN_ITEM_HEIGHT 对齐
  'dropdown-item-padding-y': '0px',
  'dropdown-font-size': getCssVar('font-size-sm'),
  'dropdown-item-height': '32px',
  'dropdown-menu-min-width': '120px',
};

/** 下拉菜单组件主题变量类型 */
export type DropdownCssVarsConfig = Partial<typeof dropdownVars>;
