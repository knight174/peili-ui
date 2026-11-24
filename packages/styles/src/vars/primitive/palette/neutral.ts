import { generateColorScale, flattenColorScale } from '../../../generators/generateColorScale';
import type { ColorScaleStep } from '../../../utils/colors';

/** Neutral — 冷调中性色 */
export const NEUTRAL_BASE = '#6F7370';
export const NEUTRAL_WHITE = '#FFFEF9';
export const NEUTRAL_BLACK = '#1C1B1A';

export const neutralScale = generateColorScale(NEUTRAL_BASE, {
  palette: 'neutral',
});

/**
 * 主题与组件统一引用的中性色阶。
 * 在 OKLCH 生成结果上覆盖端点与 AA 关键阶（400≈控件边界 3:1 @ surface/page）。
 */
export const neutralResolved: Record<ColorScaleStep, string> = {
  ...neutralScale,
  50: '#F7F7F5',
  100: '#EEEFEC',
  /** ~3.22:1 on white / ~3.03:1 on page — border / placeholder 地板 */
  400: '#8B908C',
  900: NEUTRAL_BLACK,
  950: '#121110',
};

/** 暗色专用中性色阶（以偏亮 400 为 500 重展，供 dark brand/status 挂阶） */
export const darkNeutralScale = generateColorScale(neutralResolved[400], {
  palette: 'neutral',
});

/** 端点与 AA 关键阶进 primitive palette CSS 变量 */
export const neutralPalette = {
  ...flattenColorScale('palette-neutral', neutralResolved),
  'palette-white': NEUTRAL_WHITE,
  'palette-black': NEUTRAL_BLACK,
};
