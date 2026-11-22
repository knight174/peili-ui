/** Primitive typography scale — minimal usable set */
export const primitiveTypography = {
  'font-size-xs': '0.75rem',
  'font-size-sm': '0.875rem',
  'font-size-md': '1rem',
  'font-size-lg': '1.125rem',
  'font-size-xl': '1.25rem',

  'font-weight-regular': '400',
  'font-weight-medium': '500',
  'font-weight-semibold': '600',

  'line-height-tight': '1.25',
  'line-height-normal': '1.5',
  'line-height-relaxed': '1.75',
} as const;

export type PrimitiveTypographyConfig = Partial<typeof primitiveTypography>;
