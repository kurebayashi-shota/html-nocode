import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { usePage } from '@inertiajs/react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, inputType, placeholder, onHeightChange, ...props },
    ref,
) {
    const inputBaseStyle = "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500";
    const localRef = useRef(null);
    const { layouts } = usePage().props;
    const [height , setHeight] = useState("10");
    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));
    
    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    function addInputWidth(){
        switch(inputType){
            case "image":return "w-[6.6rem]"
            case "input":return "w-[7.8rem]"
        }
    }

    switch(inputType)
    {
        case "radio":
            return(
                <>
                {layouts.map(( layout , index ) =>(
                    <label
                        className='block'
                        key={index}
                    >
                        <input
                            {...props}
                            ref={localRef}
                            type="radio"
                            name="layout_id"
                            value={index+1}
                            checked={props.value == index+1}
                            //↑型変換が必要
                        />
                        {layout.name}
                    </label>
                ))}
                    {/* <label className='mx-2'>
                        <input
                            {...props}
                            ref={localRef}
                            type="radio"
                            name="layout_id"
                            value="3"
                            checked={props.value === "3"}
                        />
                        手順
                    </label> */}
                </>
            )
        case "area":
            return (
                <textarea
                    rows="4"
                    {...props}
                    type={type}
                    className={
                        `${inputBaseStyle}` +
                        className
                    }
                    ref={localRef}
                />
            );
        case "image":
            return (
                <>
                    <input
                        {...props}
                        type={type}
                        className={
                            `${addInputWidth()} ${inputBaseStyle}` +
                            className                            
                        }
                        ref={localRef}
                        placeholder={placeholder}
                    />
                    <label htmlFor="small" className='mr-1'>
                        <input
                            id='small'
                            type="radio"
                            name='height'
                            ref={localRef}
                            value={height}
                            onChange={()=>{setHeight("8");onHeightChange?.("8")}}
                        />小
                    </label>
                    <label htmlFor="medium" className='mr-1'>
                        <input
                            id='medium'
                            type="radio"
                            name='height'
                            ref={localRef}
                            value={height}
                            onChange={()=>{setHeight("15");onHeightChange?.("15")}}
                        />中
                    </label>
                    <label htmlFor="large">
                        <input
                            id='large'
                            type="radio"
                            name='height'
                            ref={localRef}
                            value={height}
                            onChange={()=>{setHeight("20");onHeightChange?.("20")}}
                        />大
                    </label>
                    <label htmlFor="other" className='block'>その他
                        <input
                            id='other'
                            type="number"
                            name='height'
                            className="w-[4rem] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            value={height}
                            onChange={(e)=>{
                                const newValue = e.target.value;
                                setHeight(newValue);
                                onHeightChange?.(newValue);
                            }}
                        />
                    </label>
                </>
            );
        case "input":
        default :
            return (
                <input
                    {...props}
                    type={type}
                    className={
                        `${addInputWidth()} ${inputBaseStyle}` +
                        className
                        
                    }
                    ref={localRef}
                    placeholder={placeholder}
                />
            );
    }
});
