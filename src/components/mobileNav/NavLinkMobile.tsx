interface Props {
    enlace: string,
}

import { MenuFunction } from "./MenuFunction";
import NavLiMobile from "./NavLiMobile";

// Indico que le envio valores de la interface "Props"
function NavLinkMobile(props: Props) {
    const { enlace } = props;

    return <a onClick={MenuFunction} href={"#" + enlace} className="as m-3 w-full hover:text-blue-500">
        <NavLiMobile text={enlace} />
        {/**coincide el enlace con el texto que debo pasarle */}
    </a>
}
export default NavLinkMobile;