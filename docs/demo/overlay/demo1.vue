<script setup lang="ts">
import { ref } from 'vue';
import { PlButton, PlOverlay } from 'peili-ui';

const visible = ref(false);
</script>

<template>
  <div>
    <PlButton type="primary" @click="visible = true">
      打开遮罩
    </PlButton>
    <PlOverlay v-model="visible">
      <div class="panel" @click.stop>
        Overlay 内容，点击遮罩关闭
        <div style="margin-top: 12px">
          <PlButton @click="visible = false">
            关闭
          </PlButton>
        </div>
      </div>
    </PlOverlay>
  </div>
</template>

<style scoped>
.panel {
  padding: 24px;
  background: #fff;
  border-radius: 8px;
}
</style>
