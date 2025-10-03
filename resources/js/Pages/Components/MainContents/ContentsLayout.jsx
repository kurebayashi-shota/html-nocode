import { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { submit } from '@/Pages/Components/MainContents/AddForm/InputParts/submit';
import GuestLayout from '@/Layouts/GuestLayout';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import TempLayout from '../Template/TempLayout';
import SelectLayoutForm from './AddForm/SelectLayoutForm';
import AddAgenda from './AddForm/AddAgenda';
import TitleForm from './AddForm/TitleForm';
import AddTitleDetail from './AddForm/AddTitleDetail';
import AddLiElements from './AddForm/AddLiElements';
import ProjectForm from './AddForm/ProjectForm';
import AgendaForm from './AddForm/AgendaForm';
// import ImageForm from './AddForm/ImageForm';
// import handleImageChange from './AddForm/InputParts/handleImageChange';

export default function ContentsLayout({auth}) {
  const queryParams = new URLSearchParams(window.location.search);
  const projectId = queryParams.get('project');
  
  const { pages, layout, mode } = usePage().props;
  const [imagePreview, setImagePreview] = useState(null);
  const [ height, setHeight ] = useState("10");
  
  const { data, setData, post, put, processing, errors, reset } = useForm({
      // ページの作成+agenda
      project_id: projectId,
      layout_id: pages? pages[0].layout_id : 2,
      title: '',
      title_detail: '',
      li_elements: [''],
      obj_elements: [{ title:'', value:'', },],
      obj_images: [{ path:'', height:'' },],
      // プロジェクトの作成
      name : '',
      agenda : mode=="create" ? '' : [''],//統合したら配列のみにする
      user_id : auth.user? auth.user.id : null,
  });
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(!file)return;
    setData((prevData) => {
      const updatedImages =[...prevData.obj_images];
      updatedImages[0].path = file;
      return { ...prevData, obj_images:updatedImages};
    })
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };
  const handleHeightChange = (value) => {
    setHeight(value);
    setData((prevData)=> {
      const updatedImages = [...prevData.obj_images];
      updatedImages[0].height = value;
      return { ...prevData, obj_images: updatedImages};
    });
  };
  
  return (
    <main className="">
        <GuestLayout className="rounded-t-xl px-[1rem] shadow-xl xl:px-[5rem] xl:mx-[5rem]" noLogo={true} layout_id={pages ? pages.layout_id : ""}>
        { mode=="create" ?
          (
            <form className='w-full flex' onSubmit={(e)=>submit(e,pages, data)}>
                <SelectLayoutForm data={data} pages={pages} errors={errors} setData={setData} layout={layout} />
                <div>
                  <AddAgenda data={data} pages={pages} errors={errors} setData={setData} />
                  <TitleForm data={data} pages={pages} errors={errors} setData={setData} />
                </div>
                <AddTitleDetail data={data} pages={pages} errors={errors} setData={setData} />
                <div>
                  <AddLiElements data={data} pages={pages} errors={errors} setData={setData} />
                  <div className='mt-2 mr-[1rem]'>
                    <InputLabel htmlFor="image" value="画像" />
                    <TextInput
                        id="image"
                        name="image"
                        type="file"
                        className="mt-1 block w-full"
                        autoComplete="image"
                        isFocused={true}
                        onChange={handleImageChange}
                        onHeightChange={handleHeightChange}
                        inputType="image"
                        />
                </div>
                {/* <ImageForm data={data} pages={pages} errors={errors} setData={setData} onChange={handleImageChange} onHeightChange={handleHeightChange} /> */}
              </div>
              <PrimaryButton className="mr-0 ml-auto ms-4" disabled={processing}>
                  {pages ? "変更":"登録"}
              </PrimaryButton>
            </form>
          ):(
            <>
              <h2>プロジェクトの作成</h2>
              <form onSubmit={(e)=>submit(e,pages, data)}>
                  <ProjectForm setData={setData} />
                <div>
                  <AgendaForm setData={setData} data={data} />
                </div>
                <PrimaryButton disabled={processing}>登録</PrimaryButton>
              </form>
            </>
          )}
          </GuestLayout>
          <TempLayout data={data} image={imagePreview} className="scale-[0.97] rounded-xl xl:scale-[0.9]" />
      </main>
  )
}