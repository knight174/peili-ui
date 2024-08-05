<script setup lang="ts">
import { ref, reactive } from 'vue';
import {
  PlButton,
  Input,
  ConfigProvider,
  useTheme,
  tinyThemeVars,
  themeVars,
  PeiliuiCssVarsConfig,
} from 'peili-ui';

const { setTheme } = useTheme();

const currentGlobalTheme = ref<'default' | 'tiny'>('default');

// 全局主题切换
function switchGlobalTheme() {
  if (currentGlobalTheme.value === 'tiny') {
    currentGlobalTheme.value = 'default';
    setTheme(themeVars);
  } else {
    currentGlobalTheme.value = 'tiny';
    setTheme(tinyThemeVars);
  }
}

const currentSecondLineTheme = ref<'default' | 'tiny'>('default');
const secondLineThemeVars: PeiliuiCssVarsConfig = reactive({});
// 局部主题切换
function switchSecondLineTheme() {
  if (currentSecondLineTheme.value === 'tiny') {
    currentSecondLineTheme.value = 'default';
    Object.assign(secondLineThemeVars, themeVars);
  } else {
    currentSecondLineTheme.value = 'tiny';
    Object.assign(secondLineThemeVars, tinyThemeVars);
  }
}
</script>

<template>
  <div>
    <div class="btns">
      <pl-button>Button</pl-button>
      <pl-button type="primary">
        Button
      </pl-button>
      <pl-button type="success">
        Button
      </pl-button>
      <pl-button type="danger">
        Button
      </pl-button>
      <pl-button type="warning">
        Button
      </pl-button>
      <pl-button type="info">
        Button
      </pl-button>
    </div>
    <ConfigProvider class="btns" :theme-vars="secondLineThemeVars">
      <pl-button plain>
        Button
      </pl-button>
      <pl-button type="primary" plain>
        Button
      </pl-button>
      <pl-button type="success" plain>
        Button
      </pl-button>
      <pl-button type="danger" plain>
        Button
      </pl-button>
      <pl-button type="warning" plain>
        Button
      </pl-button>
      <pl-button type="info" plain>
        Button
      </pl-button>
    </ConfigProvider>
    <div class="btns">
      <pl-button disabled>
        Button
      </pl-button>
      <pl-button type="primary" disabled>
        Button
      </pl-button>
      <pl-button type="success" disabled>
        Button
      </pl-button>
      <pl-button type="danger" disabled>
        Button
      </pl-button>
      <pl-button type="warning" disabled>
        Button
      </pl-button>
      <pl-button type="info" disabled>
        Button
      </pl-button>
    </div>
    <div class="btns">
      <pl-button @click="switchGlobalTheme">
        切换全局主题，当前：{{ currentGlobalTheme }}
      </pl-button>
      <pl-button @click="switchSecondLineTheme">
        切换第二行主题，当前：{{ currentSecondLineTheme }}
      </pl-button>
    </div>
    <div>
      <Input />
    </div>
    <div>
      <i class="i-pl-alert text-64px text-yellow inline-block" />
      <i class="i-pl-alert-marked text-48px text-red inline-block" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btns {
  :deep(.pl-button) {
    margin-bottom: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
