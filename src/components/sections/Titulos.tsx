interface Props {
    title: string,
}

export default function Titulos({ title }: Props) {
    return <h1 className="text-3xl sm:text-4xl font-bold text-gray-200 text-center">
        {title}
    </h1>;
}