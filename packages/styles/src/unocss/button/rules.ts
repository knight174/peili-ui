// @unocss-include
import { Rule } from 'unocss';
import { Theme } from 'unocss/preset-mini';
import { CSSProperties } from 'vue';
import { getCssVar } from '../../utils';
import { ButtonCssVarsConfig } from '../../vars';

export const buttonRules: Rule<Theme>[] = [
  [
    'pl-button-base',
    (<CSSProperties>{
      'box-sizing': 'border-box',
      'user-select': 'none',
      cursor: 'pointer',
      outline: 'none',
      display: 'inline-flex',
      'align-items': 'center',
      'justify-content': 'center',
      'font-weight': 'normal',
      'font-size': getCssVar<ButtonCssVarsConfig>('button-font-size'),
      'text-align': 'center',
      'line-height': getCssVar('line-height-normal'),
      color: getCssVar<ButtonCssVarsConfig>('button-color'),
      'background-color': getCssVar<ButtonCssVarsConfig>('button-bg-color'),
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': getCssVar<ButtonCssVarsConfig>('button-border-color'),
      'border-radius': getCssVar<ButtonCssVarsConfig>('button-radius'),
      'min-height': getCssVar<ButtonCssVarsConfig>('button-height'),
      'padding-inline': getCssVar<ButtonCssVarsConfig>('button-padding-x'),
      'padding-block': '0',
    }) as any,
    {
      notInSafelist: true,
    },
  ],
];
