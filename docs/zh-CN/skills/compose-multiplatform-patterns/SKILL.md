---
name: compose-multiplatform-patterns
description: KMP项目中的Compose Multiplatform和Jetpack Compose模式——状态管理、导航、主题化、性能优化和平台特定UI。
source_path: skills/compose-multiplatform-patterns/SKILL.md
origin: ECC
---

# Compose 多平台模式

使用 Compose Multiplatform 和 Jetpack Compose 构建跨 Android、iOS、桌面和 Web 的共享 UI 的模式。涵盖状态管理、导航、主题和性能。

## 何时启用

* 构建 Compose UI（Jetpack Compose 或 Compose Multiplatform）
* 使用 ViewModel 和 Compose 状态管理 UI 状态
* 在 KMP 或 Android 项目中实现导航
* 设计可复用的可组合项和设计系统
* 优化重组和渲染性能

## 状态管理

### ViewModel + 单一状态对象

使用单个数据类表示屏幕状态。将其暴露为 `StateFlow` 并在 Compose 中收集：

```kotlin
data class ItemListState(
    val items: List<Item> = emptyList(),
    val isLoading: Boolean = false,
    val error: String? = null,
    val searchQuery: String = ""
)

class ItemListViewModel(
    private val getItems: GetItemsUseCase
) : ViewModel() {
    private val _state = MutableStateFlow(ItemListState())
    val state: StateFlow<ItemListState> = _state.asStateFlow()

    fun onSearch(query: String) {
        _state.update { it.copy(searchQuery = query) }
        loadItems(query)
    }

    private fun loadItems(query: String) {
        viewModelScope.launch {
            _state.update { it.copy(isLoading = true) }
            getItems(query).fold(
                onSuccess = { items -> _state.update { it.copy(items = items, isLoading = false) } },
                onFailure = { e -> _state.update { it.copy(error = e.message, isLoading = false) } }
            )
        }
    }
}
```

### 在 Compose 中收集状态

```kotlin
@Composable
fun ItemListScreen(viewModel: ItemListViewModel = koinViewModel()) {
    val state by viewModel.state.collectAsStateWithLifecycle()

    ItemListContent(
        state = state,
        onSearch = viewModel::onSearch
    )
}

@Composable
private fun ItemListContent(
    state: ItemListState,
    onSearch: (String) -> Unit
) {
    // Stateless composable — easy to preview and test
}
```

### 事件接收器模式

对于复杂屏幕，使用密封接口表示事件，而非多个回调 lambda：

```kotlin
sealed interface ItemListEvent {
    data class Search(val query: String) : ItemListEvent
    data class Delete(val itemId: String) : ItemListEvent
    data object Refresh : ItemListEvent
}

// In ViewModel
fun onEvent(event: ItemListEvent) {
    when (event) {
        is ItemListEvent.Search -> onSearch(event.query)
        is ItemListEvent.Delete -> deleteItem(event.itemId)
        is ItemListEvent.Refresh -> loadItems(_state.value.searchQuery)
    }
}

// In Composable — single lambda instead of many
ItemListContent(
    state = state,
    onEvent = viewModel::onEvent
)
```

## 原文
- [英文原文](../../../../skills/compose-multiplatform-patterns/SKILL.md)

## 导航
- [中文文档导航](../../README.md)
- [贡献指南](../../../../CONTRIBUTING.md)
