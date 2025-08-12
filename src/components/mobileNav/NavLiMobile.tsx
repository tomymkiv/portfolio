interface Props{
    text: string,
}

function NavLiMobile(props: Props) {
    const { text } = props;
    return <li className="font-medium text-xl">{text}</li>;
}

export default NavLiMobile;