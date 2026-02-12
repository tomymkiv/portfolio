import type { JSX, ReactNode } from "react";

interface Props {
    logo: JSX.Element; // Un elemento de HTML (en este caso, svg y path)
    title: string;
    children: ReactNode; // vendria a ser la descripcion
}

export default function ContainerAptitudes({ logo, title, children }: Props) {
    return <div
        className="flex flex-col border gap-2 bg-gray-950/60 border-gray-400 hover:shadow-lg transition-shadow duration-300 p-3 rounded-lg w-full">
        <div className="logo">
            <div className="bg-blue-500 w-fit p-3 rounded-full">
                {logo}
            </div>
        </div>
        <div className="title mb-2">
            <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="descripcion">
            {children}
        </div>
    </div>
}