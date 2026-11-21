import { UserConfig } from 'unocss';
import { dropdownVars } from '../../vars';
import { cssVarsToString, generateCssVars } from '../../utils';

export const dropdownConfig: UserConfig = {
  preflights: [
    {
      getCSS: () => cssVarsToString(generateCssVars(dropdownVars)),
    },
  ],
};
