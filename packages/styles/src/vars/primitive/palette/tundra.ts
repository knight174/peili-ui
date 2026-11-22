import { generateColorScale, flattenColorScale } from '../../../generators/generateColorScale';

/** Tundra — 苔原绿 / Success */
export const TUNDRA_BASE = '#4F7A52';

export const tundraScale = generateColorScale(TUNDRA_BASE, {
  palette: 'tundra',
  hueDriftLight: -1,
  hueDriftDark: 1,
});

export const tundraPalette = flattenColorScale('palette-tundra', tundraScale);
