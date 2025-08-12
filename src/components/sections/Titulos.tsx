interface Props {
    title: string,
}

function Titulos(props: Props) {
    const { title } = props;
    return <h1 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center">
        {title}
    </h1>;
}

export default Titulos;