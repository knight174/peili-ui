<script setup lang="ts">
import { hello } from '@peili-ui/shared';

const props = withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: 'world!',
  },
);

function handleClick() {
  hello(props.text);
}
</script>

<template>
  <button
    class="pl-button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
