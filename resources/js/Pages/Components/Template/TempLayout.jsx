import SimpleLayout from "./SimpleLayout"
import back2 from '@/assets/images/back2.jpg';

export default function LayoutTemp({ data, className }) {
  return (
    <>
        <div
          className={`h-screen w-screen bg-cover ${className}`}
          style={{ backgroundImage: `url(${back2})` }}
        >
          <SimpleLayout data={data} />
        </div>
    </>
  )
}