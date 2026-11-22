import { generateColorScale, flattenColorScale } from '../../../generators/generateColorScale';

/** Arctic — 极地灰蓝 / Info */
export const ARCTIC_BASE = '#4A5F73';

export const arcticScale = generateColorScale(ARCTIC_BASE, {
  palette: 'arctic',
  hueDriftLight: -2,
  hueDriftDark: 2,
});

export const arcticPalette = flattenColorScale('palette-arctic', arcticScale);
