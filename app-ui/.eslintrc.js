const tsConfigPath = require.resolve("./tsconfig.eslint.json");

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: tsConfigPath,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: tsConfigPath,
      },
    },
  },
  plugins: ["react", "@typescript-eslint", "jest", "sort-exports"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist/*", "coverage/*"],
  reportUnusedDisableDirectives: true,
  rules: {
    // allow dev dependencies outside src
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "!src/**",
          "__tests__/**",
          "*.test.*",
          "src/testUtils/**",
        ],
        optionalDependencies: false,
        packageDir: __dirname,
      },
    ],
    // be more strict with import order (to improve auto-import)
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: [
          "builtin",
          "external",
          ["internal", "unknown"],
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "never",
      },
    ],
    "sort-imports": [
      "error",
      { ignoreDeclarationSort: true, ignoreCase: true },
    ],
    // using react/jsx-runtime makes this unnecessary
    "react/react-in-jsx-scope": 0,
    // use only member export for easier re-exports in index files
    "import/prefer-default-export": 0,
    "import/no-default-export": "error",
    // add ignoreFunctionalComponents and let TS handle optional props validation
    "react/require-default-props": [
      "error",
      {
        forbidDefaultForRequired: true,
        ignoreFunctionalComponents: true,
      },
    ],
    // standardize usage of array types
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    // either association is fine, override the requirement to have both
    "jsx-a11y/label-has-associated-control": [
      "error",
      { assert: "either", depth: 25 },
    ],
    // when debugging, use console.log and disallow it here so it does not make it to prod
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    // rules to simplify code in Nerdearla presentation:
  },
  overrides: [
    {
      files: "*.js",
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
        "@typescript-eslint/no-unsafe-return": 0,
        "@typescript-eslint/no-unsafe-call": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/restrict-plus-operands": 0,
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          { allowAny: true },
        ],
        "import/no-dynamic-require": 0,
        "global-require": 0,
      },
    },
    {
      files: "*.d.ts",
      rules: {
        "import/no-default-export": 0,
      },
    },
    {
      files: "index.ts",
      rules: {
        "sort-exports/sort-exports": "error",
      },
    },
    {
      files: "*.test.*",
      rules: {
        // when testing, sometimes we assume something exists
        // and there's no need to handle it because it would fail the test
        "@typescript-eslint/no-non-null-assertion": 0,
      },
    },
  ],
};

module.exports = config;
