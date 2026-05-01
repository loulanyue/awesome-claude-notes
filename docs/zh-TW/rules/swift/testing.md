---
source_path: rules/swift/testing.md
paths: 
---
# Swift Testing

> This file extends [common/testing.md](../common/testing.md) with Swift specific content.

## Framework

Use **Swift Testing** (`import Testing`) for new tests. Use `@Test` and `#expect`:

```swift
@Test("User creation validates email")
func userCreationValidatesEmail() throws {
    #expect(throws: ValidationError.invalidEmail) {
        try User(email: "not-an-email")
    }
}
```

## Test Isolation

Each test gets a fresh instance — set up in `init`, tear down in `deinit`. No shared mutable state between tests.

## Parameterized Tests

```swift
@Test("Validates formats", arguments: ["json", "xml", "csv"])
func validatesFormat(format: String) throws {
    let parser = try Parser(format: format)
    #expect(parser.isValid)
}
```

## Coverage

```bash
swift test --enable-code-coverage
```

## Reference

See skill: `swift-protocol-di-testing` for protocol-based dependency injection and mock patterns with Swift Testing.

## 原文
- [英文原文](../../../../rules/swift/testing.md)

## 導航
- [繁體中文文件導航](../../README.md)
- [rules/README.md](../README.md)
- [貢獻指南](../../../../CONTRIBUTING.md)
