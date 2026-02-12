interface Props {
    img: string;
    lenguaje: string,
}

export default function Habilidades({ img, lenguaje }: Props) {
    return <div className="flex flex-col items-center justify-between">
        <img src={img}
            className={"p-4 hover:scale-115 drop-shadow-sm hover:drop-shadow-gray-200 transition-transform duration-300 max-w-[125px]"} />
        <p className="font-bold text-shadow-md text-shadow-gray-600">{lenguaje}</p>
    </div>
}