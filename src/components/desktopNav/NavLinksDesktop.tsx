import NavLiDesktop from "./NavLiDesktop";

interface Props {
    enlace: string,
}

function NavLinksDesktop(props: Props) {
    const { enlace } = props;
    return <a href={"#" + enlace} className="hover:text-blue-600 font-medium transition-colors duration-300 rounded-lg my-4 mx-2" >
        <NavLiDesktop text={enlace} />
    </a >
}

export default NavLinksDesktop;