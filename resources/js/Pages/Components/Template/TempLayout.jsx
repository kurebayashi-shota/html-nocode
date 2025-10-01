import selectType from "../Hooks/selectType";
import { usePage } from "@inertiajs/react";
import NavigationBar from "@/Pages/Components/Navigation/NavigationBar/Footer"
import back2 from '@/assets/images/back2.jpg';
import selectMode from "../Hooks/selectMode";
import Agenda from "./Agenda";
import ProjectIndex from "./ProjectIndex"

export default function TempLayout({ data, className, image, }) {
  const { page, pages, mode, agenda, project } = usePage().props;
  
  if(mode && (page || project))data= selectMode({page, data, mode, project })
  let layoutRespons;
  if(page || data) layoutRespons = selectType({ inital:data, image, className, mode })
  
  return (
    <>
        <div
          className={`h-screen w-screen shadow-xl bg-cover ${className}`}
          style={{ backgroundImage: `url(${back2})` }}
        >
          {agenda ?
            <Agenda className="h-[70%] min-h-[100%]" data={project}/>
            :
              (layoutRespons)
          }
          {pages &&
            <NavigationBar className="-mt-[20%]" page={page} pages={pages} agenda={agenda} />
          }
        </div>
    </>
  )
}