# awesome-claude-notes

> 💫 帮助你快速上手**规格驱动开发**的工具包
>
> Toolkit to help you get started with Spec-Driven Development

<p align="center">
  <img src="https://img.shields.io/badge/Spec--Driven-Development-orange" alt="Spec-Driven Development" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/lang-中文%20%7C%20EN-blue" alt="Language" />
</p>

---

## 📖 简介 | Introduction

`awesome-claude-notes` 是一个精心整理的笔记与资源合集，专注于借助 **Claude AI** 实践**规格驱动开发（Spec-Driven Development）**。

无论你是刚刚接触 SDD，还是希望将 Claude 深度融入开发流程，这里都能找到实用的提示词、模板和最佳实践。

> A curated collection of notes, prompts, and resources for practicing Spec-Driven Development with Claude AI.

---

## 🗂️ 目录 | Table of Contents

- [什么是规格驱动开发](#-什么是规格驱动开发--what-is-spec-driven-development)
- [快速开始](#-快速开始--quick-start)
- [笔记合集](#-笔记合集--notes)
- [提示词模板](#-提示词模板--prompt-templates)
- [最佳实践](#-最佳实践--best-practices)
- [工具推荐](#-工具推荐--tools)
- [参考资源](#-参考资源--references)
- [贡献指南](#-贡献指南--contributing)

---

## 💡 什么是规格驱动开发 | What is Spec-Driven Development

**规格驱动开发（Spec-Driven Development，SDD）** 是一种以清晰、可执行的规格文档为核心驱动力的软件开发方法。

| 阶段 | 描述 |
|------|------|
| 📝 **定义规格** | 在编码前，用自然语言或结构化格式写清楚「要做什么」 |
| 🤖 **AI 辅助实现** | 将规格喂给 Claude，生成代码、测试或文档 |
| ✅ **验证一致性** | 确保实现与规格保持对齐 |
| 🔄 **迭代优化** | 基于反馈更新规格，驱动下一轮迭代 |

---

## 🚀 快速开始 | Quick Start

```bash
# 克隆项目
git clone https://github.com/your-username/awesome-claude-notes.git
cd awesome-claude-notes

# 浏览笔记
ls notes/
```

或直接访问 [在线文档](#) 开始探索。

---

## 📚 笔记合集 | Notes

### 入门笔记
- 📄 [SDD 核心概念速查](./notes/sdd-concepts.md)
- 📄 [如何用 Claude 编写你的第一份 Spec](./notes/first-spec-with-claude.md)
- 📄 [从需求到规格的转换技巧](./notes/requirements-to-spec.md)

### 进阶笔记
- 📄 [大型项目的规格拆解策略](./notes/spec-decomposition.md)
- 📄 [Claude 多轮对话维护规格上下文](./notes/multi-turn-context.md)
- 📄 [规格 + TDD：双驱动开发实践](./notes/sdd-plus-tdd.md)

### 踩坑记录
- 📄 [常见 Spec 编写误区](./notes/common-mistakes.md)
- 📄 [Claude 理解偏差的处理方法](./notes/handling-misunderstandings.md)

---

## 🧩 提示词模板 | Prompt Templates

### 生成规格文档

```
你是一名资深软件架构师。请根据以下需求，生成一份结构化的规格文档（Spec）：

需求描述：{需求描述}

规格文档需包含：
1. 功能概述
2. 输入 / 输出定义
3. 边界条件与异常处理
4. 验收标准（Acceptance Criteria）
```

### 基于规格生成代码

```
请严格按照以下规格实现代码，不要超出规格范围：

{规格文档内容}

技术栈：{技术栈}
输出：仅输出代码，附带必要注释。
```

### 规格评审

```
请作为代码审查员，检查以下实现是否完整覆盖了规格要求，并列出差异：

规格：{规格}
实现：{代码}
```

---

## ✨ 最佳实践 | Best Practices

1. **规格先行** — 永远在写代码前完成规格，哪怕只是粗稿
2. **原子化规格** — 每份规格只描述一个职责，便于 Claude 精准理解
3. **明确验收标准** — 用「Given / When / Then」格式写验收条件
4. **版本化规格** — 将 Spec 文件纳入 Git 管理，与代码同步演进
5. **人工复审** — Claude 的输出需要人工验证是否忠实于规格

---

## 🛠️ 工具推荐 | Tools

| 工具 | 用途 | 链接 |
|------|------|------|
| Claude | AI 规格理解与代码生成 | [claude.ai](https://claude.ai) |
| Cursor | AI 辅助编辑器，支持 Spec 上下文 | [cursor.sh](https://cursor.sh) |
| Markdown | 规格文档编写格式 | — |
| OpenAPI / JSON Schema | 接口规格标准格式 | — |
| Gherkin | 验收标准描述语言 | — |

---

## 📎 参考资源 | References

- [Anthropic Claude 官方文档](https://docs.anthropic.com)
- [Prompt Engineering 指南](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)

---

## 🤝 贡献指南 | Contributing

欢迎提交笔记、模板或最佳实践！

1. Fork 本仓库
2. 新建分支：`git checkout -b feat/your-note`
3. 提交改动：`git commit -m 'add: 你的笔记标题'`
4. 发起 Pull Request

请确保内容原创、结构清晰，中英双语更佳 🌏

---

## 📄 License

[MIT](./LICENSE) © 2025 awesome-claude-notes contributors
