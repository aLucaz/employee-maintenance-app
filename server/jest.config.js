const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/*.test.ts"],
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
  coveragePathIgnorePatterns: [
    "<rootDir>/src/resources",
    "<rootDir>/src/department/application",
    "<rootDir>/src/department/infrastructure",
    "<rootDir>/src/employee/application",
    "<rootDir>/src/employee/infrastructure",
  ]
};