import { useSelectType } from "../Hooks/useSelectType";
import { usePage } from "@inertiajs/react";
import NavigationBar from "@/Pages/Components/Navigation/NavigationBar/Footer"
import back2 from '@/assets/images/back2.jpg';

export default function TempLayout({ data, className }) {
  const { page, pages } = usePage().props;
  let layoutRespons;
  
  if (page){
    layoutRespons = useSelectType({ inital:page, className });
  }else{
    layoutRespons = useSelectType({ inital:data, className })
  }
  
  return (
    <>
        <div
          className={`h-screen w-screen bg-cover ${className}`}
          style={{ backgroundImage: `url(${back2})` }}
        >
          {layoutRespons}
          {pages &&
            <NavigationBar className="-mt-[10rem]" page={page} pages={pages} />
          }
        </div>
    </>
  )
}