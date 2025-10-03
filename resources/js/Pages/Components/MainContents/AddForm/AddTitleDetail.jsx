import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function AddTitleDetail ({data, pages, errors, setData, }){
    if(data.layout_id == "2" | data.layout_id == "3"){
      let value;
      if(data.layout_id == "3") {value ="参考URL"}else{value = "タイトル下部"}
      return (
        <div className='mr-[1rem]'>
            <InputLabel htmlFor="title_detail" value={value} />
            <TextInput
                id="title_detail"
                name="title_detail"
                value={data.title_detail}
                className="mt-1 block w-full"
                autoComplete="title_detail"
                isFocused={true}
                onChange={(e) => setData('title_detail', e.target.value)}
                inputType="area"
                placeholder={pages ? pages.title_detail : ""}
                />
            <InputError message={errors.name} className="mt-2" />
        </div>
      )}
  }