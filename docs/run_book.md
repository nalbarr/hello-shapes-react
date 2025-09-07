# Run book

## History

- 2023.04.07. NA. Bump up versions with yarn upgrade-interactive. Known issue for Nodejs compatibility but working arond with:
  https://levelup.gitconnected.com/how-to-fix-the-err-ossl-evp-unsupported-error-in-node-js-197082f42185
- 2025.09.07. NA. Update to pnpm for package management. Leverage pnpm update --interactive. Update Makefiles.

## pnpm migration (Javscript)

- Deprecating npm and yarn in favor of pnpm
  - Various reference that were needed to upgrade
    - https://eslint.org/docs/latest/use/getting-started
    - https://github.com/jsx-eslint/eslint-plugin-react#configuration

### Cline tasks

- **ESLint Configuration Conflicts**:

  - Removed conflicting ESLint configurations between the new flat config format and the old format
  - Created a compatible `.eslintrc.js` file that works with React Scripts 5.0.1
  - Downgraded ESLint to version 8.57.0 for compatibility

- **React 18 Deprecation Warning**:

  - Updated `src/index.js` to use the new `createRoot` API instead of the deprecated `ReactDOM.render`

- **Missing Component Display Names**:

  - Added proper `displayName` properties to all Higher Order Components (HOCs):

    - `MyInput` (forwardRef component)
    - `withSquareMods`
    - `withTriangleMods`
    - `withSquareModsRefs`

- **Problematic DOM Manipulation**:

  - Removed direct DOM manipulation code from the App component that was trying to access elements before they were rendered

- **Input Field Console Error**:

  - Added an `onChange` handler to the `MyInput` component to resolve the React warning about controlled components
