# Inertia.js における Layout（React Router の `<Outlet>` 相当）

Inertia.js + React で、React Router の `<Outlet>` のような「共通レイアウトにページを差し込む」構成を実現する方法をまとめます。

---

## ✅ 基本の考え方

Inertia.js では、ページコンポーネントに `layout` プロパティを設定することで、共通レイアウト（親コンポーネント）を適用できます。

これは、React Router の `<Outlet>` に相当する機能として機能します。

---

## 🧱 1. レイアウトコンポーネントの作成

共通のヘッダーやフッターを含むレイアウトコンポーネントを作成します。

````jsx
// resources/js/Layouts/MainLayout.jsx

export default function MainLayout({ children }) {
    return (
        <div>
            <header className="bg-gray-100 p-4">ヘッダー</header>
            <main className="p-4">{children}</main>
            <footer className="bg-gray-100 p-4">フッター</footer>
        </div>
    );
}


# Inertia.js（React）代表的なコンポーネントと基本的な使い方

このドキュメントは、Inertia.js を React で使用する際によく使うコンポーネントやフック、その使い方をまとめたものです。

---

## 🔗 Link コンポーネント（ページ遷移）

SPA 的なページ遷移を行います。通常の `<a>` タグの代替です。

```jsx
import { Link } from '@inertiajs/react';

<Link href="/dashboard" className="text-blue-500 underline">
  ダッシュボードへ
</Link>

````

📄 Head コンポーネント（ページタイトル・メタ設定）
HTML <head> 内のタイトルやメタ情報を Inertia 経由で設定します。

import { Head } from '@inertiajs/react';

<Head title="ダッシュボード" />

📦 usePage フック（Laravel からの props 取得）
Laravel コントローラーで渡された props を React 側で受け取るためのフックです。

import { usePage } from '@inertiajs/react';

const { user } = usePage().props;

<h1>{user.name}さん、こんにちは！</h1>

📝 useForm フック（フォーム処理とバリデーション）
フォームの状態管理・バリデーション・送信処理を簡潔にまとめて扱えるフックです。

import { useForm } from '@inertiajs/react';

const { data, setData, post, processing, errors } = useForm({
title: '',
content: '',
});

function handleSubmit(e) {
e.preventDefault();
post('/posts');
}

🔁 Inertia オブジェクト（手動ページ遷移やフォーム送信）
低レベル API。明示的にページ遷移やデータ送信をしたいときに使用します。

import { Inertia } from '@inertiajs/react';

Inertia.post('/logout');

✅ まとめ
名前 種類 主な用途
Link コンポーネント SPA 的なページ遷移
Head コンポーネント ページタイトルやメタ情報の設定
usePage フック Laravel から渡された props を取得
useForm フック フォームの状態管理とバリデーション送信
Inertia オブジェクト 手動での遷移・送信（より柔軟な操作が可能）
