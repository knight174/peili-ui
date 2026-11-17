import { UserConfig } from 'unocss';
import { selectVars } from '../../vars';
import { cssVarsToString, generateCssVars } from '../../utils';

export const selectConfig: UserConfig = {
  preflights: [
    {
      getCSS: () => cssVarsToString(generateCssVars(selectVars)),
    },
  ],
};
