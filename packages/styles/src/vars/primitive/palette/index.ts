import { fjordPalette, fjordScale, FJORD_BASE } from './fjord';
import { ironPalette, ironScale, IRON_BASE } from './iron';
import { ochrePalette, ochreScale, OCHRE_BASE } from './ochre';
import { tundraPalette, tundraScale, TUNDRA_BASE } from './tundra';
import { arcticPalette, arcticScale, ARCTIC_BASE } from './arctic';
import { neutralPalette, neutralScale, NEUTRAL_BASE, NEUTRAL_WHITE, NEUTRAL_BLACK } from './neutral';

export * from './fjord';
export * from './iron';
export * from './ochre';
export * from './tundra';
export * from './arctic';
export * from './neutral';

/** Greenland primitive palettes（仅原始色阶，无业务语义） */
export const primitivePalette = {
  ...fjordPalette,
  ...ironPalette,
  ...ochrePalette,
  ...tundraPalette,
  ...arcticPalette,
  ...neutralPalette,
} as const;

export const paletteScales = {
  fjord: fjordScale,
  iron: ironScale,
  ochre: ochreScale,
  tundra: tundraScale,
  arctic: arcticScale,
  neutral: neutralScale,
} as const;

export const paletteBases = {
  fjord: FJORD_BASE,
  iron: IRON_BASE,
  ochre: OCHRE_BASE,
  tundra: TUNDRA_BASE,
  arctic: ARCTIC_BASE,
  neutral: NEUTRAL_BASE,
  white: NEUTRAL_WHITE,
  black: NEUTRAL_BLACK,
} as const;

export type PrimitivePaletteConfig = Partial<typeof primitivePalette>;
