module.exports = {
    plugins: ['react'],
    rules: {
        'react/sort-comp': [
            1,
            {
                order: [
                    'type-annotations',
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render'
                ]
            }
        ],
        'react/require-default-props': 'off',
        'react/no-array-index-key': 'warn',
        'react/no-string-refs': 'error',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx']
            }
        ],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/forbid-prop-types': [
            'warn',
            {
                forbid: ['any']
            }
        ],
        'react/prefer-stateless-function': [
            'error',
            {
                ignorePureComponents: true
            }
        ]
    }
};
