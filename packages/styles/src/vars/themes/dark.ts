import {
  fjordScale,
  ironScale,
  tundraScale,
  ochreScale,
  arcticScale,
  neutralResolved,
  NEUTRAL_BLACK,
} from '../primitive/palette';
import { generateColorScale } from '../../generators/generateColorScale';
import { darkShadowVars } from './shadow';

/** 暗色 brand / destructive：以偏亮 step 为基色重展，仅取语义槽所需阶 */
const darkPrimary = generateColorScale(fjordScale[400], { palette: 'fjord' });
const darkDestructive = generateColorScale(ironScale[400], { palette: 'iron' });
const darkSuccess = generateColorScale(tundraScale[400], { palette: 'tundra' });
const darkWarning = generateColorScale(ochreScale[400], { palette: 'ochre' });
const darkInfo = generateColorScale(arcticScale[400], { palette: 'arctic' });

/**
 * Dark 语义色 — 与 Light 同名键；引用 neutralResolved / 暗色专用 brand 槽。
 */
export const darkColorVars: Record<string, string> = {
  background: neutralResolved[950],
  foreground: neutralResolved[50],

  card: neutralResolved[900],
  'card-foreground': neutralResolved[50],

  popover: neutralResolved[800],
  'popover-foreground': neutralResolved[50],

  primary: darkPrimary[500],
  'primary-foreground': NEUTRAL_BLACK,
  'primary-hover': darkPrimary[300],
  'primary-active': darkPrimary[600],

  secondary: neutralResolved[800],
  'secondary-foreground': neutralResolved[200],

  muted: neutralResolved[800],
  'muted-foreground': neutralResolved[300],

  accent: fjordScale[900],
  'accent-foreground': fjordScale[200],

  destructive: darkDestructive[500],
  'destructive-foreground': NEUTRAL_BLACK,
  'destructive-hover': darkDestructive[300],
  'destructive-active': darkDestructive[600],

  border: neutralResolved[400],
  input: neutralResolved[400],
  ring: darkPrimary[500],

  success: darkSuccess[500],
  'success-foreground': NEUTRAL_BLACK,
  warning: darkWarning[500],
  'warning-foreground': NEUTRAL_BLACK,
  info: darkInfo[500],
  'info-foreground': NEUTRAL_BLACK,

  overlay: NEUTRAL_BLACK,
  scrim: NEUTRAL_BLACK,
  transparent: 'transparent',

  ...darkShadowVars,
};

export const darkTheme = {
  color: {
    background: darkColorVars.background,
    foreground: darkColorVars.foreground,
    card: darkColorVars.card,
    'card-foreground': darkColorVars['card-foreground'],
    popover: darkColorVars.popover,
    'popover-foreground': darkColorVars['popover-foreground'],
    primary: darkColorVars.primary,
    'primary-foreground': darkColorVars['primary-foreground'],
    secondary: darkColorVars.secondary,
    'secondary-foreground': darkColorVars['secondary-foreground'],
    muted: darkColorVars.muted,
    'muted-foreground': darkColorVars['muted-foreground'],
    accent: darkColorVars.accent,
    'accent-foreground': darkColorVars['accent-foreground'],
    destructive: darkColorVars.destructive,
    'destructive-foreground': darkColorVars['destructive-foreground'],
    border: darkColorVars.border,
    input: darkColorVars.input,
    ring: darkColorVars.ring,
  },
} as const;
