<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue';
import { PlOverlay } from '@peili-ui/overlay';
import {
  defaultDrawerProps,
  DrawerEmits,
  DrawerExpose,
  DrawerProps,
  DrawerSlots,
} from './props';

defineOptions({
  name: 'PlDrawer',
});

const props = withDefaults(
  defineProps<DrawerProps>(),
  defaultDrawerProps(),
);

const emit = defineEmits<DrawerEmits>();

defineSlots<DrawerSlots>();

const sizeValue = computed(() => (
  typeof props.size === 'number' ? `${props.size}px` : props.size
));

const panelStyle = computed(() => {
  if (props.direction === 'ltr' || props.direction === 'rtl') {
    return { width: sizeValue.value };
  }
  return { height: sizeValue.value };
});

function open() {
  emit('update:modelValue', true);
}

function close() {
  emit('update:modelValue', false);
}

function onOverlayUpdate(visible: boolean) {
  emit('update:modelValue', visible);
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue) {
    close();
  }
}

watch(
  () => props.modelValue,
  (val, oldVal) => {
    if (val === oldVal) {
      return;
    }
    if (val) {
      emit('open');
      document.addEventListener('keydown', onKeydown);
    } else {
      emit('close');
      document.removeEventListener('keydown', onKeydown);
    }
  },
);

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown);
});

defineExpose<DrawerExpose>({
  open,
  close,
});
</script>

<template>
  <PlOverlay
    :overlay-class="['pl-drawer-overlay', `pl-drawer-overlay--${direction}`].join(' ')"
    :model-value="modelValue"
    :close-on-click="closeOnClickModal"
    :z-index="zIndex"
    @update:model-value="onOverlayUpdate"
  >
    <div
      class="pl-drawer"
      :class="`pl-drawer--${direction}`"
      role="dialog"
      aria-modal="true"
      :style="panelStyle"
      @click.stop
    >
      <div class="pl-drawer__header">
        <slot name="header">
          <span class="pl-drawer__title">{{ title }}</span>
        </slot>
        <button
          v-if="showClose"
          type="button"
          class="pl-drawer__close"
          aria-label="close"
          @click="close"
        >
          ×
        </button>
      </div>
      <div class="pl-drawer__body">
        <slot />
      </div>
      <div v-if="$slots.footer" class="pl-drawer__footer">
        <slot name="footer" />
      </div>
    </div>
  </PlOverlay>
</template>
