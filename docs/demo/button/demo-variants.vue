<script setup lang="ts">
import { PlButton } from 'peili-ui';
</script>

<template>
  <div class="btns">
    <PlButton>
      Default
    </PlButton>
    <PlButton variant="secondary">
      Secondary
    </PlButton>
    <PlButton variant="destructive">
      Destructive
    </PlButton>
    <PlButton variant="outline">
      Outline
    </PlButton>
    <PlButton variant="ghost">
      Ghost
    </PlButton>
    <PlButton variant="link">
      Link
    </PlButton>
  </div>
</template>

<style scoped>
.btns {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>
