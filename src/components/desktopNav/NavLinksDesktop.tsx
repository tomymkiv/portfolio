import NavLiDesktop from "./NavLiDesktop";

interface Props {
    enlace: string,
}

export default function NavLinksDesktop({ enlace }: Props) {
    return <a href={"#" + enlace} className="text-slate-400 hover:text-slate-200 font-medium transition-colors duration-300 rounded-lg my-4 mx-2" >
        <NavLiDesktop text={enlace} />
    </a >
}