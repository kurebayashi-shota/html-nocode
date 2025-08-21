import { Link, usePage } from '@inertiajs/react'
import HomeIcon from '@mui/icons-material/Home';
export default function Navigation() {
  const { pages } = usePage().props;
  return (
    <div className="ml-10 -mt-[1rem] w-[4rem] relative group text-center items-center">
        <div className="text-xl font-bold border-black border-[2px] rounded hover:hidden">
          ・・・
        </div>
        <div className="text-black absolute -mt-[4rem] opacity-0 transition duration-300 flex w-[31rem] overflow-auto group-hover:opacity-100 bg-white shadow-md border rounded p-2">
          <Link className='my-auto flex-shrink-0 hover:bg-gray-100 hover:rounded-full' href={"/preview/"}><HomeIcon /></Link>
          {pages.map((page, index)=>(
            <Link
              key={index}
              href={`/preview/${page.id}`}
              className="px-4 py-2 hover:bg-gray-100 hover:rounded-full"
              >
              {page.id}
            </Link>
          ))}
        </div>
    </div>
  )
}