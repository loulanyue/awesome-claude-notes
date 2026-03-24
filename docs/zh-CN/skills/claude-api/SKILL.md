---
name: claude-api
description: Anthropic Claude API 的 Python 和 TypeScript 使用模式。涵盖 Messages API、流式处理、工具使用、视觉功能、扩展思维、批量处理、提示缓存和 Claude Agent SDK。适用于使用 Claude API 或 Anthropic SDK 构建应用程序的场景。
origin: ECC
---

# Claude API

使用 Anthropic Claude API 和 SDK 构建应用程序。

## 何时激活

* 构建调用 Claude API 的应用程序
* 代码导入 `anthropic` (Python) 或 `@anthropic-ai/sdk` (TypeScript)
* 用户询问 Claude API 模式、工具使用、流式传输或视觉功能
* 使用 Claude Agent SDK 实现智能体工作流
* 优化 API 成本、令牌使用或延迟

## 模型选择

| 模型 | ID | 最适合 |
|-------|-----|----------|
| Opus 4.1 | `claude-opus-4-1` | 复杂推理、架构设计、研究 |
| Sonnet 4 | `claude-sonnet-4-0` | 平衡的编码任务，大多数开发工作 |
| Haiku 3.5 | `claude-3-5-haiku-latest` | 快速响应、高吞吐量、成本敏感型 |

默认使用 Sonnet 4，除非任务需要深度推理（Opus）或速度/成本优化（Haiku）。对于生产环境，优先使用固定的快照 ID 而非别名。

## Python SDK

### 安装

```bash
pip install anthropic
```

### 基本消息

```python
import anthropic

client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY from env

message = client.messages.create(
    model="claude-sonnet-4-0",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Explain async/await in Python"}
    ]
)
print(message.content[0].text)
```

### 流式传输

```python
with client.messages.stream(
    model="claude-sonnet-4-0",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Write a haiku about coding"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

### 系统提示词

```python
message = client.messages.create(
    model="claude-sonnet-4-0",
    max_tokens=1024,
    system="You are a senior Python developer. Be concise.",
    messages=[{"role": "user", "content": "Review this function"}]
)
```

## TypeScript SDK

### 安装

```bash
npm install @anthropic-ai/sdk
```

### 基本消息

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env

const message = await client.messages.create({
  model: "claude-sonnet-4-0",
  max_tokens: 1024,
  messages: [
    { role: "user", content: "Explain async/await in TypeScript" }
  ],
});
console.log(message.content[0].text);
```

### 流式传输

```typescript
const stream = client.messages.stream({
  model: "claude-sonnet-4-0",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Write a haiku" }],
});

for await (const event of stream) {
  if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
    process.stdout.write(event.delta.text);
  }
}
```

## 工具使用

定义工具并让 Claude 调用它们：

```python
tools = [
    {
        "name": "get_weather",
        "description": "Get current weather for a location",
        "input_schema": {
            "type": "object",
            "properties": {
                "location": {"type": "string", "description": "City name"},
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}
            },
            "required": ["location"]
        }
    }
]

message = client.messages.create(
    model="claude-sonnet-4-0",
    max_tokens=1024,
    tools=tools,
    messages=[{"role": "user", "content": "What's the weather in SF?"}]
)

# Handle tool use response
for block in message.content:
    if block.type == "tool_use":
        # Execute the tool with block.input
        result = get_weather(**block.input)
        # Send result back
        follow_up = client.messages.create(
            model="claude-sonnet-4-0",
            max_tokens=1024,
            tools=tools,
            messages=[
                {"role": "user", "content": "What's the weather in SF?"},
                {"role": "assistant", "content": message.content},
                {"role": "user", "content": [
                    {"type": "tool_result", "tool_use_id": block.id, "content": str(result)}
                ]}
            ]
        )
```

## 视觉功能

发送图像进行分析：

```python
import base64

with open("diagram.png", "rb") as f:
    image_data = base64.standard_b64encode(f.read()).decode("utf-8")

message = client.messages.create(
    model="claude-sonnet-4-0",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": [
            {"type": "image", "source": {"type": "base64", "media_type": "image/png", "data": image_data}},
            {"type": "text", "text": "Describe this diagram"}
        ]
    }]
)
```

## 扩展思考

针对复杂推理任务：

```python
message = client.messages.create(
    model="claude-sonnet-4-0",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000
    },
    messages=[{"role": "user", "content": "Solve this math problem step by step..."}]
)

for block in message.content:
    if block.type == "thinking":
        print(f"Thinking: {block.thinking}")
    elif block.type == "text":
        print(f"Answer: {block.text}")
```

## 提示词缓存

缓存大型系统提示词或上下文以降低成本：

```python
message = client.messages.create(
    model="claude-sonnet-4-0",
    max_tokens=1024,
    system=[
        {"type": "text", "text": large_system_prompt, "cache_control": {"type": "ephemeral"}}
    ],
    messages=[{"role": "user", "content": "Question about the cached context"}]
)
# Check cache usage
print(f"Cache read: {message.usage.cache_read_input_tokens}")
print(f"Cache creation: {message.usage.cache_creation_input_tokens}")
```

## 批量 API

以 50% 的成本降低异步处理大量数据：

```python
import time

batch = client.messages.batches.create(
    requests=[
        {
            "custom_id": f"request-{i}",
            "params": {
                "model": "claude-sonnet-4-0",
                "max_tokens": 1024,
                "messages": [{"role": "user", "content": prompt}]
            }
        }
        for i, prompt in enumerate(prompts)
    ]
)

# Poll for completion
while True:
    status = client.messages.batches.retrieve(batch.id)
    if status.processing_status == "ended":
        break
    time.sleep(30)

# Get results
for result in client.messages.batches.results(batch.id):
    print(result.result.message.content[0].text)
```

## Claude Agent SDK

构建多步骤智能体：

```python
# Note: Agent SDK API surface may change — check official docs
import anthropic

# Define tools as functions
tools = [{
    "name": "search_codebase",
    "description": "Search the codebase for relevant code",
    "input_schema": {
        "type": "object",
        "properties": {"query": {"type": "string"}},
        "required": ["query"]
    }
}]

# Run an agentic loop with tool use
client = anthropic.Anthropic()
messages = [{"role": "user", "content": "Review the auth module for security issues"}]

while True:
    response = client.messages.create(
        model="claude-sonnet-4-0",
        max_tokens=4096,
        tools=tools,
        messages=messages,
    )
    if response.stop_reason == "end_turn":
        break
    # Handle tool calls and continue the loop
    messages.append({"role": "assistant", "content": response.content})
    # ... execute tools and append tool_result messages
```

## 成本优化

| 策略 | 节省幅度 | 使用时机 |
|----------|---------|-------------|
| 提示词缓存 | 缓存令牌成本降低高达 90% | 重复的系统提示词或上下文 |
| 批量 API | 50% | 非时间敏感的批量处理 |
| 使用 Haiku 而非 Sonnet | ~75% | 简单任务、分类、提取 |
| 缩短 max\_tokens | 可变 | 已知输出较短时 |
| 流式传输 | 无（成本相同） | 更好的用户体验，价格相同 |

## 错误处理

```python
import time

from anthropic import APIError, RateLimitError, APIConnectionError

try:
    message = client.messages.create(...)
except RateLimitError:
    # Back off and retry
    time.sleep(60)
except APIConnectionError:
    # Network issue, retry with backoff
    pass
except APIError as e:
    print(f"API error {e.status_code}: {e.message}")
```

## 环境设置

```bash
# Required
export ANTHROPIC_API_KEY="your-api-key-here"

# Optional: set default model
export ANTHROPIC_MODEL="claude-sonnet-4-0"
```

切勿硬编码 API 密钥。始终使用环境变量。
