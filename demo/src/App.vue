<script setup lang="ts">
import {
  Button,
} from 'peili-ui';
</script>

<template>
  <div>
    <div class="btns">
      <Button>Button</Button>
      <Button type="primary">
        Button
      </Button>
      <Button type="success">
        Button
      </Button>
      <Button type="danger">
        Button
      </Button>
      <Button type="warning">
        Button
      </Button>
      <Button type="info">
        Button
      </Button>
    </div>
    <div class="btns">
      <Button plain>
        Button
      </Button>
      <Button
        type="primary"
        plain
      >
        Button
      </Button>
      <Button
        type="success"
        plain
      >
        Button
      </Button>
      <Button
        type="danger"
        plain
      >
        Button
      </Button>
      <Button
        type="warning"
        plain
      >
        Button
      </Button>
      <Button
        type="info"
        plain
      >
        Button
      </Button>
    </div>
    <div class="btns">
      <Button disabled>
        Button
      </Button>
      <Button
        type="primary"
        disabled
      >
        Button
      </Button>
      <Button
        type="success"
        disabled
      >
        Button
      </Button>
      <Button
        type="danger"
        disabled
      >
        Button
      </Button>
      <Button
        type="warning"
        disabled
      >
        Button
      </Button>
      <Button
        type="info"
        disabled
      >
        Button
      </Button>
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
