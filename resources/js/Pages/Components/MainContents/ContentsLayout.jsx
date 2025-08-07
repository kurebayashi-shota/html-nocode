import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import back2 from '@/assets/images/back2.jpg';
import SimpleLayout from '../Template/SimpleLayout';

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

  function addForm (){
    if(data.layout_id == "2")
      return (
        <div className='mb-[1rem]'>
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
    <main className="flex">
      <GuestLayout className="rounded-l-xl w-[30%] pl-[1rem]" noLogo={true}>
          <form onSubmit={submit}>
          <div className='mb-[1rem]'>
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
              <div className='mb-[1rem]'>
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
              <div className='mb-[1rem]'>
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
              {addForm()}
              <PrimaryButton className="ms-4" disabled={processing}>
                  登録
              </PrimaryButton>
          </form>
      </GuestLayout>
      <section className="w-[70%] bg-gray-100 flex items-center justify-center rounded-r-xl">
        <div
          className="h-[90%] w-[90%] mx-auto bg-cover rounded-xl shadow-xl"
          style={{ backgroundImage: `url(${back2})` }}
        >
          <SimpleLayout data={data} className="" />
        </div>        
      </section>
    </main>
  )
}