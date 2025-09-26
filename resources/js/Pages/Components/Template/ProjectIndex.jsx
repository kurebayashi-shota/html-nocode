import React from 'react';
import TitleLabel from './Parts/Title/TitleLabel';

export default function Project({ className, data, image, mode, }) {
  
  return (
    <div className={className}>
      {mode ? (
        <TitleLabel
          className=""
          data={data}
          >
          {data.agenda}
        </TitleLabel>
      ):(null)}
      <div
        className="h-[95%] flex flex-col justify-center"
        >
        <section className='text-center'>
          <h2 className={`font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]`}>
            {mode ? data.title : data.name}
          </h2>
        </section>
      </div>
    </div>
  )
}