module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "extends": [
        "eslint:recommended"
    ],
    "plugins": [
        "svelte3"
    ],
    "overrides": [
        {
            "files": [
                "**/*.svelte"
            ],
            "processor": "svelte3/svelte3"
        }
    ],
    "rules": {
        "arrow-parens": "off",
        "comma-dangle": "off",
        "func-names": ["error", "never"],
        "global-require": "off",
        "import/no-cycle": "off",
        "import/no-dynamic-require": "off",
        "import/prefer-default-export": "off",
        "indent": ["error", 4, {
            "SwitchCase": 1,
            "MemberExpression": "off"
        }],
        "max-len": "off",
        "no-console": "off",
        "no-continue": "off",
        "no-nested-ternary": "off",
        "no-param-reassign": ["error", { "props": false }],
        "no-plusplus": "off",
        "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
        "no-unused-expressions": 0,
        "no-unused-vars": ["error", { "vars": "all", "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
        "no-use-before-define": ["error", "nofunc"],
        "object-curly-spacing": ["warn", "never"],
        "operator-linebreak": "off",
        "prefer-destructuring": "off",
        "prefer-template": "off",
        "quotes": ["error", "double"],
        "quote-props": ["error", "always"],
        "semi": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "yoda": ["warn", "never"]
    }
};
