import { useSelectType } from "../Hooks/useSelectType";
import { usePage } from "@inertiajs/react";
import NavigationBar from "@/Pages/Components/Navigation/NavigationBar/Footer"
import back2 from '@/assets/images/back2.jpg';
import selectMode from "../Hooks/selectMode";

export default function TempLayout({ data, className, image, }) {
  const { page, pages, mode } = usePage().props;
  if(mode)data= selectMode({page, data, mode})
  const layoutRespons = useSelectType({ inital:data, image, className })
  
  return (
    <>
        <div
          className={`h-screen w-screen shadow-xl bg-cover ${className}`}
          style={{ backgroundImage: `url(${back2})` }}
        >
          {layoutRespons}
          {pages &&
            <NavigationBar className="-mt-[20%]" page={page} pages={pages} />
          }
        </div>
    </>
  )
}