import Titulos from "./Titulos";

interface Props {
    title: string,
}

export default function ContainerTitulos({ title }: Props) {
    return <div className="my-10">
        <Titulos title={title} />
    </div>;
}