import CodeComp from "../Template/Parts/CodeParts/CodeComp";
import TermComp from '../Template/Parts/CodeParts/TermComp';

export function useSelectCode({ data }) {
    
    const baseClass = "p-6 justify-center xl:mt-[5rem] xl:w-[80%]";
    switch(data.layout_id){
        case 4:
        case "4":return (
            <main className={`flex ${baseClass}`}>
                {data.obj_elements?.map((obj, index)=>(
                    <CodeComp
                        key={index}
                        index={index}
                        label={obj.title}
                        detail={obj.value}
                        code={obj.value}
                    />
                ))}
            </main>
        )
        case 5:
        case "5":return (
            <main className={`mx-auto ${baseClass}`}>
                {data.obj_elements?.map((obj, index)=>(
                    <TermComp
                        key={index}
                        index={index}
                        label={obj.title}
                        detail={obj.value}
                    />
                ))}
            </main>
        ) 
    }
}
