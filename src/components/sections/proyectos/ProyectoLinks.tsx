interface Props {
    enlace: string;
    imagen: string;
    alt: string;
    title: string;
}

function ProyectoLinks(props: Props) {
    const { enlace, imagen, alt, title } = props;

    return <div className="flex items-center gap-5">
        <a href={enlace} title={title} target="_blank" className="hover:drop-shadow-md transition-all duration-300">
            <img src={imagen} alt={alt} className="w-[50px]" />
        </a>
    </div>;
}

export default ProyectoLinks;