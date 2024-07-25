module.exports = {
  // 对于 js、ts、vue 脚本文件，应用 eslint
  '**/*.{js,jsx,tsx,ts,vue}': [
    'eslint --fix',
  ],
  // 对于其他类型的文件，用 prettier 修复格式
  '**/*.{html,json,md}': [
    'prettier --write',
  ],
};
