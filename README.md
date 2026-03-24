**语言：** 简体中文（当前） | [简体中文镜像](README.zh-CN.md) | [Português (Brasil)](docs/pt-BR/README.md) | [繁體中文](docs/zh-TW/README.md) | [日本語](docs/ja-JP/README.md) | [한국어](docs/ko-KR/README.md) | [Türkçe](docs/tr/README.md)

# Everything Claude Code

[![Stars](https://img.shields.io/github/stars/affaan-m/everything-claude-code?style=flat)](https://github.com/affaan-m/everything-claude-code/stargazers)
[![Forks](https://img.shields.io/github/forks/affaan-m/everything-claude-code?style=flat)](https://github.com/affaan-m/everything-claude-code/network/members)
[![Contributors](https://img.shields.io/github/contributors/affaan-m/everything-claude-code?style=flat)](https://github.com/affaan-m/everything-claude-code/graphs/contributors)
[![npm ecc-universal](https://img.shields.io/npm/dw/ecc-universal?label=ecc-universal%20weekly%20downloads&logo=npm)](https://www.npmjs.com/package/ecc-universal)
[![npm ecc-agentshield](https://img.shields.io/npm/dw/ecc-agentshield?label=ecc-agentshield%20weekly%20downloads&logo=npm)](https://www.npmjs.com/package/ecc-agentshield)
[![GitHub App Install](https://img.shields.io/badge/GitHub%20App-150%20installs-2ea44f?logo=github)](https://github.com/marketplace/ecc-tools)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Shell](https://img.shields.io/badge/-Shell-4EAA25?logo=gnu-bash&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white)
![Go](https://img.shields.io/badge/-Go-00ADD8?logo=go&logoColor=white)
![Java](https://img.shields.io/badge/-Java-ED8B00?logo=openjdk&logoColor=white)
![Perl](https://img.shields.io/badge/-Perl-39457E?logo=perl&logoColor=white)
![Markdown](https://img.shields.io/badge/-Markdown-000000?logo=markdown&logoColor=white)

> **50K+ stars** | **6K+ forks** | **30 contributors** | **7 种语言支持** | **Anthropic Hackathon 获奖项目**

---

**面向 AI agent harness 的性能优化系统。**

这不只是配置集合，而是一整套围绕 AI 编程代理工作流打造的生产级体系：技能、子代理、命令、规则、hooks、MCP 配置、持续学习、上下文压缩、安全审计，以及研究优先的开发方法。

它适用于 **Claude Code**、**Codex**、**Cowork**、**Cursor**、**OpenCode** 等多种代理平台或 IDE / CLI 组合。

> 说明：当前仓库默认以中文作为根 README 展示，`README.zh-CN.md` 为同步镜像，旧的 `docs/zh-CN/README.md` 保留为兼容入口。

---

## 指南

这个仓库更像“原始资产库”，真正解释理念与方法的内容主要在指南里。

<table>
<tr>
<td width="33%">
<a href="https://x.com/affaanmustafa/status/2012378465664745795">
<img src="./assets/images/guides/shorthand-guide.png" alt="Everything Claude Code 简明指南" />
</a>
</td>
<td width="33%">
<a href="https://x.com/affaanmustafa/status/2014040193557471352">
<img src="./assets/images/guides/longform-guide.png" alt="Everything Claude Code 长文指南" />
</a>
</td>
<td width="33%">
<a href="https://x.com/affaanmustafa/status/2033263813387223421">
<img src="./assets/images/security/security-guide-header.png" alt="Agentic 安全指南" />
</a>
</td>
</tr>
<tr>
<td align="center"><b>简明指南</b><br/>安装、基础理念、总体方法。<b>建议先看。</b></td>
<td align="center"><b>长文指南</b><br/>Token 优化、记忆持久化、评估体系、并行协作。</td>
<td align="center"><b>安全指南</b><br/>攻击面、沙箱、净化、CVE、AgentShield。</td>
</tr>
</table>

| 主题 | 你会学到什么 |
|------|--------------|
| Token 优化 | 模型选择、系统提示精简、后台进程控制 |
| 记忆持久化 | 跨会话自动保存 / 加载上下文的 hooks |
| 持续学习 | 从会话中自动提取可复用模式并沉淀为技能 |
| 验证闭环 | checkpoint、持续 eval、grader 类型、pass@k |
| 并行化 | Git worktrees、级联方法、何时扩展多实例 |
| 子代理编排 | 上下文不足问题、迭代式检索模式 |

---

## 最近更新

### v1.9.0 — 选择性安装与语言扩展（2026 年 3 月）

- 新增基于 manifest 的选择性安装架构，支持增量更新与状态跟踪
- 新增 6 个 reviewer / build resolver 代理，语言覆盖扩大到 10+
- 增加 PyTorch、文档检索、Bun、Next.js Turbopack 等新技能
- 引入 SQLite 状态存储、会话适配器与技能自进化基础设施
- 强化 orchestration、observer 可靠性和 CI

### v1.8.0 — Harness Performance System（2026 年 3 月）

- 项目定位从“配置包”升级为“agent harness 性能系统”
- 重构 hooks 可靠性与脚本运行方式
- 增加 `/harness-audit`、`/loop-start`、`/quality-gate`、`/model-route`
- NanoClaw v2、跨平台兼容性增强

### v1.7.0 — 跨平台扩展与演示生成（2026 年 2 月）

- 支持 Codex App + CLI
- 新增 `frontend-slides` 等业务 / 内容技能
- 强化 Cursor、Codex、OpenCode 多平台覆盖

### v1.6.0 — Codex CLI、AgentShield 与 Marketplace（2026 年 2 月）

- 新增 Codex CLI 支持
- 集成 AgentShield 安全扫描
- 上线 GitHub Marketplace

更多版本说明见 [Releases](https://github.com/affaan-m/everything-claude-code/releases)。

---

## 🚀 快速开始

2 分钟内快速上手：

### 步骤 1：安装插件

```bash
# 添加 marketplace
/plugin marketplace add affaan-m/everything-claude-code

# 安装插件
/plugin install everything-claude-code@everything-claude-code
```

### 步骤 2：安装规则（必需）

> ⚠️ Claude Code 插件本身不能自动分发 `rules`，需要手动安装。

```bash
git clone https://github.com/affaan-m/everything-claude-code.git
cd everything-claude-code

# 安装依赖
npm install

# macOS / Linux
./install.sh typescript
# 或:
# ./install.sh python
# ./install.sh golang
# ./install.sh swift
# ./install.sh php
```

```powershell
# Windows PowerShell
.\install.ps1 typescript

# 也可以使用 npm 兼容入口
npx ecc-install typescript
```

### 步骤 3：开始使用

```bash
/everything-claude-code:plan "Add user authentication"

# 如果你是手动安装命令，也可以直接用短命令:
# /plan "Add user authentication"
```

✨ 安装完成后，你将获得大量 agents、skills、commands、rules 与 hooks。

---

## 🌐 跨平台支持

本项目覆盖 **Windows、macOS、Linux**，并支持多个主流 AI 编码平台：

- Claude Code
- Cursor
- Codex macOS App + CLI
- OpenCode
- Antigravity

所有 hooks 和脚本都尽量采用跨平台实现，重点使用 Node.js 以减少平台差异。

### 包管理器检测

系统会自动按以下优先级检测包管理器：

1. 环境变量 `CLAUDE_PACKAGE_MANAGER`
2. 项目级 `.claude/package-manager.json`
3. `package.json` 中的 `packageManager`
4. 锁文件
5. 全局配置 `~/.claude/package-manager.json`
6. 回退到第一个可用包管理器

示例：

```bash
export CLAUDE_PACKAGE_MANAGER=pnpm
node scripts/setup-package-manager.js --global pnpm
node scripts/setup-package-manager.js --detect
```

### Hook 运行时控制

```bash
export ECC_HOOK_PROFILE=standard
export ECC_DISABLED_HOOKS="pre:bash:tmux-reminder,post:edit:typecheck"
```

---

## 📦 仓库里有什么

这个仓库本质上是一套 **Claude Code 插件 + 通用代理工作流资产**。

### 主要目录

- `.claude-plugin/`
  插件与 marketplace 清单
- `agents/`
  专用子代理定义，例如 planner、architect、code-reviewer、security-reviewer、build resolver 等
- `skills/`
  工作流与领域知识模块，覆盖前端、后端、Python、Go、Spring Boot、Django、Laravel、Docker、评估、安全等
- `commands/`
  Slash commands，例如 `/plan`、`/tdd`、`/code-review`、`/build-fix`
- `rules/`
  常驻约束，分为 `common/` 与语言专属规则
- `hooks/`
  各类事件触发自动化
- `scripts/`
  跨平台 Node.js 脚本
- `contexts/`
  动态上下文注入
- `examples/`
  示例配置
- `mcp-configs/`
  MCP server 配置
- `tests/`
  测试套件

### 代表性能力

- 28+ specialized agents
- 100+ skills
- 60+ commands
- 多语言 rules
- 安全扫描与持续学习
- 多平台安装与适配

---

## 🛠️ 生态工具

### Skill Creator

提供两种从仓库历史自动生成技能的方式：

#### 方式 A：本地分析

```bash
/skill-create
/skill-create --instincts
```

它会分析 git 历史并生成 SKILL.md。

#### 方式 B：GitHub App

适合超大仓库、自动提 PR、团队共享：

[Install GitHub App](https://github.com/apps/skill-creator) | [ecc.tools](https://ecc.tools)

### AgentShield

用于扫描 Claude Code / agent 配置中的安全问题、注入风险与误配置。

```bash
npx ecc-agentshield scan
npx ecc-agentshield scan --fix
npx ecc-agentshield scan --opus --stream
npx ecc-agentshield init
```

它可检查：

- `CLAUDE.md`
- `settings.json`
- MCP 配置
- hooks
- agents
- skills

输出可用于终端、JSON、Markdown、HTML，且可作为 CI gate。

### Continuous Learning v2

基于 instinct 的持续学习系统：

```bash
/instinct-status
/instinct-import <file>
/instinct-export
/evolve
```

---

## 📋 环境要求

### Claude Code CLI 版本

最低要求：**v2.1.0 或更高**

```bash
claude --version
```

### Hooks 自动加载说明

> ⚠️ 对贡献者尤其重要：不要在 `.claude-plugin/plugin.json` 里显式添加 `"hooks"` 字段。

Claude Code v2.1+ 会自动加载插件中的 `hooks/hooks.json`。手动再声明会触发重复检测错误。

---

## 📥 安装方式

### 方式 1：作为插件安装（推荐）

```bash
/plugin marketplace add affaan-m/everything-claude-code
/plugin install everything-claude-code@everything-claude-code
```

你也可以直接在 `~/.claude/settings.json` 中启用 marketplace 与插件。

> 注意：rules 仍需手动安装，因为插件系统本身不支持自动分发 rules。

### 方式 2：手动安装

如果你想完全控制安装内容：

```bash
git clone https://github.com/affaan-m/everything-claude-code.git

# agents
cp everything-claude-code/agents/*.md ~/.claude/agents/

# rules
cp -r everything-claude-code/rules/common/* ~/.claude/rules/
cp -r everything-claude-code/rules/typescript/* ~/.claude/rules/

# commands
cp everything-claude-code/commands/*.md ~/.claude/commands/

# skills
cp -r everything-claude-code/.agents/skills/* ~/.claude/skills/
```

另外还需要把 `hooks/hooks.json` 和 `mcp-configs/mcp-servers.json` 中需要的内容同步到你的本地配置。

---

## 🎯 核心概念

### Agents

用于被委派的小范围任务，例如代码审查、架构设计、构建错误修复、文档查阅。

### Skills

工作流定义，可以由命令或代理调用，通常描述一组固定的方法论或步骤。

### Hooks

在工具事件发生时触发自动行为，例如：

- 编辑后自动格式化
- 提交前检查 secrets
- 执行 shell 前阻止危险行为

### Rules

始终生效的约束，通常分成：

- `common/`：语言无关规则
- `typescript/`
- `python/`
- `golang/`
- `swift/`
- `php/`

---

## 🗺️ 应该用哪个 Agent / Command

| 我想做什么 | 建议命令 | 对应能力 |
|-----------|---------|---------|
| 规划新功能 | `/plan "Add auth"` | planner |
| 测试先行开发 | `/tdd` | tdd-guide |
| 审查刚写好的代码 | `/code-review` | code-reviewer |
| 修复构建失败 | `/build-fix` | build-error-resolver |
| 跑端到端测试 | `/e2e` | e2e-runner |
| 查安全问题 | `/security-scan` | security-reviewer |
| 清理死代码 | `/refactor-clean` | refactor-cleaner |
| 更新文档 | `/update-docs` | doc-updater |

### 常见工作流

**新功能开发**

```text
/plan -> /tdd -> 实现 -> /code-review
```

**修 bug**

```text
/tdd -> 先写复现测试 -> 修复 -> /code-review
```

**发布前检查**

```text
/security-scan -> /e2e -> /test-coverage
```

---

## ❓ FAQ

### 如何查看已安装的 agents / commands / skills？

```bash
/plugin list everything-claude-code@everything-claude-code
```

### hooks 不工作，或者报 Duplicate hooks file？

最常见原因就是你手动在 `.claude-plugin/plugin.json` 中声明了 `"hooks"` 字段。删掉它。

### 可以只装一部分吗？

可以。手动安装时只复制你需要的目录即可，例如只装 agents 或只装 rules。

### 支持 Cursor / OpenCode / Codex / Antigravity 吗？

支持，而且这个项目专门做了跨工具适配。

---

## 🧪 运行测试

```bash
node tests/run-all.js
node tests/lib/utils.test.js
node tests/hooks/hooks.test.js
```

---

## 🤝 参与贡献

欢迎贡献，而且非常欢迎。

你可以贡献：

- 新 agent
- 新 skill
- 新 hooks
- 更好的 rules
- 新语言或新框架支持
- 文档和翻译

详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

## Cursor IDE 支持

项目已提供完整的 Cursor 适配，包括：

- rules
- hooks
- AGENTS.md
- skills
- commands
- MCP configs

快速开始：

```bash
./install.sh --target cursor typescript
```

---

## Codex macOS App + CLI 支持

项目也提供 Codex 的一等支持。

快速开始：

```bash
codex
npm install && bash scripts/sync-ecc-to-codex.sh
```

包含内容：

- `.codex/config.toml`
- 根目录 `AGENTS.md`
- `.codex/AGENTS.md`
- `.codex/agents/`
- 共享 skills
- MCP server 自动合并脚本

Codex 当前的主要限制是：**没有 Claude 风格的 hooks 完整对等能力**，因此更多依赖 `AGENTS.md`、sandbox 权限和 instruction 文件来实现约束。

---

## 🔌 OpenCode 支持

项目提供完整的 OpenCode 支持，包括插件与 hooks。

快速开始：

```bash
npm install -g opencode
opencode
```

OpenCode 的插件事件实际上比 Claude Code 更多，因此在某些 hook 场景下反而更强。

---

## Cross-Tool Feature Parity

ECC 的一个核心目标，就是尽可能把多种主流 AI coding tool 拉到同一个高质量工作流层级。

| 功能 | Claude Code | Cursor | Codex | OpenCode |
|------|-------------|--------|-------|----------|
| Agents | 强 | 共享 AGENTS.md | 共享 AGENTS.md | 强 |
| Commands | 强 | 共享 | 指令为主 | 强 |
| Skills | 强 | 共享 | 原生格式支持 | 强 |
| Hooks | 强 | 很强 | 弱 | 很强 |
| Rules | 强 | 强 | 指令式 | 中 |
| MCP Servers | 强 | 共享 | 支持 | 强 |

---

## 📖 背景

作者自 Claude Code 早期实验阶段起就持续使用这套体系，并在 2025 年 9 月的 Anthropic x Forum Ventures Hackathon 中获奖。相关配置已经在多个真实生产项目中长期打磨。

---

## Token 优化

如果你不主动管理 token，Claude Code 的成本会很高。这套仓库中有大量策略就是围绕“更便宜但不明显掉质”来设计的。

### 推荐设置

```json
{
  "model": "sonnet",
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}
```

| 设置 | 默认值 | 推荐值 | 作用 |
|------|--------|--------|------|
| `model` | opus | `sonnet` | 大幅降低成本 |
| `MAX_THINKING_TOKENS` | 31999 | `10000` | 降低隐藏思考成本 |
| `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` | 95 | `50` | 更早 compact，提升长会话质量 |

### 日常建议

- 默认用 Sonnet
- 复杂架构问题再切 Opus
- 无关任务之间用 `/clear`
- 在逻辑断点用 `/compact`
- 用 `/cost` 监控成本

### MCP 数量控制

不要一次启用太多 MCP。每个 MCP 工具描述都会吃上下文窗口。

- 每个项目尽量少于 10 个 MCP
- 活跃工具尽量少于 80 个

---

## ⚠️ 重要说明

### 关于自定义

这套配置并不是“必须原样照搬”。

建议方式是：

1. 先安装并运行起来
2. 保留你真正喜欢的部分
3. 删除你不会用的部分
4. 再逐步加上你自己的模式

---

## 💜 Sponsors

[成为赞助者](https://github.com/sponsors/affaan-m) | [赞助档位](SPONSORS.md) | [赞助说明](SPONSORING.md)

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=affaan-m/everything-claude-code&type=Date)](https://star-history.com/#affaan-m/everything-claude-code&Date)

---

## 🔗 链接

- [简明指南](https://x.com/affaanmustafa/status/2012378465664745795)
- [长文指南](https://x.com/affaanmustafa/status/2014040193557471352)
- [安全指南](./the-security-guide.md)
- [作者 X 主页](https://x.com/affaanmustafa)

---

## 📄 许可证

MIT

可自由使用、修改和扩展；如果它对你有帮助，也欢迎回馈社区。

---

**如果这个仓库对你有帮助，欢迎点个 Star。**
