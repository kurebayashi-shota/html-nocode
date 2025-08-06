import Title from './Title'

export default function TitleLabel({ className, children, data }) {
    const titleBorderClass = "mt-[1rem] bg-white inline-block";
  return (
    <Title 
        className={`text-[2rem] text-[#174C61] rounded-xl ml-[1rem] xl:ml-[10rem] xl:text-[2.5rem] ${data.agenda && "border-[3px] border-[#333]"} ${titleBorderClass} ${className}`}
    >
        { children }
    </Title>
  )
}