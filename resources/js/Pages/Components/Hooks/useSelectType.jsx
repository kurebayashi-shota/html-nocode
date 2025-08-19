import Agenda from '../Template/Agenda';
import CodeLayout from '../Template/CodeLayout';
import SimpleLayout from '../Template/SimpleLayout';
import StepLayout from '../Template/StepLayout';

export function useSelectType({ inital, className }) {
    const layoutId = Number(inital.layout_id);    
    switch (layoutId) {
        case "agenda":
            return <Agenda data={inital} className={className} />
        case 1:
        case 2:
            return <SimpleLayout data={inital} className={className} />
        case 3:
            return <StepLayout data={inital} className={className} />
        case "term":
        case "code":
            return <CodeLayout data={inital} className={className} />
        default:console.log("layout_idが見つかりません。typeを確認して下さい");           
    }
}
