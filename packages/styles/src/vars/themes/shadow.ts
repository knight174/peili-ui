import { primitiveShadow } from '../primitive/shadow';

/** Light 阴影（与 primitive 一致，供显式引用） */
export const lightShadowVars: Record<string, string> = {
  ...primitiveShadow,
};

/**
 * Dark 阴影：更高透明度 + 细亮描边，避免暗底上「阴影消失」。
 */
export const darkShadowVars: Record<string, string> = {
  'shadow-sm': '0 1px 2px rgb(0 0 0 / 45%), 0 0 0 1px rgb(255 255 255 / 6%)',
  'shadow-md': '0 8px 24px rgb(0 0 0 / 55%), 0 0 0 1px rgb(255 255 255 / 8%)',
  'shadow-lg': '0 16px 40px rgb(0 0 0 / 65%), 0 0 0 1px rgb(255 255 255 / 10%)',
};
