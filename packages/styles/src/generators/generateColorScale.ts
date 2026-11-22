import {
  parse,
  converter,
  formatHex,
  clampGamut,
  type Oklch,
  type Color,
} from 'culori';
import { COLOR_SCALE_STEPS, type ColorScaleStep } from '../utils/colors';

const toOklch = converter('oklch');

/** 各阶目标 Lightness；500 使用基色自身 L */
const LIGHTNESS_TARGETS: Record<Exclude<ColorScaleStep, 500>, number> = {
  50: 0.97,
  100: 0.93,
  200: 0.87,
  300: 0.78,
  400: 0.68,
  600: 0.48,
  700: 0.40,
  800: 0.32,
  900: 0.24,
  950: 0.18,
};

export interface ChromaCurveOptions {
  /** 浅色端相对基色 chroma 的倍率（≈50） */
  lightFactor?: number;
  /** 深色端相对基色 chroma 的倍率（≈950） */
  darkFactor?: number;
  /** 中段峰值倍率（≈500） */
  midBoost?: number;
}

export interface GenerateColorScaleOptions {
  /** Palette 名，用于选用默认 chroma 曲线 */
  palette?: 'fjord' | 'iron' | 'ochre' | 'tundra' | 'arctic' | 'neutral' | string;
  chroma?: ChromaCurveOptions;
  /** 浅色端 hue 微调（度） */
  hueDriftLight?: number;
  /** 深色端 hue 微调（度） */
  hueDriftDark?: number;
}

const PALETTE_CHROMA: Record<string, ChromaCurveOptions> = {
  fjord: { lightFactor: 0.35, darkFactor: 0.75, midBoost: 1.02 },
  iron: { lightFactor: 0.4, darkFactor: 0.85, midBoost: 1.05 },
  ochre: { lightFactor: 0.45, darkFactor: 0.8, midBoost: 1.08 },
  tundra: { lightFactor: 0.35, darkFactor: 0.8, midBoost: 1.02 },
  arctic: { lightFactor: 0.3, darkFactor: 0.7, midBoost: 1.0 },
  neutral: { lightFactor: 0.12, darkFactor: 0.18, midBoost: 1.0 },
};

function chromaAtStep(
  baseC: number,
  step: ColorScaleStep,
  curve: ChromaCurveOptions,
): number {
  const { lightFactor = 0.35, darkFactor = 0.75, midBoost = 1.02 } = curve;

  if (step === 500) return baseC * midBoost;

  if (step < 500) {
    const t = (500 - step) / 450;
    return Math.max(0, baseC * (midBoost + (lightFactor - midBoost) * t));
  }

  const t = (step - 500) / 450;
  return Math.max(0, baseC * (midBoost + (darkFactor - midBoost) * t));
}

function hueAtStep(
  baseH: number,
  step: ColorScaleStep,
  hueDriftLight: number,
  hueDriftDark: number,
): number {
  if (step === 500) return baseH;
  if (step < 500) return baseH + hueDriftLight * ((500 - step) / 450);
  return baseH + hueDriftDark * ((step - 500) / 450);
}

function toHexSafe(color: Color): string {
  const clamped = clampGamut('rgb')(color) ?? color;
  const hex = formatHex(clamped);
  if (!hex) {
    throw new Error('Failed to format color to hex');
  }
  return hex;
}

/**
 * 以 OKLCH 感知空间从基色生成 50…950 色阶。
 * 500 尽量贴近基色（经 sRGB gamut mapping 后可能有轻微偏差）。
 */
export function generateColorScale(
  baseColor: string,
  options: GenerateColorScaleOptions = {},
): Record<ColorScaleStep, string> {
  const parsed = parse(baseColor);
  if (!parsed) {
    throw new Error(`Invalid base color: ${baseColor}`);
  }

  const base = toOklch(parsed) as Oklch;
  if (base.mode !== 'oklch' || base.l == null) {
    throw new Error(`Cannot convert to OKLCH: ${baseColor}`);
  }

  const baseL = base.l;
  const baseC = base.c ?? 0;
  const baseH = base.h ?? 0;

  const curve =
    options.chroma ??
    PALETTE_CHROMA[options.palette ?? ''] ??
    PALETTE_CHROMA.fjord;

  const hueDriftLight = options.hueDriftLight ?? 0;
  const hueDriftDark = options.hueDriftDark ?? 0;

  const result = {} as Record<ColorScaleStep, string>;

  COLOR_SCALE_STEPS.forEach(step => {
    if (step === 500) {
      result[500] = toHexSafe(base);
      return;
    }

    const next: Oklch = {
      mode: 'oklch',
      l: LIGHTNESS_TARGETS[step],
      c: chromaAtStep(baseC, step, curve),
      h: hueAtStep(baseH, step, hueDriftLight, hueDriftDark),
      alpha: base.alpha,
    };

    // 保证浅色不比基色更暗、深色不比基色更亮
    if (step < 500) next.l = Math.max(next.l, baseL);
    if (step > 500) next.l = Math.min(next.l, baseL);

    result[step] = toHexSafe(next);
  });

  return result;
}

/** 将色阶展开为 `prefix` / `prefix-50`…`prefix-950` 扁平 map */
export function flattenColorScale(
  prefix: string,
  scale: Record<ColorScaleStep, string>,
): Record<string, string> {
  const result: Record<string, string> = {
    [prefix]: scale[500],
  };
  COLOR_SCALE_STEPS.forEach(step => {
    result[`${prefix}-${step}`] = scale[step];
  });
  return result;
}
