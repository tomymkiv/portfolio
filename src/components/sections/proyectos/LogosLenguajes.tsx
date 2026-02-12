interface Props {
    lenguaje: string;
    imageLink: string;
}

export default function LogosLenguajes({ lenguaje, imageLink }: Props) {
    return <img src={imageLink} alt={lenguaje}
        className="max-w-[30px] object-contain saturate-0 transition-all duration-300 hover:saturate-100"
        title={lenguaje} />;
}