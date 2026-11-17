<script setup lang="ts">
import { ref } from 'vue';
import { PlInput } from 'peili-ui';

const value = ref('');
const clearableValue = ref('可清空内容');
</script>

<template>
  <div class="demo-input">
    <PlInput v-model="value" placeholder="请输入内容" />
    <PlInput v-model="clearableValue" clearable placeholder="可清空" />
    <PlInput model-value="禁用状态" disabled />
    <PlInput model-value="小号" size="small" />
    <PlInput model-value="大号" size="large" />
  </div>
</template>

<style scoped>
.demo-input {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 320px;
}
</style>
