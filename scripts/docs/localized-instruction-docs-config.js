const LOCALIZED_DOC_LOCALES = [
  {
    id: 'zh-CN',
    name: '简体中文',
    rootReadmeLabel: '中文文档导航',
    rootGuideHeading: '文档导航',
    rootGuideIntro: '这些索引页帮助你按命令、代理和上下文快速浏览本地化 instruction docs。',
    sourceHeading: '原文',
    sourceLinkLabel: '英文原文',
    navigationHeading: '导航',
    fileListHeading: '包含的文件',
    commandsIndexLabel: '命令索引',
    agentsIndexLabel: '代理索引',
    contextsIndexLabel: '上下文索引',
    contributingGuideLabel: '贡献指南',
    indexContent: {
      commands: {
        title: '命令',
        intro: '命令是通过 `/command-name` 触发的用户工作流入口。'
      },
      agents: {
        title: '代理',
        intro: '代理是 Claude Code 用于委派任务的专业子代理。'
      },
      contexts: {
        title: '上下文',
        intro: '上下文是共享的工作模式预设，用于快速切换工作焦点。'
      }
    },
    contextDescriptions: {
      'dev.md': '用于专注活跃实现工作的共享上下文。',
      'research.md': '用于专注调研、比较和资料收集的共享上下文。',
      'review.md': '用于专注审查、验证和风险识别的共享上下文。'
    }
  },
  {
    id: 'zh-TW',
    name: '繁體中文',
    rootReadmeLabel: '繁體中文文件導航',
    rootGuideHeading: '文件導航',
    rootGuideIntro: '這些索引頁可協助你依命令、代理與上下文快速瀏覽本地化 instruction docs。',
    sourceHeading: '原文',
    sourceLinkLabel: '英文原文',
    navigationHeading: '導航',
    fileListHeading: '包含的檔案',
    commandsIndexLabel: '命令索引',
    agentsIndexLabel: '代理索引',
    contextsIndexLabel: '上下文索引',
    contributingGuideLabel: '貢獻指南',
    indexContent: {
      commands: {
        title: '命令',
        intro: '命令是透過 `/command-name` 啟動的使用者工作流程入口。'
      },
      agents: {
        title: '代理',
        intro: '代理是 Claude Code 用來委派工作的專業子代理。'
      },
      contexts: {
        title: '上下文',
        intro: '上下文是共享的工作模式預設，用於快速切換工作焦點。'
      }
    },
    contextDescriptions: {}
  },
  {
    id: 'ja-JP',
    name: '日本語',
    rootReadmeLabel: '日本語ドキュメント一覧',
    rootGuideHeading: 'ドキュメント案内',
    rootGuideIntro: 'これらの索引ページから、ローカライズされた instruction docs をコマンド、エージェント、コンテキスト単位でたどれます。',
    sourceHeading: '原文',
    sourceLinkLabel: '英語版の原文',
    navigationHeading: 'ナビゲーション',
    fileListHeading: '収録ファイル',
    commandsIndexLabel: 'コマンド一覧',
    agentsIndexLabel: 'エージェント一覧',
    contextsIndexLabel: 'コンテキスト一覧',
    contributingGuideLabel: '貢献ガイド',
    indexContent: {
      commands: {
        title: 'コマンド',
        intro: 'コマンドはスラッシュ（`/command-name`）で起動するユーザーワークフローです。'
      },
      agents: {
        title: 'エージェント',
        intro: 'エージェントは Claude Code が委任に使う専門サブエージェントです。'
      },
      contexts: {
        title: 'コンテキスト',
        intro: 'コンテキストは共有の作業モードプリセットです。'
      }
    },
    contextDescriptions: {
      'dev.md': 'アクティブな実装作業に集中するための共有コンテキストです。',
      'research.md': '調査、探索、比較検討に集中するための共有コンテキストです。',
      'review.md': 'レビュー、検証、リスク抽出に集中するための共有コンテキストです。'
    }
  },
  {
    id: 'ko-KR',
    name: '한국어',
    rootReadmeLabel: '한국어 문서 안내',
    rootGuideHeading: '문서 안내',
    rootGuideIntro: '이 색인 페이지를 통해 현지화된 instruction docs를 명령어, 에이전트, 컨텍스트 기준으로 빠르게 탐색할 수 있습니다.',
    sourceHeading: '원문',
    sourceLinkLabel: '영문 원문',
    navigationHeading: '탐색',
    fileListHeading: '포함된 파일',
    commandsIndexLabel: '명령어 색인',
    agentsIndexLabel: '에이전트 색인',
    contextsIndexLabel: '컨텍스트 색인',
    contributingGuideLabel: '기여 가이드',
    indexContent: {
      commands: {
        title: '명령어',
        intro: '명령어는 `/command-name` 형태로 실행하는 사용자 워크플로 진입점입니다.'
      },
      agents: {
        title: '에이전트',
        intro: '에이전트는 Claude Code가 위임 작업에 사용하는 전문 서브에이전트입니다.'
      },
      contexts: {
        title: '컨텍스트',
        intro: '컨텍스트는 작업 초점을 빠르게 전환하기 위한 공유 프리셋입니다.'
      }
    },
    contextDescriptions: {}
  },
  {
    id: 'pt-BR',
    name: 'Português (BR)',
    rootReadmeLabel: 'Documentação em Português (BR)',
    rootGuideHeading: 'Guia de documentação',
    rootGuideIntro: 'Esses índices ajudam a navegar pelos instruction docs localizados por comando, agente e contexto.',
    sourceHeading: 'Fonte canônica',
    sourceLinkLabel: 'Documento original em inglês',
    navigationHeading: 'Navegação',
    fileListHeading: 'Arquivos incluídos',
    commandsIndexLabel: 'Índice de comandos',
    agentsIndexLabel: 'Índice de agentes',
    contextsIndexLabel: 'Índice de contextos',
    contributingGuideLabel: 'Guia de contribuição',
    indexContent: {
      commands: {
        title: 'Comandos',
        intro: 'Comandos são pontos de entrada de workflow acionados pelo usuário via `/command-name`.'
      },
      agents: {
        title: 'Agentes',
        intro: 'Agentes são subagentes especializados que o Claude Code usa para delegação.'
      },
      contexts: {
        title: 'Contextos',
        intro: 'Contextos são presets compartilhados para mudar rapidamente o modo de trabalho.'
      }
    },
    contextDescriptions: {}
  },
  {
    id: 'tr',
    name: 'Türkçe',
    rootReadmeLabel: 'Türkçe dokümantasyon',
    rootGuideHeading: 'Dokümantasyon rehberi',
    rootGuideIntro: 'Bu dizin sayfaları, yerelleştirilmiş instruction docs içeriğini komutlar, ajanlar ve bağlamlar üzerinden hızlıca gezmenizi sağlar.',
    sourceHeading: 'Kaynak belge',
    sourceLinkLabel: 'İngilizce kanonik belge',
    navigationHeading: 'Gezinme',
    fileListHeading: 'Dahil edilen dosyalar',
    commandsIndexLabel: 'Komut dizini',
    agentsIndexLabel: 'Ajan dizini',
    contextsIndexLabel: 'Bağlam dizini',
    contributingGuideLabel: 'Katkı rehberi',
    indexContent: {
      commands: {
        title: 'Komutlar',
        intro: 'Komutlar, kullanıcıların `/command-name` ile başlattığı workflow giriş noktalarıdır.'
      },
      agents: {
        title: 'Ajanlar',
        intro: 'Ajanlar, Claude Code’un delege etmek için kullandığı uzman alt ajanlardır.'
      },
      contexts: {
        title: 'Bağlamlar',
        intro: 'Bağlamlar, çalışma odağını hızlıca değiştirmek için kullanılan ortak ön ayarlardır.'
      }
    },
    contextDescriptions: {
      'dev.md': 'Aktif implementasyon çalışmasına odaklanmak için kullanılan paylaşılan bağlam.',
      'research.md': 'Araştırma, karşılaştırma ve keşif çalışmalarına odaklanmak için kullanılan paylaşılan bağlam.',
      'review.md': 'İnceleme, doğrulama ve risk belirlemeye odaklanmak için kullanılan paylaşılan bağlam.'
    }
  }
];

const CANONICAL_PATH_CANDIDATES = [
  (relativePath) => relativePath,
  (relativePath) => `docs/${relativePath}`,
  (relativePath) => {
    const match = relativePath.match(/^rules\/([^/]+)\.md$/);
    return match ? `rules/common/${match[1]}.md` : null;
  }
];

module.exports = {
  CANONICAL_PATH_CANDIDATES,
  LOCALIZED_DOC_LOCALES
};
