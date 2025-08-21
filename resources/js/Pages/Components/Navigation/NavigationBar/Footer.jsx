import { usePage } from '@inertiajs/react';
import ArrowButton from './ArrowButton';
import Navigation from './Navigation';

export default function Footer({ className }) {
  const { page, pages } = usePage().props;
  function andoPath (){if( page.id <= 1 ){return ""}else{return page.id -1};}
  function nextPath (){if( page.id === pages.length ){return ""}else{return page.id + 1};};

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