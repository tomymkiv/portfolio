interface Props {
    enlace: string,
    onclick: () => void
}

import NavLiMobile from "./NavLiMobile";

// Indico que le envio valores de la interface "Props"
export default function NavLinkMobile({ enlace, onclick }: Props) {
    return <a href={"#" + enlace} onClick={onclick} className="p-3 bg-blue-950/50 rounded-md my-3 w-[95%]">
        <NavLiMobile text={enlace} />
        {/**coincide el enlace con el texto que debo pasarle */}
    </a>
}