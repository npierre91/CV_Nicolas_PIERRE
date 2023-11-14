module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    "plugin:react/jsx-runtime",
    'plugin:import/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'import',
  ],
  'settings': {
    "react": {
      "version": "detect"
    },
  },
  'rules': {
    'no-await-in-loop': 'error',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-use-before-define': 'error',
    'block-scoped-var': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'operator-assignment': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-object-spread': 'error',
    'prefer-spread': 'error',
    'spaced-comment': 'error',
    'yoda': 'error',

    'react/no-access-state-in-setstate': 'error',
    'react/no-danger': 'error',
    'react/no-namespace': 'error',
    'react/no-render-return-value': 'error',
    'react/sort-prop-types': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-filename-extension': [
      'error',
      {'extensions': ['.jsx']}
    ],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        'callbacksLast': true,
        'shorthandFirst': true,
        'reservedFirst': true,
      }
    ],
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',

    'import/default': 'error',
    'import/export': 'error',
    'import/no-absolute-path': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-namespace': 'error',
    'import/no-self-import': 'error',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'alphabetize': { 'order': 'asc' },
        'newlines-between': 'always',
      }
    ],
    'import/prefer-default-export': 'error',

    'import/named': 'off',
    'import/no-unresolved': 'off',
  },
}
