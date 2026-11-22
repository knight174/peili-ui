import { generateColorScale } from '../../generators/generateColorScale';
import {
  fjordScale,
  ironScale,
  ochreScale,
  tundraScale,
  arcticScale,
  neutralScale,
  NEUTRAL_WHITE,
  NEUTRAL_BLACK,
} from '../primitive/palette';
import { attachColorScale } from './attachScale';

/** 暗色主色阶：以偏亮的 step 为 500 重新 OKLCH 展开 */
const darkPrimary = generateColorScale(fjordScale[400], { palette: 'fjord' });
const darkSuccess = generateColorScale(tundraScale[400], { palette: 'tundra' });
const darkWarning = generateColorScale(ochreScale[400], { palette: 'ochre' });
const darkDanger = generateColorScale(ironScale[400], { palette: 'iron' });
const darkInfo = generateColorScale(arcticScale[400], { palette: 'arctic' });
const darkNeutral = generateColorScale(neutralScale[400], { palette: 'neutral' });

/** Dark theme — 独立映射；色阶预展开 */
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

  ...attachColorScale('color-neutral', darkNeutral),
  'color-neutral-foreground': NEUTRAL_BLACK,
  'color-neutral-bg': darkNeutral[800],
  'color-neutral-border': darkNeutral[600],

  'color-text-primary': '#F7F7F5',
  'color-text-secondary': '#C8CAC6',
  'color-text-tertiary': '#9A9D99',
  'color-text-placeholder': '#6F7370',
  'color-text-disabled': '#555955',
  'color-text-inverse': NEUTRAL_BLACK,
  'color-text-link': fjordScale[300],

  'color-bg-page': '#121110',
  'color-bg-surface': '#1C1B1A',
  'color-bg-elevated': '#2A2D2B',
  'color-bg-muted': '#2A2D2B',
  'color-bg-subtle': '#1C1B1A',
  'color-bg-hover': '#2A2D2B',
  'color-bg-active': '#3F4340',
  'color-bg-selected': fjordScale[900],
  'color-bg-disabled': '#2A2D2B',

  'color-border-default': '#3F4340',
  'color-border-muted': '#2A2D2B',
  'color-border-strong': '#555955',
  'color-border-focus': darkPrimary[500],
  'color-border-disabled': '#3F4340',

  'color-overlay': NEUTRAL_BLACK,
  'color-scrim': NEUTRAL_BLACK,
  'color-transparent': 'transparent',
  'color-white': NEUTRAL_WHITE,
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
