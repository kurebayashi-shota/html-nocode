import { Head, Link } from '@inertiajs/react';

export default function HeadeNav({auth}) {
    const headerNavClass = "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white";
  return (
    <>
      <Head title="NoCodeTool" />
      <header className="h-[3rem] gap-2 text-[1.5rem] font-bold">
        <nav className="-mx-3 flex flex-1 justify-end">
            <Link
                href={route('/')}
                className={headerNavClass}
                >
                新規作成
            </Link>
            <Link
                href={route('create')}
                className={headerNavClass}
                >
                ページ作成
            </Link>
            {auth.user ? (
                <>
                    <Link
                        href={`list/${auth.user.id}`}
                        className={headerNavClass}
                        >
                        プレビュー
                    </Link>
                    <Link
                        href={route('dashboard')}
                        className={headerNavClass}
                    >
                        ダッシュボード
                    </Link>
                </>
            ) : (
                <>
                    <Link
                        href={route('list')}
                        className={headerNavClass}
                        >
                        プレビュー
                    </Link>
                    <Link
                        href={route('login')}
                        className={headerNavClass}
                        >
                        ログイン
                    </Link>
                    <Link
                        href={route('register')}
                        className={headerNavClass}
                        >
                        登録
                    </Link>
                </>
            )}
        </nav>
      </header>
    </>
  )
}
