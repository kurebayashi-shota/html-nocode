import { Link, usePage } from '@inertiajs/react';
import TitleLabel from './Parts/Title/TitleLabel';

export default function StepLayout({ data, className }) {
  const { page, pages } = usePage().props;
  const textClass = "text-[1.5rem] xl:text-[2rem]";
  data = page ? page : data;

  function currentStepNumber(pages, pageId) {
    const currentIndex = pages.findIndex(item => item.id === pageId);
    return pages
      .slice(0, currentIndex + 1)
      .filter(item => item.layout_id === 3)
      .length;
  }
    
  return (
      <div className={className}>
        <TitleLabel
          className=""
          data={data}
        >
          {data.agenda}
        </TitleLabel>
        <div className="ml-[15%] xl:ml-[20%]">
          <section>
            <div className="xl:text-[1.5rem] border-[5px] rounded-xl inline-block px-2 font-bold bg-white">
              STEP{page && `${currentStepNumber(pages, page.id)}`}
            </div>
            <div className="ml-30">
              <h2
                className={`ml-[15%] font-bold text-[2rem] xl:text-[3rem]`}
                >
                {data.title}
              </h2>
              {data.title_detail &&
                <Link className='ml-[15%] text-[tomato]' href={data.title_detail} target='blank'>参照URL:{data.title_detail}</Link>
              }
              <ul className='ml-[20%]'>
                {(data.li_elements || []).map((li, index) => (
                  <li className='mt-[0.5rem] block w-fit border-b-[1px] border-b-[tomato]' key={index}>{li}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
  