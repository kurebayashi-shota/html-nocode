<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

-   [Simple, fast routing engine](https://laravel.com/docs/routing).
-   [Powerful dependency injection container](https://laravel.com/docs/container).
-   Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
-   Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
-   Database agnostic [schema migrations](https://laravel.com/docs/migrations).
-   [Robust background job processing](https://laravel.com/docs/queues).
-   [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

-   **[Vehikl](https://vehikl.com)**
-   **[Tighten Co.](https://tighten.co)**
-   **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
-   **[64 Robots](https://64robots.com)**
-   **[Curotec](https://www.curotec.com/services/technologies/laravel)**
-   **[DevSquad](https://devsquad.com/hire-laravel-developers)**
-   **[Redberry](https://redberry.international/laravel-development)**
-   **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

[使用技術]
-Laraval:Breeze
-React.js
-Inertia.js
-TailWindCss

[アプリの内容]
クライアントが HTML への記述内容を入力フォームに入力して
バックエンドへ保存します。
保存したデータを基に表示するノーコードツールです。

[画面構成]
アカウント関連(LaravelBreeze で流用)
--登録フォーム
--ログインフォーム
--ダッシュボード
メインコンテンツ
--入力画面(入力・プレビュー)
--編集画面(編集・プレビュー)
--実際の画面表示

[ER]
ユーザー:ID=主キー
ID/name/email/pass

サイト全体
ID/project/user/

プロジェクト
ID/pages

1 ページ毎のデータ
ID/項目に応じたカラム

[工程]
--React:フロントの基本構成を作る
--React:入力と同時にリアルタイムでプレビューに描画
--React:バックエンドへの送信
--Laravel:受け取りと DB への保存確認
--React:実際に表示する画面構成
--Laravel:DB からのデータ取得
--Laravel:フロントへの送信
--React:受け取りと画面への描画
--React:編集画面の作成または調整
--Laravel:編集画面へのデータ送信
--React:受け取りと画面への描画
--React:編集後のデータ送信
--Laravel:編集後データの受け取りと DB への送信
--Laravel:DB への反映確認
--DB:DB の構築
--Laravel:リレーション定義
--DB:プロジェクトとの連携
--DB:データ確認

[CHANGELOG.md]

# Changelog

### Added — 新機能の追加

### Changed — 既存機能の変更・改善

### Fixed — バグ修正、不具合対応

### Removed — 削除した機能

### Deprecated — 非推奨になった機能

## [1.0.0] - 2025-07-31

### Added

-   プロジェクトの作成
-   laravel:breze-react の導入
-   react-router の導入
-   メインコンテンツを作成

### Changed

-   Welcome.jsx を編集して Header.jsx と Footer.jsx に分割

## [1.1.0] - 2025-06-15

### Added

-   プロフィール編集画面を実装

.md の記述方法

# 見出し 1 (Heading 1)

## 見出し 2 (Heading 2)

### 見出し 3 (Heading 3)

---

## 箇条書きリスト (Unordered List)

-   アイテム 1
-   アイテム 2
    -   ネストしたアイテム

## 番号付きリスト (Ordered List)

1. 項目 1
2. 項目 2
3. 項目 3

---

## 強調 (Emphasis)

-   **太字** (bold)
-   _斜体_ (italic)
-   **_太字かつ斜体_** (bold and italic)

---

## リンク (Link)

[OpenAI](https://www.openai.com)

---

## 画像 (Image)

![OpenAIロゴ](https://openai.com/content/images/2022/05/openai-avatar.png)

---

## コード (Code)

### インラインコード

これは `inline code` の例です。

### コードブロック

```python
def hello_world():
    print("Hello, world!")
```

# Git のタグ付き送信

git add .
git commit -m "v1.2.0 リリース"
git tag v1.2.0
git push origin main
git push origin v1.2.0 # または git push origin --tags
