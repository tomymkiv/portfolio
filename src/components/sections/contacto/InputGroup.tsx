import { useEffect, useRef, useState } from "react";

interface Props {
    type?: string;
    name?: string;
    id: string;
    clases?: string;
    value?: string;
}

function InputGroup(props: Props) {
    const { type, name, id, clases, value } = props;
    const [isInput, setIsInput] = useState(true);
    const containerRef = useRef<any>(null);

    useEffect(() => {
        if (!props.type) {// Si no recibo el tipo, asumo que es un textarea
            setIsInput(false);
        }
    }, [])

    return <div className="flex flex-col gap-1">
        <label htmlFor={name} className="text-gray-500">{name}</label>
        {isInput ? <input ref={containerRef} type={type} name={name} id={id}
            className={"p-3 focus:shadow-sm shadow-blue-500 transition-all duration-300 outline-none border border-gray-300 rounded-md " + clases} value={value} />
            :
            <textarea name={name} id={id} rows={10} className='p-3 focus:shadow-sm shadow-blue-500 transition-shadow duration-300 outline-none border border-gray-300 rounded-md'></textarea>}
        
    </div>
}

export default InputGroup;