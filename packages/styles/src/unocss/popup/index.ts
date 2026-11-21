import { UserConfig } from 'unocss';
import { popupVars } from '../../vars';
import { cssVarsToString, generateCssVars } from '../../utils';

export const popupConfig: UserConfig = {
  preflights: [
    {
      getCSS: () => cssVarsToString(generateCssVars(popupVars)),
    },
  ],
};
