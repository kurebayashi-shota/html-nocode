import { Link } from "@inertiajs/react"
import { useState } from "react"

export default function PreviewList({ pages }) {
    const [SelectedId,setSelectedId] =useState("");
    return (
        <>
            <ul className="mt-[3rem] text-center">
                {pages.map((page)=>(
                    <li className="text-[3rem]" key={page.id}>
                        <input
                            type="radio"
                            value={page.id}
                            onChange={()=>setSelectedId(page.id)}
                            name="pageSelect"
                            />
                            <Link
                                href={`/preview/${page.id}`}
                                >
                                {page.id}{page.title}
                            </Link>
                    </li>
                ))}
            </ul>
            {SelectedId &&
            <Link
                href={`edit/${SelectedId}`}
                // className={headerNavClass}
                >
                編集
            </Link>
            }
        </>
    )
}
