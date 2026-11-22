import { primitiveVars } from './primitive';
import { semanticVars } from './semantic';

export * from './primitive';
export * from './semantic';
export * from './themes';

/**
 * 基础主题变量 = primitive + semantic（Light）。
 * `:root` 注入；业务改主题优先覆盖 semantic 键。
 */
export const themeVars: Record<string, string> = {
  ...primitiveVars,
  ...semanticVars,
};

/** 主题变量覆盖类型（扁平 string 键，兼容 setTheme / ConfigProvider） */
export type ThemeCssVarsConfig = Partial<Record<string, string>>;
