import type { ReactNode } from "react";

interface Props {
    apartado: string,
    children: ReactNode,
    clases?: string,
}

function Section(props: Props) {
    const { apartado, children, clases } = props;
    return <section id={apartado} className={"h-screen flex justify-center mx-3 my-75 " + clases} >
        {children}
    </section>;
}

export default Section;