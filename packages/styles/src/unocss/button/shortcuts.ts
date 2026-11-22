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
      'button-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-bg-color': cssVarToRgba(`color-${type}`),
      'button-border-color': cssVarToRgba(`color-${type}`),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-hover-bg-color': cssVarToRgba(`color-${type}-300`),
      'button-hover-border-color': cssVarToRgba(`color-${type}-300`),
      'button-active-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-active-bg-color': cssVarToRgba(`color-${type}-700`),
      'button-active-border-color': cssVarToRgba(`color-${type}-700`),
      'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-disabled-bg-color': cssVarToRgba(`color-${type}-200`),
      'button-disabled-border-color': cssVarToRgba(`color-${type}-200`),
    },
    '[&.pl-button]',
  );
}

function buttonPlainStyle(type: string) {
  return cssVarToShortcuts<ButtonCssVarsConfig>(
    {
      'button-color': cssVarToRgba(`color-${type}`),
      'button-bg-color': cssVarToRgba(`color-${type}-50`),
      'button-border-color': cssVarToRgba(`color-${type}-200`),
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-text-inverse'),
      'button-hover-bg-color': cssVarToRgba(`color-${type}`),
      'button-hover-border-color': cssVarToRgba(`color-${type}`),
      'button-disabled-color': cssVarToRgba(`color-${type}-200`),
      'button-disabled-bg-color': cssVarToRgba(`color-${type}-50`),
      'button-disabled-border-color': cssVarToRgba(`color-${type}-100`),
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

const buttonTypes = ['primary', 'success', 'warning', 'danger', 'info', 'neutral'] as const;

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

  ...buttonTypes.map(
    type => [`pl-button--${type}`, `${buttonTypeStyle(type)}`] as StaticShortcut,
  ),

  [
    'pl-button--plain',
    `
  ${cssVarToShortcuts<ButtonCssVarsConfig>(
    {
      'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
      'button-hover-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg-surface'),
      'button-hover-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
    },
    '[&.pl-button]',
  )}
  ${buttonTypes.map(type => buttonPlainStyle(type)).join('\n')}
  `,
  ],
];
