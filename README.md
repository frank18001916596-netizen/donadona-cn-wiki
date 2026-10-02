# ドーナドーナ 非公式中国語 Wiki / Unofficial Chinese Wiki

『ドーナドーナ いっしょにわるいことをしよう』の情報を、中国語圏のユーザーが探しやすく閲覧できるよう整理した**個人制作の非公式 Web Wiki**です。

> Portfolio project / Fan-made project. This repository and website are not affiliated with or endorsed by AliceSoft.

## プロジェクト概要

既存の Wiki テンプレートをそのまま利用するのではなく、ゲームのビジュアルに合わせた情報設計と UI を独自に実装しています。キャラクター、攻略、マップ、アイテム・武器・スキル・敵データなどをカテゴリ化し、特にキャラクターページではプロフィール、戦闘情報、スキル、育成情報、ギャラリー、音声などを一つの画面で確認できる構成を目指しています。

### 担当範囲

- Web サイト全体の情報設計・ナビゲーション設計
- MkDocs Material をベースにしたサイト構築
- HTML / CSS による独自 UI・レスポンシブレイアウトの実装
- JavaScript による検索補助、UI 操作、キャラクター音声再生機能の実装
- キャラクター情報の構造化と再利用可能なページ構成の設計
- 画像・音声・動画を含むコンテンツ表示の調整
- GitHub Actions を利用した GitHub Pages 自動デプロイ環境の構築
- 中国語ユーザー向けのコンテンツ整理・ローカライズ

## 主な機能

- **オリジナルホーム UI**：サイドナビゲーション、カテゴリカード、検索導線を備えたトップページ
- **キャラクターデータベース**：所属グループ別のキャラクター一覧と詳細ページ
- **キャラクター詳細 UI**：プロフィール、スキル、戦闘スタイル、育成、イベント、ギャラリーを統合
- **音声再生**：JavaScript によるキャラクターボイスの再生・停止状態管理
- **Wiki 検索**：MkDocs の検索機能と独自検索 UI の連携
- **攻略・データベース構造**：攻略、マップ、道具、武器、スキル、敵、エンディングを拡張可能な構造で管理
- **自動デプロイ**：`main` ブランチへの push をトリガーに GitHub Pages へデプロイ

## 技術スタック

| Category | Technology |
| --- | --- |
| Static site generator | MkDocs |
| Theme / base UI | Material for MkDocs |
| Frontend | HTML, CSS, JavaScript |
| Content | Markdown |
| Search | MkDocs Search |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages 対応 |
| Runtime / tooling | Python 3 |

## 技術的に工夫した点

### 1. Wiki とビジュアル UI の両立
Markdown ベースで更新しやすい Wiki の構造を維持しながら、Material for MkDocs の標準 UI だけに依存せず、ページ単位で独自 CSS / HTML を組み合わせています。

### 2. キャラクター情報の構造化
所属グループ → キャラクター → 詳細情報という階層を設け、情報量が増えても拡張しやすいディレクトリ構造にしています。詳細ページでは戦闘・スキル・ストーリーなど異なる種類の情報をセクション化しています。

### 3. メディアを含むインタラクション
キャラクターボイスは JavaScript で再生状態を管理し、同時再生を防止しています。画像・音声・動画を単に掲載するだけでなく、ページ UI の一部として扱えるよう調整しています。

### 4. 継続的な UI 改善
キャラクターカードのサイズ、ページ間ナビゲーション、視認性、余白、情報密度などを実際の表示を確認しながら反復的に改善しています。

## ローカル実行

Python 3 が必要です。

```bash
pip install -r requirements.txt
mkdocs serve
```

ブラウザで `http://127.0.0.1:8000` を開きます。

本番ビルドの確認：

```bash
mkdocs build --strict
```

## ディレクトリ構成

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── docs/
│   ├── assets/                    # Local media assets
│   ├── characters/                # Character / faction pages
│   ├── database/                  # Items, weapons, skills, enemies
│   ├── guide/                     # Guides
│   ├── javascripts/               # Interactive behavior
│   ├── maps/                      # Map pages
│   ├── stylesheets/               # Custom UI styles
│   └── walkthrough/               # Walkthrough pages
├── mkdocs.yml                     # Site configuration / navigation
└── requirements.txt
```

## 今後の改善予定

- キャラクター・武器・スキルデータの追加と検証
- 共通コンポーネント化によるページ保守性の改善
- モバイル表示・アクセシビリティの継続改善
- 検索 UX とカテゴリ横断ナビゲーションの改善
- コンテンツデータと表示レイヤーの分離

## 著作権・免責事項

本プロジェクトは学習・ポートフォリオおよびファン活動を目的とした非公式プロジェクトです。『ドーナドーナ いっしょにわるいことをしよう』、キャラクター、ロゴ、画像、音声、動画その他のゲーム関連素材に関する権利は、それぞれの権利者に帰属します。

公開リポジトリとして利用する場合は、第三者が権利を有する画像・音声・動画等をリポジトリへ再配布する前に、各権利者の利用条件を必ず確認してください。必要に応じて該当素材を公開リポジトリから除外し、ローカル環境または許諾された参照方法に置き換えてください。

サイト独自のコードについてライセンスを設定する場合も、第三者のゲーム素材にはそのライセンスは適用されません。
