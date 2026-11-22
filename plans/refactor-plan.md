# Peili UI Color System 重构计划

## 目标

重构 Peili UI 的颜色设计系统，建立一套基于 Greenland Palette 的现代化色彩体系。

核心目标：

1. 建立基于 OKLCH 的 Primitive Color Palette。
2. 优化 Semantic Colors 的分类与命名。
3. 建立清晰的 Primitive → Semantic → Component Token 架构。
4. 支持 Light / Dark 两套主题映射。
5. 重构 CSS Variables Generator，支持嵌套对象。
6. 保持 Vue 版本现有 API 的兼容性，避免破坏性迁移。
7. 为未来 React 版本复用同一套 Token Engine 做准备。

---

## 一、执行前检查

开始修改前，先检查项目现有实现：

- Primitive Palette 定义及数据结构。
- `generateRgbColorScale` 实现。
- `generateCssVars` 实现及其调用位置。
- `toRgba` 颜色转换逻辑。
- `GenerateCssVarsOptions`、`CssVarsObject` 等类型定义。
- Light / Dark Theme 现有实现。
- CSS Variables 注入和消费方式。
- Legacy Color Tokens 的引用情况。
- 现有颜色相关测试。

要求：

- 优先复用现有代码。
- 不要直接重写整个 Token 系统。
- 不要删除尚有业务引用的旧 Token。
- 先梳理调用链和依赖关系，再确定迁移方案。

---

## 二、Primitive Palette 重构

### 2.1 建立 Greenland Palette

以格陵兰传统建筑色彩和北极自然环境为灵感，建立以下颜色组：

| Palette | 灵感来源   | 色彩定位        |
| ------- | ---------- | --------------- |
| Fjord   | 冰川峡湾   | Blue / Primary  |
| Iron    | 氧化铁红   | Red             |
| Ochre   | 天然赭石   | Yellow / Amber  |
| Tundra  | 苔原植被   | Green           |
| Arctic  | 极地冰川   | Muted Blue      |
| Neutral | 冷调中性色 | Slate / Neutral |

使用以下色阶：

`50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950`

当前设计候选基色：

- Fjord：`#286B83`
- Iron：`#A64E3C`
- Ochre：`#B28A3E`
- Tundra：`#547B62`
- Arctic：`#477B9C`

注意：这些是设计候选基色，不应直接作为全部色阶的生成依据而不做验证。

### 2.2 OKLCH 色阶生成

新增或重构独立的颜色生成模块：

`generateColorScale(baseColor, options)`

要求：

1. 使用 OKLCH 作为颜色生成空间。
2. 根据目标色阶调整 Lightness。
3. 根据不同 Palette 调整 Chroma 曲线。
4. 允许对 Hue 进行适当微调。
5. 处理 sRGB Gamut Mapping，避免越界颜色。
6. 输出完整的 50–950 色阶。
7. 支持 HEX / RGB / OKLCH 之间的转换。
8. 保证 500 与指定基色尽可能一致，必要时进行色域转换并明确记录偏差。
9. 不要简单地对 HSL 或 RGB 通道进行线性插值。

不同 Palette 可以拥有独立的生成参数，不要强制所有颜色使用相同的 Chroma 曲线。

### 2.3 Primitive 目录建议

```text
tokens/
└── primitive/
    ├── palette/
    │   ├── fjord.ts
    │   ├── iron.ts
    │   ├── ochre.ts
    │   ├── tundra.ts
    │   ├── arctic.ts
    │   ├── neutral.ts
    │   └── index.ts
    └── index.ts
```

Primitive 只负责提供原始色彩及其色阶，不负责定义业务语义。

---

## 三、Semantic Colors 重构

将原有五个 Semantic Color 分类重新整理为六个分类。

### 3.1 semanticBrandColors

品牌及交互颜色。

建议 Token：

```ts
{
  primary,
  primaryHover,
  primaryActive,
  primarySubtle,
  primaryForeground,
}
```

要求：

- Primary 使用 Fjord Palette。
- 暂时不强制增加 Secondary、Accent。
- Hover、Active 等状态必须有明确的色值映射。
- Foreground 负责定义品牌背景上的文字颜色。

### 3.2 semanticStatusColors

独立处理功能状态颜色。

```ts
{
  success,
  warning,
  danger,
  info,
}
```

每种状态至少考虑：

- DEFAULT
- foreground
- bg
- border

对应 Palette：

| Status  | Palette |
| ------- | ------- |
| Success | Tundra  |
| Warning | Ochre   |
| Danger  | Iron    |
| Info    | Arctic  |

注意：Status 颜色不能只提供一个主色值，需要支持 Alert、Badge、Toast 等组件使用。

### 3.3 semanticTextColors

```ts
{
  primary,
  secondary,
  tertiary,
  disabled,
  placeholder,
  inverse,
  link,
}
```

建议映射：

- primary: Neutral 900
- secondary: Neutral 700
- tertiary: Neutral 500
- disabled: Neutral 400
- placeholder: Neutral 400
- inverse：White
- link：Fjord

根据实际对比度测试调整具体色阶。

### 3.4 semanticBgColors

```ts
{
  page,
  surface,
  elevated,
  muted,
  subtle,
  hover,
  active,
  selected,
  disabled,
}
```

要求：

- page：页面背景。
- surface：普通容器背景。
- elevated：弹窗、Popover 等浮层背景。
- muted / subtle：弱化背景。
- hover / active：交互背景。
- selected：选中状态。
- disabled：禁用状态。

不要为了凑齐 Token 而创建没有实际区别的颜色映射。

### 3.5 semanticBorderColors

```ts
{
  default,
  muted,
  strong,
  focus,
  disabled,
}
```

要求：

- 不再使用 darker、dark、base、light、lighter、lightest 作为主要语义命名。
- Focus 可以关联 Fjord。
- 根据实际组件使用情况确定是否保留所有层级。

### 3.6 semanticMiscColors

仅保留没有其他明确归属的功能性颜色。

```ts
{
  overlay,
  scrim,
  shadow,
  transparent,
}
```

Black、White 属于 Primitive，不应该在 Misc 中重复定义为独立色彩。

---

## 四、Theme 架构

建立 Primitive → Semantic → Component 的三级体系。

```text
Primitive Palette
       |
       v
Theme Mapping
       |
       +------ Light Theme
       |
       +------ Dark Theme
       |
       v
Semantic CSS Variables
       |
       v
Component Tokens
       |
       v
Vue Components
```

### 4.1 Light / Dark

分别定义 Light 和 Dark 的 Semantic Mapping。

要求：

- 不通过简单反转 50–950 实现 Dark Mode。
- 同一个 Semantic Token 在不同主题中可以引用不同 Primitive 色阶。
- Dark Mode 需要单独考虑背景、文字、边框、状态色及交互状态。
- 保证文字和背景的对比度。
- 不要让组件直接引用 Primitive 色阶。

### 4.2 Theme 目录建议

```text
tokens/
├── primitive/
├── semantic/
├── themes/
│   ├── light.ts
│   ├── dark.ts
│   └── index.ts
└── index.ts
```

---

## 五、CSS Variables Generator 重构

现有 `generateCssVars` 主要存在以下限制：

1. 只支持扁平对象。
2. 通过 `colorLevelsEnabledKeys` 白名单决定是否生成色阶。
3. 颜色转换和色阶生成职责耦合。
4. 没有完整的主题映射处理能力。

### 5.1 新的职责划分

`generateColorScale`

负责 Primitive 色阶生成。

`generateCssVars`

负责将主题对象递归转换成 CSS Variables。

`Theme Mapping`

负责 Light / Dark Semantic Token 映射。

### 5.2 generateCssVars 改造

建议支持嵌套对象：

```ts
const theme = {
  color: {
    primary: '#30758D',
    text: {
      primary: '#1B4350',
      secondary: '#4D7055',
    },
    bg: {
      page: '#F3F9FB',
      surface: '#FFFFFF',
    },
  },
};
```

输出：

```css
--peili-color-primary: ...;
--peili-color-text-primary: ...;
--peili-color-text-secondary: ...;
--peili-color-bg-page: ...;
--peili-color-bg-surface: ...;
```

要求：

- 递归处理嵌套对象。
- 保留现有 prefix 配置能力。
- 保留 RGB CSS Variables 输出兼容性。
- 非颜色值不进行颜色转换。
- 支持 transparent 等特殊值。
- 不再通过 Semantic Key 白名单生成色阶。
- 正确处理数组、空对象及非法颜色值，避免静默生成错误变量。
- 保持泛型类型推导。
- 补充单元测试。

如果现有调用方依赖旧版扁平对象，应保持兼容或提供明确的迁移适配，不要直接破坏 API。

---

## 六、Legacy 兼容处理

现有：

- `semanticLegacyColorAliases`
- `themeColors`
- `color-header`
- `color-regular`
- `color-secondary`
- `color-placeholder`
- `color-disabled`
- `color-reverse`
- `color-page`
- `color-card`
- `color-bd_*`

迁移要求：

1. Legacy Aliases 移出 Semantic 正式定义。
2. 单独建立 `compat/legacyColors.ts`。
3. 旧 Token 暂时保留。
4. 新代码禁止继续引用旧 Token。
5. 统计现有引用位置。
6. 提供迁移映射。
7. 在 Vue 版本完成迁移后，再评估删除旧 API。

---

## 七、目录结构最终建议

```text
tokens/
├── primitive/
│   ├── palette/
│   │   ├── fjord.ts
│   │   ├── iron.ts
│   │   ├── ochre.ts
│   │   ├── tundra.ts
│   │   ├── arctic.ts
│   │   ├── neutral.ts
│   │   └── index.ts
│   └── index.ts
│
├── semantic/
│   ├── brand.ts
│   ├── status.ts
│   ├── text.ts
│   ├── background.ts
│   ├── border.ts
│   └── misc.ts
│
├── themes/
│   ├── light.ts
│   ├── dark.ts
│   └── index.ts
│
├── generators/
│   ├── generateColorScale.ts
│   └── generateCssVars.ts
│
├── compat/
│   └── legacyColors.ts
│
└── index.ts
```

以上为目标结构，Agent 应结合现有仓库实际目录进行调整，不要为了匹配目录而进行无意义搬迁。

---

## 八、质量与验收标准

### 色彩质量

- 所有 Palette 均具有完整 50–950 色阶。
- 色阶使用 OKLCH 感知空间生成。
- 检查 Chroma 和 Hue 的变化是否自然。
- 检查 Gamut Mapping。
- 避免浅色灰化、深色浑浊。
- 检查不同状态色之间的辨识度。

### 无障碍

参考 WCAG 2.2 AA：

- 普通文字对比度至少 4.5:1。
- 大号文字至少 3:1。
- 重要 UI 控件和图形边界至少 3:1。
- Light / Dark 两套主题分别验证。
- 特别检查 Warning、Placeholder、Disabled 等颜色。

### 工程质量

- TypeScript 类型完整。
- 不破坏现有导出 API。
- 不产生重复 CSS Variables。
- Legacy 兼容映射正确。
- 现有测试通过。
- 新增颜色生成和 CSS Variables Generator 单元测试。
- Vue 组件视觉回归测试通过。

### 文档

补充颜色设计系统文档：

1. Primitive Palette。
2. Semantic Colors。
3. Light / Dark Mapping。
4. Token 命名规范。
5. CSS Variables 使用方式。
6. Legacy Token 迁移指南。

---

## 九、执行顺序

请按以下阶段实施，每个阶段完成后检查结果。

| 阶段    | 任务                                | 优先级 |
| ------- | ----------------------------------- | ------ |
| Phase 1 | 检查现有 Token 和 Generator 架构    | P0     |
| Phase 2 | Greenland Primitive Palette + OKLCH | P0     |
| Phase 3 | Semantic Colors 重构                | P0     |
| Phase 4 | Light / Dark Theme Mapping          | P1     |
| Phase 5 | CSS Variables Generator 重构        | P1     |
| Phase 6 | Legacy API 兼容迁移                 | P1     |
| Phase 7 | 测试、文档、视觉验证                | P0     |

## 十、Agent 执行约束

1. 先阅读代码，不要直接开始重写。
2. 先输出现有架构分析和实施方案，再进行修改。
3. 每个阶段尽量独立提交修改，避免一次性大规模重构。
4. 不要擅自删除旧 Token 或修改公开 API。
5. 不要为了满足目录结构而增加不必要的抽象。
6. 优先保证现有 Vue 版本正常运行。
7. React 版本尚未开始，不需要为其提前引入复杂架构。
8. 不要只完成类型和代码修改，必须验证最终 CSS Variables 和实际组件效果。
9. 完成后输出修改文件列表、关键设计决策、测试结果和遗留问题。

**最终目标：建立一套轻量、清晰、可扩展的 Peili UI Design Token System，让 Vue 和未来的 React 版本共享同一套 Primitive Palette、Semantic Mapping 和颜色生成逻辑。**
