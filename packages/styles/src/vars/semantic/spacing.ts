import { getCssVar } from '../../utils';
import type { PrimitiveCssVarsConfig } from '../primitive';

/**
 * Semantic spacing (t-shirt) → primitive `space-*`.
 *
 * xxs4 · xs8 · sm12 · base16 · md20 · lg24 · xl28 · xxl32
 */
export const semanticSpacing = {
  'spacing-xxs': getCssVar<PrimitiveCssVarsConfig>('space-4'),
  'spacing-xs': getCssVar<PrimitiveCssVarsConfig>('space-8'),
  'spacing-sm': getCssVar<PrimitiveCssVarsConfig>('space-12'),
  'spacing-base': getCssVar<PrimitiveCssVarsConfig>('space-16'),
  'spacing-md': getCssVar<PrimitiveCssVarsConfig>('space-20'),
  'spacing-lg': getCssVar<PrimitiveCssVarsConfig>('space-24'),
  'spacing-xl': getCssVar<PrimitiveCssVarsConfig>('space-28'),
  'spacing-xxl': getCssVar<PrimitiveCssVarsConfig>('space-32'),
} as const;

/**
 * padding 别名 → spacing（与 antd 一样，padding* 是 size/spacing 的别名）
 */
export const semanticPadding = {
  'padding-xxs': getCssVar('spacing-xxs'),
  'padding-xs': getCssVar('spacing-xs'),
  'padding-sm': getCssVar('spacing-sm'),
  'padding-base': getCssVar('spacing-base'),
  'padding-md': getCssVar('spacing-md'),
  'padding-lg': getCssVar('spacing-lg'),
  'padding-xl': getCssVar('spacing-xl'),
  'padding-xxl': getCssVar('spacing-xxl'),
} as const;

/** @deprecated Use `semanticSpacing` */
export const themeSpacing = semanticSpacing;

/** @deprecated Use `semanticPadding` */
export const themePadding = semanticPadding;
