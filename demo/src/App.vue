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
    <div class="form-demo">
      <PlInput v-model="inputValue" clearable placeholder="请输入内容" />
      <PlSelect v-model="selectValue" :options="selectOptions" clearable placeholder="请选择" />
    </div>
    <div class="btns">
      <PlDropdown :options="dropdownOptions">
        <PlButton variant="secondary">
          下拉菜单
        </PlButton>
      </PlDropdown>
      <PlTooltip content="这是 Tooltip">
        <PlButton variant="secondary">
          Tooltip
        </PlButton>
      </PlTooltip>
      <PlButton @click="dialogVisible = true">
        打开 Dialog
      </PlButton>
    </div>
    <PlDialog v-model="dialogVisible" title="提示" width="420px">
      <p>基于 Overlay 的 Dialog 示例</p>
      <template #footer>
        <PlButton variant="secondary" @click="dialogVisible = false">
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
