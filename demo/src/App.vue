<script setup lang="ts">
import { ref, reactive } from 'vue';
import {
  PlButton,
  PlInput,
  PlSelect,
  PlDropdown,
  PlTooltip,
  PlDialog,
  ConfigProvider,
  useTheme,
  tinyThemeVars,
  themeVars,
  PeiliuiCssVarsConfig,
  SelectOption,
  DropdownOption,
} from 'peili-ui';

const { setTheme } = useTheme();

const currentGlobalTheme = ref<'default' | 'tiny'>('default');
const inputValue = ref('');
const selectValue = ref<string | number | null>(null);
const dialogVisible = ref(false);
const selectOptions: SelectOption[] = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' },
];
const dropdownOptions: DropdownOption[] = [
  { label: '编辑', value: 'edit' },
  { label: '删除', value: 'delete', divided: true },
];

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
    <div class="form-demo">
      <PlInput v-model="inputValue" clearable placeholder="请输入内容" />
      <PlSelect v-model="selectValue" :options="selectOptions" clearable placeholder="请选择" />
    </div>
    <div class="btns">
      <PlDropdown :options="dropdownOptions">
        <PlButton>下拉菜单</PlButton>
      </PlDropdown>
      <PlTooltip content="这是 Tooltip">
        <PlButton>Tooltip</PlButton>
      </PlTooltip>
      <PlButton type="primary" @click="dialogVisible = true">
        打开 Dialog
      </PlButton>
    </div>
    <PlDialog v-model="dialogVisible" title="提示" width="420px">
      <p>基于 Overlay 的 Dialog 示例</p>
      <template #footer>
        <PlButton @click="dialogVisible = false">
          关闭
        </PlButton>
      </template>
    </PlDialog>
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

.form-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 320px;
  margin: 16px 0;
}
</style>
