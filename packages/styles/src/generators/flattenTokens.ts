/**
 * 将嵌套 token 对象递归展平为 kebab-case 路径键。
 * 例：`{ color: { text: { primary: '#111' } } }` → `{ 'color-text-primary': '#111' }`
 */
export function flattenTokens(
  input: unknown,
  path: string[] = [],
): Record<string, string> {
  if (input == null) {
    return {};
  }

  if (Array.isArray(input)) {
    return {};
  }

  if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    if (path.length === 0) return {};
    return { [path.join('-')]: String(input) };
  }

  if (Object.prototype.toString.call(input) !== '[object Object]') {
    return {};
  }

  const obj = input as Record<string, unknown>;
  if (Object.keys(obj).length === 0) {
    return {};
  }

  return Object.entries(obj).reduce<Record<string, string>>((acc, [key, value]) => {
    Object.assign(acc, flattenTokens(value, [...path, key]));
    return acc;
  }, {});
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/** 若存在嵌套对象则展平，否则原样返回（兼容现有扁平 API） */
export function normalizeTokenInput(
  origin: Record<string, any>,
): Record<string, string | number | boolean> {
  const hasNesting = Object.values(origin).some(value => isPlainObject(value));
  if (!hasNesting) {
    return origin;
  }
  return flattenTokens(origin);
}
