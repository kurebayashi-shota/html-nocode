import React from 'react';
import { usePage } from '@inertiajs/react';
import TitleLabel from './Parts/Title/TitleLabel';
// import Logo from '../../Chapter1/Components/Pages/Components/Logo'

export default function SimpleLayout({ className, data, }) {
  const previewData = usePage().props;
  data = previewData.page ? previewData.page : data;
  return (
    <div className={className}>
      <TitleLabel
        className=""
        data={data}
      >
        {data.agenda}
      </TitleLabel>

      <div
        className="-mt-[7%] flex justify-center items-center min-h-screen"
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
            {data.title_detail}
          </div>
        </section>
      </div>
    </div>
  )
}