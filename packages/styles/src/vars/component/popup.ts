import { cssVarToRgba, getCssVar } from '../../utils';
import type { ThemeCssVarsConfig } from '../theme';

export const popupVars = {
  'popup-color': cssVarToRgba<ThemeCssVarsConfig>('popover-foreground'),
  'popup-bg-color': cssVarToRgba<ThemeCssVarsConfig>('popover'),
  'popup-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
  'popup-shadow': getCssVar('shadow-md'),
};

export type PopupCssVarsConfig = Partial<typeof popupVars>;
