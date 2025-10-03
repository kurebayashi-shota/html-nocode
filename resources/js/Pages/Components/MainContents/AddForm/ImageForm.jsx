import { useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function ImageForm({data, pages, errors, setData, }) {
    const [ height, setHeight ] = useState("10");
    const [imagePreview, setImagePreview] = useState(null);
    const handleHeightChange = (value) => {
      setHeight(value);
      setData((prevData)=> {
        const updatedImages = [...prevData.obj_images];
        updatedImages[0].height = value;
        return { ...prevData, obj_images: updatedImages};
      });
    };
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
        return (
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
            onHeightChange={handleHeightChange(setImagePreview)}
            inputType="image"
            />
    </div>
  )
}
