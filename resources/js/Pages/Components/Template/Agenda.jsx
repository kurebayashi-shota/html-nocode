import { usePage } from '@inertiajs/react';
import Title from './Parts/Title/Title';

export default function Agenda({ className, data }) {
  const { page } = usePage().props;
  const listClass = "display: table border-b-[2px] border-b-[tomato]";
  const olClass = "text-[2rem] mt-[5rem] mx-auto xl:text-[3rem]"
  const titleBorderClass = "mt-[1rem] bg-white inline-block border-[2px] border-[#333]";
  return (
    <>
      <div className={className}>
        <Title
          className={`text-[3rem] text-[#174C61] rounded-xl ml-[1rem] xl:ml-[10rem] ${titleBorderClass}`}
        >
          目次
        </Title>
        <div className='flex'>
          <ol className={olClass}>
            {data.agenda.map((item, index) => (
              <li key={index} className={`${listClass}`}>{index+1}.{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
}
