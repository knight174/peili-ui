export type OverlayLayerKind = 'modal' | 'popup';

export interface OverlayLayer {
  id: symbol;
  kind: OverlayLayerKind;
  /** Esc 时关闭本层 */
  dismiss: () => void;
  /** 判断节点是否属于本层（含 Teleport 内容） */
  contains: (node: Node | null | undefined) => boolean;
  /** 本层根节点，供焦点陷阱合并可聚焦列表 */
  getRoot?: () => HTMLElement | null | undefined;
}

const stack: OverlayLayer[] = [];
let escBound = false;

function onDocumentEscape(e: KeyboardEvent) {
  if (e.key !== 'Escape' || e.defaultPrevented) {
    return;
  }
  const top = stack[stack.length - 1];
  if (!top) {
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  top.dismiss();
}

function ensureEscListener() {
  if (escBound || typeof document === 'undefined') {
    return;
  }
  document.addEventListener('keydown', onDocumentEscape, true);
  escBound = true;
}

function teardownEscListener() {
  if (!escBound || stack.length || typeof document === 'undefined') {
    return;
  }
  document.removeEventListener('keydown', onDocumentEscape, true);
  escBound = false;
}

export interface PushOverlayLayerOptions {
  kind: OverlayLayerKind;
  dismiss: () => void;
  contains: (node: Node | null | undefined) => boolean;
  getRoot?: () => HTMLElement | null | undefined;
  id?: symbol;
}

/**
 * 将浮层压入全局栈：Esc 只关最顶层；焦点陷阱可合并 popup 根节点。
 * @returns 弹出该层的清理函数
 */
export function pushOverlayLayer(options: PushOverlayLayerOptions): () => void {
  const layer: OverlayLayer = {
    id: options.id ?? Symbol(options.kind),
    kind: options.kind,
    dismiss: options.dismiss,
    contains: options.contains,
    getRoot: options.getRoot,
  };
  stack.push(layer);
  ensureEscListener();

  return () => {
    const index = stack.findIndex(item => item.id === layer.id);
    if (index >= 0) {
      stack.splice(index, 1);
    }
    teardownEscListener();
  };
}

/** 当前栈（只读，测试/调试用） */
export function getOverlayStack(): readonly OverlayLayer[] {
  return stack;
}

/** 取出栈中所有 popup 根节点（供 modal focus trap 合并） */
export function getPopupLayerRoots(): HTMLElement[] {
  return stack
    .filter(layer => layer.kind === 'popup')
    .map(layer => layer.getRoot?.())
    .filter((root): root is HTMLElement => !!root);
}

/** 测试用：清空栈并移除 Esc 监听 */
export function resetOverlayStack(): void {
  stack.length = 0;
  if (escBound && typeof document !== 'undefined') {
    document.removeEventListener('keydown', onDocumentEscape, true);
  }
  escBound = false;
}
