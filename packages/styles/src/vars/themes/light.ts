import {
  fjordScale,
  ironScale,
  tundraScale,
  ochreScale,
  arcticScale,
  neutralResolved,
  NEUTRAL_WHITE,
  NEUTRAL_BLACK,
} from '../primitive/palette';
import { lightShadowVars } from './shadow';

/**
 * Light 语义色（shadcn 成对约定）。
 * 只引用 primitive；禁止裸 hex；不向主题注入 50…950 色阶。
 */
export const lightColorVars: Record<string, string> = {
  background: neutralResolved[50],
  foreground: neutralResolved[900],

  card: NEUTRAL_WHITE,
  'card-foreground': neutralResolved[900],

  popover: NEUTRAL_WHITE,
  'popover-foreground': neutralResolved[900],

  primary: fjordScale[500],
  'primary-foreground': NEUTRAL_WHITE,
  'primary-hover': fjordScale[400],
  'primary-active': fjordScale[600],

  secondary: neutralResolved[100],
  'secondary-foreground': neutralResolved[700],

  muted: neutralResolved[100],
  'muted-foreground': neutralResolved[600],

  accent: fjordScale[50],
  'accent-foreground': fjordScale[600],

  destructive: ironScale[500],
  'destructive-foreground': NEUTRAL_WHITE,
  'destructive-hover': ironScale[400],
  'destructive-active': ironScale[600],

  border: neutralResolved[400],
  input: neutralResolved[400],
  ring: fjordScale[500],

  // 可选 status（Alert/Tag；不进 Button 主轴）
  success: tundraScale[500],
  'success-foreground': NEUTRAL_WHITE,
  warning: ochreScale[500],
  'warning-foreground': NEUTRAL_WHITE,
  info: arcticScale[500],
  'info-foreground': NEUTRAL_WHITE,

  overlay: NEUTRAL_BLACK,
  scrim: NEUTRAL_BLACK,
  transparent: 'transparent',

  ...lightShadowVars,
};

/** 嵌套视图（文档 / 结构对照） */
export const lightTheme = {
  color: {
    background: lightColorVars.background,
    foreground: lightColorVars.foreground,
    card: lightColorVars.card,
    'card-foreground': lightColorVars['card-foreground'],
    popover: lightColorVars.popover,
    'popover-foreground': lightColorVars['popover-foreground'],
    primary: lightColorVars.primary,
    'primary-foreground': lightColorVars['primary-foreground'],
    secondary: lightColorVars.secondary,
    'secondary-foreground': lightColorVars['secondary-foreground'],
    muted: lightColorVars.muted,
    'muted-foreground': lightColorVars['muted-foreground'],
    accent: lightColorVars.accent,
    'accent-foreground': lightColorVars['accent-foreground'],
    destructive: lightColorVars.destructive,
    'destructive-foreground': lightColorVars['destructive-foreground'],
    border: lightColorVars.border,
    input: lightColorVars.input,
    ring: lightColorVars.ring,
  },
} as const;
