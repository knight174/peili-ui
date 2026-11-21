<script setup lang="ts">
import { PlButton, PlPopover } from 'peili-ui';
</script>

<template>
  <PlPopover title="标题" content="这是一段 Popover 内容" trigger="click" placement="bottom">
    <PlButton type="primary">
      点击打开
    </PlButton>
  </PlPopover>
</template>
