// @unocss-include
import { StaticShortcut, DynamicShortcut } from 'unocss';
import { Theme } from 'unocss/preset-mini';
import { CSSProperties } from 'vue';
import { cssVarToRgba, getCssVar } from '../../utils';
import { cssVarToShortcuts, stylesToShortcuts } from '../utils';
import { ButtonCssVarsConfig, ThemeCssVarsConfig } from '../../vars';

function variantStyle(vars: Partial<Record<keyof ButtonCssVarsConfig, string>>) {
  return cssVarToShortcuts<ButtonCssVarsConfig>(vars, '[&.pl-button]');
}

const disabledStyle: CSSProperties = {
  color: getCssVar<ButtonCssVarsConfig>('button-disabled-color'),
  'background-color': getCssVar<ButtonCssVarsConfig>('button-disabled-bg-color'),
  'border-color': getCssVar<ButtonCssVarsConfig>('button-disabled-border-color'),
  cursor: 'not-allowed',
  'text-decoration': 'none',
};

export const buttonShortcuts: (StaticShortcut | DynamicShortcut<Theme>)[] = [
  [
    'pl-button',
    `
  pl-button-base
  ${stylesToShortcuts(
    {
      color: getCssVar<ButtonCssVarsConfig>('button-hover-color'),
      'background-color': getCssVar<ButtonCssVarsConfig>('button-hover-bg-color'),
      'border-color': getCssVar<ButtonCssVarsConfig>('button-hover-border-color'),
    },
    'hover',
  )}
  ${stylesToShortcuts(
    {
      color: getCssVar<ButtonCssVarsConfig>('button-active-color'),
      'background-color': getCssVar<ButtonCssVarsConfig>('button-active-bg-color'),
      'border-color': getCssVar<ButtonCssVarsConfig>('button-active-border-color'),
    },
    'active',
  )}
  `,
  ],

  [
    'pl-button--disabled',
    `
  ${stylesToShortcuts(disabledStyle, '[&.pl-button]')}
  ${stylesToShortcuts(disabledStyle, 'hover:[&.pl-button]')}
  ${stylesToShortcuts(disabledStyle, 'active:[&.pl-button]')}
  `,
  ],

  [
    'pl-button--default',
    variantStyle({
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
      'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary-hover'),
      'button-hover-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary-hover'),
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-active-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary-active'),
      'button-active-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary-active'),
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-disabled-bg-color': cssVarToRgba('color-primary-200'),
      'button-disabled-border-color': cssVarToRgba('color-primary-200'),
    }),
  ],

  [
    'pl-button--secondary',
    variantStyle({
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-secondary'),
      'button-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-surface'),
      'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-default'),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
      'button-hover-bg-color': cssVarToRgba('color-primary-50'),
      'button-hover-border-color': cssVarToRgba('color-primary-100'),
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
      'button-active-bg-color': cssVarToRgba('color-primary-50'),
      'button-active-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-placeholder'),
      'button-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-surface'),
      'button-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-muted'),
    }),
  ],

  [
    'pl-button--destructive',
    variantStyle({
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-danger'),
      'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-danger'),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-hover-bg-color': cssVarToRgba('color-danger-300'),
      'button-hover-border-color': cssVarToRgba('color-danger-300'),
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-active-bg-color': cssVarToRgba('color-danger-700'),
      'button-active-border-color': cssVarToRgba('color-danger-700'),
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-disabled-bg-color': cssVarToRgba('color-danger-200'),
      'button-disabled-border-color': cssVarToRgba('color-danger-200'),
    }),
  ],

  [
    'pl-button--outline',
    variantStyle({
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-primary'),
      'button-bg-color': 'transparent',
      'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-default'),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
      'button-hover-bg-color': cssVarToRgba('color-primary-50'),
      'button-hover-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary-active'),
      'button-active-bg-color': cssVarToRgba('color-primary-50'),
      'button-active-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary-active'),
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-placeholder'),
      'button-disabled-bg-color': 'transparent',
      'button-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-border-muted'),
    }),
  ],

  [
    'pl-button--ghost',
    variantStyle({
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-primary'),
      'button-bg-color': 'transparent',
      'button-border-color': 'transparent',
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-primary'),
      'button-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-hover'),
      'button-hover-border-color': 'transparent',
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-primary'),
      'button-active-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-active'),
      'button-active-border-color': 'transparent',
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-placeholder'),
      'button-disabled-bg-color': 'transparent',
      'button-disabled-border-color': 'transparent',
    }),
  ],

  [
    'pl-button--link',
    `
  ${variantStyle({
    'button-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-link'),
    'button-bg-color': 'transparent',
    'button-border-color': 'transparent',
    'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary-hover'),
    'button-hover-bg-color': 'transparent',
    'button-hover-border-color': 'transparent',
    'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary-active'),
    'button-active-bg-color': 'transparent',
    'button-active-border-color': 'transparent',
    'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-placeholder'),
    'button-disabled-bg-color': 'transparent',
    'button-disabled-border-color': 'transparent',
  })}
  ${stylesToShortcuts(
    {
      'min-height': 'auto',
      'padding-inline': '0',
      'text-decoration': 'underline',
      'text-underline-offset': '0.2em',
    },
    '[&.pl-button]',
  )}
  `,
  ],
];
