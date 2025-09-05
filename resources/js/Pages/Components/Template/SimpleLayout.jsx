import React from 'react';
import TitleLabel from './Parts/Title/TitleLabel';

export default function SimpleLayout({ className, data, image, }) {
  const imagesData = image ? image : data.obj_images[0].path;
  
  return (
    <div className={className}>
      <TitleLabel
        className=""
        data={data}
        >
        {data.agenda}
      </TitleLabel>

      <div
        className="h-[95%] flex flex-col justify-center"
        >
        <section className='text-center'>
          <h2 className={`font-bold text-[2rem] border-b-[3px] border-b-[tomato] inline-block xl:text-[3rem]`}>
            {data.title}
          </h2>
          <div
            className='w-[30rem] mx-auto xl:text-[2rem] xl:w-[50rem]'
            >
            {data.title_detail}
          </div>
        </section>
        {imagesData &&
        <section className='mt-10 mx-auto'>
          <img
            className="w-auto"
            style={data.obj_images[0].height ? { height:`${data.obj_images[0].height}rem`}:{height:"10rem"}}
            src={imagesData}
            alt=""
            />
        </section>
        }
      </div>
    </div>
  )
}