import { toRgba, COLOR_SCALE_STEPS, type ColorScaleStep } from './colors';
import { generateColorScale } from '../generators/generateColorScale';
import { normalizeTokenInput } from '../generators/flattenTokens';

export type DefaultPrefix = 'pl-';
/** 默认情况下，生成 CSS 变量时增加的前缀 */
export const DEFAULT_PREFIX: DefaultPrefix = 'pl-';

/**
 * 只对「本次实际覆盖」的 brand/status 基色启用色阶重算，
 * 避免无条件展开全部 candidate、冲掉 dark 预映射中未改动的色阶。
 */
export function resolveColorLevelsEnabledKeys(
  styleObj: Record<string, any> | null | undefined,
  candidates: readonly string[],
): string[] {
  if (!styleObj || typeof styleObj !== 'object' || !candidates?.length) {
    return [];
  }
  const flat = normalizeTokenInput(styleObj);
  return candidates.filter((key) => {
    const value = flat[key];
    return value != null && String(value).length > 0;
  });
}

/**
 * 生成 CSS 变量对象的选项
 * @typeParam K 需要生成色阶的键名
 * @typeParam P CSS 变量前缀
 */
export interface GenerateCssVarsOptions<K = string, P extends string = DefaultPrefix> {
  /**
   * 指定的键名所对应的 CSS 变量将会额外生成 50…950 色阶（OKLCH）。
   *
   * 例如 primary 将会生成 primary-50 … primary-950（主题默认不启用）。
   */
  colorLevelsEnabledKeys?: K[];

  /**
   * @deprecated 色阶已固定为 50…950，保留字段避免破坏调用方
   */
  colorLevels?: number;

  /** CSS 变量前缀 */
  prefix?: P;
}

/**
 * CSS 变量对象的类型
 */
export type CssVarsObject<
  T extends Record<string, any> = Record<string, any>,
  K extends keyof T = keyof T,
  P extends string = DefaultPrefix,
> = {
  [Key in `--${P}${string & keyof T}`]: any;
} & {
  [Key in `--${P}${string & K}-${ColorScaleStep}`]: any;
};

/**
 * 生成 CSS 变量对象。
 * - 兼容扁平 origin（现有 API）
 * - 若传入嵌套对象，先展平为 kebab-case 键
 * - 色阶通过 OKLCH `generateColorScale` 生成（不再 RGB 线性插值）
 */
export function generateCssVars<
  T extends Record<string, any> = Record<string, any>,
  K extends keyof T = keyof T,
  P extends string = DefaultPrefix,
>(origin: T, options?: GenerateCssVarsOptions<K, P>): CssVarsObject<T, K, P> {
  const { prefix = DEFAULT_PREFIX, colorLevelsEnabledKeys = [] } = options || {};
  const flat = normalizeTokenInput(origin as Record<string, any>);

  const result: Record<string, any> = {};
  Object.entries(flat).forEach(([key, raw]) => {
    const value = String(raw);
    const cssKey = `--${prefix}${key}`;
    const valueToRgba = toRgba(value);

    const finalValue = valueToRgba ? valueToRgba.rgbTxt : value;
    result[cssKey] = finalValue;

    if (valueToRgba && colorLevelsEnabledKeys.includes(key as K)) {
      try {
        const scale = generateColorScale(value);
        COLOR_SCALE_STEPS.forEach(step => {
          const stepRgba = toRgba(scale[step]);
          result[`${cssKey}-${step}`] = stepRgba ? stepRgba.rgbTxt : scale[step];
        });
      } catch {
        // 非法颜色不静默造阶
      }
    }
  });

  return result as CssVarsObject<T, K, P>;
}

/** 将 css 变量对象转换为 css 样式字符串 */
export function cssVarsToString(cssVars: Record<string, any>, selector: string = ':root') {
  let result = `${selector}{`;
  Object.entries(cssVars).forEach(([key, value]) => {
    result += `${key}: ${value};`;
  });
  result += '}';
  return result;
}

/** 获取 css 变量字符串 var(xxxxx) */
export function getCssVar<T extends Record<string, any> = Record<string, any>>(
  name: keyof T,
  prefix: string = DEFAULT_PREFIX,
) {
  return `var(--${prefix}${name as string})`;
}

/** 将颜色 css 变量转换为有效颜色：255,255,255 => rgba(255,255,255,1) */
export function cssVarToRgba<T extends Record<string, any> = Record<string, any>>(
  name: keyof T,
  alpha: number = 1,
  prefix: string = DEFAULT_PREFIX,
) {
  return `rgba(${getCssVar(name, prefix)},${alpha})`;
}
