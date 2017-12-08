module.exports = {
    extends: ['airbnb'],
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        'sort-keys': 'off',
        'max-len': ['warn', 100, 4],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'no-cond-assign': ['error', 'always'],
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',

        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',

        'no-console': 'off',
        'global-require': 'off'
    }
};
