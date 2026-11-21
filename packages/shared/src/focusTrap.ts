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

function getFocusableElements(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    el => isVisible(el) && el.getAttribute('aria-hidden') !== 'true',
  );
}

export interface FocusTrap {
  activate: () => void;
  deactivate: () => void;
}

/** 创建焦点陷阱：Tab 循环限制在容器内，关闭后恢复原焦点 */
export function createFocusTrap(getContainer: () => HTMLElement | null | undefined): FocusTrap {
  let previousActive: HTMLElement | null = null;

  function onKeydown(e: KeyboardEvent) {
    if (e.key !== 'Tab') {
      return;
    }
    const container = getContainer();
    if (!container) {
      return;
    }

    const list = getFocusableElements(container);
    if (!list.length) {
      e.preventDefault();
      container.focus();
      return;
    }

    const first = list[0];
    const last = list[list.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (e.shiftKey) {
      if (active === first || !active || !container.contains(active)) {
        e.preventDefault();
        last.focus();
      }
      return;
    }

    if (active === last || !active || !container.contains(active)) {
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
    const list = getFocusableElements(container);
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
