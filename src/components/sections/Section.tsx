import type { ReactNode } from "react";

interface Props {
    apartado: string,
    children: ReactNode,
    clases?: string,
}

export default function Section({ apartado, children, clases }: Props) {
    return <section id={apartado} className={"flex justify-center mx-3 my-75 " + clases} >
        {children}
    </section>;
}