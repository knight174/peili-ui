/**
 * Primitive spacing scale — strict 4px steps.
 * Named by pixel value (`space-4` … `space-32`).
 */
export const primitiveSpace = {
  'space-4': '4px',
  'space-8': '8px',
  'space-12': '12px',
  'space-16': '16px',
  'space-20': '20px',
  'space-24': '24px',
  'space-28': '28px',
  'space-32': '32px',
} as const;

export type PrimitiveSpaceConfig = Partial<typeof primitiveSpace>;
