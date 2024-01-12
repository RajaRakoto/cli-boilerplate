# node-typescript-boilerplate

Developer Ready: A comprehensive template. Works out of the box for most Node.js projects. 
This project is intended to be used with the latest Active LTS release of Node.js.

Instant Value - All basic tools included and configured:

- Typescript 
- ESM
- ESlint with some initial rules recommendation
- Jest for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- Prettier to enforce consistent code style
- NPM scripts for common operations
- EditorConfig for consistent coding style
- Reproducible environments thanks to Volta
- Example configuration for GitHub Actions
- Simple example of TypeScript code and unit test
- Run tasks with Grunt (example for backup)
- Build faster with ESBuild

---

### Using

To use this template, use the following commands:

```bash
git clone https://github.com/RajaRakoto/node-typescript-boilerplate
cd node-typescript-boilerplate
pnpm install
```

> NOTE: you can use `npm` or `yarn` instead of `pnpm`

---

### Scripts

- `clean` - remove coverage data, Jest cache and transpiled files
- `dev:watch` - interactive watch mode to automatically run source files with nodemon
- `build` - transpile TypeScript to ES6
- `build:watch` - interactive watch mode to automatically transpile source files
- `build:bundle` - bundle source files with ESBuild
- `test` - run tests
- `test:watch` - interactive watch mode to automatically re-run tests
- `eslint` - lint source files and tests with ESLint
- `prettier` - reformat files
- `backup` - backup files with Grunt
- `npm-check` - check for outdated, incorrect, and unused dependencies
- `npm-upgrade` - upgrade outdated dependencies
