import { lightColorVars } from '../themes/light';

/**
 * Semantic colors（Light 默认，含预展开 50…950）。
 * 扁平 `color-*` 键供组件 / setTheme / ConfigProvider 使用。
 */
export const semanticColors: Record<string, string> = { ...lightColorVars };

/** 品牌 / 状态基色（预设覆盖用；setTheme 时仍可触发色阶重算） */
export const semanticBrandColors = {
  'color-primary': lightColorVars['color-primary'],
  'color-success': lightColorVars['color-success'],
  'color-warning': lightColorVars['color-warning'],
  'color-danger': lightColorVars['color-danger'],
  'color-info': lightColorVars['color-info'],
  'color-neutral': lightColorVars['color-neutral'],
};

export const semanticTextColors = {
  'color-text-primary': lightColorVars['color-text-primary'],
  'color-text-secondary': lightColorVars['color-text-secondary'],
  'color-text-tertiary': lightColorVars['color-text-tertiary'],
  'color-text-placeholder': lightColorVars['color-text-placeholder'],
  'color-text-disabled': lightColorVars['color-text-disabled'],
  'color-text-inverse': lightColorVars['color-text-inverse'],
  'color-text-link': lightColorVars['color-text-link'],
} as const;

export const semanticBgColors = {
  'color-bg-page': lightColorVars['color-bg-page'],
  'color-bg-surface': lightColorVars['color-bg-surface'],
  'color-bg-elevated': lightColorVars['color-bg-elevated'],
  'color-bg-muted': lightColorVars['color-bg-muted'],
  'color-bg-subtle': lightColorVars['color-bg-subtle'],
  'color-bg-hover': lightColorVars['color-bg-hover'],
  'color-bg-active': lightColorVars['color-bg-active'],
  'color-bg-selected': lightColorVars['color-bg-selected'],
  'color-bg-disabled': lightColorVars['color-bg-disabled'],
} as const;

export const semanticBorderColors = {
  'color-border-default': lightColorVars['color-border-default'],
  'color-border-muted': lightColorVars['color-border-muted'],
  'color-border-strong': lightColorVars['color-border-strong'],
  'color-border-focus': lightColorVars['color-border-focus'],
  'color-border-disabled': lightColorVars['color-border-disabled'],
} as const;

export const semanticMiscColors = {
  'color-overlay': lightColorVars['color-overlay'],
  'color-scrim': lightColorVars['color-scrim'],
  'color-transparent': lightColorVars['color-transparent'],
  'color-white': lightColorVars['color-white'],
} as const;

/**
 * setTheme / ConfigProvider 覆盖这些基色时，用 OKLCH 重算 50…950。
 * 默认 :root 注入已含预展开色阶，可不传此选项。
 */
export const themeColorLevelsEnabledKeys: string[] = [
  'color-primary',
  'color-success',
  'color-warning',
  'color-danger',
  'color-info',
  'color-neutral',
];

/** @deprecated 使用 `semanticColors` */
export const themeColors = semanticColors;
