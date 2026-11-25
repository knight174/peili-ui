import { UserConfig } from 'unocss';
import { Theme } from 'unocss/preset-mini';
import { themeVars, darkColorVars } from '../vars';
import { generateCssVars, cssVarsToString } from '../utils';

/**
 * 主题预注入：Light → `:root`，Dark → `[data-theme=dark], .dark`。
 * 语义层为扁平 shadcn 键，不展开 50…950。
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
