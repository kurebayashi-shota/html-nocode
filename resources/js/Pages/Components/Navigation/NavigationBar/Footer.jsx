import { usePage } from '@inertiajs/react';
import ArrowButton from './ArrowButton';
import Navigation from './Navigation';

export default function Footer({ className }) {
  const { page, pages, currentIndex, agenda, project } = usePage().props;
  const projectId = pages[0].project_id;
  
  const andoPath = () => {
    if( pages[currentIndex-1] ){
      return pages[currentIndex-1].id
    }else if(agenda){
      return `index/${projectId}`
    }else if(project){
      return pages[length+2].id
    }else{
      return `agenda/${projectId}`
    };
  }
  const nextPath = () => {
    if( pages[currentIndex+1] ){
      return pages[currentIndex+1].id
    }else if(pages[length+2]&& page){
      return `index/${projectId}`
    }else if(!agenda){
      return `agenda/${projectId}`
    }else{
      return pages[0].id
    }
  };
  
  return (
    <>
      <div className={`items-center flex mb-10 mx-10 ${className}`}>
        <ArrowButton
          path={andoPath()}
          className="transform scale-x-[-1]"
        />
        <ArrowButton
          path={nextPath()}
          className='mr-0 ml-auto'
        />
      </div>
      <Navigation />
    </>
  )
}