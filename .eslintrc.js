module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    'plugin:vue/recommended',
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended'
  ],
  rules: {
    "require-await": "warn",
    "no-unreachable": "warn",
    "object-curly-spacing": "warn",
    "prefer-const": "warn",
    "padded-blocks": "warn",
    "spaced-comment": "warn",
    "no-case-declarations": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/attributes-order": "off",
    "vue/max-attributes-per-line": ["warn", {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "semi": ["error", "never"],
    "curly": ["error", "all"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "comma-dangle": ["warn", "always-multiline"],
    "no-console": "warn",
    "no-trailing-spaces": "warn",
    "vue/script-indent": ["warn", 2, { "baseIndent": 1, "switchCase": 1 }],
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "vue/no-v-html": "off",
    "no-useless-constructor": "off",
    "object-shorthand": "off",
    "no-multiple-empty-lines": "warn",
    "no-debugger": "warn",
    "no-unused-vars": "warn",
    "import/order": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-return-await": "off",
    "operator-linebreak": [2, "after", {
      "overrides": {
        "?": "before",
        "||": "before",
        "&&": "before",
        ":": "before"
      }
    }]
  },
}
