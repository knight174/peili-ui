import { describe, expect, it } from 'vitest';
import { generateCssVars, resolveColorLevelsEnabledKeys } from './cssVars';
import { themeColorLevelsEnabledKeys } from '../vars/semantic/color';

describe('resolveColorLevelsEnabledKeys', () => {
  it('only enables keys present in the override object', () => {
    const keys = resolveColorLevelsEnabledKeys(
      { 'color-primary': '#245A8D', 'spacing-sm': '12px' },
      themeColorLevelsEnabledKeys,
    );
    expect(keys).toEqual(['color-primary']);
  });

  it('returns empty when no brand/status keys are overridden', () => {
    const keys = resolveColorLevelsEnabledKeys(
      { 'button-radius': '4px' },
      themeColorLevelsEnabledKeys,
    );
    expect(keys).toEqual([]);
  });

  it('generateCssVars with resolved keys does not invent other brand scales', () => {
    const vars = generateCssVars(
      { 'color-primary': '#245A8D', 'color-text-primary': '#111111' },
      {
        colorLevelsEnabledKeys: resolveColorLevelsEnabledKeys(
          { 'color-primary': '#245A8D', 'color-text-primary': '#111111' },
          themeColorLevelsEnabledKeys,
        ),
      },
    );
    expect(vars['--pl-color-primary-50']).toBeTruthy();
    expect(vars['--pl-color-success-50']).toBeUndefined();
    expect(vars['--pl-color-text-primary-50']).toBeUndefined();
  });
});
