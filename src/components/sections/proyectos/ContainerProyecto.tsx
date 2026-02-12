import { useEffect, useState, type JSX, type ReactNode } from "react";

interface Props {
    title: string;
    imageLink: readonly string[];
    children: ReactNode; // vendrian a ser las herramientas usadas
    description: JSX.Element;
    proyectLinks: JSX.Element;
}

export default function ContainerProyecto({ imageLink, title, children, description, proyectLinks }: Props) {
    const [sliderOn, setSliderOn] = useState(false);
    const [image, setImage] = useState(0);

    const handleSlider = () => {
        setSliderOn(true);
        !sliderOn && setImage(0);
    }

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (imageLink.length > 1) {
                e.key === 'ArrowLeft' && setImage(image - 1);
                e.key === 'ArrowRight' && setImage(image + 1);
            }
            e.key === 'Escape' && setSliderOn(false);
        }

        sliderOn && addEventListener('keydown', handleKey);
        sliderOn ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')

        image < 0 && setImage(imageLink.length - 1);
        image > imageLink.length - 1 && setImage(0)

        // Limpio los listeners para no acumular ejecuciones con cada interacción
        return () => {
            removeEventListener("keydown", handleKey);
        };

    }, [image, sliderOn])
    return <>
        {sliderOn &&
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center w-screen h-screen z-50">
                <img src={imageLink[image]} alt="Imagen de proyecto" className="max-w-[90vw] max-h-[90vh] rounded-md shadow-lg min-h-[200px] object-cover" />
                <span className="absolute top-1 p-2 bg-black/60 rounded-sm text-gray-200 font-medium">{image + 1}/{imageLink.length}</span>
                <button onClick={() => setSliderOn(false)} className="absolute top-5 right-5 text-white text-4xl cursor-pointer bg-black/60 p-2 rounded-sm">
                    <i className="fa-solid fa-xmark"></i>
                </button>
                {
                    imageLink.length > 1 &&
                    <div className="absolute z-50 w-full flex justify-between">
                        <button className="cursor-pointer left-0 p-4 bg-black/60 z-50 rounded-sm" onClick={() => setImage(image - 1)}>
                            <i className="fa-solid fa-left-long"></i>
                        </button>
                        <button className="cursor-pointer right-0 p-4 bg-black/60 z-50 rounded-sm" onClick={() => setImage(image + 1)}>
                            <i className="fa-solid fa-right-long"></i>
                        </button>
                    </div>
                }
            </div>
        }
        <div className="flex flex-col justify-between p-5 border space-y-5 bg-gray-950/60 border-gray-400 rounded-lg shadow-md min-h-[690px]">
            <div className="my-2">
                <div>
                    <img onClick={handleSlider} src={imageLink[0]} alt="Imagen de proyecto" className="cursor-pointer hover:scale-105 transition-all duration-300 rounded-md shadow-lg min-h-[200px] object-cover saturate-0 hover:saturate-100" />
                </div>
            </div>
            <div className="titulo-proyecto flex items-center gap-1.5 justify-between flex-wrap">
                <div>
                    <h2 className="text-2xl font-medium">{title}</h2>
                </div>
            </div>
            <div className="flex gap-4 flex-col">
                {description}
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                    {proyectLinks}
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                    {/* tecnologias usadas en ese proyecto */}
                    {children}
                </div>
            </div>
        </div>
    </>
}