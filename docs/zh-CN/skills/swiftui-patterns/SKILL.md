---
name: swiftui-patterns
description: SwiftUI 架构模式，使用 @Observable 进行状态管理，视图组合，导航，性能优化，以及现代 iOS/macOS UI 最佳实践。
source_path: skills/swiftui-patterns/SKILL.md
---

# SwiftUI 模式

适用于 Apple 平台的现代 SwiftUI 模式，用于构建声明式、高性能的用户界面。涵盖 Observation 框架、视图组合、类型安全导航和性能优化。

## 何时激活

* 构建 SwiftUI 视图和管理状态时（`@State`、`@Observable`、`@Binding`）
* 使用 `NavigationStack` 设计导航流程时
* 构建视图模型和数据流时
* 优化列表和复杂布局的渲染性能时
* 在 SwiftUI 中使用环境值和依赖注入时

## 状态管理

### 属性包装器选择

选择最适合的最简单包装器：

| 包装器 | 使用场景 |
|---------|----------|
| `@State` | 视图本地的值类型（开关、表单字段、Sheet 展示） |
| `@Binding` | 指向父视图 `@State` 的双向引用 |
| `@Observable` 类 + `@State` | 拥有多个属性的自有模型 |
| `@Observable` 类（无包装器） | 从父视图传递的只读引用 |
| `@Bindable` | 指向 `@Observable` 属性的双向绑定 |
| `@Environment` | 通过 `.environment()` 注入的共享依赖项 |

### @Observable ViewModel

使用 `@Observable`（而非 `ObservableObject`）—— 它跟踪属性级别的变更，因此 SwiftUI 只会重新渲染读取了已变更属性的视图：

```swift
@Observable
final class ItemListViewModel {
    private(set) var items: [Item] = []
    private(set) var isLoading = false
    var searchText = ""

    private let repository: any ItemRepository

    init(repository: any ItemRepository = DefaultItemRepository()) {
        self.repository = repository
    }

    func load() async {
        isLoading = true
        defer { isLoading = false }
        items = (try? await repository.fetchAll()) ?? []
    }
}
```

### 消费 ViewModel 的视图

```swift
struct ItemListView: View {
    @State private var viewModel: ItemListViewModel

    init(viewModel: ItemListViewModel = ItemListViewModel()) {
        _viewModel = State(initialValue: viewModel)
    }

    var body: some View {
        List(viewModel.items) { item in
            ItemRow(item: item)
        }
        .searchable(text: $viewModel.searchText)
        .overlay { if viewModel.isLoading { ProgressView() } }
        .task { await viewModel.load() }
    }
}
```

### 环境注入

用 `@Environment` 替换 `@EnvironmentObject`：

```swift
// Inject
ContentView()
    .environment(authManager)

// Consume
struct ProfileView: View {
    @Environment(AuthManager.self) private var auth

    var body: some View {
        Text(auth.currentUser?.name ?? "Guest")
    }
}
```

## 视图组合

### 提取子视图以限制失效

将视图拆分为小型、专注的结构体。当状态变更时，只有读取该状态的子视图会重新渲染：

```swift
struct OrderView: View {
    @State private var viewModel = OrderViewModel()

    var body: some View {
        VStack {
            OrderHeader(title: viewModel.title)
            OrderItemList(items: viewModel.items)
            OrderTotal(total: viewModel.total)
        }
    }
}
```

### 用于可复用样式的 ViewModifier

```swift
struct CardModifier: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding()
            .background(.regularMaterial)
            .clipShape(RoundedRectangle(cornerRadius: 12))
    }
}

extension View {
    func cardStyle() -> some View {
        modifier(CardModifier())
    }
}
```

## 原文
- [英文原文](../../../../skills/swiftui-patterns/SKILL.md)

## 导航
- [中文文档导航](../../README.md)
- [贡献指南](../../../../CONTRIBUTING.md)
