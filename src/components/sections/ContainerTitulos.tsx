import Titulos from "./Titulos";

interface Props {
    title: string,
}

function ContainerTitulos(props: Props) {
    const {title} = props;
    return <div className="my-10">
        <Titulos title={title} /> 
    </div>;
}

export default ContainerTitulos;