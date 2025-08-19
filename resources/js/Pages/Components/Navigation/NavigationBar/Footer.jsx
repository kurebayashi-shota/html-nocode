import { usePage } from '@inertiajs/react';
import ArrowButton from './ArrowButton';
import Navigation from './Navigation';

export default function Footer({ chapter, className }) {
  const { page, pages } = usePage().props;
  const homePath = "/preview/"
  return (
    <>
      <div className={`items-center flex mb-10 mx-10 ${className}`}>
        <ArrowButton
          path={page.id - 1}
          className="transform scale-x-[-1]"
        />
        <ArrowButton
          path={page.id + 1}
          className='mr-0 ml-auto'
        />
      </div>
      <Navigation />
    </>
  )
}