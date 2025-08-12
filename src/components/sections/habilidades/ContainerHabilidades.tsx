import { useEffect, useState, type ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode
}

function ContainerHabilidades(props: Props) {
    const { title, children } = props
    // Clases default
    const [habilidadesClass, setHabilidadesClass] = useState('habilidades grid grid-cols-2 sm:grid-cols-3 gap-3')
    const [containerClass, setContainerClass] = useState('grid grid-cols-1 gap-8.5 items-center')
    
    useEffect(() => {
        if (title === 'Otras herramientas') {
            setHabilidadesClass('habilidades grid grid-cols-2 sm:grid-cols-3 w-full gap-3 items-center justify-center')
            setContainerClass('flex flex-col items-center justify-center w-full my-5 gap-4 items-center justify-center')
        }
    }, [])

    return <div className={containerClass}>
        <div className="habilidad-titulo">
            <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <div className={habilidadesClass}>
            {children}
        </div>
    </div>
}

export default ContainerHabilidades;