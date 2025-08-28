export default function selectMode({ page, data, mode }) {
    switch(mode){
        case "edit":
            if(data.image=="" && page.image){
                data.image = page.image
            }
            if(data.title=="" && page.title){
                data.title = page.title
            }
            if(data.agenda=="" && page.agemda){
                data.agenda = page.agenda
            }
            if(data.layout_id=="" && page.layout_id){
                data.layout_id = page.layout_id
            }
            return data
        case "preview": return page;
    }
}
