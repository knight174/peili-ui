<script setup lang="ts">
import { computed, ref } from 'vue';
import { PlPopup } from '@peili-ui/popup';
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

function onVisibleUpdate(next: boolean) {
  visible.value = next;
  emit('visible-change', next);
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
  visible.value = false;
  emit('visible-change', false);
}

function clear() {
  updateValue(null);
  emit('clear');
}

function open() {
  if (props.disabled || visible.value) {
    return;
  }
  visible.value = true;
  emit('visible-change', true);
}

function close() {
  if (!visible.value) {
    return;
  }
  visible.value = false;
  emit('visible-change', false);
}

defineExpose<SelectExpose>({
  open,
  close,
  clear,
});
</script>

<template>
  <div class="pl-select" :class="classes">
    <PlPopup
      :visible="visible"
      trigger="click"
      placement="bottom-start"
      :disabled="disabled"
      match-trigger-width
      :offset="4"
      @update:visible="onVisibleUpdate"
    >
      <template #reference>
        <div
          class="pl-select__trigger"
          role="combobox"
          :aria-expanded="visible"
          :aria-disabled="disabled"
          tabindex="0"
          @keydown.enter.prevent="visible ? close() : open()"
          @keydown.space.prevent="visible ? close() : open()"
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
              @click.stop="clear"
            >
              ×
            </button>
            <span class="pl-select__arrow" />
          </span>
        </div>
      </template>

      <template #content>
        <div class="pl-select__dropdown" role="listbox">
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
      </template>
    </PlPopup>
  </div>
</template>
