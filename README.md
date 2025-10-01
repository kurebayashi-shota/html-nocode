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
-MaterialUi

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

[ER] ID=主キー

User テーブル
ID/name/email/pass

?サイト全体
ID/project/user/

?プロジェクト
ID/pages

Pages テーブル
ID/layout_id/agenda/title/title_detail/created_at/updated_at

Layouts テーブル
ID/name/created_at/updated_at

[工程]
--React-v1.0.1:フロントの基本構成を作る
--React-v1.0.1:入力と同時にリアルタイムでプレビューに描画
--React-v1.0.2:バックエンドへの送信
--Laravel-v1.0.2:受け取りと DB への保存確認
--React-v1.0.3:プレビュー画面構成
--Laravel-v1.0.3:DB からのデータ取得
--Laravel-v1.0.3:フロントへの送信
--React-v1.0.3:受け取りと画面への描画
--React-v1.0.4:編集画面の作成または調整
--Laravel-v1.0.4:編集画面へのデータ送信
--React-v1.0.4:受け取りと画面への描画
--React-v1.0.4:編集後のデータ送信
--Laravel-v1.0.4:編集後データの受け取りと DB への送信
--Laravel-v1.0.4:DB への反映確認
--React-v1.0.5:フッターやページング
--React-v1.0.5:他レイアウトの追加
--React-v1.0.5:登録と編集の調整
--Laravel-v1.0.6:オブジェクトの格納
--React-v1.0.6:フロント側の調整
--React-v1.0.7:画像の保存フォームを作成
--Laravel-v1.0.7:バックエンドでの受け取りと DB 保存
--React-v1.0.7:フロントでの受け取りと描画
--React-v1.0.8:画像をオブジェクトで格納
--DB-v1.0.8:DB の変更
--Laravel-v1.0.8:バックエンドの調整
--React-v1.0.8:プレビューと登録の調整
--React-v1.0.9:編集の調整
--React-v1.1.0:プロジェクト作成画面の追加
--Laravel-v1.1.0:バックエンドの調整
--DB-v1.1.0:Project テーブルの追加と Page テーブルとのリレーション
--React--v1.1.1:project 一覧の作成、編集機能
--Laravel--v1.1.1:pages との紐づけ
--Laravel--v1.1.1:project の edit,show メソッドの追加とルーティング
--Laravel--v1.1.1:users との紐づけ
--Laravel--v1.1.1:コントローラーの調整
--React--v1.1.2:メインタイトルと目次の追加
--React--v1.1.3:メインタイトルと目次でプレビューと入力への反映修正
--Laravel--v1.1.4:マイグレーションファイルの統合

# 残タスク

-   カラムの見直し
-   ContentsLayout.jsx 内の from タグが親要素いっぱいに広がらない
-   ContentsLayout.jsx を整理
-   useSelectCode.jsx 内での layout_id の型変換
-   入力フォーム下部に追加ボタン(画像、li)
-   ナビゲーションバーのホバーを修正
-   リストの最大個数指定

[CHANGELOG.md]

# Changelog

### Added — 新機能の追加

### Changed — 既存機能の変更・改善

### Fixed — バグ修正、不具合対応

### Removed — 削除した機能

### Deprecated — 非推奨になった機能

## [1.1.4] - 2025-10-01

### Added

-

### change

-   既存マイグレーションファイルの修正

## [1.1.3] - 2025-09-25

### Added

-   selectType.jsx に"index"パターンを追加
-   projectController に index に mode を渡すように追加

### change

-   useSelectType.jsx を selectType.jsx に変更
-   プロジェクト作成の修正
-   プレビューの調整
-   ナビゲーションパスのロジック変更

## [1.1.2] - 2025-09-17

### Fixed

-   目次の追加時に submit が発火するのを修正

### Added

-   Agenda.jsx の追加

### change

-   SimpleLayout.jsx をプロジェクト名に対応
-   NewProject.jsx を ContentsLayout.jsx に統合

## [1.1.1] - 2025-09-12

### Added

-   UserController の追加
-   Projects テーブルに user_id を追加

### change

-   Users テーブルとのリレーションを追加
-   store メソッドに obj_images を null に出来るように変更

## [1.1.0] - 2025-09-09

### Added

-   NewProject.jsx の追加
-   projects テーブル作成マイグレーションの追加
-   pages テーブルに project_id カラム挿入マイグレーションの追加
-   ProjectController の追加
-   ProjectModel の追加
-

### change

-   project テーブルとのリレーション調整

## [1.0.9] - 2025-09-08

### change

-   PageController の update メソッドの変更
-   ContentsLayout の編集時の put を post に変更し method:"put" で追加

## [1.0.8] - 2025-09-01

### Added

-   カラム変更のマイグレーションファイルの追加

### change

-   iamge,image_height を obj_images に変更

## [1.0.7] - 2025-08-21

### Added

-   image,image_height カラムの追加
-   上記保存機能
-   selectMode でのデータ取得方法

### change

-   Page コントローラーから mode を渡す。

## [1.0.6] - 2025-08-19

### Added

-   obj_elements カラムの追加

### change

-   オブジェクト追加用にフロントとバックエンドの修正

## [1.0.5] - 2025-08-14

### Added

-   ナビゲーションバーの追加
-   MaterialUi の追加
-   Agenda,CodeL,StepL の追加
-   selectLayout の追加
-   li_elements カラム追加用マイグレーションファイルの作成

### change

-   レイアウトの追加に伴う登録と編集の調整

## [1.0.4] - 2025-08-12

### Added

-   Page コントローラーに edit,update,show メソッドを追加
-   PreviewList の追加
-   id でのルーティング設定

### changed

-   Page,Layout モデル内リレーションの見直し

## [1.0.3] - 2025-08-07

### Added

-   プレビュー画面の作成
-   Layout と Page コントローラーに index メソッドを追加
-   プレビューへのデータ反映
-   登録画面のレイアウト変更
-   レイアウト選択項目を Layout テーブルから取得

## [1.0.2] - 2025-08-06

### Added

-   page モデルとコントローラーとマイグレーションファイルの作成
-   layout モデルとコントローラーとマイグレーションファイルの作成
-   上記でテーブル作成と登録ロジックを追加して登録できるのを確認

## [1.0.1] - 2025-07-31

### Added

-   プロジェクトの作成
-   laravel:breze-react の導入
-   react-router の導入
-   メインコンテンツを作成
-   入力内容のプレビュー表示

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

---

## ✅ 各テーブルの概要とカラム例

### `websites`

| カラム名   | 型        | 内容                  |
| ---------- | --------- | --------------------- |
| id         | BIGINT    | 主キー                |
| user_id    | BIGINT    | 作成者 ID（外部キー） |
| title      | STRING    | サイトタイトル        |
| domain     | STRING    | カスタムドメイン      |
| created_at | TIMESTAMP | 作成日                |

---

### `pages`

| カラム名   | 型     | 内容                            |
| ---------- | ------ | ------------------------------- |
| id         | BIGINT | 主キー                          |
| website_id | BIGINT | 関連するサイト ID               |
| slug       | STRING | ページのスラッグ（例：`about`） |
| title      | STRING | 表示用のページタイトル          |

---

### `page_sections`

| カラム名 | 型     | 内容                                     |
| -------- | ------ | ---------------------------------------- |
| id       | BIGINT | 主キー                                   |
| page_id  | BIGINT | 対象ページの ID                          |
| type     | STRING | セクションタイプ（例：`hero`, `footer`） |
| order    | INT    | ページ内での表示順                       |

---

### `section_components`

| カラム名   | 型     | 内容                                        |
| ---------- | ------ | ------------------------------------------- |
| id         | BIGINT | 主キー                                      |
| section_id | BIGINT | 対象セクションの ID                         |
| type       | STRING | コンポーネントタイプ（例：`text`, `image`） |
| order      | INT    | セクション内での表示順                      |

---

### `component_data`

| カラム名     | 型     | 内容                                     |
| ------------ | ------ | ---------------------------------------- |
| id           | BIGINT | 主キー                                   |
| component_id | BIGINT | 関連コンポーネント ID                    |
| key          | STRING | データキー（例：`text`, `url`, `color`） |
| value        | TEXT   | データ値（例：実際の文章や画像 URL）     |

---

## ✅ 命名規則のポイント

-   **複数形のスネークケース（Laravel の推奨）**：例）`page_sections`, `section_components`
-   **構造がわかる名前**：親子関係や用途が明確になるように
-   **RESTful 設計に馴染むように**

---

## 🧠 拡張で検討できるテーブル

| テーブル名   | 用途                                                 |
| ------------ | ---------------------------------------------------- |
| `media`      | 画像・動画などのアップロード管理                     |
| `forms`      | 問い合わせ・入力フォームの構成管理                   |
| `widgets`    | 再利用可能なコンポーネント（例：予約カレンダーなど） |
| `audit_logs` | ユーザー操作の履歴管理やバージョン管理               |

---

## 📁 マイグレーション命名例（Artisan コマンド）

```bash
php artisan make:migration create_websites_table
済  php artisan make:migration create_pages_table --create=pages
php artisan make:migration create_page_sections_table
php artisan make:migration create_section_components_table
php artisan make:migration create_component_data_table
```

# Laravel モデルとコントローラーの命名規則

このドキュメントは、Laravel フレームワークにおけるモデル・コントローラーの命名規則について整理したものです。  
一貫性のある命名は、保守性・可読性・チーム開発効率の向上に役立ちます。

---

## Seeder でのレコード追加例

下記でやると重複の登録を防げる

public function run(): void
{
$layouts = ['タイトル', 'シンプル', '手順', 'コード'];

    foreach ($layouts as $layoutName) {
        Layout::firstOrCreate(['name' => $layoutName]);
    }

}

## ✅ モデルの命名規則

### 📌 基本ルール

| 要素           | 規則                          | 例                                    |
| -------------- | ----------------------------- | ------------------------------------- |
| クラス名       | **単数形・パスカルケース**    | `User`, `Post`, `ArticleDetail`       |
| ファイル名     | クラス名と一致                | `User.php`                            |
| テーブル名     | **複数形・スネークケース**    | `users`, `posts`                      |
| リレーション名 | 関連づけ対象に応じて単数/複数 | `$user->posts()`, `$post->comments()` |

### 🔧 Artisan での作成例

php artisan make:model Product

# Laravel マイグレーション：カラム型・リレーション・NULL 許可 まとめ

---

## 📦 カラムの型指定方法（Schema::create 内）

| メソッド                           | 説明                             | 例                                  |
| ---------------------------------- | -------------------------------- | ----------------------------------- |
| `$table->id()`                     | 主キー（bigint, auto-increment） | `$table->id();`                     |
| `$table->string('title', 255)`     | 文字列（255 文字まで）           | `$table->string('title');`          |
| `$table->text('description')`      | 長文テキスト                     | `$table->text('description');`      |
| `$table->integer('age')`           | 整数                             | `$table->integer('age');`           |
| `$table->bigInteger('views')`      | 大きな整数                       | `$table->bigInteger('views');`      |
| `$table->boolean('is_active')`     | 真偽値（true/false）             | `$table->boolean('is_active');`     |
| `$table->date('birth_date')`       | 日付（YYYY-MM-DD）               | `$table->date('birth_date');`       |
| `$table->dateTime('published_at')` | 日時                             | `$table->dateTime('published_at');` |
| `$table->timestamp('created_at')`  | タイムスタンプ                   | `$table->timestamp('created_at');`  |
| `$table->decimal('price', 8, 2)`   | 小数（精度とスケール指定）       | `$table->decimal('price', 8, 2);`   |
| `$table->json('data')`             | JSON データ(オブジェクトで格納)  | `$table->json('data');`             |
| `$table->uuid('uuid')`             | UUID                             | `$table->uuid('uuid');`             |

---

## ☑️ NULL を許可する方法（nullable）

Laravel では、**NULL を許可するカラム**を作るには `->nullable()` を使います。

### ✅ 使い方

```php
$table->string('nickname')->nullable();
```

# Laravel の Eloquent リレーションまとめ

Laravel の Eloquent ORM では、モデル間のリレーションを以下のように定義できます。

---

## 🔸 1. hasOne（1 対 1 の関係）

-   **意味**：1 つのモデルが、別のモデルの 1 つのインスタンスを所有する。
-   **例**：`User` は `Profile` を 1 つ持つ。

```php
// User.php
class User extends Model
{
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
🔸 2. hasMany（1対多の関係）
意味：1つのモデルが、複数の別のモデルを所有する。

例：User は複数の Post を持つ。

// User.php
class User extends Model
{
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
🔸 3. belongsTo（多対1の関係）
意味：モデルが、親モデルに属する。

例：Post は 1人の User に属する。

// Post.php
class Post extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
🔸 4. belongsToMany（多対多の関係）
意味：モデルが、複数のモデルに属し、またその逆も成り立つ。

例：User は複数の Role を持ち、Role も複数の User を持つ。

// User.php
class User extends Model
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
※ 多対多の関係では、中間テーブルが必要です（例：role_user）。

🔸 5. hasManyThrough（間接的な1対多）
意味：あるモデルを通じて、別のモデルに多数アクセスする。

例：Country は User を通じて Post を持つ。

// Country.php
class Country extends Model
{
    public function posts()
    {
        return $this->hasManyThrough(Post::class, User::class);
    }
}
🔸 6. ポリモーフィックリレーション（morphMany, morphToなど）
意味：複数のモデルが、同じモデル（例：Comment）と関係を持てる。

// Post.php
class Post extends Model
{
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

// Video.php
class Video extends Model
{
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

// Comment.php
class Comment extends Model
{
    public function commentable()
    {
        return $this->morphTo();
    }
}
```

# Laravel Eloquent リレーション まとめ表

Laravel の Eloquent ORM が提供する主なリレーションの種類と意味、関係性、使用例を以下にまとめます。

| メソッド名                 | 関係性         | 親 → 子（方向）       | 説明                                                       | 使用例（モデル）                 |
| -------------------------- | -------------- | --------------------- | ---------------------------------------------------------- | -------------------------------- |
| `hasOne`                   | 1 対 1         | 親 → 子               | 親モデルが 1 つの子モデルを所有                            | `User` → `Profile`               |
| `hasMany`　私は持ってる    | 1 対多         | 親 → 複数の子         | 親モデルが複数の子モデルを所有                             | `User` → `Post`                  |
| `belongsTo` 誰かに所属する | 多対 1         | 子 → 親               | 子モデルが親モデルに属する                                 | `Post` → `User`                  |
| `belongsToMany`            | 多対多         | 双方向                | モデルが互いに複数のインスタンスを所有（中間テーブル必要） | `User` ↔ `Role`                  |
| `hasManyThrough`           | 間接 1 対多    | 親 → 経由 → 子        | 中間モデルを通してリレーションを定義                       | `Country` → `Post`（via `User`） |
| `morphOne`                 | 1 対 1（ポリ） | 親 → 子（多型）       | 1 つのポリモーフィックリレーション                         | `User` → `Image`（polymorphic）  |
| `morphMany`                | 1 対多（ポリ） | 親 → 複数の子（多型） | 複数のポリモーフィックリレーション                         | `Post` → `Comment`               |
| `morphTo`                  | 多対 1（ポリ） | 子 → 親（多型）       | 子モデルが多型で親に属する                                 | `Comment` → `Post`/`Video`       |
| `morphToMany`              | 多対多（ポリ） | 双方向（多型）        | 多対多のポリモーフィックリレーション                       | `Post` ↔ `Tag`                   |
| `morphedByMany`            | 多対多（ポリ） | 双方向（多型）        | `morphToMany`の逆方向定義                                  | `Tag` ↔ `Post`, `Video`          |

---

## 補足

-   **ポリモーフィック（polymorphic）リレーション**とは：
    -   複数の異なるモデルが、共通のリレーション先を持つ場合に使います。
    -   例：`Comment`モデルが `Post` と `Video` にコメント可能。

---

## 参考：リレーションメソッドの定義例

```php
// User モデル
public function profile()
{
    return $this->hasOne(Profile::class);
}

public function posts()
{
    return $this->hasMany(Post::class);
}

public function roles()
{
    return $this->belongsToMany(Role::class);
}

// Post モデル
public function user()
{
    return $this->belongsTo(User::class);
}

public function comments()
{
    return $this->morphMany(Comment::class, 'commentable');
}

// Comment モデル
public function commentable()
{
    return $this->morphTo();
}
```

# Laravel リソースコントローラ メソッド一覧

Laravel のリソースコントローラは、RESTful 設計に基づいて次のようなメソッドを定義します。

---

## 一覧表

| メソッド名 | HTTP メソッド | URL パス例       | 用途                   |
| ---------- | ------------- | ---------------- | ---------------------- |
| index      | GET           | /users           | 全件取得（一覧表示）   |
| create     | GET           | /users/create    | 新規作成フォームの表示 |
| store      | POST          | /users           | 新規レコードを保存     |
| show       | GET           | /users/{id}      | 単一レコードの表示     |
| edit       | GET           | /users/{id}/edit | 編集フォームの表示     |
| update     | PUT/PATCH     | /users/{id}      | レコードの更新処理     |
| destroy    | DELETE        | /users/{id}      | レコードの削除処理     |

---

## 補足

-   `{id}` は対象リソース（レコード）の ID。
-   `Route::resource('users', UserController::class);` を使うと、上記のルートが自動生成されます。
-   `create` と `edit` は画面表示専用（データは返さない）です。

---

## 例：UserController の構成

```php
class UserController extends Controller
{
    public function index() {}   // 一覧表示
    public function create() {}  // 作成フォーム表示
    public function store(Request $request) {}  // 新規保存
    public function show($id) {}  // 詳細表示
    public function edit($id) {}  // 編集フォーム表示
    public function update(Request $request, $id) {}  // 更新処理
    public function destroy($id) {}  // 削除処理
}

php artisan make:controller UserController --resource
```

# Eloquent モデルの静的メソッド（クラス名::メソッド名）代表例とユースケース

Laravel の Eloquent モデルでは、`クラス名::メソッド名` 形式で多くの便利な静的メソッドを呼び出すことができます。
ここではよく使われるメソッドとそのユースケースをまとめます。

---

## 📌 基本的なメソッド一覧

| メソッド             | 説明                                      | ユースケース例                                 |
| -------------------- | ----------------------------------------- | ---------------------------------------------- |
| `find($id)`          | プライマリキー（ID）でレコードを取得      | 単一のレコードを取得したい場合                 |
| `findOrFail($id)`    | ID で取得。見つからなければ 404 を返す    | 詳細ページなどでレコードが存在しない場合は 404 |
| `all()`              | 全レコードを取得                          | 一覧ページ（少量データに限る）                 |
| `create($data)`      | 新しいレコードを作成（DB に即保存）       | フォーム送信で新規登録する                     |
| `first()`            | クエリ結果の最初の 1 件を取得             | 1 件だけ取得したいとき                         |
| `firstOrFail()`      | 見つからなければ 404                      | ユニークな値で取得する場合など                 |
| `where()`            | 条件を指定してレコードを絞り込む          | 特定の条件でデータを取得                       |
| `orderBy()`          | 並び順を指定                              | 一覧表示で並び替えたい場合                     |
| `pluck($column)`     | 特定カラムの値だけを配列で取得            | セレクトボックスの選択肢などに使う             |
| `paginate($perPage)` | ページネーション付きでデータ取得          | 大量データの一覧ページ                         |
| `with($relation)`    | リレーションを事前ロード（Eager Loading） | N+1 問題を回避したいとき                       |

---

## 🧠 使用例

```php
// ID でユーザー取得（見つからなければ 404）
$user = User::findOrFail(1);

// 条件で絞って取得
$users = User::where('status', 'active')->get();

// 最新の10件を取得（ページネーション）
$posts = Post::orderBy('created_at', 'desc')->paginate(10);

// 関連するリレーションも一緒に取得
$users = User::with('profile')->get();

// 新規作成（$fillableが必要）
User::create([
    'name' => 'Taro',
    'email' => 'taro@example.com',
]);
```

# 任意の数のデータを JSON カラム（li_elements）に保存する手順（Laravel + Inertia.js）

## 1. DB マイグレーション

li_elements カラムを JSON 型で追加します。

```php
Schema::table('pages', function (Blueprint $table) {
    $table->json('li_elements')->nullable();
});
2. モデルの設定（Page.php）
php
コードをコピーする
class Page extends Model
{
    protected $fillable = ['title', 'li_elements'];

    protected $casts = [
        'li_elements' => 'array',
    ];
}
3. フロントエンド（例：React + Inertia.js）
jsx
コードをコピーする
const [liElements, setLiElements] = useState([
  { text: 'りんご', color: 'red' },
  { text: 'バナナ', color: 'yellow' },
]);

const handleSubmit = () => {
  router.post('/pages', {
    title: '果物リスト',
    li_elements: liElements,
  });
};
4. コントローラ（保存処理）
php
コードをコピーする
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'li_elements' => 'nullable|array',
        'li_elements.*.text' => 'required|string',
        'li_elements.*.color' => 'nullable|string',
    ]);

    Page::create($validated);

    return redirect()->route('pages.index');
}
5. 保存された例（MySQL内のデータ）
json
コードをコピーする
[
  { "text": "りんご", "color": "red" },
  { "text": "バナナ", "color": "yellow" }
]
```

Laravel + React + Inertia での「登録・編集・閲覧」を同一コンポーネントで制御しようとしている意図は非常に理解できますが、今のコードのように data と page を手動で合成していると、スケーリングや保守がつらくなっていく傾向があります。

✳️ 現状の問題点

あなたのコードで起きているであろう問題はこうです：

data が undefined だったら page を使う（OK）

でも、data.xxx が空文字 "" だった場合にだけ page.xxx を使うようなロジックになっていて、状態が混在していて分かりづらい

編集と表示で data を基準にしつつも page を参照しにいっているのが煩雑

特に、"" を「未入力の判定」として扱ってるのがやや危険（null や undefined との区別が曖昧）

✅ おすすめの改善方法
🧠 状態を判定する「モード」を導入しよう

まず、「今このコンポーネントがどのモードで動いているか」を判断する mode を導入しましょう。

// props
type Props = {
mode: 'view' | 'edit' | 'create',
data?: any,
image?: string,
className?: string
}

usePage().props からの値は page というより「初期値」として割り切って考えるとスッキリします。

🔁 状態の合成は useMemo でやる
import React, { useMemo } from 'react';
import TitleLabel from './Parts/Title/TitleLabel';
import { usePage } from '@inertiajs/react';

export default function SimpleLayout({ className, data, image, mode = 'view' }) {
const { layout_id, agenda, title, title_detail, li_elements, obj_elements, image: pageImage } = usePage().props;

const displayData = useMemo(() => {
if (mode === 'create') {
// 新規作成: 入力中の data を優先
return {
layout_id: data?.layout_id ?? '',
agenda: data?.agenda ?? '',
title: data?.title ?? '',
title_detail: data?.title_detail ?? '',
li_elements: data?.li_elements ?? [],
obj_elements: data?.obj_elements ?? {},
image: data?.image ?? '',
};
}

    if (mode === 'edit') {
      // 編集: data に変更があれば優先、なければ page の値
      return {
        layout_id: data?.layout_id ?? layout_id,
        agenda: data?.agenda ?? agenda,
        title: data?.title ?? title,
        title_detail: data?.title_detail ?? title_detail,
        li_elements: data?.li_elements ?? li_elements,
        obj_elements: data?.obj_elements ?? obj_elements,
        image: data?.image ?? pageImage,
      };
    }

    // 閲覧: すべて page の値
    return {
      layout_id,
      agenda,
      title,
      title_detail,
      li_elements,
      obj_elements,
      image: pageImage,
    };

}, [mode, data, layout_id, agenda, title, title_detail, li_elements, obj_elements, pageImage]);

return (

<div className={className}>
<TitleLabel className="" data={displayData}>
{displayData.agenda}
</TitleLabel>

      <div className="h-[95%] flex flex-col justify-center">
        <section className="text-center">
          <h2 className="font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]">
            {displayData.title}
          </h2>
          <div className="w-[30rem] mx-auto xl:text-[2rem] xl:w-[50rem]">
            {displayData.title_detail}
          </div>
        </section>
        {displayData.image && (
          <section className="mt-10 mx-auto">
            <img
              className="h-40 w-auto"
              src={image ?? displayData.image}
              alt=""
            />
          </section>
        )}
      </div>
    </div>

);
}

💡 呼び出し側はこう使う
新規登録ページ
<SimpleLayout mode="create" data={inputData} />

編集ページ
<SimpleLayout mode="edit" data={inputData} />

閲覧ページ
<SimpleLayout mode="view" />

🎯 メリット

明示的に「今何をしたいのか（create/edit/view）」がわかる

useMemo により余分な再計算を防げる

データの優先順位が明確で、読みやすくなる

既存の data or page のマージロジックが簡潔になる

もしさらに柔軟にしたい場合は、React Hook Form や Zustand などで data の状態管理を統一する方法もありますが、現状の要件だと、今回のような mode + useMemo パターンでかなりスッキリするはずです。

必要なら、呼び出し側での状態管理の設計や、Inertia 側でのページ送信ロジック（useForm の活用など）も一緒に見られます。ご希望があれば教えてください！

Laravel+react+Inertia で開発しています。 データの登録、データの編集、既登録データの描画ページを全て同コンポーネントで管理していて、フロントからの入力情報を data で管理していて既登録データを page で管理していますが、登録の場合はフロントでの入力情報を追加したい。 データの編集は先に page を参照して、data に更新がかかれば data を参照に切り替えたい。 既登録は page のみという感じしたいですが、うまくいかないので何かいい方法はありますか? import React from 'react'; import TitleLabel from './Parts/Title/TitleLabel'; import { usePage } from '@inertiajs/react'; export default function SimpleLayout({ className, data, image, }) { const { page } = usePage().props; data = data ? data : page; if(data.layout_id == ""){ data.layout_id = page.layout_id } if(data.agenda == ""){ data.agenda = page.agenda } if(data.title == ""){ data.title = page.title } if(data.title_detail == ""){ data.title_detail = page.title_detail } if(data.li_elements == ""){ data.li_elements = page.li_elements } if(data.obj_elements == ""){ data.obj_elements = page.obj_elements } if(data.image == ""){ data.image = page.image } return ( <div className={className}> <TitleLabel className="" data={data} > {data.agenda} </TitleLabel> <div className="h-[95%] flex flex-col justify-center" > <section className='text-center'> <h2 className={font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]} > {data.title} </h2> <div className='w-[30rem] mx-auto xl:text-[2rem] xl:w-[50rem]' > {data.title_detail} </div> </section> {data.image && <section className='mt-10 mx-auto'> <img className='h-40 w-auto' src={image ? image : data.image} alt="" /> </section> } </div> </div> ) }
