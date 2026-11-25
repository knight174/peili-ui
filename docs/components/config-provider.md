# ConfigProvider 配置

为子树注入主题变量（`themeVars`），用于局部换肤；全局切换仍用 `useTheme().setTheme` / `setColorScheme`。

语义键为扁平 shadcn 成对名（如 `primary`、`background`），详见 [Design Tokens](../guide/design-tokens.md)。

## 主题切换

下方可切换 Light/Dark、全局预设（default / Tiny），以及 `ConfigProvider` 局部覆盖。

:::demo

../demo/config-provider/demo-theme.vue

:::

## ConfigProvider API

通过 `theme-vars` 传入 `PeiliuiCssVarsConfig` 覆盖子树内 CSS 变量。
