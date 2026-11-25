<script setup lang="ts">
import { PlButton } from 'peili-ui';
</script>

<template>
  <div class="btns">
    <PlButton disabled>
      Default
    </PlButton>
    <PlButton variant="secondary" disabled>
      Secondary
    </PlButton>
    <PlButton variant="destructive" disabled>
      Destructive
    </PlButton>
    <PlButton variant="outline" disabled>
      Outline
    </PlButton>
    <PlButton variant="ghost" disabled>
      Ghost
    </PlButton>
    <PlButton variant="link" disabled>
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
