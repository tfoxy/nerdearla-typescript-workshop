/**
 * @type {Partial<import('stylelint').Configuration>}
 */
const config = {
  extends: [
    "stylelint-config-sass-guidelines",
    "stylelint-config-property-sort-order-smacss",
    "stylelint-prettier/recommended",
  ],
  ignoreFiles: ["**", "**/.*", "!**/*.scss"],
  rules: {
    // override from stylelint-config-sass-guidelines
    "order/properties-alphabetical-order": null,
    "max-nesting-depth": 4,
    "selector-max-compound-selectors": 4,
    // css-modules
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: [
          "export",
          "import",
          "global",
          "local",
          "external",
        ],
      },
    ],
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]*$",
      {
        message:
          "Selector should be written in camel case (selector-class-pattern)",
      },
    ],
  },
};

module.exports = config;
