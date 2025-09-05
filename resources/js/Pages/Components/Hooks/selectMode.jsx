export default function selectMode({ page, data, mode }) {
    switch(mode){
        case "edit":
            if(data.obj_images[0].path == "" && page.obj_images[0].path){
                data.obj_images[0].path = page.obj_images[0].path
            }
            if(data.layout_id == "" && page.layout_id){
                data.layout_id = page.layout_id
            }
            if(data.title == "" && page.title){
                data.title = page.title
            }
            if(data.agenda == "" && page.agenda){
                data.agenda = page.agenda
            }
            return data
        case "preview": return page;
    }
}
