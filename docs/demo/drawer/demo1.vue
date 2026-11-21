<script setup lang="ts">
import { ref } from 'vue';
import { PlButton, PlDrawer } from 'peili-ui';

const visible = ref(false);
</script>

<template>
  <div>
    <PlButton type="primary" @click="visible = true">
      打开抽屉
    </PlButton>
    <PlDrawer v-model="visible" title="详情" size="360px">
      <p>这是一个基于 Overlay 的 Drawer。</p>
      <template #footer>
        <PlButton @click="visible = false">
          关闭
        </PlButton>
      </template>
    </PlDrawer>
  </div>
</template>
