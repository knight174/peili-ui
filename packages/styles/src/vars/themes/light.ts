import {
  fjordScale,
  ironScale,
  ochreScale,
  tundraScale,
  arcticScale,
  neutralResolved,
  NEUTRAL_WHITE,
  NEUTRAL_BLACK,
} from '../primitive/palette';
import { attachColorScale } from './attachScale';
import { lightShadowVars } from './shadow';

/**
 * Light theme 扁平语义色。
 * text / bg / border 一律引用 neutralResolved 或 brand scale，禁止裸 hex。
 */
export const lightColorVars: Record<string, string> = {
  // brand
  ...attachColorScale('color-primary', fjordScale),
  'color-primary-hover': fjordScale[400],
  'color-primary-active': fjordScale[600],
  'color-primary-subtle': fjordScale[50],
  'color-primary-foreground': NEUTRAL_WHITE,

  // status
  ...attachColorScale('color-success', tundraScale),
  'color-success-foreground': NEUTRAL_WHITE,
  'color-success-bg': tundraScale[50],
  'color-success-border': tundraScale[200],

  ...attachColorScale('color-warning', ochreScale),
  'color-warning-foreground': NEUTRAL_WHITE,
  'color-warning-bg': ochreScale[50],
  'color-warning-border': ochreScale[200],

  ...attachColorScale('color-danger', ironScale),
  'color-danger-foreground': NEUTRAL_WHITE,
  'color-danger-bg': ironScale[50],
  'color-danger-border': ironScale[200],

  ...attachColorScale('color-info', arcticScale),
  'color-info-foreground': NEUTRAL_WHITE,
  'color-info-bg': arcticScale[50],
  'color-info-border': arcticScale[200],

  ...attachColorScale('color-neutral', neutralResolved),
  'color-neutral-foreground': NEUTRAL_WHITE,
  'color-neutral-bg': neutralResolved[100],
  'color-neutral-border': neutralResolved[300],

  // text — 正文 ≥4.5:1 @ surface
  'color-text-primary': neutralResolved[900],
  'color-text-secondary': neutralResolved[700],
  'color-text-tertiary': neutralResolved[500],
  'color-text-placeholder': neutralResolved[400],
  'color-text-disabled': neutralResolved[400],
  'color-text-inverse': NEUTRAL_WHITE,
  'color-text-link': fjordScale[500],

  // background
  'color-bg-page': neutralResolved[50],
  'color-bg-surface': NEUTRAL_WHITE,
  'color-bg-elevated': NEUTRAL_WHITE,
  'color-bg-muted': neutralResolved[100],
  'color-bg-subtle': neutralResolved[50],
  'color-bg-hover': neutralResolved[100],
  'color-bg-active': neutralResolved[200],
  'color-bg-selected': fjordScale[50],
  'color-bg-disabled': neutralResolved[100],

  // border — default/strong ≥3:1 @ surface/page
  'color-border-default': neutralResolved[400],
  'color-border-muted': neutralResolved[200],
  'color-border-strong': neutralResolved[500],
  'color-border-focus': fjordScale[500],
  'color-border-disabled': neutralResolved[200],

  // misc
  'color-overlay': NEUTRAL_BLACK,
  'color-scrim': NEUTRAL_BLACK,
  'color-transparent': 'transparent',
  'color-white': NEUTRAL_WHITE,

  ...lightShadowVars,
};

/** 嵌套视图（文档 / 结构对照） */
export const lightTheme = {
  color: {
    primary: lightColorVars['color-primary'],
    'primary-hover': lightColorVars['color-primary-hover'],
    'primary-active': lightColorVars['color-primary-active'],
    'primary-subtle': lightColorVars['color-primary-subtle'],
    'primary-foreground': lightColorVars['color-primary-foreground'],
    text: {
      primary: lightColorVars['color-text-primary'],
      secondary: lightColorVars['color-text-secondary'],
      tertiary: lightColorVars['color-text-tertiary'],
      disabled: lightColorVars['color-text-disabled'],
      placeholder: lightColorVars['color-text-placeholder'],
      inverse: lightColorVars['color-text-inverse'],
      link: lightColorVars['color-text-link'],
    },
    bg: {
      page: lightColorVars['color-bg-page'],
      surface: lightColorVars['color-bg-surface'],
      elevated: lightColorVars['color-bg-elevated'],
      muted: lightColorVars['color-bg-muted'],
      subtle: lightColorVars['color-bg-subtle'],
      hover: lightColorVars['color-bg-hover'],
      active: lightColorVars['color-bg-active'],
      selected: lightColorVars['color-bg-selected'],
      disabled: lightColorVars['color-bg-disabled'],
    },
    border: {
      default: lightColorVars['color-border-default'],
      muted: lightColorVars['color-border-muted'],
      strong: lightColorVars['color-border-strong'],
      focus: lightColorVars['color-border-focus'],
      disabled: lightColorVars['color-border-disabled'],
    },
  },
} as const;
