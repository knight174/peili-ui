import type { PopupPlacement } from '../props';

export interface PositionResult {
  top: number;
  left: number;
  placement: PopupPlacement;
}

const FLIP_MAP: Record<PopupPlacement, PopupPlacement> = {
  top: 'bottom',
  'top-start': 'bottom-start',
  'top-end': 'bottom-end',
  bottom: 'top',
  'bottom-start': 'top-start',
  'bottom-end': 'top-end',
  left: 'right',
  'left-start': 'right-start',
  'left-end': 'right-end',
  right: 'left',
  'right-start': 'left-start',
  'right-end': 'left-end',
};

function rawPosition(
  trigger: DOMRect,
  content: { width: number; height: number },
  placement: PopupPlacement,
  offset: number,
): { top: number; left: number } {
  const { width: tw, height: th, top: tt, left: tl } = trigger;
  const { width: cw, height: ch } = content;

  switch (placement) {
    case 'top':
      return { top: tt - ch - offset, left: tl + (tw - cw) / 2 };
    case 'top-start':
      return { top: tt - ch - offset, left: tl };
    case 'top-end':
      return { top: tt - ch - offset, left: tl + tw - cw };
    case 'bottom':
      return { top: tt + th + offset, left: tl + (tw - cw) / 2 };
    case 'bottom-start':
      return { top: tt + th + offset, left: tl };
    case 'bottom-end':
      return { top: tt + th + offset, left: tl + tw - cw };
    case 'left':
      return { top: tt + (th - ch) / 2, left: tl - cw - offset };
    case 'left-start':
      return { top: tt, left: tl - cw - offset };
    case 'left-end':
      return { top: tt + th - ch, left: tl - cw - offset };
    case 'right':
      return { top: tt + (th - ch) / 2, left: tl + tw + offset };
    case 'right-start':
      return { top: tt, left: tl + tw + offset };
    case 'right-end':
      return { top: tt + th - ch, left: tl + tw + offset };
    default:
      return { top: tt + th + offset, left: tl };
  }
}

function overflowAmount(
  pos: { top: number; left: number },
  content: { width: number; height: number },
) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const topOverflow = Math.max(0, -pos.top);
  const leftOverflow = Math.max(0, -pos.left);
  const bottomOverflow = Math.max(0, pos.top + content.height - vh);
  const rightOverflow = Math.max(0, pos.left + content.width - vw);
  return topOverflow + leftOverflow + bottomOverflow + rightOverflow;
}

/** 计算弹出层位置，支持边界翻转 */
export function computePosition(
  trigger: DOMRect,
  content: { width: number; height: number },
  placement: PopupPlacement,
  offset: number,
  flip: boolean,
): PositionResult {
  let nextPlacement = placement;
  let pos = rawPosition(trigger, content, nextPlacement, offset);

  if (flip) {
    const currentOverflow = overflowAmount(pos, content);
    if (currentOverflow > 0) {
      const flipped = FLIP_MAP[nextPlacement];
      const flippedPos = rawPosition(trigger, content, flipped, offset);
      const flippedOverflow = overflowAmount(flippedPos, content);
      // 仅当翻转后更合适时才切换
      if (flippedOverflow < currentOverflow) {
        nextPlacement = flipped;
        pos = flippedPos;
      }
    }
  }

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxLeft = Math.max(8, vw - content.width - 8);
  const maxTop = Math.max(8, vh - content.height - 8);
  const left = Math.min(Math.max(8, pos.left), maxLeft);
  const top = Math.min(Math.max(8, pos.top), maxTop);

  return { top, left, placement: nextPlacement };
}
