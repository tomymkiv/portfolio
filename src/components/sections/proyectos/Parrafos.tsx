interface Props {
    description: string;
}

export default function Parrafos({ description }: Props) {
    return <div>
        <p className="font-thin text-lg">{description}</p>
    </div>
}