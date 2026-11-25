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
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('primary-foreground'),
      'button-bg-color': cssVarToRgba<ThemeCssVarsConfig>('primary'),
      'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('primary'),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('primary-foreground'),
      'button-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('primary-hover'),
      'button-hover-border-color': cssVarToRgba<ThemeCssVarsConfig>('primary-hover'),
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('primary-foreground'),
      'button-active-bg-color': cssVarToRgba<ThemeCssVarsConfig>('primary-active'),
      'button-active-border-color': cssVarToRgba<ThemeCssVarsConfig>('primary-active'),
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
      'button-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('muted'),
      'button-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
    }),
  ],

  [
    'pl-button--secondary',
    variantStyle({
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('secondary-foreground'),
      'button-bg-color': cssVarToRgba<ThemeCssVarsConfig>('secondary'),
      'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('accent-foreground'),
      'button-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('accent'),
      'button-hover-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('accent-foreground'),
      'button-active-bg-color': cssVarToRgba<ThemeCssVarsConfig>('accent'),
      'button-active-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
      'button-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('muted'),
      'button-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
    }),
  ],

  [
    'pl-button--destructive',
    variantStyle({
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('destructive-foreground'),
      'button-bg-color': cssVarToRgba<ThemeCssVarsConfig>('destructive'),
      'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('destructive'),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('destructive-foreground'),
      'button-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('destructive-hover'),
      'button-hover-border-color': cssVarToRgba<ThemeCssVarsConfig>('destructive-hover'),
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('destructive-foreground'),
      'button-active-bg-color': cssVarToRgba<ThemeCssVarsConfig>('destructive-active'),
      'button-active-border-color': cssVarToRgba<ThemeCssVarsConfig>('destructive-active'),
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
      'button-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('muted'),
      'button-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
    }),
  ],

  [
    'pl-button--outline',
    variantStyle({
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('foreground'),
      'button-bg-color': 'transparent',
      'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('accent-foreground'),
      'button-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('accent'),
      'button-hover-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('accent-foreground'),
      'button-active-bg-color': cssVarToRgba<ThemeCssVarsConfig>('accent'),
      'button-active-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
      'button-disabled-bg-color': 'transparent',
      'button-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('border'),
    }),
  ],

  [
    'pl-button--ghost',
    variantStyle({
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('foreground'),
      'button-bg-color': 'transparent',
      'button-border-color': 'transparent',
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('accent-foreground'),
      'button-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('accent'),
      'button-hover-border-color': 'transparent',
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('accent-foreground'),
      'button-active-bg-color': cssVarToRgba<ThemeCssVarsConfig>('accent'),
      'button-active-border-color': 'transparent',
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
      'button-disabled-bg-color': 'transparent',
      'button-disabled-border-color': 'transparent',
    }),
  ],

  [
    'pl-button--link',
    `
  ${variantStyle({
    'button-color': cssVarToRgba<ThemeCssVarsConfig>('primary'),
    'button-bg-color': 'transparent',
    'button-border-color': 'transparent',
    'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('primary-hover'),
    'button-hover-bg-color': 'transparent',
    'button-hover-border-color': 'transparent',
    'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('primary-active'),
    'button-active-bg-color': 'transparent',
    'button-active-border-color': 'transparent',
    'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('muted-foreground'),
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
