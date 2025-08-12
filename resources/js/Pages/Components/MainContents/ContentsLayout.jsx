import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import TempLayout from '../Template/TempLayout';

export default function ContentsLayout() {
  const { data, setData, post, processing, errors, reset } = useForm({
      layout_id: '',
      agenda: '',
      title: '',
      titleDetail: '',
  });

  const submit = (e) => {
      e.preventDefault();

      post(route('posts.store'), {
          onFinish: () => reset('title', ),
      });
  };

  function addAgenda(){
    if(data.layout_id == "2")
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
        />
        <InputError message={errors.name} className="mt-2" />
    </div>
    )
  }

  function addTitleDetail (){
    if(data.layout_id == "2")
      return (
        <div className='mr-[1rem]'>
            <InputLabel htmlFor="titleDetail" value="タイトル下部" />
            <TextInput
                id="titleDetail"
                name="titleDetail"
                value={data.titleDetail}
                className="mt-1 block w-full"
                autoComplete="titleDetail"
                isFocused={true}
                onChange={(e) => setData('titleDetail', e.target.value)}
                inputType="area"
                required
            />
            <InputError message={errors.name} className="mt-2" />
        </div>
      )
  }
  return (
    <main className="">
      <GuestLayout className="rounded-t-xl px-[1rem] xl:px-[5rem] xl:mx-[5rem]" noLogo={true}>
          <form className='flex' onSubmit={submit}>
              <div className='mr-[1rem]'>
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
                  />
                  <InputError message={errors.name} className="mt-2" />
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
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
              </div>
              {addTitleDetail()}
              <PrimaryButton className="mr-0 ml-auto ms-4" disabled={processing}>
                  登録
              </PrimaryButton>
          </form>
      </GuestLayout>
      <section className="bg-gray-100 flex items-center justify-center rounded-r-xl xl:mx-[5rem]">
          <TempLayout data={data} className="scale-[0.95] rounded-xl shadow-xl xl:scale-[0.9]" />
      </section>
    </main>
  )
}