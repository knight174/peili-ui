<script setup lang="ts">
import { computed, ref } from 'vue';
import { PlPopup } from '@peili-ui/popup';
import {
  defaultPopoverProps,
  PopoverEmits,
  PopoverProps,
  PopoverSlots,
} from './props';

defineOptions({
  name: 'PlPopover',
});

const props = withDefaults(
  defineProps<PopoverProps>(),
  defaultPopoverProps(),
);

const emit = defineEmits<PopoverEmits>();

defineSlots<PopoverSlots>();

const visible = ref(false);

const contentStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
}));

function onVisibleUpdate(next: boolean) {
  visible.value = next;
  emit('update:visible', next);
  emit('visible-change', next);
}
</script>

<template>
  <PlPopup
    :visible="visible"
    :trigger="trigger"
    :placement="placement"
    :disabled="disabled"
    :offset="8"
    show-arrow
    @update:visible="onVisibleUpdate"
  >
    <template #reference>
      <span class="pl-popover__trigger">
        <slot />
      </span>
    </template>
    <template #content>
      <div class="pl-popover__panel" :style="contentStyle">
        <div v-if="title" class="pl-popover__title">
          {{ title }}
        </div>
        <div class="pl-popover__body">
          <slot name="content">
            {{ content }}
          </slot>
        </div>
      </div>
    </template>
  </PlPopup>
</template>
