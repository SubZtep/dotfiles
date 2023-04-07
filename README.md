# dotfiles

Monorepo for my default configs.

## Packages

### ESLint

1. Install package:

   ```sh
   pnpm add -D eslint-plugin-subztep
   ```

2. Create `.eslintrc` file in your project root with the following content:

   ```yaml
   root: true
   extends:
     - plugin:subztep/recommended
   ```

3. Install peer dependencies:

   ```sh
   $ npx install-peerdeps --dev eslint-plugin-subztep
   ```

### Prettier

1. Install package:

   ```sh
   pnpm add -D prettier-config-subztep
   ```

2. Create `.prettierrc` file in your project root with the following content:

   ```yaml
   "prettier-config-subztep"
   ```

3. Install peer dependencies:

   ```sh
   $ npx install-peerdeps --dev prettier-config-subztep
   ```
