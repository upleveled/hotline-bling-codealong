module.exports = {
  extends: ['@upleveled/upleveled'],
  rules: {
    // Copied from UpLeveled ESLint config
    '@typescript-eslint/naming-convention': [
      'warn',
      // Allow PascalCase for React Navigation's Stack variable
      // (object) from the `createStackNavigator` function
      // https://github.com/typescript-eslint/typescript-eslint/issues/2149#issuecomment-1315578975
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase'],
        filter: {
          regex: '^Stack$',
          match: true,
        },
      },
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        types: ['boolean', 'string', 'number', 'array'],
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        types: ['function'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: null,
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'snake_case', 'PascalCase'],
      },
    ],
    'react/style-prop-object': [
      'warn',
      {
        allow: ['StatusBar'],
      },
    ],
  },
};
