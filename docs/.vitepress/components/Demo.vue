<script setup lang="ts">
import { ref } from 'vue';

function toPlayground() {
}

const isCodeShow = ref(false);
</script>

<template>
  <div class="demo">
    <div class="demo-render">
      <!-- 用例渲染插槽 -->
      <slot name="demo" />
    </div>
    <!-- 各种功能操作，如展开源码，跳转到 Playground 等 -->
    <div class="demo-operators">
      <a href="javascript:;" class="cursor-pointer c-info! no-underline!" title="在 Playground 中编辑"
        @click="toPlayground">Playground</a>
      <a href="javascript:;" class="cursor-pointer c-info! no-underline!" title="查看源代码"
        @click="isCodeShow = !isCodeShow">显示代码
      </a>
    </div>
    <div v-if="isCodeShow" class="demo-code">
      <!-- 用例源码插槽 -->
      <slot name="code" />
      <div class="pb-16px text-center" @click="isCodeShow = false">
        <a href="javascript:;" class="cursor-pointer c-info! no-underline!">隐藏源代码</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo {
  border: 1px solid rgb(var(--pl-color-bd_light));
  border-radius: 4px;
}

.demo-render {
  padding: 20px;
}

.demo-operators {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  font-size: 14px;
  color: rgb(var(--pl-color-secondary));
  border-top: 1px solid rgb(var(--pl-color-bd_light));

  a {
    cursor: pointer;

    +a {
      margin-left: 16px;
    }
  }
}
</style>