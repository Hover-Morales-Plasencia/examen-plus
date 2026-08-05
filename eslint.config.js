import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-config-prettier'

export default [
  { ignores: ['dist', 'node_modules', 'archivos-existentes', 'coverage'] },

  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'], // React 19: no hace falta importar React
  jsxA11y.flatConfigs.recommended,

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      // Vite necesita que cada archivo exporte solo componentes para el hot reload.
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Con JavaScript puro no validamos props por tipos; se documentan al desestructurar.
      'react/prop-types': 'off',

      // --- Convenciones del proyecto (ver .claude/skills/react-conventions) ---

      // Un componente por archivo, en PascalCase.
      'react/no-multi-comp': ['warn', { ignoreStateless: false }],
      'react/jsx-pascal-case': 'error',

      // Nada de estilos inline: los colores salen de src/config/siteConfig.js.
      'react/forbid-dom-props': ['warn', { forbid: ['style'] }],

      // Errores comunes en listas y enlaces.
      'react/jsx-key': 'error',
      'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
      'react/self-closing-comp': 'warn',

      // Avisa de variables sin usar, pero deja pasar las que empiezan con "_".
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // Archivos de configuración que corren en Node, no en el navegador.
  {
    files: ['*.config.js', 'vite.config.js', 'eslint.config.js'],
    languageOptions: { globals: globals.node },
  },

  // Debe ir al final: apaga las reglas de formato que ya maneja Prettier.
  prettier,
]
