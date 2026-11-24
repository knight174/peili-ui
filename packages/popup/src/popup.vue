<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue';
import { nextZIndex, pushOverlayLayer, Z_INDEX } from '@peili-ui/shared';
import {
  defaultPopupProps,
  PopupEmits,
  PopupExpose,
  PopupProps,
  PopupSlots,
} from './props';
import type { PopupTrigger } from './props';
import { computePosition } from './utils/placement';

defineOptions({
  name: 'PlPopup',
});

const props = withDefaults(
  defineProps<PopupProps>(),
  defaultPopupProps(),
);

const emit = defineEmits<PopupEmits>();

defineSlots<PopupSlots>();

const referenceRef = ref<HTMLElement>();
const contentRef = ref<HTMLElement>();
const uncontrolledVisible = ref(false);
const resolvedPlacement = ref(props.placement);
const activeZIndex = ref(props.zIndex ?? props.zIndexFloor ?? Z_INDEX.popup);
const contentStyle = ref<{ [key: string]: string }>({
  position: 'fixed',
  top: '-9999px',
  left: '-9999px',
});

let openTimer: number | undefined;
let closeTimer: number | undefined;
let popLayer: (() => void) | undefined;

/** 未传入 visible 时走非受控；传入后走受控 */
const isControlled = computed(() => props.visible !== undefined);

const realVisible = computed(() => (
  isControlled.value ? !!props.visible : uncontrolledVisible.value
));

const triggers = computed(() => {
  const value = props.trigger;
  return (Array.isArray(value) ? value : [value]) as PopupTrigger[];
});

function hasTrigger(type: PopupTrigger) {
  return triggers.value.includes(type);
}

function clearTimers() {
  if (openTimer) {
    clearTimeout(openTimer);
    openTimer = undefined;
  }
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = undefined;
  }
}

function setVisible(next: boolean) {
  if (props.disabled || realVisible.value === next) {
    return;
  }
  if (!isControlled.value) {
    uncontrolledVisible.value = next;
  }
  emit('update:visible', next);
}

function open() {
  clearTimers();
  const needDelay = hasTrigger('hover') || hasTrigger('focus');
  if (needDelay && props.openDelay > 0) {
    openTimer = window.setTimeout(() => setVisible(true), props.openDelay);
    return;
  }
  setVisible(true);
}

function close() {
  clearTimers();
  // hover 移到 Teleport 内容区时，至少保留一小段延迟，避免立刻关闭
  const delay = hasTrigger('hover')
    ? Math.max(props.closeDelay, 50)
    : 0;
  if (delay > 0) {
    closeTimer = window.setTimeout(() => setVisible(false), delay);
    return;
  }
  setVisible(false);
}

function dismiss() {
  clearTimers();
  setVisible(false);
}

function toggle() {
  if (realVisible.value) {
    close();
  } else {
    open();
  }
}

function updatePosition() {
  const referenceEl = referenceRef.value;
  const contentEl = contentRef.value;
  if (!referenceEl || !contentEl || !realVisible.value) {
    return false;
  }

  const triggerRect = referenceEl.getBoundingClientRect();

  // matchTriggerWidth 时先写入宽度，再量高度，避免换行导致高度不准
  if (props.matchTriggerWidth) {
    contentEl.style.width = `${triggerRect.width}px`;
  }

  const contentRect = {
    width: props.matchTriggerWidth ? triggerRect.width : Math.max(contentEl.offsetWidth, 1),
    height: Math.max(contentEl.offsetHeight, 1),
  };
  const result = computePosition(
    triggerRect,
    contentRect,
    props.placement,
    props.offset,
    props.flip,
  );

  resolvedPlacement.value = result.placement;
  contentStyle.value = {
    position: 'fixed',
    top: `${result.top}px`,
    left: `${result.left}px`,
    zIndex: String(activeZIndex.value),
    ...(props.matchTriggerWidth ? { width: `${triggerRect.width}px` } : {}),
  };
  return true;
}

function resolveZIndex() {
  activeZIndex.value = props.zIndex ?? nextZIndex(props.zIndexFloor ?? Z_INDEX.popup);
}

async function syncPosition() {
  // 先放到视口外，避免定位完成前闪到 (0,0)
  contentStyle.value = {
    position: 'fixed',
    top: '-9999px',
    left: '-9999px',
    zIndex: String(activeZIndex.value),
  };
  await nextTick();
  updatePosition();
  requestAnimationFrame(() => {
    updatePosition();
    requestAnimationFrame(() => updatePosition());
  });
}

function releaseLayer() {
  popLayer?.();
  popLayer = undefined;
}

function syncLayer(visible: boolean) {
  releaseLayer();
  if (!visible || hasTrigger('manual')) {
    return;
  }
  popLayer = pushOverlayLayer({
    kind: 'popup',
    dismiss,
    contains: (node) => {
      if (!node) {
        return false;
      }
      return !!(
        referenceRef.value?.contains(node)
        || contentRef.value?.contains(node)
      );
    },
    getRoot: () => contentRef.value,
  });
}

function onDocumentClick(e: MouseEvent) {
  // 仅 click 触发需要“点外部关闭”；hover/focus 走自身离开逻辑
  if (!realVisible.value || !hasTrigger('click')) {
    return;
  }
  const target = e.target as Node;
  if (referenceRef.value?.contains(target) || contentRef.value?.contains(target)) {
    return;
  }
  setVisible(false);
}

function onReferenceClick() {
  if (hasTrigger('click')) {
    toggle();
  }
}

function onReferenceMouseEnter() {
  if (hasTrigger('hover')) {
    open();
  }
}

function onReferenceMouseLeave(e: MouseEvent) {
  if (!hasTrigger('hover')) {
    return;
  }
  const next = e.relatedTarget as Node | null;
  if (next && contentRef.value?.contains(next)) {
    return;
  }
  close();
}

function onContentMouseEnter() {
  if (hasTrigger('hover')) {
    clearTimers();
  }
}

function onContentMouseLeave(e: MouseEvent) {
  if (!hasTrigger('hover')) {
    return;
  }
  const next = e.relatedTarget as Node | null;
  if (next && referenceRef.value?.contains(next)) {
    return;
  }
  close();
}

function onReferenceFocus() {
  if (hasTrigger('focus')) {
    open();
  }
}

function onReferenceBlur(e: FocusEvent) {
  if (!hasTrigger('focus')) {
    return;
  }
  const next = e.relatedTarget as Node | null;
  if (next && (referenceRef.value?.contains(next) || contentRef.value?.contains(next))) {
    return;
  }
  setTimeout(() => {
    const active = document.activeElement;
    if (
      active
      && (referenceRef.value?.contains(active) || contentRef.value?.contains(active))
    ) {
      return;
    }
    // hover 仍在触发器上时勿因失焦关掉（hover+focus 组合）
    if (hasTrigger('hover') && referenceRef.value?.matches(':hover')) {
      return;
    }
    setVisible(false);
  }, 0);
}

function onScrollOrResize() {
  if (realVisible.value) {
    updatePosition();
  }
}

function onAfterEnter() {
  updatePosition();
  emit('after-enter');
}

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled && realVisible.value) {
      setVisible(false);
    }
  },
);

watch(
  () => props.placement,
  () => {
    if (realVisible.value) {
      updatePosition();
    }
  },
);

watch(realVisible, (val) => {
  if (val) {
    resolveZIndex();
    syncLayer(true);
    syncPosition();
  } else {
    clearTimers();
    releaseLayer();
  }
});

onMounted(() => {
  document.addEventListener('mousedown', onDocumentClick);
  window.addEventListener('resize', onScrollOrResize);
  window.addEventListener('scroll', onScrollOrResize, true);
  if (realVisible.value) {
    resolveZIndex();
    syncLayer(true);
    syncPosition();
  }
});

onBeforeUnmount(() => {
  clearTimers();
  releaseLayer();
  document.removeEventListener('mousedown', onDocumentClick);
  window.removeEventListener('resize', onScrollOrResize);
  window.removeEventListener('scroll', onScrollOrResize, true);
});

defineExpose<PopupExpose>({
  updatePosition,
  open: () => setVisible(true),
  close: () => setVisible(false),
});
</script>

<template>
  <span
    ref="referenceRef"
    class="pl-popup__reference"
    @click="onReferenceClick"
    @mouseenter="onReferenceMouseEnter"
    @mouseleave="onReferenceMouseLeave"
    @focusin="onReferenceFocus"
    @focusout="onReferenceBlur"
  >
    <slot name="reference" />
  </span>

  <Teleport to="body" :disabled="!teleported">
    <Transition
      :name="transition"
      @after-enter="onAfterEnter"
      @after-leave="emit('after-leave')"
    >
      <div
        v-if="destroyOnClose ? realVisible : true"
        v-show="realVisible"
        ref="contentRef"
        class="pl-popup"
        :class="[`pl-popup--${resolvedPlacement}`]"
        :style="contentStyle"
        @mouseenter="onContentMouseEnter"
        @mouseleave="onContentMouseLeave"
      >
        <div v-if="showArrow" class="pl-popup__arrow" />
        <div class="pl-popup__content">
          <slot name="content" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
