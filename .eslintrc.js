module.exports = {
   extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
   parser: '@typescript-eslint/parser',
   plugins: ['@typescript-eslint', 'unused-imports'],
   root: true,
   rules: {
      'prefer-const': 'error',
      camelcase: 'warn',
      'max-lines': 'warn',
      complexity: 'warn',
      'max-params': 'warn',
      'require-await': 'error',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
         'error',
         { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
   },
};
