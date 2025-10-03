import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function AddAgenda({data, pages, errors, setData, }){
    if(data.layout_id !== "1")
    return(
    <div className='mr-[1rem]'>
        <InputLabel htmlFor="agenda" value="目次" />
        <TextInput
            id="agenda"
            name="agenda"
            value={data.agenda}
            className="mt-1 block w-full"
            autoComplete="agenda"
            isFocused={true}
            onChange={(e) => setData('agenda', e.target.value)}
            inputType="input"
            required
            placeholder={pages ? pages.agenda : ""}
        />
        <InputError message={errors.name} className="mt-2" />
    </div>
    )
}