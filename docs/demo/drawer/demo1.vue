<script setup lang="ts">
import { ref } from 'vue';
import { PlButton, PlDrawer, DrawerDirection } from 'peili-ui';

const visible = ref(false);
const direction = ref<DrawerDirection>('rtl');

function open(dir: DrawerDirection) {
  direction.value = dir;
  visible.value = true;
}
</script>

<template>
  <div class="demo-row">
    <PlButton type="primary" @click="open('rtl')">
      右侧
    </PlButton>
    <PlButton @click="open('ltr')">
      左侧
    </PlButton>
    <PlButton @click="open('ttb')">
      顶部
    </PlButton>
    <PlButton @click="open('btt')">
      底部
    </PlButton>
    <PlDrawer v-model="visible" :direction="direction" title="详情" size="360px">
      <p>当前方向：{{ direction }}</p>
      <template #footer>
        <PlButton @click="visible = false">
          关闭
        </PlButton>
      </template>
    </PlDrawer>
  </div>
</template>

<style scoped>
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
