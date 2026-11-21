import { UserConfig } from 'unocss';
import { overlayVars } from '../../vars';
import { cssVarsToString, generateCssVars } from '../../utils';

export const overlayConfig: UserConfig = {
  preflights: [
    {
      getCSS: () => cssVarsToString(generateCssVars(overlayVars)),
    },
  ],
};
