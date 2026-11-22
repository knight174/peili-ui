import type { ThemeCssVarsConfig } from './theme';
import type { ButtonCssVarsConfig } from './component/button';
import type { InputCssVarsConfig } from './component/input';
import type { SelectCssVarsConfig } from './component/select';
import type { DropdownCssVarsConfig } from './component/dropdown';
import type { PopupCssVarsConfig } from './component/popup';
import type { OverlayCssVarsConfig } from './component/overlay';

/** 导出组件库主题样式的整体类型（semantic ∪ component） */
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

export * from './theme';
export * from './component';
