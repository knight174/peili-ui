<script setup lang="ts">
import { ref } from 'vue';
import { PlPopup } from '@peili-ui/popup';
import {
  defaultDropdownProps,
  DropdownEmits,
  DropdownOption,
  DropdownProps,
  DropdownSlots,
} from './props';

defineOptions({
  name: 'PlDropdown',
});

withDefaults(
  defineProps<DropdownProps>(),
  defaultDropdownProps(),
);

const emit = defineEmits<DropdownEmits>();

defineSlots<DropdownSlots>();

const visible = ref(false);

function onVisibleUpdate(next: boolean) {
  visible.value = next;
  emit('visible-change', next);
}

function onCommand(option: DropdownOption) {
  if (option.disabled) {
    return;
  }
  emit('command', option.value);
  if (visible.value) {
    visible.value = false;
    emit('visible-change', false);
  }
}
</script>

<template>
  <div class="pl-dropdown">
    <PlPopup
      :visible="visible"
      :trigger="trigger"
      :placement="placement"
      :disabled="disabled"
      :offset="4"
      @update:visible="onVisibleUpdate"
    >
      <template #reference>
        <span class="pl-dropdown__trigger">
          <slot />
        </span>
      </template>
      <template #content>
        <div class="pl-dropdown__menu" role="menu">
          <template v-for="option in options" :key="String(option.value)">
            <div v-if="option.divided" class="pl-dropdown__divider" />
            <div
              class="pl-dropdown__item"
              :class="{ 'pl-dropdown__item--disabled': option.disabled }"
              role="menuitem"
              @click.stop="onCommand(option)"
            >
              {{ option.label }}
            </div>
          </template>
          <div v-if="!options.length" class="pl-dropdown__empty">
            暂无数据
          </div>
        </div>
      </template>
    </PlPopup>
  </div>
</template>
