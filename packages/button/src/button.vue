<script setup lang="ts">
import { computed } from 'vue';
import { defaultButtonProps, ButtonProps } from './button';

const props = withDefaults(
  defineProps<ButtonProps>(),
  defaultButtonProps(),
);

const classes = computed(() => {
  const result: string[] = [];
  if (props.type) {
    result.push(`pl-button--${props.type}`);
  }

  if (props.plain) {
    result.push('pl-button--plain');
  }

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
  >
    <slot />
  </button>
</template>
