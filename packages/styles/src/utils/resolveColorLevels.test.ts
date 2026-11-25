import { describe, expect, it } from 'vitest';
import { generateCssVars, resolveColorLevelsEnabledKeys } from './cssVars';
import { themeColorLevelsEnabledKeys } from '../vars/semantic/color';

describe('resolveColorLevelsEnabledKeys', () => {
  it('theme defaults to no auto scale expansion', () => {
    expect(themeColorLevelsEnabledKeys).toEqual([]);
  });

  it('returns empty when candidate list is empty', () => {
    const keys = resolveColorLevelsEnabledKeys(
      { primary: '#245A8D', 'spacing-sm': '12px' },
      themeColorLevelsEnabledKeys,
    );
    expect(keys).toEqual([]);
  });

  it('only enables keys present in both override and candidate list', () => {
    const keys = resolveColorLevelsEnabledKeys(
      { primary: '#245A8D', 'spacing-sm': '12px' },
      ['primary', 'destructive'],
    );
    expect(keys).toEqual(['primary']);
  });

  it('generateCssVars with empty enabled keys does not invent scales', () => {
    const vars = generateCssVars(
      { primary: '#245A8D', foreground: '#111111' },
      {
        colorLevelsEnabledKeys: resolveColorLevelsEnabledKeys(
          { primary: '#245A8D', foreground: '#111111' },
          themeColorLevelsEnabledKeys,
        ),
      },
    );
    expect(vars['--pl-primary']).toBe('36, 90, 141');
    expect(vars['--pl-primary-50']).toBeUndefined();
    expect(vars['--pl-foreground-50']).toBeUndefined();
  });
});
