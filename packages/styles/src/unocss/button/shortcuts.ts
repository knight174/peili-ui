// @unocss-include
import { StaticShortcut, DynamicShortcut } from 'unocss';
import { Theme } from 'unocss/preset-mini';
import { CSSProperties } from 'vue';
import { cssVarToRgba, getCssVar } from '../../utils';
import { cssVarToShortcuts, stylesToShortcuts } from '../utils';
import { ButtonCssVarsConfig, ThemeCssVarsConfig } from '../../vars';

function buttonTypeStyle(type: string) {
  return cssVarToShortcuts<ButtonCssVarsConfig>(
    {
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('color-reverse'),
      'button-bg-color': cssVarToRgba(`color-${type}`),
      'button-border-color': cssVarToRgba(`color-${type}`),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-reverse'),
      'button-hover-bg-color': cssVarToRgba(`color-${type}-light-3`),
      'button-hover-border-color': cssVarToRgba(`color-${type}-light-3`),
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('color-reverse'),
      'button-active-bg-color': cssVarToRgba(`color-${type}-dark-2`),
      'button-active-border-color': cssVarToRgba(`color-${type}-dark-2`),
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-reverse'),
      'button-disabled-bg-color': cssVarToRgba(`color-${type}-light-5`),
      'button-disabled-border-color': cssVarToRgba(`color-${type}-light-5`),
    },
    '[&.pl-button]',
  );
}

function buttonPlainStyle(type: string) {
  return cssVarToShortcuts<ButtonCssVarsConfig>(
    {
      'button-color': cssVarToRgba(`color-${type}`),
      'button-bg-color': cssVarToRgba(`color-${type}-light-9`),
      'button-border-color': cssVarToRgba(`color-${type}-light-5`),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-reverse'),
      'button-hover-bg-color': cssVarToRgba(`color-${type}`),
      'button-hover-border-color': cssVarToRgba(`color-${type}`),
      'button-disabled-color': cssVarToRgba(`color-${type}-light-5`),
      'button-disabled-bg-color': cssVarToRgba(`color-${type}-light-9`),
      'button-disabled-border-color': cssVarToRgba(`color-${type}-light-8`),
    },
    `[&.pl-button.pl-button--${type}]`,
  );
}

const disabledStyle: CSSProperties = {
  color: getCssVar<ButtonCssVarsConfig>('button-disabled-color'),
  'background-color': getCssVar<ButtonCssVarsConfig>('button-disabled-bg-color'),
  'border-color': getCssVar<ButtonCssVarsConfig>('button-disabled-border-color'),
  cursor: 'not-allowed',
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

  ['pl-button--primary', `${buttonTypeStyle('primary')}`],
  ['pl-button--success', `${buttonTypeStyle('success')}`],
  ['pl-button--warning', `${buttonTypeStyle('warning')}`],
  ['pl-button--danger', `${buttonTypeStyle('danger')}`],
  ['pl-button--info', `${buttonTypeStyle('info')}`],

  [
    'pl-button--plain',
    `
  ${cssVarToShortcuts<ButtonCssVarsConfig>(
    {
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
      'button-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-card'),
      'button-hover-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
    },
    '[&.pl-button]',
  )}
  ${buttonPlainStyle('primary')}
  ${buttonPlainStyle('success')}
  ${buttonPlainStyle('warning')}
  ${buttonPlainStyle('danger')}
  ${buttonPlainStyle('info')}
  `,
  ],
];
