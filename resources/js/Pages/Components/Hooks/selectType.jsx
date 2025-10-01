import Agenda from '../Template/Agenda';
import CodeLayout from '../Template/CodeLayout';
import SimpleLayout from '../Template/SimpleLayout';
import StepLayout from '../Template/StepLayout';

export default function selectType({ inital, image, mode, }) {
    const layoutBase = "h-[70%] min-h-[100%]";
    let layoutId;
    if(inital.layout_id) {
        layoutId = Number(inital.layout_id);
    }else{
        layoutId = mode
    }
    
    switch (layoutId) {
        case "agenda":
            return <Agenda data={inital} image={image} className={layoutBase} />
        case 1:
        case 2:
        case "index":
            return <SimpleLayout data={inital} image={image} className={layoutBase} mode={mode} />
        case 3:
            return <StepLayout data={inital} image={image} className={layoutBase} />
        case 4:
        case 5:
            return <CodeLayout data={inital} image={image} className={layoutBase} />
        default:alert("layout_idが見つかりません。typeを確認して下さい");           
    }
}
