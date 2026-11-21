<script setup lang="ts">
import { ref } from 'vue';
import { PlButton, PlDialog } from 'peili-ui';

const visible = ref(false);
</script>

<template>
  <div>
    <PlButton type="primary" @click="visible = true">
      打开对话框
    </PlButton>
    <PlDialog v-model="visible" title="提示" width="420px">
      <p>这是一个基于 Overlay 的 Dialog。</p>
      <template #footer>
        <PlButton @click="visible = false">
          取消
        </PlButton>
        <PlButton type="primary" @click="visible = false">
          确定
        </PlButton>
      </template>
    </PlDialog>
  </div>
</template>
