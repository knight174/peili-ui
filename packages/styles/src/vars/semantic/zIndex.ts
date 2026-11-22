/** Semantic z-index layers */
export const semanticZIndex = {
  'z-base': '1',
  'z-affix': '10',
  'z-popup': '1000',
  'z-overlay': '2000',
  'z-tooltip': '2100',
  'z-message': '5000',
} as const;

/** @deprecated Use `semanticZIndex` */
export const themeZIndex = semanticZIndex;
