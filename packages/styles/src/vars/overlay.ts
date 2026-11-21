import { cssVarToRgba } from '../utils';

/** 遮罩层组件的主题变量定义 */
export const overlayVars = {
  'overlay-bg-color': cssVarToRgba('color-black', 0.45),
};

/** 遮罩层组件主题变量类型 */
export type OverlayCssVarsConfig = Partial<typeof overlayVars>;
