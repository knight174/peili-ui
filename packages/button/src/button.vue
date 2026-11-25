<script setup lang="ts">
import { computed } from 'vue';
import {
  defaultButtonProps,
  ButtonProps,
  ButtonSlots,
} from './props';

const props = withDefaults(
  defineProps<ButtonProps>(),
  defaultButtonProps(),
);

defineSlots<ButtonSlots>();

const classes = computed(() => {
  const result = [`pl-button--${props.variant}`];
  if (props.disabled) {
    result.push('pl-button--disabled');
  }
  return result;
});
</script>

<template>
  <button
    class="pl-button"
    :class="classes"
    :disabled="disabled"
    :aria-disabled="disabled || undefined"
  >
    <slot />
  </button>
</template>
