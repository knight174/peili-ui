import { UserConfig } from 'unocss';
import { Theme } from 'unocss/preset-mini';
import { themeColors, themeSpacing } from '../vars';
import { getCssVar, toTheme } from '../utils';

/** 语义色 → Uno colors（扁平 shadcn 键；排除 shadow / 非色值） */
function semanticColorsToUno(colors: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(colors)
      .filter(
        ([key, value]) => !key.startsWith('shadow-') &&
          value !== 'transparent' &&
          !/\s/.test(value),
      )
      .map(([key]) => [key, `rgb(${getCssVar(key)})`]),
  );
}

export const baseConfig: UserConfig<Theme> = {
  theme: {
    colors: semanticColorsToUno(themeColors as Record<string, string>),
    spacing: toTheme(themeSpacing, { type: 'spacing' }),
  },
};
