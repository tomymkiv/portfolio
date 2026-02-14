import { useEffect, useState } from "react";

interface Props {
    type?: string;
    name?: string;
    id: string;
    clases?: string;
    value?: string;
    placeholder?: string,
    campo: string,
}

export default function InputGroup({ type, name, id, clases, value, placeholder, campo }: Props) {
    const [isInput, setIsInput] = useState(true);

    useEffect(() => {
        !type && setIsInput(false); // Si no recibo el tipo, asumo que es un textarea
    }, [])

    return <div className="flex flex-col gap-0.5">
        <label htmlFor={name} className="font-[600] text-gray-300 mt-4">{campo}</label>
        {isInput ? <input type={type} name={name} id={id}
            className={"p-3 focus:shadow-md shadow-blue-400 transition-shadow duration-300 outline-none border border-gray-300 rounded-md " + clases} value={value} required placeholder={placeholder} />
            :
            <textarea name={name} id={id} rows={10} className='p-3 focus:shadow-sm shadow-blue-400 transition-shadow duration-300 outline-none border border-gray-300 rounded-md'></textarea>}
    </div>
}