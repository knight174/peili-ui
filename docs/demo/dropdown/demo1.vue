<script setup lang="ts">
import { PlButton, PlDropdown, DropdownOption } from 'peili-ui';

const options: DropdownOption[] = [
  { label: '编辑', value: 'edit' },
  { label: '复制', value: 'copy' },
  { label: '删除', value: 'delete', divided: true },
];

function onCommand(value: string | number) {
  // eslint-disable-next-line no-alert
  alert(`command: ${value}`);
}
</script>

<template>
  <PlDropdown :options="options" @command="onCommand">
    <PlButton>
      下拉菜单
    </PlButton>
  </PlDropdown>
</template>
