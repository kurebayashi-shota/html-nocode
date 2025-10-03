export function submit ({ pages, data }) {
    e.preventDefault();
    if(pages){
      post(route('posts.update', { id: pages[0].id }), {
        method:"put",
        forceFormData:true,
        onFinish: () => reset('title', ),
      });
    }else if(data.name){
      e.preventDefault();
      post(route("home.store"),{
      });
    }else{
      post(route('posts.store'), {
        forceFormData:true,
        onFinish: () => reset('title', ),
      });
    }
};