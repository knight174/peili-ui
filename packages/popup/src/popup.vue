<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue';
import {
  defaultPopupProps,
  PopupEmits,
  PopupExpose,
  PopupProps,
  PopupSlots,
} from './props';
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
const positioned = ref(false);
const contentStyle = ref<{ [key: string]: string }>({
  position: 'fixed',
  top: '0',
  left: '0',
  visibility: 'hidden',
});

let openTimer: number | undefined;
let closeTimer: number | undefined;

/** 未传入 visible 时走非受控；传入后走受控 */
const isControlled = computed(() => props.visible !== undefined);

const realVisible = computed(() => (
  isControlled.value ? !!props.visible : uncontrolledVisible.value
));

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
  const needDelay = props.trigger === 'hover' || props.trigger === 'focus';
  if (needDelay && props.openDelay > 0) {
    openTimer = window.setTimeout(() => setVisible(true), props.openDelay);
    return;
  }
  setVisible(true);
}

function close() {
  clearTimers();
  // hover 移到 Teleport 内容区时，至少保留一小段延迟，避免立刻关闭
  const delay = props.trigger === 'hover'
    ? Math.max(props.closeDelay, 50)
    : 0;
  if (delay > 0) {
    closeTimer = window.setTimeout(() => setVisible(false), delay);
    return;
  }
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
    return;
  }

  const triggerRect = referenceEl.getBoundingClientRect();

  // matchTriggerWidth 时先写入宽度，再量高度，避免换行导致高度不准
  if (props.matchTriggerWidth) {
    contentEl.style.width = `${triggerRect.width}px`;
  }

  const contentRect = {
    width: props.matchTriggerWidth ? triggerRect.width : contentEl.offsetWidth,
    height: contentEl.offsetHeight,
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
    zIndex: String(props.zIndex),
    visibility: 'visible',
    ...(props.matchTriggerWidth ? { width: `${triggerRect.width}px` } : {}),
  };
  positioned.value = true;
}

async function syncPosition() {
  positioned.value = false;
  contentStyle.value = {
    ...contentStyle.value,
    visibility: 'hidden',
  };
  await nextTick();
  updatePosition();
  // 过渡开始后再校准一次，避免内容尺寸变化
  requestAnimationFrame(() => updatePosition());
}

function onDocumentClick(e: MouseEvent) {
  if (!realVisible.value || props.trigger === 'manual') {
    return;
  }
  const target = e.target as Node;
  if (referenceRef.value?.contains(target) || contentRef.value?.contains(target)) {
    return;
  }
  setVisible(false);
}

function onReferenceClick() {
  if (props.trigger === 'click') {
    toggle();
  }
}

function onReferenceMouseEnter() {
  if (props.trigger === 'hover') {
    open();
  }
}

function onReferenceMouseLeave(e: MouseEvent) {
  if (props.trigger !== 'hover') {
    return;
  }
  const next = e.relatedTarget as Node | null;
  if (next && contentRef.value?.contains(next)) {
    return;
  }
  close();
}

function onContentMouseEnter() {
  if (props.trigger === 'hover') {
    clearTimers();
  }
}

function onContentMouseLeave(e: MouseEvent) {
  if (props.trigger !== 'hover') {
    return;
  }
  const next = e.relatedTarget as Node | null;
  if (next && referenceRef.value?.contains(next)) {
    return;
  }
  close();
}

function onReferenceFocus() {
  if (props.trigger === 'focus') {
    open();
  }
}

function onReferenceBlur(e: FocusEvent) {
  if (props.trigger !== 'focus') {
    return;
  }
  const next = e.relatedTarget as Node | null;
  if (next && (referenceRef.value?.contains(next) || contentRef.value?.contains(next))) {
    return;
  }
  // 内容区点击时 relatedTarget 可能为空，延迟判断
  setTimeout(() => {
    const active = document.activeElement;
    if (
      active
      && (referenceRef.value?.contains(active) || contentRef.value?.contains(active))
    ) {
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
    syncPosition();
  } else {
    positioned.value = false;
    clearTimers();
  }
});

onMounted(() => {
  document.addEventListener('mousedown', onDocumentClick);
  window.addEventListener('resize', onScrollOrResize);
  window.addEventListener('scroll', onScrollOrResize, true);
});

onBeforeUnmount(() => {
  clearTimers();
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
        :class="[
          `pl-popup--${resolvedPlacement}`,
          { 'pl-popup--ready': positioned },
        ]"
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
