interface Props {
    lenguaje: string;
    clase: string;
}

function Habilidades(props: Props) {
    const { lenguaje, clase } = props

    return <span
        className={"flex items-center justify-center p-2 rounded-full bg-gray-200 text-center border border-gray-400 font-medium transition-background duration-300 " + clase}>{lenguaje}</span>;
}

export default Habilidades;