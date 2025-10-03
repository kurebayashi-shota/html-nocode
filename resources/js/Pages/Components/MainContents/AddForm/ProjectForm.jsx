import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function ProjectForm({ setData, }) {
  return (
    <>
        <InputLabel htmlFor="title" value="プロジェクト名" />
        <TextInput onChange={(e)=>setData("name",e.target.value)} />
    </>
  )
}
