import { inject, App, Plugin } from 'vue';
import { isObjectLike } from '@peili-ui/shared';
import { generateCssVars } from '../utils';
import {
  themeColorLevelsEnabledKeys,
  PeiliuiCssVarsConfig,
  type ColorScheme,
} from '../vars';

const THEME_PROVIDE_KEY = '__PeiliuiTheme__';

function useGlobalTheme(app: App, options?: PeiliuiCssVarsConfig) {
  /** 设置全局主题变量（扁平或嵌套均可；品牌色会生成 50…950） */
  function setTheme(styleObj: PeiliuiCssVarsConfig) {
    const cssVars = generateCssVars(styleObj, {
      colorLevelsEnabledKeys: themeColorLevelsEnabledKeys,
    });
    Object.entries(cssVars).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
  }

  /** 切换 light / dark（写 data-theme，依赖预注入的暗色变量块） */
  function setColorScheme(scheme: ColorScheme) {
    document.documentElement.dataset.theme = scheme;
    if (scheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const result = { setTheme, setColorScheme };

  app.provide(THEME_PROVIDE_KEY, result);

  if (isObjectLike(options) && Object.keys(options).length > 0) {
    setTheme(options);
  }

  return result;
}

type PeiliuiTheme = ReturnType<typeof useGlobalTheme>;

export function useTheme() {
  const result = inject<PeiliuiTheme>(THEME_PROVIDE_KEY);
  if (!result) {
    throw new Error('useTheme() must be used after app.use(Theme)!');
  }
  return result;
}

export const Theme: Plugin<PeiliuiCssVarsConfig[]> = {
  install: (app, ...options) => {
    const finalOptions: PeiliuiCssVarsConfig = {};
    options.forEach(item => {
      Object.assign(finalOptions, item);
    });
    useGlobalTheme(app, finalOptions);
  },
};

export * from './presets';
