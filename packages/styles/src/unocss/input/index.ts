import { UserConfig } from 'unocss';
import { inputVars } from '../../vars';
import { cssVarsToString, generateCssVars } from '../../utils';

export const inputConfig: UserConfig = {
  preflights: [
    {
      getCSS: () => cssVarsToString(generateCssVars(inputVars)),
    },
  ],
};
