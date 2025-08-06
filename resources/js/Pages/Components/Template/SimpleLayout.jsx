import React from 'react';
// import { useAddData } from '../Hooks/useAddData'
// import { useAddArrow } from '../Hooks/useAddArrow'
import TitleLabel from './Parts/Title/TitleLabel';
// import Logo from '../../Chapter1/Components/Pages/Components/Logo'

export default function SimpleLayout({ className, data, chapter }) {
  // let data = useAddData({chapter});
  // let arrow = useAddArrow(data[dataNum].Arrow);
  return (
    <div className={`w-[100%] ${className}`}>
      <TitleLabel
        className="mt-10"
        data={data}
      >
        {data.agenda}
      </TitleLabel>

      <div
        className="mt-[3rem] grid place-items-center min-h-[100%]"
      >
        <section className='text-center'>
          <h2
            className={`font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]`}
          >
            {data.title}
          </h2>
          <div
            className='mt-2 w-[30rem] mx-auto xl:text-[2rem] xl:w-[50rem]'
          >
            {data.titleDetail}
          </div>
        </section>
        <section className='flex'>
        </section>
      </div>
    </div>
  )
}