import { generateColorScale, flattenColorScale } from '../../../generators/generateColorScale';

/** Iron — 氧化铁红 / Danger */
export const IRON_BASE = '#A63C2B';

export const ironScale = generateColorScale(IRON_BASE, {
  palette: 'iron',
  hueDriftLight: -1,
  hueDriftDark: 2,
});

export const ironPalette = flattenColorScale('palette-iron', ironScale);
