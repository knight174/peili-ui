/**
 * Primitive elevation shadows（Light 默认）。
 * Dark 覆盖见 `themes/shadow.ts`，由 `[data-theme=dark]` 注入。
 */
export const primitiveShadow = {
  'shadow-sm': '0 1px 2px rgb(0 0 0 / 6%)',
  'shadow-md': '0 8px 24px rgb(0 0 0 / 12%)',
  'shadow-lg': '0 12px 32px rgb(0 0 0 / 12%)',
} as const;

export type PrimitiveShadowConfig = Partial<typeof primitiveShadow>;
