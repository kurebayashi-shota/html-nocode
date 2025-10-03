import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function TitleForm({data, pages, errors, setData, }) {
  return (
    <div className='mt-2 mr-[1rem]'>
        <InputLabel htmlFor="title" value="タイトル" />
        <TextInput
            id="title"
            name="title"
            value={data.title}
            className="mt-1 block w-full"
            autoComplete="title"
            isFocused={true}
            onChange={(e) => setData('title', e.target.value)}
            inputType="input"
            placeholder={pages ? pages.title : ""}
            />
        <InputError message={errors.name} className="mt-2" />
    </div>
  )
}
