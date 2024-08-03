import { defineConfig, presetUno, presetIcons, UserConfig, transformerDirectives } from 'unocss';
// eslint-disable-next-line import/no-relative-packages
import { peiliuiPreset } from './packages/styles/src/unoPreset';

export default <UserConfig>defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        // Iconify json 集成，后续支持通过 <i class="i-pl-xxx"> 来使用图标原子类，并支持按需打包
        // eslint-disable-next-line import/no-relative-packages
        pl: () => import('./packages/icons/dist/icons.json').then(i => i.default),
      },
    }),
    peiliuiPreset(),
  ],
  transformers: [transformerDirectives()],
});

// export default defineConfig({
//   // 添加全局样式，定义主题变量
//   preflights: [
//     {
//       getCSS: () => `
//         :root {
//           --color-primary: #c7000b;
//           --color-success: #50d4ab;
//           --color-warning: #fbb175;
//           --color-danger: #f66f6a;
//           --color-info: #526ecc;
//         }
//       `,
//     },
//   ],
//   // 添加主题变量
//   theme: {
//     colors: {
//       primary: 'var(--color-primary)',
//       success: 'var(--color-success)',
//       warning: 'var(--color-warning)',
//       danger: 'var(--color-danger)',
//       info: 'var(--color-info)',
//     },
//   },
//   // 添加规则
//   rules: [
//     [
//       'button-base',
//       {
//         cursor: 'pointer',
//         display: 'inline-flex',
//         padding: '6px 12px',
//       },
//     ],
//   ],
//   // 添加快捷方式
//   shortcuts: [
//     [
//       'button',
//       `
//       'button-base text-14px c-primary bg-success'
//       hover:bg-warning
//       before:text-14px
//       [&.button-danger]:bg-danger
//       [&.button-info]:bg-info
//     `,
//     ],
//     ['button-danger', 'c-danger'],
//     ['button-info', 'c-info'],
//   ],
//   // 添加白名单（使特定的 CSS 类任何时候都生成）
//   safelist: ['button', 'button-danger', 'button-info'],
// });
