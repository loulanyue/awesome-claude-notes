---
description: Playwright を使用してエンドツーエンドテストを生成して実行します。テストジャーニーを作成し、テストを実行し、スクリーンショット/ビデオ/トレースをキャプチャし、アーティファクトをアップロードします。
source_path: commands/e2e.md
---

# E2E コマンド

このコマンドは **e2e-runner** エージェントを呼び出して、Playwright を使用してエンドツーエンドテストを生成、保守、実行します。

## このコマンドの機能

1. **テストジャーニー生成** - ユーザーフローの Playwright テストを作成
2. **E2E テスト実行** - 複数ブラウザ間でテストを実行
3. **アーティファクトキャプチャ** - 失敗時のスクリーンショット、ビデオ、トレース
4. **結果アップロード** - HTML レポートと JUnit XML
5. **不安定なテスト識別** - 不安定なテストを分離

## いつ使用しますするか

以下の場合に `/e2e` を使用します：

* 重要なユーザージャーニーをテスト（ログイン、取引、支払い）
* マルチステップフローがエンドツーエンドで機能することを検証
* UI インタラクションとナビゲーションをテスト
* フロントエンドとバックエンド間の統合を検証
* 本番環境デプロイメント向けの準備

## 動作方法

e2e-runner エージェントは：

1. **ユーザーフローを分析**してテストシナリオを特定
2. **ページオブジェクトモデルパターンを使用して Playwright テストを生成**
3. **複数ブラウザ間（Chrome、Firefox、Safari）でテストを実行**
4. **失敗をキャプチャ**（スクリーンショット、ビデオ、トレース含む）
5. **結果とアーティファクトを含むレポートを生成**
6. **不安定なテストを特定**して修正を推奨

## 使用します示例

````
User: /e2e Test the market search and view flow

Agent (e2e-runner):
# E2E Test Generation: Market Search and View Flow

## Test Scenario Identified

**User Journey:** Market Search → View Results → Click Market → View Details

**Test Coverage:**
1. Navigate to markets page
2. Perform semantic search
3. Verify search results
4. Click on first result
5. Verify market details page loads
6. Verify chart renders

## Generated Test Code

```typescript
// tests/e2e/markets/search-and-view.spec.ts
import { test, expect } from '@playwright/test'
import { MarketsPage } from '../../pages/MarketsPage'
import { MarketDetailsPage } from '../../pages/MarketDetailsPage'

test.describe('Market Search and View Flow', () => {
  test('user can search markets and view details', async ({ page }) => {
    // 1. Navigate to markets page
    const marketsPage = new MarketsPage(page)
    await marketsPage.goto()

    // Verify page loaded
    await expect(page).toHaveTitle(/Markets/)
    await expect(page.locator('h1')).toContainText('Markets')

    // 2. Perform semantic search
    await marketsPage.searchMarkets('election')

    // Wait for API response
    await page.waitForResponse(resp =>
      resp.url().includes('/api/markets/search') && resp.status() === 200
    )

    // 3. Verify search results
    const marketCards = marketsPage.marketCards
    await expect(marketCards.first()).toBeVisible()
    const resultCount = await marketCards.count()
    expect(resultCount).toBeGreaterThan(0)

    // Take screenshot of search results
    await page.screenshot({ path: 'artifacts/search-results.png' })

    // 4. Click on first result
    const firstMarketTitle = await marketCards.first().textContent()
    await marketCards.first().click()

    // 5. Verify market details page loads
    await expect(page).toHaveURL(/\/markets\/[a-z0-9-]+/)

    const detailsPage = new MarketDetailsPage(page)
    await expect(detailsPage.marketName).toBeVisible()
    await expect(detailsPage.marketDescription).toBeVisible()

    // 6. Verify chart renders
    await expect(detailsPage.priceChart).toBeVisible()

    // Verify market name matches
    const detailsTitle = await detailsPage.marketName.textContent()
    expect(detailsTitle?.toLowerCase()).toContain(
      firstMarketTitle?.toLowerCase().substring(0, 20) || ''
    )

    // Take screenshot of market details
    await page.screenshot({ path: 'artifacts/market-details.png' })
  })

  test('search with no results shows empty state', async ({ page }) => {
    const marketsPage = new MarketsPage(page)
    await marketsPage.goto()

    // Search for non-existent market
    await marketsPage.searchMarkets('xyznonexistentmarket123456')

    // Verify empty state
    await expect(page.locator('[data-testid="no-results"]')).toBeVisible()
    await expect(page.locator('[data-testid="no-results"]')).toContainText(
      /no.*results|no.*markets/i
    )

    const marketCount = await marketsPage.marketCards.count()
    expect(marketCount).toBe(0)
  })

  test('can clear search and see all markets again', async ({ page }) => {
    const marketsPage = new MarketsPage(page)
    await marketsPage.goto()

    // Initial market count
    const initialCount = await marketsPage.marketCards.count()

    // Perform search
    await marketsPage.searchMarkets('trump')
    await page.waitForLoadState('networkidle')

    // Verify filtered results
    const filteredCount = await marketsPage.marketCards.count()
    expect(filteredCount).toBeLessThan(initialCount)

    // Clear search
    await marketsPage.searchInput.clear()
    await page.waitForLoadState('networkidle')

    // Verify all markets shown again
    const finalCount = await marketsPage.marketCards.count()
    expect(finalCount).toBe(initialCount)
  })
})
````

## テスト実行

```bash
# Run the generated test
npx playwright test tests/e2e/markets/search-and-view.spec.ts

Running 3 tests using 3 workers

  ✓  [chromium] › search-and-view.spec.ts:5:3 › user can search markets and view details (4.2s)
  ✓  [chromium] › search-and-view.spec.ts:52:3 › search with no results shows empty state (1.8s)
  ✓  [chromium] › search-and-view.spec.ts:67:3 › can clear search and see all markets again (2.9s)

  3 passed (9.1s)

Artifacts generated:
- artifacts/search-results.png
- artifacts/market-details.png
- playwright-report/index.html
```

## テストレポート

```
╔══════════════════════════════════════════════════════════════╗
║                    E2E Test Results                          ║
╠══════════════════════════════════════════════════════════════╣
║ Status:     ✅ ALL TESTS PASSED                              ║
║ Total:      3 tests                                          ║
║ Passed:     3 (100%)                                         ║
║ Failed:     0                                                ║
║ Flaky:      0                                                ║
║ Duration:   9.1s                                             ║
╚══════════════════════════════════════════════════════════════╝

Artifacts:
📸 Screenshots: 2 files
📹 Videos: 0 files (only on failure)
🔍 Traces: 0 files (only on failure)
📊 HTML Report: playwright-report/index.html

View report: npx playwright show-report
```

✅ E2E テストスイートは CI/CD 統合の準備ができました！

````

## Test Artifacts

When tests run, the following artifacts are captured:

**On All Tests:**
- HTML Report with timeline and results
- JUnit XML for CI integration

**On Failure Only:**
- Screenshot of the failing state
- Video recording of the test
- Trace file for debugging (step-by-step replay)
- Network logs
- Console logs

## Viewing Artifacts

```bash
# View HTML report in browser
npx playwright show-report

# View specific trace file
npx playwright show-trace artifacts/trace-abc123.zip

# Screenshots are saved in artifacts/ directory
open artifacts/search-results.png
````

## 不安定なテスト検出

テストが断続的に失敗する場合：

```
⚠️  FLAKY TEST DETECTED: tests/e2e/markets/trade.spec.ts

Test passed 7/10 runs (70% pass rate)

Common failure:
"Timeout waiting for element '[data-testid="confirm-btn"]'"

Recommended fixes:
1. Add explicit wait: await page.waitForSelector('[data-testid="confirm-btn"]')
2. Increase timeout: { timeout: 10000 }
3. Check for race conditions in component
4. Verify element is not hidden by animation

Quarantine recommendation: Mark as test.fixme() until fixed
```

## ブラウザ設定

デフォルトでは、テストは複数のブラウザで実行されます：

* ✅ Chromium（デスクトップ Chrome）
* ✅ Firefox（デスクトップ）
* ✅ WebKit（デスクトップ Safari）
* ✅ Mobile Chrome（オプション）

`playwright.config.ts` で設定してブラウザを調整します。

## CI/CD 統合

CI パイプラインに追加：

```yaml
# .github/workflows/e2e.yml
- name: Install Playwright
  run: npx playwright install --with-deps

- name: Run E2E tests
  run: npx playwright test

- name: Upload artifacts
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: playwright-report/
```

## PMX 固有の重要フロー

PMX の場合、以下の E2E テストを優先：

**🔴 重大（常に成功する必要）：**

1. ユーザーがウォレットを接続できる
2. ユーザーが市場をブラウズできる
3. ユーザーが市場を検索できる（セマンティック検索）
4. ユーザーが市場の詳細を表示できる
5. ユーザーが取引注文を配置できる（テスト資金使用します）
6. 市場が正しく決済される
7. ユーザーが資金を引き出せる

**🟡 重要：**

1. 市場作成フロー
2. ユーザープロフィール更新
3. リアルタイム価格更新
4. チャートレンダリング
5. 市場のフィルタリングとソート
6. モバイルレスポンシブレイアウト

## ベストプラクティス

**すべき事：**

* ✅ 保守性を高めるためページオブジェクトモデルを使用します
* ✅ セレクタとして data-testid 属性を使用します
* ✅ 任意のタイムアウトではなく API レスポンスを待機
* ✅ 重要なユーザージャーニーのエンドツーエンドテスト
* ✅ main にマージする前にテストを実行
* ✅ テスト失敗時にアーティファクトをレビュー

**すべきでない事：**

* ❌ 不安定なセレクタを使用します（CSS クラスは変わる可能性）
* ❌ 実装の詳細をテスト
* ❌ 本番環境に対してテストを実行
* ❌ 不安定なテストを無視
* ❌ 失敗時にアーティファクトレビューをスキップ
* ❌ E2E テストですべてのエッジケースをテスト（単体テストを使用します）

## 重要な注意事項

**PMX にとって重大：**

* 実際の資金に関わる E2E テストは**テストネット/ステージング環境でのみ実行**する必要があります
* 本番環境に対して取引テストを実行しないでください
* 金融テストに `test.skip(process.env.NODE_ENV === 'production')` を設定
* 少量のテスト資金を持つテストウォレットのみを使用します

## 他のコマンドとの統合

* `/plan` を使用してテストする重要なジャーニーを特定
* `/tdd` を単体テストに使用します（より速く、より細粒度）
* `/e2e` を統合とユーザージャーニーテストに使用します
* `/code-review` を使用してテスト品質を検証

## 関連エージェント

このコマンドは `~/.claude/agents/e2e-runner.md` の `e2e-runner` エージェントを呼び出します。

## 快速命令

```bash
# Run all E2E tests
npx playwright test

# Run specific test file
npx playwright test tests/e2e/markets/search.spec.ts

# Run in headed mode (see browser)
npx playwright test --headed

# Debug test
npx playwright test --debug

# Generate test code
npx playwright codegen http://localhost:3000

# View report
npx playwright show-report
```

## 原文
- [英語版の原文](../../../commands/e2e.md)

## ナビゲーション
- [日本語ドキュメント一覧](../README.md)
- [コマンド一覧](../commands/README.md)
- [エージェント一覧](../agents/README.md)
- [コンテキスト一覧](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢献ガイド](../../../CONTRIBUTING.md)
