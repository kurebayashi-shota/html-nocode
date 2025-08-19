import { usePage } from '@inertiajs/react';
import TitleLabel from './Parts/Title/TitleLabel';

export default function StepLayout({ data, adjustmentClass, className }) {
    const { page, pages } = usePage().props;
    const textClass = "text-[1.5rem] xl:text-[2rem]";
    data = page ? page : data;
    if(page){  
    const currentStepNumber = countStepsUpTo(pages, page.id);
    
    function countStepsUpTo(dataArray, currentPageId) {
      const currentIndex = dataArray.findIndex(item => item.id === currentPageId);
      if (currentIndex === -1) return 0;
  
      return dataArray
        .slice(0, currentIndex + 1)
        .filter(item => item.layout_id === 3)
        .length;
    }
  }
  return (
      <div className="h-[70%]">
      <TitleLabel
        className=""
        data={data}
      >
        {data.agenda}
      </TitleLabel>
        <div className={`w-fit mx-auto ${className}`}>
          <section>
            <h3 className="my-3 xl:text-[1.5rem] border-[3px] rounded-xl inline-block px-2 font-bold bg-white">
              STEP{page &&{currentStepNumber}}
            </h3>
            <div className="ml-30">
              <p className={textClass}>
                {data.title}
              </p>
              {/* <a className='text-[red]' href={data.TitleClass} target='blank'>{data.TitleDetail}</a> */}
              <ul>
                <li>{data.title_detail}</li>
                {/* {(page.LiElements || []).map((LiElement, index) => (
                  <li key={index} className={`${LiElement.class} ${ClassData.detailClass}`}>
                    {LiElement.value}
                  </li>
                ))} */}
              </ul>
              {/* <img className={data[dataNum].ImageClass} src={data[dataNum].Image} />
              <img className={data[dataNum].ImagesOver.class} src={data[dataNum].ImagesOver.src} />
              <div className={data[dataNum].NextClass}></div>
              <div className={data[dataNum].RedFrameClass}></div> */}
            </div>
          </section>
        </div>
      </div>
    );
  }
  