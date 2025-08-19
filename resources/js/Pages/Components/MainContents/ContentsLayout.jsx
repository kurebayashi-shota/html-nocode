import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/react';
import TempLayout from '../Template/TempLayout';

export default function ContentsLayout() {
  const { pages, layout } = usePage().props;
  const { data, setData, post, put, processing, errors, reset } = useForm({
      layout_id: pages?.layout_id | 2,
      agenda: '',
      title: '',
      title_detail: '',
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
    if(data.layout_id == "2")
      return (
        <div className='mr-[1rem]'>
            <InputLabel htmlFor="title_detail" value="タイトル下部" />
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
                placeholder={pages ? pages.titleDetail : ""}
                />
            <InputError message={errors.name} className="mt-2" />
        </div>
      )
  }

  return (
    <main className="">
      <GuestLayout className="rounded-t-xl px-[1rem] xl:px-[5rem] xl:mx-[5rem]" noLogo={true} layout_id={pages ? pages.layout_id : ""}>
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
              <PrimaryButton className="mr-0 ml-auto ms-4" disabled={processing}>
                  {pages ? "変更":"登録"}
              </PrimaryButton>
          </form>
      </GuestLayout>
      <section className="bg-gray-100 flex items-center justify-center rounded-r-xl xl:mx-[5rem]">
          <TempLayout data={data} className="scale-[0.95] rounded-xl shadow-xl xl:scale-[0.9]" />
      </section>
    </main>
  )
}