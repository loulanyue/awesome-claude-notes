# awesome claude notes

## 语言

- 简体中文（当前）
- [简体中文镜像](README.zh-CN.md)
- [Português (Brasil)](docs/pt-BR/README.md)
- [繁體中文](docs/zh-TW/README.md)
- [日本語](docs/ja-JP/README.md)
- [한국어](docs/ko-KR/README.md)
- [Türkçe](docs/tr/README.md)

[![Stars](https://img.shields.io/github/stars/loulanyue/awesome-claude-notes?style=flat)](https://github.com/loulanyue/awesome-claude-notes/stargazers)
[![Forks](https://img.shields.io/github/forks/loulanyue/awesome-claude-notes?style=flat)](https://github.com/loulanyue/awesome-claude-notes/network/members)
[![Contributors](https://img.shields.io/github/contributors/loulanyue/awesome-claude-notes?style=flat)](https://github.com/loulanyue/awesome-claude-notes/graphs/contributors)
[![npm ecc-universal](https://img.shields.io/npm/dw/ecc-universal?label=ecc-universal%20weekly%20downloads&logo=npm)](https://www.npmjs.com/package/ecc-universal)
[![npm ecc-agentshield](https://img.shields.io/npm/dw/ecc-agentshield?label=ecc-agentshield%20weekly%20downloads&logo=npm)](https://www.npmjs.com/package/ecc-agentshield)
[![GitHub App Install](https://img.shields.io/badge/GitHub%20App-150%20installs-2ea44f?logo=github)](https://github.com/marketplace/ecc-tools)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> 一套面向 Claude Code 与多种 AI coding harness 的生产级工作流资产库。

把 AI coding agent 从“偶尔好用”，推进到“稳定可复用”。

awesome claude notes 提供已经打磨过的 agents、skills、commands、rules、hooks、
MCP configs 和跨平台脚本，帮助你更快搭起一套可落地的 agent harness，而不是从零
拼装目录、提示词和自动化流程。

## 为什么会用它

你通常会在下面这些场景里需要这个仓库：

- 你想快速得到一套能直接落地的 Claude Code 工作流。
- 你需要的不只是提示词，而是一整套 agents、rules、hooks 和 commands。
- 你希望同一套方法可以覆盖 Claude Code、Cursor、Codex、OpenCode 等工具。

## 你会得到什么

- **更快开始**：直接复用现成的目录结构、命令和默认约束。
- **更稳的工作流**：把常见的开发、评审、测试和安全检查沉淀成可重复流程。
- **更少重复搭建**：不用自己从头整理 agents、skills、rules、hooks 和 MCP 配置。
- **更好的跨工具迁移**：同一套资产可复用到多个 agent / IDE / CLI 组合中。

> 说明：当前仓库默认以中文作为根 README 展示，`README.zh-CN.md`
> 为同步镜像；旧资料里出现的历史仓库名通常只是旧截图或旧安装残留。

## 2 分钟开始

推荐路径只保留一条：先安装插件，再安装你当前语言需要的规则和命令。

### 1. 安装插件

```bash
/plugin marketplace add loulanyue/awesome-claude-notes
/plugin install awesome-claude-notes@awesome-claude-notes
```

### 2. 安装语言资产

> Claude Code 插件不会自动分发 `rules`，所以这一步仍然必需。

```bash
git clone https://github.com/loulanyue/awesome-claude-notes.git
cd awesome-claude-notes
npm install
npx ecc typescript
```

可替换语言示例：`python`、`golang`、`swift`、`php`。
兼容旧入口：`npx ecc-install typescript`。

### 3. 直接开始用

```bash
/awesome-claude-notes:plan "Add user authentication"
```

如果你是手动安装命令，也可以直接使用：
`/plan "Add user authentication"`。

## 资源规模一览

| Capability | Coverage | Notes |
| --- | --- | --- |
| Agents | ✅ 28 agents | Planner, architect, reviewer, resolver, and domain specialists |
| Commands | ✅ 60 commands | Slash commands for planning, TDD, review, and orchestration |
| Skills | ✅ 125 skills | Workflow, engineering, domain, and platform knowledge modules |

## 接下来该看哪份文档

- **想先判断项目是否适合你**：[`the-shortform-guide.md`](the-shortform-guide.md)
- **想系统理解方法论**：[`the-longform-guide.md`](the-longform-guide.md)
- **想看安全与防护重点**：[`the-security-guide.md`](the-security-guide.md)
- **想看完整安装、平台和扩展说明**：[`docs/zh-CN/README.md`](docs/zh-CN/README.md)
- **想按模块选择性安装**：
  [`docs/SELECTIVE-INSTALL-ARCHITECTURE.md`](docs/SELECTIVE-INSTALL-ARCHITECTURE.md)
  （当前主要为英文）
- **想查看最近版本变化**：
  [`Releases`](https://github.com/loulanyue/awesome-claude-notes/releases)
- **安装或运行遇到问题**：[`TROUBLESHOOTING.md`](TROUBLESHOOTING.md)

## 仓库里包含什么

这个仓库的核心目录与能力如下：

- `agents/`：专用子代理，例如 planner、architect、code-reviewer、build resolver。
- `skills/`：工作流定义与领域知识模块。
- `commands/`：可直接调用的 slash commands，如 `/plan`、`/tdd`、`/code-review`。
- `hooks/`：基于工具和生命周期事件的自动化。
- `rules/`：始终生效的公共规则与语言专属规则。
- `mcp-configs/`：外部集成所需的 MCP 配置。
- `scripts/`：跨平台 Node.js 安装与运维脚本。
- `tests/`：脚本与安装器的验证用例。

从 `package.json` 当前发布内容看，仓库同时覆盖 Claude、Cursor、Codex、
OpenCode 相关资产，以及 `ecc` / `ecc-install` 两个 CLI 入口。

## 平台支持摘要

- **Claude Code**：推荐主路径，插件、commands、hooks、rules 支持最完整。
- **Cursor**：提供适配后的 rules、skills、commands 与相关配置。
- **Codex**：提供 `.codex/` 与 `AGENTS.md` 体系，约束能力更依赖说明文件和沙箱配置。
- **OpenCode**：提供对应 commands、instructions、plugins 与工具层适配。
- **操作系统**：脚本基于 Node.js，面向 macOS、Linux、Windows。

## 精简 FAQ

### 为什么安装插件后还要执行 `npx ecc <language>`？

因为 Claude Code 插件本身不能自动分发 `rules`。
推荐保留插件安装，再用 `npx ecc <language>` 安装当前语言所需资产。

### 可以只装一部分吗？

可以。选择性安装入口保留为：
`npx ecc install --profile ...` 或 `npx ecc install --modules ...`。
详细说明见
[`docs/SELECTIVE-INSTALL-ARCHITECTURE.md`](docs/SELECTIVE-INSTALL-ARCHITECTURE.md)。

### 可以完全手动安装吗？

可以。如果你希望自己管理 `~/.claude/agents/`、`~/.claude/rules/`、
`~/.claude/commands/`、`~/.claude/skills/`，请参考完整说明：
[`docs/zh-CN/README.md`](docs/zh-CN/README.md)。

### 遇到 `Duplicate hooks file` 怎么办？

最常见原因是在 `.claude-plugin/plugin.json` 里手动声明了 `"hooks"` 字段。
Claude Code v2.1+ 会自动加载插件中的 `hooks/hooks.json`，删除重复声明即可。

### 需要什么环境？

Node.js 版本要求见 `package.json`（`>=18`）。
文档校验入口为 `npm run lint`，完整校验可运行 `npm test`。

## 贡献与许可

- 贡献指南：[`CONTRIBUTING.md`](CONTRIBUTING.md)
- 安全说明：[`SECURITY.md`](SECURITY.md)
- 许可证：[`LICENSE`](LICENSE)

MIT。欢迎按现有目录约定贡献新的 agents、skills、commands、hooks、rules、
文档和翻译。

---

<a id="star-history"></a>
## ⭐ Star History

<a href="https://www.star-history.com/?repos=loulanyue%2Fawesome-claude-notes&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=loulanyue/awesome-claude-notes&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=loulanyue/awesome-claude-notes&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=loulanyue/awesome-claude-notes&type=date&legend=top-left" />
 </picture>
</a>

