// 引入其他组件的主题变量类型
import { ThemeCssVarsConfig } from './theme';
import { ButtonCssVarsConfig } from './button';

/** 导出组件库主题样式的整体类型 */
export interface PeiliuiCssVarsConfig extends ThemeCssVarsConfig, ButtonCssVarsConfig {
  [key: string]: string | undefined;
}

// 导出其他组件的主题变量
export * from './theme';
export * from './button';
