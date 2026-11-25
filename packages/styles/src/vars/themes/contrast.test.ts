import { describe, expect, it } from 'vitest';
import { wcagLuminance } from 'culori';
import { lightColorVars } from './light';
import { darkColorVars } from './dark';

function contrastRatio(foreground: string, background: string): number {
  const l1 = wcagLuminance(foreground) ?? 0;
  const l2 = wcagLuminance(background) ?? 0;
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function expectPair(
  vars: Record<string, string>,
  fg: string,
  bg: string,
  min: number,
) {
  expect(contrastRatio(vars[fg], vars[bg])).toBeGreaterThanOrEqual(min);
}

describe('theme WCAG AA contrast (shadcn pairs)', () => {
  describe('light', () => {
    it('foreground pairs ≥ 4.5:1 on their surfaces', () => {
      const v = lightColorVars;
      expectPair(v, 'foreground', 'background', 4.5);
      expectPair(v, 'card-foreground', 'card', 4.5);
      expectPair(v, 'popover-foreground', 'popover', 4.5);
      expectPair(v, 'primary-foreground', 'primary', 4.5);
      expectPair(v, 'secondary-foreground', 'secondary', 4.5);
      expectPair(v, 'muted-foreground', 'muted', 4.5);
      expectPair(v, 'destructive-foreground', 'destructive', 4.5);
    });

    it('border / input / ring ≥ 3:1 on background', () => {
      const v = lightColorVars;
      expectPair(v, 'border', 'background', 3);
      expectPair(v, 'input', 'background', 3);
      expectPair(v, 'ring', 'background', 3);
    });
  });

  describe('dark', () => {
    it('foreground pairs ≥ 4.5:1 on their surfaces', () => {
      const v = darkColorVars;
      expectPair(v, 'foreground', 'background', 4.5);
      expectPair(v, 'card-foreground', 'card', 4.5);
      expectPair(v, 'popover-foreground', 'popover', 4.5);
      expectPair(v, 'primary-foreground', 'primary', 4.5);
      expectPair(v, 'secondary-foreground', 'secondary', 4.5);
      expectPair(v, 'muted-foreground', 'muted', 4.5);
      expectPair(v, 'destructive-foreground', 'destructive', 4.5);
    });

    it('border / input ≥ 3:1 on background and card', () => {
      const v = darkColorVars;
      expectPair(v, 'border', 'background', 3);
      expectPair(v, 'border', 'card', 3);
      expectPair(v, 'input', 'background', 3);
    });

    it('popover distinct from background', () => {
      expect(darkColorVars.popover).not.toBe(darkColorVars.background);
      expect(darkColorVars.border).not.toBe(darkColorVars.popover);
    });
  });
});
