import { UserConfig } from 'unocss';
import { Theme } from 'unocss/preset-mini';
import { themeVars, darkColorVars } from '../vars';
import { generateCssVars, cssVarsToString } from '../utils';

/**
 * 主题预注入：色阶已在 light/dark ColorVars 预展开，
 * 此处不再传 colorLevelsEnabledKeys。
 */
export const themeConfig: UserConfig<Theme> = {
  preflights: [
    {
      getCSS: () => {
        const light = cssVarsToString(generateCssVars(themeVars), ':root');
        const dark = cssVarsToString(
          generateCssVars(darkColorVars),
          '[data-theme="dark"], .dark',
        );
        return `${light}${dark}`;
      },
    },
  ],
};
