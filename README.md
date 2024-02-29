# cli-boilerplate 🚀

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com) 

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

**Developer Ready: A versatile template designed to jumpstart CLI development with Inquirer.js in TypeScript. Engineered to seamlessly integrate with various CLI projects, ensuring smooth compatibility with a pre-configured environment**

Instant Value - All basic tools included and configured:

- 🚀 Typescript >= 5.3
- 🧅 Bun.js >= 1.0.26
- 🧅 Use Bun as package manager
- 🔳 Inquirer.js >= 9.2.15
- 🌈 ESM
- 🧹 ESlint with some initial rules recommendation
- ✅ Jest or Bun test for fast unit testing and code coverage
- 📚 Type definitions for Bun.js and Jest
- 🎨 Prettier to enforce consistent code style
- ⚙️ EditorConfig for consistent coding style
- 📦 NPM scripts for common operations
- 📝 Simple example of TypeScript code and unit test
- 🐗 Run tasks with Grunt (example for backup)
- 🚄 Build faster
- 🖥️ Ungit for version control (git) with a GUI
- 📘 Runtime library for TypeScript helpers with tslib
- 🗃️ Utility functions for working with ts-api-utils

---

### 📌 Using 

To use this template, use the following commands:

```bash
curl -fsSL https://bun.sh/install | bash # if you don't have bun installed
bun create github.com/RajaRakoto/cli-boilerplate <project-name>
cd <project-name>
bun run pkg-upgrade # to upgrade outdated dependencies in interactive mode
```

> NOTE: I use MIT license for this starter which contains my name and my github profile, don't forget to modify it
> Similarly, for certain configurations in the package.json file, you need to modify them to tailor them to your project (e.g., name, description, author, keywords, main, repository, ...).

---

### 📌 Scripts 

- 📜 `start` - run your application with bun
- 📜 `start:smol` - run your application with bun and a flag which configures the JavaScriptCore heap size to be smaller and grow slower ...
- 📜 `start:bin` - run your standalone binary app
- 📜 `clean` - remove coverage data, prod, build ...
- 📜 `dev` - execute app in a development environment, useful for seeing normal app behavior without interactive watch mode
- 📜 `dev:watch` - interactive watch mode to automatically transpile source files with bun in development
- 📜 `dev:hot` - hot reloading of source files with bun in development
- 📜 `dev:smol:watch` - interactive watch mode to automatically transpile source files with bun in development, while using --smol flag
- 📜 `dev:smol:hot` - hot reloading source files with bun in development, while using --smol flag
- 📜 `build` - transpile and bundle source files with bun
- 📜 `build:watch` - interactive watch mode to automatically transpile source files with bun
- 📜 `build:bin` - bun's bundler implements a --compile flag for generating a standalone binary from a TypeScript or JavaScript file, use this in your production environment to ensure optimal execution of your app.
- 📜 `test` - run bun test
- 📜 `test:watch` - interactive watch mode to automatically re-run tests with bun
- 📜 `eslint` - lint source files with ESlint
- 📜 `prettier` - reformat source files with Prettier
- 📜 `backup` - backup files with Grunt
- 📜 `pkg-check` - check useless dependencies with depcheck
- 📜 `pkg-upgrade` - upgrade outdated dependencies (interactive mode) with npm-check-updates
- 📜 `versioning` - start ungit server 
- 📜 `version-major`: Increments the major version number of your project
- 📜 `version-minor`: Increments the minor version number of your project
- 📜 `version-patch`: Increments the version patch number of your project

---

### 📌 Similar

You can also check out my other starter projects:

- 🚀 [node-boilerplate](https://github.com/RajaRakoto/node-boilerplate)
- 🚀 [bun-boilerplate](https://github.com/RajaRakoto/bun-boilerplate)
- 🚀 [react-boilerplate](https://github.com/RajaRakoto/react-boilerplate)
- 🚀 [next-boilerplate](https://github.com/RajaRakoto/next-boilerplate)
- 🚀 [quik-boilerplate](https://github.com/RajaRakoto/quik-boilerplate)
- 🚀 [vscode-boilerplate](https://github.com/RajaRakoto/vscode-boilerplate)