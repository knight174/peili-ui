import { describe, expect, it } from 'vitest';
import { generateCssVars, cssVarsToString, DEFAULT_PREFIX } from './cssVars';

describe('generateCssVars', () => {
  it('keeps flat API and emits rgb channels', () => {
    const vars = generateCssVars({
      primary: '#245A8D',
      'spacing-sm': '12px',
    });
    expect(vars['--pl-primary']).toBe('36, 90, 141');
    expect(vars['--pl-spacing-sm']).toBe('12px');
  });

  it('generates OKLCH 50…950 only for enabled keys', () => {
    const vars = generateCssVars(
      { primary: '#245A8D' },
      { colorLevelsEnabledKeys: ['primary'] },
    );
    expect(vars['--pl-primary-50']).toBeTruthy();
    expect(vars['--pl-primary-500']).toBeTruthy();
    expect(vars['--pl-primary-950']).toBeTruthy();
  });

  it('flattens nested objects without breaking prefix', () => {
    const vars = generateCssVars({
      color: {
        text: { primary: '#1C1B1A' },
        bg: { page: '#F7F7F5' },
      },
    });
    expect(vars['--pl-color-text-primary']).toBe('28, 27, 26');
    expect(vars['--pl-color-bg-page']).toBe('247, 247, 245');
  });

  it('preserves transparent', () => {
    const vars = generateCssVars({ transparent: 'transparent' });
    expect(vars['--pl-transparent']).toBe('transparent');
  });

  it('cssVarsToString wraps selector', () => {
    const css = cssVarsToString({ '--pl-x': '1' }, ':root');
    expect(css).toBe(':root{--pl-x: 1;}');
    expect(DEFAULT_PREFIX).toBe('pl-');
  });
});
