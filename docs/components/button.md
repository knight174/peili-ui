# Button 按钮

常用的操作按钮。通过 `variant` 区分外观（`default` / `secondary` / `destructive` / `outline` / `ghost` / `link`），不再使用 Element 式的 `type` 色相矩阵。

外观由语义 token 驱动，换肤见 [Design Tokens](../guide/design-tokens.md) 与 [ConfigProvider](./config-provider.md)。

## Variants

| variant             | 用途       |
| ------------------- | ---------- |
| `default`           | 主操作     |
| `secondary`         | 次要       |
| `destructive`       | 危险       |
| `outline` / `ghost` | 低强调     |
| `link`              | 行内链接态 |

:::demo

../demo/button/demo-variants.vue

:::

## Disabled

:::demo

../demo/button/demo-disabled.vue

:::

## 用法示意

Dialog footer 中 `default` 与 `secondary` 搭配，形成主次。

:::demo

../demo/button/demo-composition.vue

:::

## Button API

## [Button Props](../api/Button/interfaces/ButtonProps.md)

## [Button Slots](../api/Button/interfaces/ButtonSlots.md)
