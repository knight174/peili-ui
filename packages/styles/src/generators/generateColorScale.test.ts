import { describe, expect, it } from 'vitest';
import { COLOR_SCALE_STEPS } from '../utils/colors';
import { generateColorScale, flattenColorScale } from './generateColorScale';

describe('generateColorScale', () => {
  it('emits full 50…950 steps including 950', () => {
    const scale = generateColorScale('#245A8D', { palette: 'fjord' });
    expect(Object.keys(scale).map(Number).sort((a, b) => a - b)).toEqual([...COLOR_SCALE_STEPS]);
    expect(scale[950]).toMatch(/^#[0-9a-f]{6}$/i);
  });

  it('keeps 500 close to the base hue after gamut mapping', () => {
    const base = '#245A8D';
    const scale = generateColorScale(base, { palette: 'fjord' });
    expect(scale[500].toLowerCase()).toBe(base.toLowerCase());
  });

  it('makes lighter steps lighter than darker steps', () => {
    const scale = generateColorScale('#4F7A52', { palette: 'tundra' });
    // crude luminance via hex parse
    const lum = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    expect(lum(scale[50])).toBeGreaterThan(lum(scale[500]));
    expect(lum(scale[500])).toBeGreaterThan(lum(scale[950]));
  });

  it('flattenColorScale prefixes keys', () => {
    const scale = generateColorScale('#A63C2B', { palette: 'iron' });
    const flat = flattenColorScale('palette-iron', scale);
    expect(flat['palette-iron']).toBe(scale[500]);
    expect(flat['palette-iron-50']).toBe(scale[50]);
    expect(flat['palette-iron-950']).toBe(scale[950]);
  });
});
