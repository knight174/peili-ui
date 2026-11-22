import { generateColorScale, flattenColorScale } from '../../../generators/generateColorScale';

/** Ochre — 天然赭石 / Warning */
export const OCHRE_BASE = '#8B6808';

export const ochreScale = generateColorScale(OCHRE_BASE, {
  palette: 'ochre',
  hueDriftLight: 2,
  hueDriftDark: -2,
});

export const ochrePalette = flattenColorScale('palette-ochre', ochreScale);
