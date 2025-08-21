export default function TermComp({ index, label, detail }) {
  return (
    <div className="my-[0.5rem] xl:my-[3rem] text-gray-700 items-center bg-white rounded-xl border-[0.5rem] border-sky-200 shadow-xl/30 w-full">
      <div className='-mt-[1rem]'>
        <label className='px-[0.5rem] -ml-[1rem] border-[5px] border-[#FDDCF9] rounded-full inline-block font-bold bg-white'>
          {index + 1}
        </label>
        <div className="pt-[0.5rem] flex text-center xl:pt-[1rem]">
          <h2 className="text-xl xl:text-3xl font-bold mb-4 w-[30%] border-r-[3px] border-gray-400">{label}</h2>
          <p className="mb-2 ml-[1rem] xl:text-xl">{detail}</p>
        </div>
      </div>
    </div>
  );
}