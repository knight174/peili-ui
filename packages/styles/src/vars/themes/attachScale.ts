import { COLOR_SCALE_STEPS, type ColorScaleStep } from '../../utils/colors';

/** 将 palette 色阶挂到键名下（文档 / 调色工具；组件层勿消费 step） */
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
