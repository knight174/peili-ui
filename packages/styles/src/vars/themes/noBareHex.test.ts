import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const dir = dirname(fileURLToPath(import.meta.url));

/** 业务语义主题文件禁止出现裸 hex（须引用 primitive scale / 常量） */
describe('theme semantic layer has no bare hex', () => {
  ['light.ts', 'dark.ts'].forEach((file) => {
    it(`${file} has no #hex literals`, () => {
      const src = readFileSync(join(dir, file), 'utf8');
      // 去掉注释后再扫，避免文档示例误报
      const withoutComments = src
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\/\/.*$/gm, '');
      expect(withoutComments).not.toMatch(/#[0-9A-Fa-f]{3,8}\b/);
    });
  });
});
