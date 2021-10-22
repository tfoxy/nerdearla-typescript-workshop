const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");
require("dotenv-extended/config");

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
  roots: ["<rootDir>/src", "<rootDir>/config"],
  testMatch: ["**/*.test.(ts|tsx|js)"],
  collectCoverageFrom: [
    "src/**/*.(ts|tsx)",
    "config/eslint/rules/*.js",
    "!**/*.d.ts",
    "!src/index.tsx",
    "!src/testUtils/**",
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(css|scss)$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|scss|json)$)":
      "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.scss$",
  ],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
    "^.+\\.module\\.scss$": "identity-obj-proxy",
  },
  moduleFileExtensions: ["js", "ts", "tsx"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  resetMocks: true,
  globals: {
    "ts-jest": {
      diagnostics: false,
      isolatedModules: true,
    },
  },
};

module.exports = config;
