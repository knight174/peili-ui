// 普通的 ts 库构建预设
import { UserConfig } from 'vite';
import { absCwd, generateConfig as baseGenerateConfig, GenerateConfigOptions } from '../src';

export function generateConfig(customOptions?: GenerateConfigOptions, viteConfig?: UserConfig) {
  return baseGenerateConfig(
    {
      dts: absCwd('../../tsconfig.src.json'),
      ...customOptions,
    },
    viteConfig,
  );
}
