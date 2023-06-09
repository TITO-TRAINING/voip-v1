module.exports = {
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-standard',
        'stylelint-config-recess-order',
        'stylelint-config-css-module',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-scss'],
    ignoreFiles: [],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: []
            }
        ],
        'declaration-block-no-duplicate-custom-properties': null,
        'named-grid-areas-no-invalid': null,
        'no-duplicate-selectors': null,
        'no-empty-source': null,
        'selector-pseudo-element-no-unknown': null,
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
        'string-no-newline': null,
        'selector-max-universal': 1,
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/dollar-variable-pattern': /^[a-z-]+$/,
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/at-rule-no-unknown': null,
    }
}