# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

# [1.0.1] - 2017-08-10

### Changed

- `eslint`'s' `peerDependency` upgraded.

### Removed

- `ecmaFeatures.modules` is decrecaded in favour of `parserOptions.sourceType`.

# [1.0.0] - 2017-08-04

### Changed

- added `MemberExpression` and `SwitchCase` to the `indent` rule.

# [0.2.1] - 2017-06-06

### Changed

- changed `max-length` from `80` to `100`.

### [0.2.0] - 2017-04-27

### Added

- Rule: "array-bracket-spacing": ["error", "never"],
- Rule: "object-curly-spacing": ["error", "never"],
- Remove spaces between strings/variables and brackets in arrays and objects

# [0.1.0] - 2017-04-27

### Added

- `fcn/jsdoc` extention for `jsdoc` awareness.

### Changed

- changed `'` to `"`.

## [0.0.4] - 2017-04-26

### Fixed

- changed `max-length` to correct `max-len`.

## [0.0.3] - 2017-04-26

### Fixed

- `no-duplicate-imports` remove wrong second argument.

## [0.0.2] - 2017-04-26

### Added

- `comma-dangle`, `max-length`, `no-debugger`, `no-duplicate-imports`,
  `no-plusplus` and `valid-jsdoc` rules.

### Removed

- `globals` and `env` because it should be specific of each module.

## [0.0.1] - 2017-04-20

### Added

- Initial release.
