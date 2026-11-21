<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue';
import {
  defaultOverlayProps,
  OverlayEmits,
  OverlayProps,
  OverlaySlots,
} from './props';
import { lockBodyScroll, unlockBodyScroll } from './scrollLock';

defineOptions({
  name: 'PlOverlay',
});

const props = withDefaults(
  defineProps<OverlayProps>(),
  defaultOverlayProps(),
);

const emit = defineEmits<OverlayEmits>();

defineSlots<OverlaySlots>();

let lockedByThis = false;

function lock() {
  if (lockedByThis) {
    return;
  }
  lockBodyScroll();
  lockedByThis = true;
}

function unlock() {
  if (!lockedByThis) {
    return;
  }
  unlockBodyScroll();
  lockedByThis = false;
}

function onClick() {
  emit('click');
  if (props.closeOnClick) {
    emit('update:modelValue', false);
  }
}

watch(
  () => props.modelValue,
  (visible) => {
    if (visible) {
      lock();
    } else {
      unlock();
    }
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  unlock();
});
</script>

<template>
  <Teleport to="body" :disabled="!teleported">
    <Transition :name="transition">
      <div
        v-show="modelValue"
        class="pl-overlay"
        :class="overlayClass"
        :style="{ zIndex }"
        @click.self="onClick"
      >
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>
