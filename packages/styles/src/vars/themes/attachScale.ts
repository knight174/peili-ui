import { COLOR_SCALE_STEPS, type ColorScaleStep } from '../../utils/colors';

/** 将 palette 色阶挂到语义色名下，供组件继续使用 `color-primary-300` 等 */
export function attachColorScale(
  name: string,
  scale: Record<ColorScaleStep, string>,
): Record<string, string> {
  const result: Record<string, string> = {
    [name]: scale[500],
  };
  COLOR_SCALE_STEPS.forEach(step => {
    result[`${name}-${step}`] = scale[step];
  });
  return result;
}
