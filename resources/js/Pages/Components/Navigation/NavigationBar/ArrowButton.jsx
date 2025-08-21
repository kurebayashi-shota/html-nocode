import { Link, } from '@inertiajs/react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function ArrowButton({ className, path }) {
  return (
    <Link
      href={`/preview/${path}`}
      className={`bg-[#1E2939] rounded-xl transition duration-200 opacity-30 hover:opacity-100 ${className}`}
     >
      <DoubleArrowIcon
        className='text-white'
        sx={{
          fontSize:{
            xs:40,
            sm:60,
            md:80,
            lg:100,
          },
        }}
      />
    </Link>
  )
}
