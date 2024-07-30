<script setup lang="ts">
import { hello } from '@peili-ui/shared';

const props = withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: 'world',
  },
);

function handleClick() {
  hello(props.text);
}
</script>

<template>
  <button
    class="peili-button text-blue ml-2px cursor-pointer"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
