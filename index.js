module.exports = {
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'global-require': 'off',
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'key-spacing': [
            'error',
            {
                mode: 'strict'
            }
        ],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['warn', 100, 4],
        'no-cond-assign': ['error', 'always'],
        'no-console': 'off',
        'object-curly-spacing': ['error', 'never'],
        'sort-keys': 'off',
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always']
    }
};
