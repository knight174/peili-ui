<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue';
import { PlOverlay } from '@peili-ui/overlay';
import {
  defaultDialogProps,
  DialogEmits,
  DialogExpose,
  DialogProps,
  DialogSlots,
} from './props';

defineOptions({
  name: 'PlDialog',
});

const props = withDefaults(
  defineProps<DialogProps>(),
  defaultDialogProps(),
);

const emit = defineEmits<DialogEmits>();

defineSlots<DialogSlots>();

const panelStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
}));

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

defineExpose<DialogExpose>({
  open,
  close,
});
</script>

<template>
  <PlOverlay
    :model-value="modelValue"
    :close-on-click="closeOnClickModal"
    :z-index="zIndex"
    @update:model-value="onOverlayUpdate"
  >
    <div class="pl-dialog" role="dialog" aria-modal="true" :style="panelStyle" @click.stop>
      <div class="pl-dialog__header">
        <slot name="header">
          <span class="pl-dialog__title">{{ title }}</span>
        </slot>
        <button
          v-if="showClose"
          type="button"
          class="pl-dialog__close"
          aria-label="close"
          @click="close"
        >
          ×
        </button>
      </div>
      <div class="pl-dialog__body">
        <slot />
      </div>
      <div v-if="$slots.footer" class="pl-dialog__footer">
        <slot name="footer" />
      </div>
    </div>
  </PlOverlay>
</template>
