import antfu from '@antfu/eslint-config'
import nextPlugin from '@next/eslint-plugin-next'
import tailwindcss from 'eslint-plugin-better-tailwindcss'
import jestDom from 'eslint-plugin-jest-dom'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default antfu(
  {
    react: true,
    typescript: true,
    stylistic: {
      semi: false,
    },
  },
  {
    plugins: { '@next/next': nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  jsxA11y.flatConfigs.recommended,
  {
    files: [
      '**/*.spec.ts?(x)',
    ],
    ...jestDom.configs['flat/recommended'],
  },
  {
    plugins: { 'better-tailwindcss': tailwindcss },
    rules: {
      ...tailwindcss.configs['recommended-warn'].rules,
      ...tailwindcss.configs['recommended-error'].rules,
    },
    settings: { 'better-tailwindcss': { entryPoint: './src/app/global.css' } },
  },
  {
    rules: {
      'antfu/no-top-level-await': 'off', // Allow top-level await
      'node/prefer-global/process': 'off', // Allow using `process.env`
    },
  },
)
