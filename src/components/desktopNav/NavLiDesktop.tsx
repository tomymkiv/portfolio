interface Props {
    text: string,
}

export default function NavLiDesktop({ text }: Props) {
    return <li className="p-2">{text}</li>;
}