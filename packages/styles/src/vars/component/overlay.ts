import { cssVarToRgba } from '../../utils';
import type { ThemeCssVarsConfig } from '../theme';

export const overlayVars = {
  'overlay-bg-color': cssVarToRgba<ThemeCssVarsConfig>('overlay', 0.45),
};

export type OverlayCssVarsConfig = Partial<typeof overlayVars>;
