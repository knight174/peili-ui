<script setup lang="ts">
import { ref } from 'vue';
import { PlSelect, SelectOption } from 'peili-ui';

const value = ref<string | number | null>(null);
const clearableValue = ref<string | number | null>('apple');

const options: SelectOption[] = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄（禁用）', value: 'grape', disabled: true },
];
</script>

<template>
  <div class="demo-select">
    <PlSelect v-model="value" :options="options" placeholder="请选择水果" />
    <PlSelect v-model="clearableValue" :options="options" clearable />
    <PlSelect model-value="banana" :options="options" disabled />
    <PlSelect model-value="apple" :options="options" size="small" />
    <PlSelect model-value="orange" :options="options" size="large" />
  </div>
</template>

<style scoped>
.demo-select {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 320px;
}
</style>
