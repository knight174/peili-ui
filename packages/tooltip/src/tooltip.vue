<script setup lang="ts">
import { PlPopup } from '@peili-ui/popup';
import { Z_INDEX } from '@peili-ui/shared';
import {
  defaultTooltipProps,
  TooltipProps,
  TooltipSlots,
} from './props';

defineOptions({
  name: 'PlTooltip',
});

withDefaults(
  defineProps<TooltipProps>(),
  defaultTooltipProps(),
);

defineSlots<TooltipSlots>();
</script>

<template>
  <PlPopup
    trigger="hover"
    :placement="placement"
    :disabled="disabled"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    :z-index="zIndex"
    :z-index-floor="Z_INDEX.tooltip"
    :offset="8"
    show-arrow
  >
    <template #reference>
      <span class="pl-tooltip__trigger">
        <slot />
      </span>
    </template>
    <template #content>
      <div class="pl-tooltip__content">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </template>
  </PlPopup>
</template>
