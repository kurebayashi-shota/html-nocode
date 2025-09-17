import { Link, usePage } from "@inertiajs/react"
import { useState } from "react"

export default function PreviewList({ pages, auth }) {
    const { project } = usePage().props;
    const [ SelectedId, setSelectedId ] = useState("");
    const data = project ? project : pages;
    
    function noData(){
        if(data.length<=0)return <div>データがありません</div>
    }
    
    return (
        <>
            <div>{auth.user? auth.user.name : "ゲスト"}さんの</div>
            <h2>{project? "プロジェクト一覧":"ページ一覧"}</h2>
            <ul className="mt-[3rem] text-center">
                {noData()}
                {data?.map((item)=>(
                    <li className="text-[3rem]" key={item.id}>
                        <input
                            type="radio"
                            value={item.id}
                            onChange={()=>setSelectedId(item.id)}
                            name="itemSelect"
                            />
                            {auth.user ?
                                <Link
                                    href={item.name? `/preview/${item.id}`:`/page/${item.id}`}
                                    >
                                    {item.id}
                                    {item.name ? item.name : item.title}
                                </Link>                        
                            :
                                <Link
                                    href={item.name? `/preview/${item.id}`:`/page/${item.id}`}
                                    >
                                    {item.id}
                                    {item.name ? item.name : item.title}
                                </Link>
                            }
                    </li>
                ))}
            </ul>
            {SelectedId &&
            <>
            <Link
                href={`edit/${SelectedId}`}
                // className={headerNavClass}
                >
                編集
            </Link>
                {project &&
                    <Link
                        href={`/add/${SelectedId}`}
                        // className={headerNavClass}
                        >
                        ページの追加
                    </Link>
                }
            </>
            }
        </>
    )
}
