/** Primitive border-radius scale */
export const primitiveRadius = {
  'radius-xs': '2px',
  'radius-sm': '4px',
  'radius-md': '8px',
  'radius-lg': '12px',
  'radius-full': '9999px',
} as const;

export type PrimitiveRadiusConfig = Partial<typeof primitiveRadius>;
