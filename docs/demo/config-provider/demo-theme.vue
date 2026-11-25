<script setup lang="ts">
import { ref } from 'vue';
import {
  PlButton,
  ConfigProvider,
  useTheme,
  tinyThemeVars,
  themeVars,
  type PeiliuiCssVarsConfig,
} from 'peili-ui';

const { setTheme, setColorScheme } = useTheme();

const scheme = ref<'light' | 'dark'>('light');
function toggleScheme() {
  scheme.value = scheme.value === 'light' ? 'dark' : 'light';
  setColorScheme(scheme.value);
}

const globalPreset = ref<'default' | 'tiny'>('default');
function toggleGlobalPreset() {
  if (globalPreset.value === 'tiny') {
    globalPreset.value = 'default';
    setTheme(themeVars);
  } else {
    globalPreset.value = 'tiny';
    setTheme(tinyThemeVars);
  }
}

const localPreset = ref<'default' | 'tiny'>('default');
const localThemeVars = ref<PeiliuiCssVarsConfig>({});
function toggleLocalPreset() {
  if (localPreset.value === 'tiny') {
    localPreset.value = 'default';
    localThemeVars.value = {};
  } else {
    localPreset.value = 'tiny';
    localThemeVars.value = { ...tinyThemeVars };
  }
}
</script>

<template>
  <div class="stack">
    <div class="btns">
      <PlButton variant="secondary" @click="toggleScheme">
        色系：{{ scheme }}
      </PlButton>
      <PlButton variant="secondary" @click="toggleGlobalPreset">
        全局预设：{{ globalPreset }}
      </PlButton>
      <PlButton variant="secondary" @click="toggleLocalPreset">
        局部预设：{{ localPreset }}
      </PlButton>
    </div>

    <div class="btns">
      <PlButton>
        Default
      </PlButton>
      <PlButton variant="secondary">
        Secondary
      </PlButton>
      <PlButton variant="destructive">
        Destructive
      </PlButton>
    </div>

    <ConfigProvider class="btns" :theme-vars="localThemeVars">
      <PlButton>
        Default
      </PlButton>
      <PlButton variant="secondary">
        Secondary
      </PlButton>
      <PlButton variant="outline">
        Outline
      </PlButton>
      <span class="hint">↑ ConfigProvider 局部覆盖</span>
    </ConfigProvider>
  </div>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.btns {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.hint {
  font-size: 12px;
  color: rgb(var(--pl-muted-foreground));
}
</style>
