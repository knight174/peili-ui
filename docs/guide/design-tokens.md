# Design Tokens

PeiliUI 采用 **primitive → semantic → component** 三层 token 架构。默认色板灵感来自格陵兰历史建筑与极地环境；色阶在 **OKLCH** 感知空间生成，并在 Light/Dark Theme 中**预展开**。

## 三层分别改什么

| 层            | 职责                     | 谁改                     | 例子                                |
| ------------- | ------------------------ | ------------------------ | ----------------------------------- |
| **Primitive** | 无 UI 意图的颜料 / 尺度  | 库维护者                 | `palette-fjord-500`、`space-16`     |
| **Semantic**  | 表达意图，主题切换主入口 | 业务 / 预设              | `color-primary`、`color-bg-surface` |
| **Component** | 组件外观 API             | 组件作者；业务可局部覆盖 | `button-bg-color`                   |

运行时 CSS 变量前缀：`--pl-`。

## Primitive Palette

| Palette | 基色      | 语义倾向 |
| ------- | --------- | -------- |
| Fjord   | `#245A8D` | Primary  |
| Iron    | `#A63C2B` | Danger   |
| Ochre   | `#8B6808` | Warning  |
| Tundra  | `#4F7A52` | Success  |
| Arctic  | `#4A5F73` | Info     |
| Neutral | `#6F7370` | Neutral  |

色阶：`50 … 950`（含 950）。

## Semantic 命名

- Brand：`color-primary` + `primary-hover|active|subtle|foreground`
- Status：`color-success|warning|danger|info|neutral` + `*-bg|border|foreground`
- Text：`color-text-primary|secondary|tertiary|placeholder|disabled|inverse|link`
- Bg：`color-bg-page|surface|elevated|muted|subtle|hover|active|selected|disabled`
- Border：`color-border-default|muted|strong|focus|disabled`
- Misc：`color-overlay` / `scrim` / `transparent` / `white`

`setTheme({ 'color-primary': '...' })` 时仍会用 OKLCH 重算该色的 `50…950`。

## Light / Dark

- `:root` → Light（`themeVars`，色阶已预展开）
- `[data-theme="dark"]` / `.dark` → Dark（`darkColorVars`）

```ts
const { setColorScheme, setTheme } = useTheme();
setColorScheme('dark');
setTheme({ 'color-primary': '#1E4F7A' });
```
