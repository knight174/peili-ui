import { generateVueConfig } from '../build/scripts';

export default generateVueConfig({
  presetPeiliuiOptions: {
    // theme 提供色板；dropdown 注入 --pl-dropdown-*；popup 供浮层依赖
    include: ['theme', 'dropdown', 'popup'],
  },
});
