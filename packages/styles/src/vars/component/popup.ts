import { cssVarToRgba, getCssVar } from '../../utils';
import type { ThemeCssVarsConfig } from '../theme';

/** 弹出层组件的主题变量定义 */
export const popupVars = {
  'popup-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-primary'),
  'popup-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-elevated'),
  'popup-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-default'),
  'popup-shadow': getCssVar('shadow-md'),
};

/** 弹出层组件主题变量类型 */
export type PopupCssVarsConfig = Partial<typeof popupVars>;
