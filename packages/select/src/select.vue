<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import {
  defaultSelectProps,
  SelectProps,
  SelectEmits,
  SelectExpose,
  SelectOption,
  SelectValue,
} from './props';

defineOptions({
  name: 'PlSelect',
});

const props = withDefaults(
  defineProps<SelectProps>(),
  defaultSelectProps(),
);

const emit = defineEmits<SelectEmits>();

const rootRef = ref<HTMLElement>();
const visible = ref(false);

const classes = computed(() => {
  const result = [`pl-select--${props.size}`];
  if (props.disabled) {
    result.push('pl-select--disabled');
  }
  if (visible.value) {
    result.push('pl-select--open');
  }
  return result;
});

const selectedOption = computed(() => props.options.find(item => item.value === props.modelValue));

const displayLabel = computed(() => selectedOption.value?.label ?? '');

const showClear = computed(
  () => props.clearable
    && props.modelValue !== null
    && props.modelValue !== undefined
    && props.modelValue !== ''
    && !props.disabled,
);

function setVisible(next: boolean) {
  if (props.disabled || visible.value === next) {
    return;
  }
  visible.value = next;
  emit('visible-change', next);
}

function toggle() {
  if (props.disabled) {
    return;
  }
  setVisible(!visible.value);
}

function updateValue(value: SelectValue) {
  emit('update:modelValue', value);
  emit('change', value);
}

function selectOption(option: SelectOption) {
  if (option.disabled) {
    return;
  }
  updateValue(option.value);
  setVisible(false);
}

function clear(e?: MouseEvent) {
  e?.stopPropagation();
  updateValue(null);
  emit('clear');
}

function open() {
  setVisible(true);
}

function close() {
  setVisible(false);
}

function onDocumentClick(e: MouseEvent) {
  if (!rootRef.value?.contains(e.target as Node)) {
    setVisible(false);
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick);
});

defineExpose<SelectExpose>({
  open,
  close,
  clear,
});
</script>

<template>
  <div ref="rootRef" class="pl-select" :class="classes">
    <div
      class="pl-select__trigger"
      role="combobox"
      :aria-expanded="visible"
      :aria-disabled="disabled"
      tabindex="0"
      @click="toggle"
      @keydown.enter.prevent="toggle"
      @keydown.space.prevent="toggle"
      @keydown.esc.prevent="close"
    >
      <span
        class="pl-select__value"
        :class="{ 'pl-select__value--placeholder': !displayLabel }"
      >
        {{ displayLabel || placeholder }}
      </span>
      <span class="pl-select__suffix">
        <button
          v-if="showClear"
          type="button"
          class="pl-select__clear"
          tabindex="-1"
          @click="clear"
        >
          ×
        </button>
        <span class="pl-select__arrow" />
      </span>
    </div>

    <div v-show="visible" class="pl-select__dropdown" role="listbox">
      <div
        v-for="option in options"
        :key="String(option.value)"
        class="pl-select__option"
        :class="{
          'pl-select__option--selected': option.value === modelValue,
          'pl-select__option--disabled': option.disabled,
        }"
        role="option"
        :aria-selected="option.value === modelValue"
        @click.stop="selectOption(option)"
      >
        {{ option.label }}
      </div>
      <div v-if="!options.length" class="pl-select__empty">
        暂无数据
      </div>
    </div>
  </div>
</template>
