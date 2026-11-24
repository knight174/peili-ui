const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function isVisible(el: HTMLElement) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

function collectFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    el => isVisible(el) && el.getAttribute('aria-hidden') !== 'true',
  );
}

function getFocusableElements(
  container: HTMLElement,
  extraContainers: Array<HTMLElement | null | undefined>,
) {
  const roots = [container, ...extraContainers.filter(Boolean) as HTMLElement[]];
  const unique = new Set<HTMLElement>();
  const list: HTMLElement[] = [];

  roots.forEach((root) => {
    collectFocusable(root).forEach((el) => {
      if (unique.has(el)) {
        return;
      }
      unique.add(el);
      list.push(el);
    });

    if (
      root.matches?.(FOCUSABLE_SELECTOR)
      && isVisible(root)
      && root.getAttribute('aria-hidden') !== 'true'
      && !unique.has(root)
    ) {
      unique.add(root);
      list.push(root);
    }
  });

  return list;
}

export interface FocusTrapOptions {
  /**
   * 额外纳入陷阱的容器（如 Teleport 到 body 的 popup）。
   * 用于模态内打开 Select/Popover 时 Tab 不被抢回面板。
   */
  getExtraContainers?: () => Array<HTMLElement | null | undefined>;
}

export interface FocusTrap {
  activate: () => void;
  deactivate: () => void;
}

/** 创建焦点陷阱：Tab 循环限制在容器（及额外容器）内，关闭后恢复原焦点 */
export function createFocusTrap(
  getContainer: () => HTMLElement | null | undefined,
  options?: FocusTrapOptions,
): FocusTrap {
  let previousActive: HTMLElement | null = null;

  function resolveList() {
    const container = getContainer();
    if (!container) {
      return { container: null as HTMLElement | null, list: [] as HTMLElement[] };
    }
    const extras = options?.getExtraContainers?.() ?? [];
    return {
      container,
      list: getFocusableElements(container, extras),
    };
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key !== 'Tab') {
      return;
    }
    const { container, list } = resolveList();
    if (!container) {
      return;
    }

    if (!list.length) {
      e.preventDefault();
      container.focus();
      return;
    }

    const first = list[0];
    const last = list[list.length - 1];
    const active = document.activeElement as HTMLElement | null;
    const inScope = !!(active && list.includes(active));

    if (e.shiftKey) {
      if (active === first || !inScope) {
        e.preventDefault();
        last.focus();
      }
      return;
    }

    if (active === last || !inScope) {
      e.preventDefault();
      first.focus();
    }
  }

  function activate() {
    const container = getContainer();
    if (!container) {
      return;
    }
    previousActive = document.activeElement as HTMLElement | null;
    if (!container.hasAttribute('tabindex')) {
      container.setAttribute('tabindex', '-1');
    }
    const { list } = resolveList();
    (list[0] || container).focus();
    document.addEventListener('keydown', onKeydown, true);
  }

  function deactivate() {
    document.removeEventListener('keydown', onKeydown, true);
    if (previousActive && typeof previousActive.focus === 'function') {
      previousActive.focus();
    }
    previousActive = null;
  }

  return { activate, deactivate };
}
