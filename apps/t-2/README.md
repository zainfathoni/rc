# Task 2

## Solution

- Make every route a folder and put the modules used exclusively by that route
  in the folder. This make things easier to find the code that is used by a
  specific route.
- Put the shared modules outside of the route folders, e.g., `shared`. This
  makes it easier to identify shared modules where we need to be more careful in
  changing them as it might affect multiple routes.
- Put the corresponding test files in the `__test__` folder under the modules
  under tests. This makes it easier to find the test files for a specific
  module. Putting them inside a `__test__` foldder helps declutter the main
  directory, so we can afford to write as many tests (and test utilities) as we
  need without worrying about cluttering the main directory.

## References

- This pattern is adopted by the
  [scaling recommendation](https://remix.run/docs/en/main/file-conventions/routes#scaling)
  from Remix
