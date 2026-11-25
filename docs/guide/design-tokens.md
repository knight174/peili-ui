# Design Tokens

PeiliUI 采用 **primitive → semantic → component** 三层 token 架构。默认色板灵感来自格陵兰历史建筑与极地环境；色阶在 **OKLCH** 感知空间生成，供调色板 / 文档使用。主题层只注入 **shadcn 成对语义**，组件不消费 `50…950` 色阶。

## 三层分别改什么

| 层            | 职责                     | 谁改                     | 例子                              |
| ------------- | ------------------------ | ------------------------ | --------------------------------- |
| **Primitive** | 无 UI 意图的颜料 / 尺度  | 库维护者                 | `palette-fjord-500`、`space-16`   |
| **Semantic**  | 表达意图，主题切换主入口 | 业务 / 预设              | `primary`、`background`、`border` |
| **Component** | 组件外观 API             | 组件作者；业务可局部覆盖 | `button-bg-color`                 |

运行时 CSS 变量前缀：`--pl-`（如 `--pl-primary`、`--pl-primary-foreground`）。

## Primitive Palette

| Palette | 基色      | 语义倾向    |
| ------- | --------- | ----------- |
| Fjord   | `#245A8D` | Primary     |
| Iron    | `#A63C2B` | Destructive |
| Ochre   | `#8B6808` | Warning     |
| Tundra  | `#4F7A52` | Success     |
| Arctic  | `#4A5F73` | Info        |
| Neutral | `#6F7370` | Neutral     |

色阶：`50 … 950`（仅 primitive / 文档；不进主题 CSS 主轴）。

## Semantic（shadcn 成对）

| Token                                               | 成对 / 备注                                               |
| --------------------------------------------------- | --------------------------------------------------------- |
| `background` / `foreground`                         | 页面默认底与正文                                          |
| `card` / `card-foreground`                          | 抬升卡片面（Dialog / Drawer）                             |
| `popover` / `popover-foreground`                    | 浮层面（Popup / Dropdown）                                |
| `primary` / `primary-foreground`                    | 高强调 / brand；另有 `primary-hover` / `primary-active`   |
| `secondary` / `secondary-foreground`                | 次要填充                                                  |
| `muted` / `muted-foreground`                        | 弱底 + 弱文案（含 placeholder）                           |
| `accent` / `accent-foreground`                      | hover / 选中 / ghost 高亮                                 |
| `destructive` / `destructive-foreground`            | 危险强调；另有 `destructive-hover` / `destructive-active` |
| `border` / `input` / `ring`                         | 边框 / 表单边 / focus ring                                |
| `success` / `warning` / `info`（及 `*-foreground`） | 可选 status，不进 Button 主轴                             |
| `overlay` / `scrim` / `transparent`                 | 遮罩与透明                                                |

`setTheme({ primary: '...' })` 只覆盖传入的语义键，**不再**自动展开 `50…950`。

## Light / Dark

- `:root` → Light（`themeVars`）
- `[data-theme="dark"]` / `.dark` → Dark（`darkColorVars`）

```ts
const { setColorScheme, setTheme } = useTheme();
setColorScheme('dark');
setTheme({ primary: '#1E4F7A' });
```

局部覆盖用 [ConfigProvider](../components/config-provider.md) 的 `theme-vars`；可交互示例也在该页。
