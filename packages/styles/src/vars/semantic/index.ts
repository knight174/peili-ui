import { semanticColors } from './color';
import { semanticSpacing, semanticPadding } from './spacing';
import { semanticZIndex } from './zIndex';

export * from './color';
export * from './spacing';
export * from './zIndex';
export * from './brand';
export * from './status';
export * from './text';
export * from './background';
export * from './border';
export * from './misc';

/** Semantic tokens — 主题覆盖主入口（默认 Light 扁平表） */
export const semanticVars: Record<string, string> = {
  ...semanticColors,
  ...semanticSpacing,
  ...semanticPadding,
  ...semanticZIndex,
};

export type SemanticCssVarsConfig = Partial<Record<string, string>>;
