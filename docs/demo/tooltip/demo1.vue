<script setup lang="ts">
import { PlButton, PlTooltip } from 'peili-ui';
</script>

<template>
  <div class="demo-row">
    <PlTooltip content="Top 提示" placement="top">
      <PlButton>Top</PlButton>
    </PlTooltip>
    <PlTooltip content="Bottom 提示" placement="bottom">
      <PlButton>Bottom</PlButton>
    </PlTooltip>
    <PlTooltip content="Left 提示" placement="left">
      <PlButton>Left</PlButton>
    </PlTooltip>
    <PlTooltip content="Right 提示" placement="right">
      <PlButton>Right</PlButton>
    </PlTooltip>
  </div>
</template>

<style scoped>
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
