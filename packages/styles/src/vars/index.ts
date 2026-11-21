// 引入其他组件的主题变量类型
import { ThemeCssVarsConfig } from './theme';
import { ButtonCssVarsConfig } from './button';
import { InputCssVarsConfig } from './input';
import { SelectCssVarsConfig } from './select';
import { DropdownCssVarsConfig } from './dropdown';
import { PopupCssVarsConfig } from './popup';
import { OverlayCssVarsConfig } from './overlay';

/** 导出组件库主题样式的整体类型 */
export interface PeiliuiCssVarsConfig
  extends
  ThemeCssVarsConfig,
  ButtonCssVarsConfig,
  InputCssVarsConfig,
  SelectCssVarsConfig,
  DropdownCssVarsConfig,
  PopupCssVarsConfig,
  OverlayCssVarsConfig {
  [key: string]: string | undefined;
}

// 导出其他组件的主题变量
export * from './theme';
export * from './button';
export * from './input';
export * from './select';
export * from './dropdown';
export * from './popup';
export * from './overlay';
