---
source_path: rules/cpp/hooks.md
paths: 
---
# C++ Hooks

> This file extends [common/hooks.md](../common/hooks.md) with C++ specific content.

## Build Hooks

Run these checks before committing C++ changes:

```bash
# Format check
clang-format --dry-run --Werror src/*.cpp src/*.hpp

# Static analysis
clang-tidy src/*.cpp -- -std=c++17

# Build
cmake --build build

# Tests
ctest --test-dir build --output-on-failure
```

## Recommended CI Pipeline

1. **clang-format** — formatting check
2. **clang-tidy** — static analysis
3. **cppcheck** — additional analysis
4. **cmake build** — compilation
5. **ctest** — test execution with sanitizers

## 원문
- [영문 원문](../../../../rules/cpp/hooks.md)

## 탐색
- [한국어 문서 안내](../../README.md)
- [rules/README.md](../README.md)
- [기여 가이드](../../../../CONTRIBUTING.md)
