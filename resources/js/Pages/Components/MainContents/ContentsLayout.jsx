import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/react';
import TempLayout from '../Template/TempLayout';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ContentsLayout() {
  const { pages, layout } = usePage().props;
  const { data, setData, post, put, processing, errors, reset } = useForm({
      layout_id: pages?.layout_id | 2,
      agenda: '',
      title: '',
      title_detail: '',
      li_elements: [''],
      obj_elements: [
        {title:'',value:''}
      ],
  });

  const submit = (e) => {
      e.preventDefault();
      if(pages){
        put(route('posts.update', { id: pages[0].id }), {
          onFinish: () => reset('title', ),
        });
      }else{
        post(route('posts.store'), {
          onFinish: () => reset('title', ),
        });
      }
  };

  function addAgenda(){
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

  function addTitleDetail (){
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
                required
                placeholder={pages ? pages.title_detail : ""}
                />
            <InputError message={errors.name} className="mt-2" />
        </div>
      )}
  }

  function addLiElements() {
    let fieldName;
    let isObject = false;
  
    switch (data.layout_id) {
      case "1":
      case "2":
        return null;
      case "3":
        fieldName = "li_elements";
        break;
      case "4":
      case "5":
        fieldName = "obj_elements";
        isObject = true;
        break;
      default:
        return null;
    }
  
    const handleChange = (index, valueOrField, value) => {
      const updated = [...data[fieldName]];
      if (isObject) {
        updated[index][valueOrField] = value;
      } else {
        updated[index] = valueOrField;
      }
      setData(fieldName, updated);
    };
  
    const addElement = () => {
      const newElement = isObject ? { title: "", value: "" } : "";
      setData(fieldName, [...data[fieldName], newElement]);
    };
  
    const removeElement = (index) => {
      const updated = data[fieldName].filter((_, i) => i !== index);
      setData(fieldName, updated);
    };
    
    return (
      <div className="">
        <div className="flex">
          <InputLabel htmlFor={fieldName} value="リスト項目" />
          <button
            type="button"
            onClick={addElement}
            className="ml-[4rem] text-[0.8rem] text-white border-[1px] bg-[#374151] rounded-md px-[5px]"
          >
            +項目追加
          </button>
        </div>
  
        {data[fieldName].map((item, index) => (
          <div key={index} className="flex items-center space-x-2 mt-1">
            {isObject ? (
              <>
                <TextInput
                  placeholder="タイトル"
                  value={item.title}
                  onChange={(e) =>
                    handleChange(index, "title", e.target.value)
                  }
                />
                <TextInput
                  placeholder="値"
                  value={item.value}
                  onChange={(e) =>
                    handleChange(index, "value", e.target.value)
                  }
                />
              </>
            ) : (
              <TextInput
                value={item}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`リスト項目 ${index + 1}`}
              />
            )}
            <button
              type="button"
              onClick={() => removeElement(index)}
              className="bg-[tomato] text-white rounded-md py-[0.4rem]"
            >
              <DeleteIcon />
            </button>
          </div>
        ))}
  
        <InputError message={errors[fieldName]} className="mt-2" />
      </div>
    );
  }
  return (
    <main className="">
      <GuestLayout className="rounded-t-xl px-[1rem] shadow-xl xl:px-[5rem] xl:mx-[5rem]" noLogo={true} layout_id={pages ? pages.layout_id : ""}>
          <form className='w-full flex' onSubmit={submit}>
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
              <div>
                {addAgenda()}
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
                        required
                        placeholder={pages ? pages.title : ""}
                        />
                    <InputError message={errors.name} className="mt-2" />
                </div>
              </div>
              {addTitleDetail()}
              {addLiElements()}
              <PrimaryButton className="mr-0 ml-auto ms-4" disabled={processing}>
                  {pages ? "変更":"登録"}
              </PrimaryButton>
          </form>
      </GuestLayout>
      <section className="bg-gray-100 flex items-center justify-center shadow-xl rounded-b-xl xl:mx-[5rem]">
          <TempLayout data={data} className="scale-[0.97] rounded-xl xl:scale-[0.9]" />
      </section>
    </main>
  )
}