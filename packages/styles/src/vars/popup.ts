import { cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

/** 弹出层组件的主题变量定义 */
export const popupVars = {
  'popup-color': cssVarToRgba<ThemeCssVarsConfig>('color-header'),
  'popup-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-card'),
  'popup-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-bd_base'),
  'popup-shadow': '0 6px 16px rgba(0, 0, 0, 0.08)',
};

/** 弹出层组件主题变量类型 */
export type PopupCssVarsConfig = Partial<typeof popupVars>;
