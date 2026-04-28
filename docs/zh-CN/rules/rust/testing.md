---
source_path: rules/rust/testing.md
paths: 
---

# Rust 测试

> 本文件扩展了 [common/testing.md](../common/testing.md) 中关于 Rust 的特定内容。

## 测试框架

* **`#[test]`** 配合 `#[cfg(test)]` 模块进行单元测试
* **rstest** 用于参数化测试和夹具
* **proptest** 用于基于属性的测试
* **mockall** 用于基于特征的模拟
* **`#[tokio::test]`** 用于异步测试

## 测试组织

```text
my_crate/
├── src/
│   ├── lib.rs           # 位于 #[cfg(test)] 模块中的单元测试
│   ├── auth/
│   │   └── mod.rs       # #[cfg(test)] mod tests { ... }
│   └── orders/
│       └── service.rs   # #[cfg(test)] mod tests { ... }
├── tests/               # 集成测试（每个文件 = 独立的二进制文件）
│   ├── api_test.rs
│   ├── db_test.rs
│   └── common/          # 共享的测试工具
│       └── mod.rs
└── benches/             # Criterion 基准测试
    └── benchmark.rs
```

单元测试放在同一文件的 `#[cfg(test)]` 模块内。集成测试放在 `tests/` 目录中。

## 单元测试模式

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn creates_user_with_valid_email() {
        let user = User::new("Alice", "alice@example.com").unwrap();
        assert_eq!(user.name, "Alice");
    }

    #[test]
    fn rejects_invalid_email() {
        let result = User::new("Bob", "not-an-email");
        assert!(result.is_err());
        assert!(result.unwrap_err().to_string().contains("invalid email"));
    }
}
```

## 参数化测试

```rust
use rstest::rstest;

#[rstest]
#[case("hello", 5)]
#[case("", 0)]
#[case("rust", 4)]
fn test_string_length(#[case] input: &str, #[case] expected: usize) {
    assert_eq!(input.len(), expected);
}
```

## 异步测试

```rust
#[tokio::test]
async fn fetches_data_successfully() {
    let client = TestClient::new().await;
    let result = client.get("/data").await;
    assert!(result.is_ok());
}
```

## 使用 mockall 进行模拟

在生产代码中定义特征；在测试模块中生成模拟对象：

```rust
// Production trait — pub so integration tests can import it
pub trait UserRepository {
    fn find_by_id(&self, id: u64) -> Option<User>;
}

#[cfg(test)]
mod tests {
    use super::*;
    use mockall::predicate::eq;

    mockall::mock! {
        pub Repo {}
        impl UserRepository for Repo {
            fn find_by_id(&self, id: u64) -> Option<User>;
        }
    }

    #[test]
    fn service_returns_user_when_found() {
        let mut mock = MockRepo::new();
        mock.expect_find_by_id()
            .with(eq(42))
            .times(1)
            .returning(|_| Some(User { id: 42, name: "Alice".into() }));

        let service = UserService::new(Box::new(mock));
        let user = service.get_user(42).unwrap();
        assert_eq!(user.name, "Alice");
    }
}
```

## 测试命名

使用描述性的名称来解释场景：

* `creates_user_with_valid_email()`
* `rejects_order_when_insufficient_stock()`
* `returns_none_when_not_found()`

## 覆盖率

* 目标为 80%+ 的行覆盖率
* 使用 **cargo-llvm-cov** 生成覆盖率报告
* 关注业务逻辑 —— 排除生成的代码和 FFI 绑定

```bash
cargo llvm-cov                       # Summary
cargo llvm-cov --html                # HTML report
cargo llvm-cov --fail-under-lines 80 # Fail if below threshold
```

## 测试命令

```bash
cargo test                       # Run all tests
cargo test -- --nocapture        # Show println output
cargo test test_name             # Run tests matching pattern
cargo test --lib                 # Unit tests only
cargo test --test api_test       # Specific integration test (tests/api_test.rs)
cargo test --doc                 # Doc tests only
```

## 参考

有关全面的测试模式（包括基于属性的测试、夹具以及使用 Criterion 进行基准测试），请参阅技能：`rust-testing`。

## 原文
- [英文原文](../../../../rules/rust/testing.md)

## 导航
- [中文文档导航](../../README.md)
- [rules/README.md](../README.md)
- [贡献指南](../../../../CONTRIBUTING.md)
