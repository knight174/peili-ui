<script setup lang="ts">
import { hello } from '@peili-ui/shared';

withDefaults(
  defineProps<{
    modelValue?: string;
  }>(),
  {
    modelValue: '',
  },
);

const emit = defineEmits<{
  (event: 'update:modelValue', val: string): void;
}>();

function handleInput(e: any) {
  const { value } = e.target;
  emit('update:modelValue', value);
  hello(value);
}
</script>

<template>
  <input
    class="peili-input"
    type="text"
    :value="modelValue"
    @input="handleInput"
  >
</template>
