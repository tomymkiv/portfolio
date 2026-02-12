import { type ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode
}

export default function ContainerHabilidades({ title, children }: Props) {
    return title === 'Otras herramientas' ? <div className="border border-gray-600 py-10 px-5 rounded-lg bg-gray-950/60 lg:w-full h-full">
        <div>
            <h3 className="text-2xl font-bold text-center my-5">{title}</h3>
        </div>
        <div className="grid grid-cols-4 gap-0 items-end justify-center">
            {children}
        </div>
    </div> : <div className="border border-gray-600 py-10 px-5 rounded-lg bg-gray-950/75 lg:w-full h-full">
        <div>
            <h3 className="text-2xl font-bold text-center my-5">{title}</h3>
        </div>
        <div className="grid grid-cols-3 gap-3 items-end justify-center">
            {children}
        </div>
    </div>
}