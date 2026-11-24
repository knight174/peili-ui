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

describe('theme WCAG AA contrast', () => {
  describe('light', () => {
    const surface = lightColorVars['color-bg-surface'];
    const page = lightColorVars['color-bg-page'];

    it('body text ≥ 4.5:1 on surface', () => {
      expect(contrastRatio(lightColorVars['color-text-primary'], surface)).toBeGreaterThanOrEqual(4.5);
      expect(contrastRatio(lightColorVars['color-text-secondary'], surface)).toBeGreaterThanOrEqual(4.5);
      expect(contrastRatio(lightColorVars['color-text-tertiary'], surface)).toBeGreaterThanOrEqual(4.5);
    });

    it('control borders ≥ 3:1 on surface and page', () => {
      const border = lightColorVars['color-border-default'];
      const strong = lightColorVars['color-border-strong'];
      expect(contrastRatio(border, surface)).toBeGreaterThanOrEqual(3);
      expect(contrastRatio(border, page)).toBeGreaterThanOrEqual(3);
      expect(contrastRatio(strong, surface)).toBeGreaterThanOrEqual(3);
      expect(contrastRatio(strong, page)).toBeGreaterThanOrEqual(3);
    });
  });

  describe('dark', () => {
    const surface = darkColorVars['color-bg-surface'];
    const elevated = darkColorVars['color-bg-elevated'];

    it('body text ≥ 4.5:1 on surface', () => {
      expect(contrastRatio(darkColorVars['color-text-primary'], surface)).toBeGreaterThanOrEqual(4.5);
      expect(contrastRatio(darkColorVars['color-text-secondary'], surface)).toBeGreaterThanOrEqual(4.5);
      expect(contrastRatio(darkColorVars['color-text-tertiary'], surface)).toBeGreaterThanOrEqual(4.5);
    });

    it('control borders ≥ 3:1 on surface and elevated', () => {
      const border = darkColorVars['color-border-default'];
      const strong = darkColorVars['color-border-strong'];
      expect(contrastRatio(border, surface)).toBeGreaterThanOrEqual(3);
      expect(contrastRatio(border, elevated)).toBeGreaterThanOrEqual(3);
      expect(contrastRatio(strong, surface)).toBeGreaterThanOrEqual(3);
      expect(contrastRatio(strong, elevated)).toBeGreaterThanOrEqual(3);
    });

    it('elevated is distinct from page (shadow / edge readable)', () => {
      expect(darkColorVars['color-bg-elevated']).not.toBe(darkColorVars['color-bg-page']);
      expect(darkColorVars['color-border-default']).not.toBe(darkColorVars['color-bg-elevated']);
    });
  });
});
