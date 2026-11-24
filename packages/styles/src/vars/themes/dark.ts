import { generateColorScale } from '../../generators/generateColorScale';
import {
  fjordScale,
  ironScale,
  ochreScale,
  tundraScale,
  arcticScale,
  neutralResolved,
  darkNeutralScale,
  NEUTRAL_WHITE,
  NEUTRAL_BLACK,
} from '../primitive/palette';
import { attachColorScale } from './attachScale';
import { darkShadowVars } from './shadow';

/** 暗色主色阶：以偏亮的 step 为 500 重新 OKLCH 展开 */
const darkPrimary = generateColorScale(fjordScale[400], { palette: 'fjord' });
const darkSuccess = generateColorScale(tundraScale[400], { palette: 'tundra' });
const darkWarning = generateColorScale(ochreScale[400], { palette: 'ochre' });
const darkDanger = generateColorScale(ironScale[400], { palette: 'iron' });
const darkInfo = generateColorScale(arcticScale[400], { palette: 'arctic' });

/**
 * Dark theme — 独立映射。
 * text / bg / border 引用 neutralResolved（暗端阶）或 darkNeutralScale，禁止裸 hex。
 */
export const darkColorVars: Record<string, string> = {
  ...attachColorScale('color-primary', darkPrimary),
  'color-primary-hover': darkPrimary[300],
  'color-primary-active': darkPrimary[600],
  'color-primary-subtle': darkPrimary[900],
  'color-primary-foreground': NEUTRAL_BLACK,

  ...attachColorScale('color-success', darkSuccess),
  'color-success-foreground': NEUTRAL_BLACK,
  'color-success-bg': darkSuccess[900],
  'color-success-border': darkSuccess[700],

  ...attachColorScale('color-warning', darkWarning),
  'color-warning-foreground': NEUTRAL_BLACK,
  'color-warning-bg': darkWarning[900],
  'color-warning-border': darkWarning[700],

  ...attachColorScale('color-danger', darkDanger),
  'color-danger-foreground': NEUTRAL_BLACK,
  'color-danger-bg': darkDanger[900],
  'color-danger-border': darkDanger[700],

  ...attachColorScale('color-info', darkInfo),
  'color-info-foreground': NEUTRAL_BLACK,
  'color-info-bg': darkInfo[900],
  'color-info-border': darkInfo[700],

  ...attachColorScale('color-neutral', darkNeutralScale),
  'color-neutral-foreground': NEUTRAL_BLACK,
  'color-neutral-bg': darkNeutralScale[800],
  'color-neutral-border': darkNeutralScale[600],

  // text — 正文 ≥4.5:1 @ surface(900)
  'color-text-primary': neutralResolved[50],
  'color-text-secondary': neutralResolved[200],
  'color-text-tertiary': neutralResolved[400],
  'color-text-placeholder': neutralResolved[500],
  'color-text-disabled': neutralResolved[600],
  'color-text-inverse': NEUTRAL_BLACK,
  'color-text-link': fjordScale[300],

  // background — 各阶分离，避免 elevated 与 muted 同色导致边框不可见
  'color-bg-page': neutralResolved[950],
  'color-bg-surface': neutralResolved[900],
  'color-bg-elevated': neutralResolved[800],
  'color-bg-muted': neutralResolved[800],
  'color-bg-subtle': neutralResolved[900],
  'color-bg-hover': neutralResolved[800],
  'color-bg-active': neutralResolved[700],
  'color-bg-selected': fjordScale[900],
  'color-bg-disabled': neutralResolved[800],

  // border — default ≥3:1 @ surface 与 elevated
  'color-border-default': neutralResolved[400],
  'color-border-muted': neutralResolved[700],
  'color-border-strong': neutralResolved[300],
  'color-border-focus': darkPrimary[500],
  'color-border-disabled': neutralResolved[700],

  'color-overlay': NEUTRAL_BLACK,
  'color-scrim': NEUTRAL_BLACK,
  'color-transparent': 'transparent',
  'color-white': NEUTRAL_WHITE,

  ...darkShadowVars,
};

export const darkTheme = {
  color: {
    primary: darkColorVars['color-primary'],
    'primary-hover': darkColorVars['color-primary-hover'],
    'primary-active': darkColorVars['color-primary-active'],
    'primary-subtle': darkColorVars['color-primary-subtle'],
    'primary-foreground': darkColorVars['color-primary-foreground'],
    text: {
      primary: darkColorVars['color-text-primary'],
      secondary: darkColorVars['color-text-secondary'],
      tertiary: darkColorVars['color-text-tertiary'],
      disabled: darkColorVars['color-text-disabled'],
      placeholder: darkColorVars['color-text-placeholder'],
      inverse: darkColorVars['color-text-inverse'],
      link: darkColorVars['color-text-link'],
    },
    bg: {
      page: darkColorVars['color-bg-page'],
      surface: darkColorVars['color-bg-surface'],
      elevated: darkColorVars['color-bg-elevated'],
      muted: darkColorVars['color-bg-muted'],
      subtle: darkColorVars['color-bg-subtle'],
      hover: darkColorVars['color-bg-hover'],
      active: darkColorVars['color-bg-active'],
      selected: darkColorVars['color-bg-selected'],
      disabled: darkColorVars['color-bg-disabled'],
    },
    border: {
      default: darkColorVars['color-border-default'],
      muted: darkColorVars['color-border-muted'],
      strong: darkColorVars['color-border-strong'],
      focus: darkColorVars['color-border-focus'],
      disabled: darkColorVars['color-border-disabled'],
    },
  },
} as const;
