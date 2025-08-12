interface Props {
    lenguaje: string;
    imageLink: string;
}

function LogosLenguajes(props: Props) {
    const { lenguaje, imageLink } = props;

    return <img src={imageLink} alt={lenguaje}
        className="max-w-[30px] object-contain saturate-0 transition-all duration-300 hover:saturate-100"
        title={lenguaje} />;
}

export default LogosLenguajes;