<script setup lang="ts">
import { ref } from 'vue';
import { PlButton, PlPopup } from 'peili-ui';

const visible = ref(false);
</script>

<template>
  <div class="demo-popup">
    <PlPopup trigger="click" placement="bottom-start">
      <template #reference>
        <PlButton>
          Click 触发
        </PlButton>
      </template>
      <template #content>
        <div class="panel">
          非受控 Popup 内容
        </div>
      </template>
    </PlPopup>

    <PlPopup v-model:visible="visible" trigger="manual" placement="bottom">
      <template #reference>
        <PlButton variant="secondary" @click="visible = !visible">
          Manual：{{ visible ? '已打开' : '已关闭' }}
        </PlButton>
      </template>
      <template #content>
        <div class="panel">
          受控 Popup 内容
        </div>
      </template>
    </PlPopup>

    <PlPopup trigger="hover" placement="top" show-arrow>
      <template #reference>
        <PlButton variant="secondary">
          Hover 触发
        </PlButton>
      </template>
      <template #content>
        <div class="panel">
          Hover Popup
        </div>
      </template>
    </PlPopup>
  </div>
</template>

<style scoped>
.demo-popup {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.panel {
  padding: 12px;
  white-space: nowrap;
}
</style>
