// export default function handleImageChange (e) {
//   const file = e.target.files[0];
//   if(!file)return;
//   setData((prevData) => {
//     const updatedImages =[...prevData.obj_images];
//     updatedImages[0].path = file;
//     return { ...prevData, obj_images:updatedImages};
//   })
//   const reader = new FileReader();
//   reader.onloadend = () => setImagePreview(reader.result);
//   reader.readAsDataURL(file);
// };
