import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { usePage } from '@inertiajs/react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, inputType, placeholder, ...props },
    ref,
) {
    const inputBaseStyle = "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500";
    const localRef = useRef(null);
    const { layouts } = usePage().props;
    
    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

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
        case "input":
        default :
            return (
                <input
                    {...props}
                    type={type}
                    className={
                        `w-[10rem] ${inputBaseStyle}` +
                        className
                    }
                    ref={localRef}
                    placeholder={placeholder}
                />
            );
    }
});
