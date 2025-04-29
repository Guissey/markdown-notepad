/**
 * Custom rules for eslint-stylistic package.  
 * First generated with `stylistic.configs.customize({ semi: true, arrowParens: true }).rules`  
 * Severities have been set down to 'warn'.  
 * Some rules have been overriden and marked as such with comments.  
 */
const stylisticRules = {
  '@stylistic/array-bracket-spacing': ['warn', 'never'],
  '@stylistic/arrow-parens': ['warn', 'always'], // Override
  '@stylistic/arrow-spacing': ['warn', { after: true, before: true }],
  '@stylistic/block-spacing': ['warn', 'always'],
  '@stylistic/brace-style': ['warn', '1tbs', { allowSingleLine: true }], // Override
  '@stylistic/comma-dangle': ['warn', 'always-multiline'],
  '@stylistic/comma-spacing': ['warn', { after: true, before: false }],
  '@stylistic/comma-style': ['warn', 'last'],
  '@stylistic/computed-property-spacing': ['warn', 'never', { enforceForClassMembers: true }],
  '@stylistic/dot-location': ['warn', 'property'],
  '@stylistic/eol-last': 'warn',
  '@stylistic/generator-star-spacing': ['warn', { after: true, before: false }],
  '@stylistic/indent': [
    'warn',
    2,
    {
      ArrayExpression: 1,
      CallExpression: { arguments: 1 },
      flatTernaryExpressions: false,
      FunctionDeclaration: { body: 1, parameters: 1 },
      FunctionExpression: { body: 1, parameters: 1 },
      ignoreComments: false,
      ignoredNodes: [
        'TSUnionType',
        'TSIntersectionType',
        'TSTypeParameterInstantiation',
        'FunctionExpression > .params[decorators.length > 0]',
        'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
      ],
      ImportDeclaration: 1,
      MemberExpression: 1,
      ObjectExpression: 1,
      offsetTernaryExpressions: false, // Override
      outerIIFEBody: 1,
      SwitchCase: 1,
      tabLength: 2,
      VariableDeclarator: 1,
    },
  ],
  '@stylistic/indent-binary-ops': ['warn', 2],
  '@stylistic/key-spacing': ['warn', { afterColon: true, beforeColon: false }],
  '@stylistic/keyword-spacing': ['warn', { after: true, before: true }],
  '@stylistic/lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
  '@stylistic/max-statements-per-line': ['warn', { max: 1 }],
  '@stylistic/member-delimiter-style': [
    'warn',
    {
      multiline: { delimiter: 'semi', requireLast: true },
      multilineDetection: 'brackets',
      overrides: {
        interface: {
          multiline: { delimiter: 'semi', requireLast: true },
        },
      },
      singleline: { delimiter: 'semi' },
    },
  ],
  '@stylistic/multiline-ternary': ['warn', 'always-multiline', { ignoreJSX: true }], // Override: ignore JSX
  '@stylistic/new-parens': 'warn',
  '@stylistic/no-extra-parens': ['warn', 'functions'],
  '@stylistic/no-floating-decimal': 'warn',
  '@stylistic/no-mixed-operators': [
    'warn',
    {
      allowSamePrecedence: true,
      groups: [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
    },
  ],
  '@stylistic/no-mixed-spaces-and-tabs': 'warn',
  '@stylistic/no-multi-spaces': 'warn',
  '@stylistic/no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],
  '@stylistic/no-tabs': 'warn',
  '@stylistic/no-trailing-spaces': ['warn', { ignoreComments: true }], // Override: ignore comments for line breaks with double space
  '@stylistic/no-whitespace-before-property': 'warn',
  '@stylistic/object-curly-spacing': ['warn', 'always'],
  '@stylistic/operator-linebreak': ['warn', 'before'],
  '@stylistic/padded-blocks': ['warn', { blocks: 'never', classes: 'never', switches: 'never' }],
  '@stylistic/quote-props': ['warn', 'consistent-as-needed'],
  '@stylistic/quotes': [
    'warn',
    'single',
    { allowTemplateLiterals: true, avoidEscape: false },
  ],
  '@stylistic/rest-spread-spacing': ['warn', 'never'],
  '@stylistic/semi': ['warn', 'always'],
  '@stylistic/semi-spacing': ['warn', { after: true, before: false }],
  '@stylistic/space-before-blocks': ['warn', 'always'],
  '@stylistic/space-before-function-paren': [
    'warn',
    { anonymous: 'always', asyncArrow: 'always', named: 'never' },
  ],
  '@stylistic/space-in-parens': ['warn', 'never'],
  '@stylistic/space-infix-ops': 'warn',
  '@stylistic/space-unary-ops': ['warn', { nonwords: false, words: true }],
  '@stylistic/spaced-comment': [
    'warn',
    'always',
    {
      block: {
        balanced: true,
        exceptions: ['*'],
        markers: ['!'],
      },
      line: {
        exceptions: ['/', '#'],
        markers: ['/'],
      },
    },
  ],
  '@stylistic/template-curly-spacing': 'warn',
  '@stylistic/template-tag-spacing': ['warn', 'never'],
  '@stylistic/type-annotation-spacing': ['warn', {}],
  '@stylistic/type-generic-spacing': 'warn',
  '@stylistic/type-named-tuple-spacing': 'warn',
  '@stylistic/wrap-iife': ['warn', 'any', { functionPrototypeMethods: true }],
  '@stylistic/yield-star-spacing': ['warn', { after: true, before: false }],
  '@stylistic/jsx-closing-bracket-location': 'warn',
  '@stylistic/jsx-closing-tag-location': 'warn',
  '@stylistic/jsx-curly-brace-presence': ['warn', { propElementValues: 'always' }],
  '@stylistic/jsx-curly-newline': 'warn',
  '@stylistic/jsx-curly-spacing': ['warn', 'never'],
  '@stylistic/jsx-equals-spacing': 'warn',
  '@stylistic/jsx-first-prop-new-line': 'warn',
  '@stylistic/jsx-function-call-newline': ['warn', 'multiline'],
  '@stylistic/jsx-indent-props': ['warn', 2],
  '@stylistic/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
  '@stylistic/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
  '@stylistic/jsx-quotes': ['warn', 'prefer-single'], // Override
  '@stylistic/jsx-tag-spacing': [
    'warn',
    {
      afterOpening: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    },
  ],
  '@stylistic/jsx-wrap-multilines': [
    'warn',
    {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      propertyValue: 'parens-new-line',
      return: 'parens-new-line',
    },
  ],
};

export default stylisticRules;
