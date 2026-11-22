/** RGBA 颜色对象 */
interface RGBAColor {
  /** r、g、b、a 值 */
  args: [number, number, number, number];

  /** 获取 rgb 值，例如：255,255,255 */
  get rgbTxt(): string;

  /** 获取 rgba 完整表示，例如：rgba(255,255,255,1) */
  get rgba(): string;
}

/** 给与 r、g、b、a 值，构造一个 RGBA 颜色对象。 */
function createRgbaColor(r: number, g: number, b: number, a: number = 1): RGBAColor {
  return {
    args: [r, g, b, a],
    get rgbTxt() {
      const [rr, gg, bb] = this.args;
      return `${rr}, ${gg}, ${bb}`;
    },
    get rgba() {
      return `rgba(${this.rgbTxt}, ${this.args[3] || 1})`;
    },
  };
}

/** 将 16 进制颜色表达式转换为 RGBA 颜色对象。 */
function hexToRgba(str: string): RGBAColor | null {
  if (str.charAt(0) !== '#') {
    return null;
  }
  if (str.length !== 4 && str.length !== 7) {
    return null;
  }

  let colorStr = str.slice(1);
  if (colorStr.length === 3) {
    colorStr = colorStr[0] + colorStr[0] + colorStr[1] + colorStr[1] + colorStr[2] + colorStr[2];
  }
  const r = parseInt(colorStr.slice(0, 2), 16);
  const g = parseInt(colorStr.slice(2, 4), 16);
  const b = parseInt(colorStr.slice(4, 6), 16);
  return createRgbaColor(r, g, b, 1);
}

/** 支持的 css 颜色函数类型 */
const cssColorFunctions = ['rgb', 'rgba'];

/** 将函数形式的 CSS 表达式转换为 RGBA 颜色对象。 */
function parseCssFunc(str: string): RGBAColor | null {
  const match = str.match(/^(.*)\((.+)\)$/i);
  if (!match) {
    return null;
  }

  const [, func, argsTxt] = match;
  if (!cssColorFunctions.includes(func)) {
    return null;
  }

  let argsArr = argsTxt.split(',');
  if (argsArr.length === 1) {
    argsArr = argsTxt.split(' ');
  }
  const args = argsArr.map(parseFloat).filter(item => item);

  if (func === 'rgb' || func === 'rgba') {
    const [r, g, b, a] = args;
    return createRgbaColor(r, g, b, a || 1);
  }

  return null;
}

/** 给与一个 CSS 表达式，试图将其转化为 RGBA 颜色对象 */
export function toRgba(str: string): RGBAColor | null {
  return hexToRgba(str) || parseCssFunc(str);
}

/**
 * 颜色混合
 * @param source 起始色
 * @param target 目标色
 * @param percent 混合比例百分比
 * @returns 混合后的颜色
 */
export function mixRgbColor(source: RGBAColor, target: RGBAColor, percent: number): RGBAColor {
  const res = [
    source.args[0] + (target.args[0] - source.args[0]) * (percent / 100),
    source.args[1] + (target.args[1] - source.args[1]) * (percent / 100),
    source.args[2] + (target.args[2] - source.args[2]) * (percent / 100),
  ].map(item => Math.round(item));
  const [rr, gg, bb] = res;
  return createRgbaColor(rr, gg, bb, source.args[3] || 1);
}

/** 标准色阶 steps：50…950（含 950） */
export const COLOR_SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
export type ColorScaleStep = (typeof COLOR_SCALE_STEPS)[number];

/** 相对 base(500) 向白/黑混合的比例 */
const COLOR_SCALE_MIX: Record<ColorScaleStep, number> = {
  50: 95,
  100: 90,
  200: 70,
  300: 50,
  400: 25,
  500: 0,
  600: 12,
  700: 30,
  800: 50,
  900: 70,
  950: 82,
};

/**
 * 以 base 为 500，生成 50…950 色阶。
 * &lt;500 与白混合，&gt;500 与黑混合。
 */
export function generateRgbColorScale(color: RGBAColor): Record<ColorScaleStep, RGBAColor> {
  const white = createRgbaColor(255, 255, 255);
  const black = createRgbaColor(0, 0, 0);
  const result = {} as Record<ColorScaleStep, RGBAColor>;

  COLOR_SCALE_STEPS.forEach(step => {
    const mix = COLOR_SCALE_MIX[step];
    if (step === 500 || mix === 0) {
      result[step] = color;
      return;
    }
    result[step] = step < 500 ? mixRgbColor(color, white, mix) : mixRgbColor(color, black, mix);
  });

  return result;
}

/**
 * @deprecated 使用 {@link generateRgbColorScale}
 * 生成色阶对象。light 系列与白色一步步混合，dark 系列与黑色一步步混合。
 */
export function generateRgbColorLevels(color: RGBAColor, levels: number = 9) {
  const result = {
    light: <RGBAColor[]>[],
    dark: <RGBAColor[]>[],
  };

  if (color.rgbTxt === '0, 0, 0' || color.rgbTxt === '255, 255, 255') {
    return result;
  }

  const percent = 100 / (levels + 1);
  for (let i = 1; i < levels + 1; i++) {
    result.light.push(mixRgbColor(color, createRgbaColor(255, 255, 255), i * percent));
    result.dark.push(mixRgbColor(color, createRgbaColor(0, 0, 0), i * percent));
  }

  return result;
}

/** RGBA → #rrggbb */
export function rgbaToHex(color: RGBAColor): string {
  const [r, g, b] = color.args;
  return `#${[r, g, b].map(n => n.toString(16).padStart(2, '0')).join('')}`;
}

/** 以 hex base 生成 50…950 的 hex 色阶 map（键为 step 数字字符串） */
export function generateHexColorScale(baseHex: string): Record<ColorScaleStep, string> {
  const rgba = toRgba(baseHex);
  if (!rgba) {
    throw new Error(`Invalid color: ${baseHex}`);
  }
  const scale = generateRgbColorScale(rgba);
  const result = {} as Record<ColorScaleStep, string>;
  COLOR_SCALE_STEPS.forEach(step => {
    result[step] = rgbaToHex(scale[step]);
  });
  return result;
}
