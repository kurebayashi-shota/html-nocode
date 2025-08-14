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

## [1.0.5] - 2025-08-14

### Added

-   Footer.jsx の追加

## [1.0.4] - 2025-08-12

-   ContenrsLayout.jsx 内の from タグが親要素いっぱいに広がらない

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
| `$table->json('data')`             | JSON データ                      | `$table->json('data');`             |
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
