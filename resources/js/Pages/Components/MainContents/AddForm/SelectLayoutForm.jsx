import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function SelectLayoutForm({data, pages, errors, setData, layout, }) {
    return (
        <div className='mr-[1rem] bg-[#F9FAFB] rounded-xl'>
            <InputLabel htmlFor="layout" value="レイアウトの選択" />
            <TextInput
                id="layout"
                name="layout_id"
                value={data.layout_id}
                className="mt-1 block w-full"
                autoComplete="layout"
                isFocused={true}
                onChange={(e) => setData('layout_id', e.target.value)}
                inputType="radio"
                required
                checked={pages && pages.layout_id === layout.id}
                />
            <InputError message={errors.name} className="mt-2" />
            {layout && 
                <div className='text-[0.8rem] text-[tomato]'>
                    今は{layout}で登録<br/>されています。
                </div>
            }
        </div>
    )
}
