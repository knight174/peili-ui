import { getCssVar, cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

/** 下拉菜单组件的主题变量定义 */
export const dropdownVars = {
  'dropdown-item-color': cssVarToRgba<ThemeCssVarsConfig>('color-header'),
  'dropdown-item-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-page'),
  'dropdown-item-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-disabled'),
  'dropdown-empty-color': cssVarToRgba<ThemeCssVarsConfig>('color-placeholder'),
  'dropdown-divider-color': cssVarToRgba<ThemeCssVarsConfig>('color-bd_base'),
  'dropdown-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'dropdown-menu-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-2xs'),
  /** 菜单项水平内边距 */
  'dropdown-item-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  /** 菜单项垂直内边距（固定行高内，box-sizing: border-box） */
  'dropdown-item-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-2xs'),
  'dropdown-font-size': '14px',
  /** 菜单项固定行高（与 Select option 阶梯对齐） */
  'dropdown-item-height': '34px',
  'dropdown-menu-min-width': '120px',
};

/** 下拉菜单组件主题变量类型 */
export type DropdownCssVarsConfig = Partial<typeof dropdownVars>;
