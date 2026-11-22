import { UserConfig } from 'unocss';
import { Theme } from 'unocss/preset-mini';
import { themeColors, themeColorLevelsEnabledKeys, themeSpacing } from '../vars';
import { toTheme } from '../utils';

/** 去掉已预展开的 `*-50…950` 键，避免 Uno colors 出现 primary-50 扁平噪声 */
function withoutScaleSteps(colors: Record<string, string | undefined>) {
  return Object.fromEntries(
    Object.entries(colors).filter(([key]) => !/-\d{2,3}$/.test(key)),
  );
}

export const baseConfig: UserConfig<Theme> = {
  theme: {
    colors: toTheme(withoutScaleSteps(themeColors as Record<string, string>), {
      type: 'color',
      colorLevelsEnabledKeys: themeColorLevelsEnabledKeys,
    }),
    spacing: toTheme(themeSpacing, { type: 'spacing' }),
  },
};
