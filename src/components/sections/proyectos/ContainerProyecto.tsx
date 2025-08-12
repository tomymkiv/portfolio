import type { JSX, ReactNode } from "react";

interface Props {
    title: string;
    imageLink: string;
    children: ReactNode; // vendrian a ser las herramientas usadas
    description: JSX.Element;
    proyectLinks: JSX.Element;
}

function ContainerProyecto(props: Props) {
    const { imageLink, title, children, description, proyectLinks } = props;

    return <>
        <div className="flex flex-col justify-between p-5 border space-y-5 bg-gray-300/60 border-gray-400 rounded-lg shadow-md min-h-[690px]">
            <div className="my-2">
                <img src={imageLink} alt="Imagen de proyecto" className="rounded-md shadow-lg min-h-[200px] object-cover" />
            </div>
            <div className="titulo-proyecto flex items-center gap-1.5 justify-between flex-wrap">
                <div>
                    <h2 className="text-2xl font-medium">{title}</h2>
                </div>
            </div>
            <div className="flex gap-4 flex-col">
                {description}
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-5">
                    {proyectLinks}
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                    {/* tecnologias usadas en ese proyecto */}
                    {children}
                </div>
            </div>
        </div>
    </>
}

export default ContainerProyecto;