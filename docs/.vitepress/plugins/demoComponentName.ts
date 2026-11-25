import { basename } from 'node:path';

/**
 * 将 demo 文件路径转为合法 JS/Vue 组件标识符。
 * `demo-variants.vue` → `DemoVariants`；`demo1.vue` → `Demo1`
 */
export function demoPathToComponentName(sourceFilePath: string): string {
  const base = basename(sourceFilePath).replace(/\.[^.]+$/, '');
  const name = base
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  return /^\d/.test(name) ? `Demo${name}` : name;
}
