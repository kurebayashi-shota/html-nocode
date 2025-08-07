import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, inputType, ...props },
    ref,
) {
    // const [ layout, setLayout] = useState("");
    const localRef = useRef(null);

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
                    <label className='mx-2'>
                        <input
                            {...props}
                            ref={localRef}
                            type="radio"
                            name="layout_id"
                            value="1"
                            checked={props.value === "1"}
                        />
                        タイトル
                    </label>
                    <label className='mx-2'>
                        <input
                            {...props}
                            ref={localRef}
                            type="radio"
                            name="layout_id"
                            value="2"
                            checked={props.value === "2"}
                        />
                        シンプル
                    </label>
                    <label className='mx-2'>
                        <input
                            {...props}
                            ref={localRef}
                            type="radio"
                            name="layout_id"
                            value="3"
                            checked={props.value === "3"}
                        />
                        手順
                    </label>
                </>
            )
        case "area":
            return (
                <textarea
                    {...props}
                    type={type}
                    className={
                        'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
                        className
                    }
                    ref={localRef}
                />
            );
        case "input":
            return (
                <input
                    {...props}
                    type={type}
                    className={
                        'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
                        className
                    }
                    ref={localRef}
                />
            );
        default :
            return (
                <input
                    {...props}
                    type={type}
                    className={
                        'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
                        className
                    }
                    ref={localRef}
                />
            );
    }
});
