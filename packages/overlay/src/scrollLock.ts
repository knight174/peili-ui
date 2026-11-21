let lockCount = 0;
let previousOverflow = '';

/** 锁定 body 滚动（支持多层 Overlay 嵌套） */
export function lockBodyScroll() {
  if (typeof document === 'undefined') {
    return;
  }
  if (lockCount === 0) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
  lockCount += 1;
}

/** 解锁 body 滚动 */
export function unlockBodyScroll() {
  if (typeof document === 'undefined' || lockCount === 0) {
    return;
  }
  lockCount -= 1;
  if (lockCount === 0) {
    document.body.style.overflow = previousOverflow;
  }
}
