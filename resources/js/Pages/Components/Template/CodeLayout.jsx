import TitleLabel from './Parts/Title/TitleLabel';
import { useSelectCode } from '../Hooks/useSelectCode';
export default function CodeLayout({ className, data, }) {

  let responseCompornent = useSelectCode({data});
  return (
    <div className={className}>
        <TitleLabel
            className="absolute z-10"
            data={data}
        >
            {data.agenda}
        </TitleLabel>
        {data.title &&
            <div className="relative mr-[2rem] xl:mr-[10rem] flex flex-row-reverse items-center space-x-reverse space-x-1">
                <span className="mt-[1.5rem] text-[2rem] xl:text-[3rem] font-bold text-right">
                    {data.title}
                </span>
                <div className="mt-[1.5rem] flex-1 border-b border-[2px] border-gray-500"></div>
            </div>
        }

        {responseCompornent}
    </div>
  )
}