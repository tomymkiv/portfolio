interface Props {
    text: string,
}

function NavLiDesktop(props: Props) {
    const { text } = props;
    return <li className="p-2">{text}</li>;
}

export default NavLiDesktop;