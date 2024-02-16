# Task 2

## Solution

- Make every route a folder and put the modules used exclusively by that route
  in the folder. This make things easier to find the code that is used by a
  specific route.
- Use
  [Nested Routes](https://router.vuejs.org/guide/essentials/nested-routes.html)
  to make URL segments correspond to the nested folder structure, with an
  `index.vue` file acting as the default view for the route.
- Put the shared modules outside of the route folders, e.g., `shared`. This
  makes it easier to identify shared modules where we need to be more careful in
  changing them as it might affect multiple routes.
- Put the corresponding test files in the `__test__` folder under the modules
  under tests. This makes it easier to find the test files for a specific
  module. Putting them inside a `__test__` foldder helps declutter the main
  directory, so we can afford to write as many tests (and test utilities) as we
  need without worrying about cluttering the main directory.
- For consistency, use Vue's
  [Single-File Components](https://vuejs.org/guide/scaling-up/sfc.html#single-file-components)
  for all files when applicable, even if it only contains the `script` tag. This
  makes it easier to add more features to the module in the future. e.g.,
  `Provider.vue` instead of `Provider.js`.
- Based on the same principle, the shared styles should live under the Single
  File Component of the route that uses them. This makes it easier to find the
  styles that are used by a specific route.

## Illustration

| Before                                | After                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| src/SettingsDashboardPageView.vue     | [src/routes/settings/index.vue](./src/routes/settings/index.vue)                                       |
| src/EmailSettingsWidget.vue           | [src/routes/settings/Email.vue](./src/routes/settings/Email.vue)                                       |
| src/BillingSettingsWidget.vue         | [src/routes/settings/Billing.vue](./src/routes/settings/Billing.vue)                                   |
| src/SettingsProvider.js               | [src/routes/settings/Provider.vue](./src/routes/settings/Provider.vue)                                 |
| src/SettingsSharedStyles.css          | [src/routes/settings/index.vue](./src/routes/settings/index.vue) (under the `style` tag)               |
| src/SettingsDashboardPageView.spec.js | [src/routes/settings/\_\_tests\_\_/index.test.js](./src/routes/settings/__tests__/index.test.js)       |
| src/EmailSettingsWidget.spec.js       | [src/routes/settings/\_\_tests\_\_/Email.test.js](./src/routes/settings/__tests__/Email.test.js)       |
| src/SettingsProvider.spec.js          | [src/routes/settings/\_\_tests\_\_/Provider.test.js](./src/routes/settings/__tests__/Provider.test.js) |
| N/A                                   | [src/shared/Dateutils.js](./src/shared/DateUtils.js)                                                   |

## References

- This pattern is adopted by the
  [scaling recommendation](https://remix.run/docs/en/main/file-conventions/routes#scaling)
  from Remix
- Vue's
  [Single-File Components](https://vuejs.org/guide/scaling-up/sfc.html#single-file-components)
- Vue Router's
  [Nested Routes](https://router.vuejs.org/guide/essentials/nested-routes.html)
