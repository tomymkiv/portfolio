interface Props {
    text: string,
}

export default function NavLiMobile({ text }: Props) {
    return <li className="font-medium text-xl">{text}</li>;
}