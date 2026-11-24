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

const tooltipId = `pl-tooltip-${Math.random().toString(36).slice(2, 10)}`;
</script>

<template>
  <PlPopup
    :trigger="['hover', 'focus']"
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
      <span
        class="pl-tooltip__trigger"
        :aria-describedby="tooltipId"
      >
        <slot />
      </span>
    </template>
    <template #content>
      <div
        :id="tooltipId"
        class="pl-tooltip__content"
        role="tooltip"
      >
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </template>
  </PlPopup>
</template>
