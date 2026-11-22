import { generateColorScale, flattenColorScale } from '../../../generators/generateColorScale';

/** Fjord — 冰川峡湾蓝 / Primary（沿用既有基色） */
export const FJORD_BASE = '#245A8D';

export const fjordScale = generateColorScale(FJORD_BASE, {
  palette: 'fjord',
  hueDriftLight: -2,
  hueDriftDark: 2,
});

export const fjordPalette = flattenColorScale('palette-fjord', fjordScale);
