<script setup lang="ts">
import { ref, reactive } from 'vue';
import {
  PlButton,
  ConfigProvider,
  useTheme,
  tinyThemeVars,
  themeVars,
  PeiliuiCssVarsConfig,
} from 'peili-ui';

const { setTheme } = useTheme();

const currentGlobalTheme = ref<'default' | 'tiny'>('default');

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
      <pl-button>
        Default
      </pl-button>
      <pl-button variant="secondary">
        Secondary
      </pl-button>
      <pl-button variant="destructive">
        Destructive
      </pl-button>
      <pl-button variant="outline">
        Outline
      </pl-button>
      <pl-button variant="ghost">
        Ghost
      </pl-button>
      <pl-button variant="link">
        Link
      </pl-button>
    </div>
    <ConfigProvider class="btns" :theme-vars="secondLineThemeVars">
      <pl-button>
        Default
      </pl-button>
      <pl-button variant="secondary">
        Secondary
      </pl-button>
      <pl-button variant="outline">
        Outline
      </pl-button>
      <pl-button variant="ghost">
        Ghost
      </pl-button>
    </ConfigProvider>
    <div class="btns">
      <pl-button disabled>
        Default
      </pl-button>
      <pl-button variant="secondary" disabled>
        Secondary
      </pl-button>
      <pl-button variant="destructive" disabled>
        Destructive
      </pl-button>
      <pl-button variant="outline" disabled>
        Outline
      </pl-button>
      <pl-button variant="ghost" disabled>
        Ghost
      </pl-button>
      <pl-button variant="link" disabled>
        Link
      </pl-button>
    </div>
    <div class="btns">
      <pl-button variant="secondary" @click="switchGlobalTheme">
        切换全局主题，当前：{{ currentGlobalTheme }}
      </pl-button>
      <pl-button variant="secondary" @click="switchSecondLineTheme">
        切换第二行主题，当前：{{ currentSecondLineTheme }}
      </pl-button>
    </div>
  </div>
</template>

<style scoped>
:deep(.pl-button:not(:first-child)) {
  margin-left: 10px;
}

:deep(.pl-button) {
  margin-bottom: 10px;
}
</style>
