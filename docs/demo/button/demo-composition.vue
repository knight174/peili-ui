<script setup lang="ts">
import { ref } from 'vue';
import { PlButton, PlDialog } from 'peili-ui';

const visible = ref(false);
</script>

<template>
  <div>
    <PlButton @click="visible = true">
      打开对话框
    </PlButton>
    <PlDialog v-model="visible" title="确认操作" width="420px">
      <p>主操作使用 default，次要用 secondary，形成明确主次。</p>
      <template #footer>
        <PlButton variant="secondary" @click="visible = false">
          取消
        </PlButton>
        <PlButton @click="visible = false">
          确定
        </PlButton>
      </template>
    </PlDialog>
  </div>
</template>
