interface Props {
    enlace: string;
    imagen: string;
    alt: string;
    title: string;
}

export default function ProyectoLinks({ enlace, imagen, alt, title }: Props) {
    return <div className="flex items-center gap-5">
        <a href={enlace} title={title} target="_blank" className="hover:drop-shadow-md transition-all duration-300">
            <img src={imagen} alt={alt} className="min-w-[50px] max-w-[50px]" />
        </a>
    </div>;
}