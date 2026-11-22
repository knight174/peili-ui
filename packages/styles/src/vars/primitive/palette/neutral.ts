import { generateColorScale, flattenColorScale } from '../../../generators/generateColorScale';

/** Neutral — 冷调中性色 */
export const NEUTRAL_BASE = '#6F7370';
export const NEUTRAL_WHITE = '#FFFEF9';
export const NEUTRAL_BLACK = '#1C1B1A';

export const neutralScale = generateColorScale(NEUTRAL_BASE, {
  palette: 'neutral',
});

/** 端点用手调锌白 / 骨黑，中段用 OKLCH 色阶 */
export const neutralPalette = {
  ...flattenColorScale('palette-neutral', {
    ...neutralScale,
    50: '#F7F7F5',
    100: '#EEEFEC',
    900: NEUTRAL_BLACK,
    950: '#121110',
  }),
  'palette-white': NEUTRAL_WHITE,
  'palette-black': NEUTRAL_BLACK,
};
