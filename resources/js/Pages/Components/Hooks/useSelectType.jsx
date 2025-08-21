import Agenda from '../Template/Agenda';
import CodeLayout from '../Template/CodeLayout';
import SimpleLayout from '../Template/SimpleLayout';
import StepLayout from '../Template/StepLayout';

export function useSelectType({ inital }) {
    const layoutBase = "h-[70%]";
    const layoutId = Number(inital.layout_id);
    switch (layoutId) {
        case "agenda":
            return <Agenda data={inital} className={layoutBase} />
        case 1:
        case 2:
            return <SimpleLayout data={inital} className={layoutBase} />
        case 3:
            return <StepLayout data={inital} className={layoutBase} />
        case 4:
        case 5:
            return <CodeLayout data={inital} className={layoutBase} />
        default:alert("layout_idが見つかりません。typeを確認して下さい");           
    }
}
