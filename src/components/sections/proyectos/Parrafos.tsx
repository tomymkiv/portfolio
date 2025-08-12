interface Props {
    description: string;
}

function Parrafos(props: Props) {
    const { description } = props;
    
    return <div>
        <p className="font-thin text-lg">{description}</p>
    </div>
}

export default Parrafos;