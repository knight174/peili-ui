/** 语义化 z-index 层级（与主题 CSS 变量 --pl-z-* 对齐） */
export const Z_INDEX = {
  base: 1,
  affix: 10,
  popup: 1000,
  overlay: 2000,
  tooltip: 2100,
  message: 5000,
} as const;

export type ZIndexLevel = keyof typeof Z_INDEX;

let currentZIndex = 0;

/**
 * 取下一层 z-index。
 * @param min 下限（语义底）；未传时仅在当前值上 +1
 */
export function nextZIndex(min?: number): number {
  currentZIndex = Math.max(currentZIndex + 1, min ?? currentZIndex + 1);
  return currentZIndex;
}

/** 当前已分配的最大 z-index（测试或调试用） */
export function getCurrentZIndex(): number {
  return currentZIndex;
}

/** 重置累加器（测试用） */
export function resetZIndex(value = 0): void {
  currentZIndex = value;
}
