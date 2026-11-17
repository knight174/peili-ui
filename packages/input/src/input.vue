<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  defaultInputProps,
  InputProps,
  InputEmits,
  InputExpose,
  InputSlots,
} from './props';

defineOptions({
  name: 'PlInput',
});

const props = withDefaults(
  defineProps<InputProps>(),
  defaultInputProps(),
);

const emit = defineEmits<InputEmits>();

defineSlots<InputSlots>();

const inputRef = ref<HTMLInputElement>();

const classes = computed(() => {
  const result = [`pl-input--${props.size}`];
  if (props.disabled) {
    result.push('pl-input--disabled');
  }
  if (props.readonly) {
    result.push('pl-input--readonly');
  }
  return result;
});

const showClear = computed(
  () => props.clearable && !!props.modelValue && !props.disabled && !props.readonly,
);

function updateValue(value: string) {
  emit('update:modelValue', value);
  emit('input', value);
}

function onInput(e: Event) {
  updateValue((e.target as HTMLInputElement).value);
}

function onChange(e: Event) {
  emit('change', (e.target as HTMLInputElement).value);
}

function onFocus(e: FocusEvent) {
  emit('focus', e);
}

function onBlur(e: FocusEvent) {
  emit('blur', e);
}

function focus() {
  inputRef.value?.focus();
}

function blur() {
  inputRef.value?.blur();
}

function clear() {
  updateValue('');
  emit('clear');
  focus();
}

defineExpose<InputExpose>({
  focus,
  blur,
  clear,
});
</script>

<template>
  <div class="pl-input" :class="classes">
    <span v-if="$slots.prefix" class="pl-input__prefix">
      <slot name="prefix" />
    </span>
    <input
      ref="inputRef"
      class="pl-input__inner"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      @input="onInput"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    >
    <span v-if="showClear || $slots.suffix" class="pl-input__suffix">
      <button
        v-if="showClear"
        type="button"
        class="pl-input__clear"
        tabindex="-1"
        @click="clear"
      >
        ×
      </button>
      <slot name="suffix" />
    </span>
  </div>
</template>
