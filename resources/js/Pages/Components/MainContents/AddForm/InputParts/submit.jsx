export function submit ({ e, pages, data, post, reset }) {
e.preventDefault();
	console.log(data);
	console.log(e);
	console.log(page);
    e.preventDefault();
    if(pages){
	console.log("update");
      post(route('posts.update', { id: pages[0].id }), {
        method:"put",
        forceFormData:true,
        onFinish: () => reset('title', ),
      });
    }else if(data.name){
	console.log("data.name");
      e.preventDefault();
      post(route("home.store"),{
      });
    }else{
	console.log("store");
      post(route('posts.store'), {
        forceFormData:true,
        onFinish: () => reset('title', ),
      });
    }
};
