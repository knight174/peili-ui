import { primitivePalette } from './palette';
import { primitiveSpace } from './space';
import { primitiveRadius } from './radius';
import { primitiveTypography } from './typography';
import { primitiveShadow } from './shadow';

export * from './palette';
export * from './space';
export * from './radius';
export * from './typography';
export * from './shadow';

/** All primitive tokens (no UI intent) */
export const primitiveVars: Record<string, string> = {
  ...primitivePalette,
  ...primitiveSpace,
  ...primitiveRadius,
  ...primitiveTypography,
  ...primitiveShadow,
};

export type PrimitiveCssVarsConfig = Partial<Record<string, string>>;
