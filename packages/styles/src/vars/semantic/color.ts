import { lightColorVars } from '../themes/light';

/**
 * Semantic colors（Light 默认）。
 * 扁平 shadcn 成对键，供组件 / setTheme / ConfigProvider 使用。
 */
export const semanticColors: Record<string, string> = { ...lightColorVars };

/** 可被 setTheme 覆盖的品牌 / 强调基色（不再触发 50…950 色阶展开） */
export const semanticBrandColors = {
  primary: lightColorVars.primary,
  'primary-foreground': lightColorVars['primary-foreground'],
  'primary-hover': lightColorVars['primary-hover'],
  'primary-active': lightColorVars['primary-active'],
  secondary: lightColorVars.secondary,
  'secondary-foreground': lightColorVars['secondary-foreground'],
  destructive: lightColorVars.destructive,
  'destructive-foreground': lightColorVars['destructive-foreground'],
  'destructive-hover': lightColorVars['destructive-hover'],
  'destructive-active': lightColorVars['destructive-active'],
} as const;

/** setTheme 可覆盖的语义基色键（不自动展开色阶） */
export const themeColorLevelsEnabledKeys: string[] = [];

/** @deprecated 使用 `semanticColors` */
export const themeColors = semanticColors;
