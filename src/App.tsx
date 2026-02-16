import './App.css'
import htmlLogo from '../public/img/html-logo.png'
import cssLogo from '../public/img/css-logo.png'
import jsLogo from '../public/img/js-logo.png'
import bootstrapLogo from '../public/img/bootstrap-logo.png'
import tailwindLogo from '../public/img/tailwind-logo.png'
import phpLogo from '../public/img/php-logo.png'
import mysqlLogo from '../public/img/mysql-logo.png'
import githubLogo from '../public/img/github-logo.png'
import gitLogo from '../public/img/git-logo.png'
import antigravityLogo from '../public/img/antigravity-logo.png'
import laravelLogo from '../public/img/laravel-logo.png'
import sqliteLogo from '../public/img/sqlite-logo.png'
import viteLogo from '../public/img/vite-logo.png'
import typescriptLogo from '../public/img/typescript-logo.png'
import reactLogo from '../public/img/react-logo.png'
import wwwLogo from '../public/img/www-logo.png'
import NavLinksDesktop from './components/desktopNav/NavLinksDesktop'
import Lines from './components/mobileNav/Lines'
import NavLinkMobile from './components/mobileNav/NavLinkMobile'
import ContainerAptitudes from './components/sections/aptitudes/ContainerAptitudes'
import InputGroup from './components/sections/contacto/InputGroup'
import ContainerTitulos from './components/sections/ContainerTitulos'
import ContainerHabilidades from './components/sections/habilidades/ContainerHabilidades'
import Habilidades from './components/sections/habilidades/Habilidades'
import ContainerProyecto from './components/sections/proyectos/ContainerProyecto'
import LogosLenguajes from './components/sections/proyectos/LogosLenguajes'
import Parrafos from './components/sections/proyectos/Parrafos'
import ProyectoLinks from './components/sections/proyectos/ProyectoLinks'
import Section from './components/sections/Section'
import { projectImages } from './assets/data/proyectImages'
import Button from './components/Button'
import { useState, type FormEvent } from 'react'

export default function App() {
  const [menuOn, setMenuOn] = useState(false);

  const MenuFunction = () => {
    setMenuOn(!menuOn);
    document.body.classList.toggle('overflow-hidden');
  }
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "9bb4d3ae-976e-4fab-b4ee-95c54c892727");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "¡Tu solicitud se ha enviado correctamente!" : "Hubo un error al enviar la solicitud.");
  };
  return <>
    <header className="flex md:justify-center">
      <nav className='w-full'>
        <button onClick={MenuFunction} className={menuOn ? "md:hidden w-full transition-background duration-300 fixed z-2 menu-btn bg-gray-800/65 p-4" : "md:hidden w-full transition-background duration-300 fixed z-2 menu-btn bg-gray-800/65 p-4"}>
          <Lines />
          <Lines />
          <Lines />
        </button>
        <ul
          className={menuOn ? "fixed bg-black/80 top-0 backdrop-blur-sm flex flex-col items-center justify-center h-screen dropdown-menu w-screen md:hidden transition-all ease-out duration-300 text-left gap-2 z-1 overflow-hidden" : "fixed bg-black/80 top-0 backdrop-blur-sm flex flex-col items-center justify-center h-screen dropdown-menu w-0 md:hidden transition-all ease-out duration-300 text-left gap-2 z-1 overflow-hidden"}>
          <NavLinkMobile enlace="Presentacion" onclick={() => setMenuOn(false)} />
          <NavLinkMobile enlace="Aptitudes" onclick={() => setMenuOn(false)} />
          <NavLinkMobile enlace="Habilidades" onclick={() => setMenuOn(false)} />
          <NavLinkMobile enlace="Proyectos" onclick={() => setMenuOn(false)} />
          <NavLinkMobile enlace="Contacto" onclick={() => setMenuOn(false)} />
        </ul>
        <div className="hidden w-full bg-gray-800/80 shadow-md fixed md:flex items-center justify-center z-50">
          <ul className="flex items-center justify-center gap-2">
            <NavLinksDesktop enlace="Presentacion" />
            <NavLinksDesktop enlace="Aptitudes" />
            <NavLinksDesktop enlace="Habilidades" />
            <NavLinksDesktop enlace="Proyectos" />
            <NavLinksDesktop enlace="Contacto" />
          </ul>
        </div>
      </nav>
    </header>
    <Section apartado='Presentacion' clases='!h-auto scroll-mt-[230px]'>
      <div className="flex flex-col items-center justify-center gap-7 lg:max-w-6xl">
        <ContainerTitulos title={"Presentación"} />
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className='text-3xl font-medium text-center'>Estudiante de Tecn. en Desarrollo de Software</h2>
          <article className="max-w-xl md:max-w-2xl font-thin text-lg text-center">Mi nombre es Francisco Tomás Silvetti y
            soy estudiante de tecnicatura en desarrollo de software, full stack orientado a <b className="font-medium">backend web</b>.
            Me gusta crear soluciones eficientes y escalables, con un enfoque en la calidad, legibilidad y performance del código. <a href="#Aptitudes" className='underline'>Ver más</a>
          </article>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-sm">
          <Button link='#Contacto' text='Contacto' />
          <Button link='#Proyectos' text='Proyectos' />
        </div>
      </div>
    </Section>
    <Section apartado='Aptitudes'>
      <div className="flex flex-col items-center justify-center gap-7 w-full md:w-auto mx-3 lg:max-w-6xl">
        <ContainerTitulos title='Aptitudes' />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 w-full">
          <ContainerAptitudes title='Desarrollo web' logo={<svg className="w-5 fill-gray-200" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512">
            <path
              d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
          </svg>
          }>
            <p className="">Considero mi desarrollo como flexible, escalable y comprensible para otros
              desarrolladores. Me destaco en el desarrollo y mantenimiento de <b className="font-medium">RESTFUL API's</b> y sistemas <b className="font-medium">CRUD (create, read, update, delete)</b>.
            </p>
          </ContainerAptitudes>
          <ContainerAptitudes title='Trabajo grupal' logo={<svg className="w-5 fill-gray-200" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512">
            <path
              d="M96 192C96 130.1 146.1 80 208 80C269.9 80 320 130.1 320 192C320 253.9 269.9 304 208 304C146.1 304 96 253.9 96 192zM32 528C32 430.8 110.8 352 208 352C305.2 352 384 430.8 384 528L384 534C384 557.2 365.2 576 342 576L74 576C50.8 576 32 557.2 32 534L32 528zM464 128C517 128 560 171 560 224C560 277 517 320 464 320C411 320 368 277 368 224C368 171 411 128 464 128zM464 368C543.5 368 608 432.5 608 512L608 534.4C608 557.4 589.4 576 566.4 576L421.6 576C428.2 563.5 432 549.2 432 534L432 528C432 476.5 414.6 429.1 385.5 391.3C408.1 376.6 435.1 368 464 368z" />
          </svg>
          }>
            <p className="">Me gusta participar en grupos de desarrollo para resolver un problema en
              conjunto, obteniendo así un resultado más rápido, eficiente y sincronizado, en conjunto con las
              herramientas necesarias.
            </p>
          </ContainerAptitudes>
          <ContainerAptitudes title='Comunicacion' logo={<svg className="w-5 fill-gray-200" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512">
            <path
              d="M416 208C416 305.2 330 384 224 384C197.3 384 171.9 379 148.8 370L67.2 413.2C57.9 418.1 46.5 416.4 39 409C31.5 401.6 29.8 390.1 34.8 380.8L70.4 313.6C46.3 284.2 32 247.6 32 208C32 110.8 118 32 224 32C330 32 416 110.8 416 208zM416 576C321.9 576 243.6 513.9 227.2 432C347.2 430.5 451.5 345.1 463 229.3C546.3 248.5 608 317.6 608 400C608 439.6 593.7 476.2 569.6 505.6L605.2 572.8C610.1 582.1 608.4 593.5 601 601C593.6 608.5 582.1 610.2 572.8 605.2L491.2 562C468.1 571 442.7 576 416 576z" />
          </svg>
          }>
            <p className="">
              Comunico y escucho todo lo que me planteen, sin dejar de lado ningún aporte por más
              mínimo que sea.
            </p>
          </ContainerAptitudes>
          <ContainerAptitudes title='Puntualidad' logo={<svg className="w-5 fill-gray-200" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640">
            <path
              d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
          </svg>
          }>
            <p className="">Tanto si hablamos de <b className="font-medium">reuniones</b> (presenciales o
              virtuales) como de la finalizacion de un <b className="font-medium">proyecto</b> en curso, destaco mi
              puntualidad.
            </p>
          </ContainerAptitudes>
        </div>
      </div>
    </Section>
    <Section apartado='Habilidades'>
      <div className="flex flex-col items-center justify-center lg:max-w-6xl gap-6 w-full">
        <ContainerTitulos title='Habilidades' />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start w-full">
          <ContainerHabilidades title='Desarrollo frontend' >
            <Habilidades img={htmlLogo} lenguaje='HTML5' />
            <Habilidades img={cssLogo} lenguaje='CSS3' />
            <Habilidades img={jsLogo} lenguaje='JavaScript' />
            <Habilidades img={typescriptLogo} lenguaje='TypeScript' />
            <Habilidades img={reactLogo} lenguaje='React' />
            <Habilidades img={bootstrapLogo} lenguaje='Bootstrap' />
            <Habilidades img={tailwindLogo} lenguaje='Tailwind' />
          </ContainerHabilidades>
          <ContainerHabilidades title='Desarrollo backend' >
            <Habilidades img={phpLogo} lenguaje='PHP' />
            <Habilidades img={laravelLogo} lenguaje='Laravel' />
            <Habilidades img={mysqlLogo} lenguaje='MySQL' />
            <Habilidades img={sqliteLogo} lenguaje='SQLite' />
          </ContainerHabilidades>
        </div>
        <ContainerHabilidades title='Otras herramientas' >
          <Habilidades img={githubLogo} lenguaje='GitHub' />
          <Habilidades img={viteLogo} lenguaje='Vite' />
          <Habilidades img={gitLogo} lenguaje='Git' />
          <Habilidades img={antigravityLogo} lenguaje='Antigravity' />
        </ContainerHabilidades>
      </div>
    </Section>
    <Section apartado='Proyectos' clases='!h-auto scroll-mt-[100px]'>
      <div className="flex flex-col items-center justify-center lg:max-w-6xl">
        <ContainerTitulos title='Proyectos destacados' />
        <span className="text-center my-10 text-md font-medium">{innerWidth > 768 ? 'Clickea' : 'Toca'} las imagenes para ver más</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ContainerProyecto imageLink={projectImages.aeibook} title='Aeibook' description={<Parrafos description='Este es un proyecto basado en una red social. En esta se pueden realizar diferentes acciones que van desde CRUD con el usuario que registras (crear, leer, editar y eliminar), al igual que con las publicaciones, las cuales soportan tanto video como imagen.' />} proyectLinks={<ProyectoLinks enlace='https://github.com/tomymkiv/Aeibook' imagen={githubLogo} title='Repositorio' alt='Repositorio de github' />}>
            <LogosLenguajes imageLink={tailwindLogo} lenguaje="Tailwind CSS" />
            <LogosLenguajes imageLink={jsLogo} lenguaje="JavaScript" />
            <LogosLenguajes imageLink={laravelLogo} lenguaje="Laravel" />
            <LogosLenguajes imageLink={sqliteLogo} lenguaje="SQLite" />
            <LogosLenguajes imageLink={viteLogo} lenguaje="Vite" />
          </ContainerProyecto>
          <ContainerProyecto imageLink={projectImages.fma} title='Forza Motorsport Argentina' description={<Parrafos description='Este es un sitio web creado para una comunidad de Forza Motorsport de Argentina. La misma contiene información relevante acerca de la comunidad, sobre las últimas carreras subidas a su canal de youtube asi tambien como una tabla con los resultados de sus campeonatos mas recientes. Se utilizó React Router para separan los apartados en distintas páginas.' />} proyectLinks={
            <>
              <ProyectoLinks enlace='https://github.com/tomymkiv/forzamotorsportargentina' imagen={githubLogo} title='Repositorio' alt='Repositorio de github' />
              <ProyectoLinks enlace='https://tomymkiv.github.io/forzamotorsportargentina/' imagen={wwwLogo} title='Pagina web' alt='Sitio web' />
            </>
          }>
            <LogosLenguajes imageLink={tailwindLogo} lenguaje="Tailwind CSS" />
            <LogosLenguajes imageLink={reactLogo} lenguaje="React JS" />
            <LogosLenguajes imageLink={viteLogo} lenguaje="Vite" />
            <LogosLenguajes imageLink={typescriptLogo} lenguaje="TypeScript" />
          </ContainerProyecto>
          <ContainerProyecto imageLink={projectImages.concesionario} title='Concesionario' description={<Parrafos description='Este proyecto consiste en una pagina web para compra-venta de autos. La misma cuenta con un apartado para realizar publicaciones, verlas, eliminarlas y editarlas. Se utilizó React Router para separan los apartados en distintas páginas. Se implementó un sistema de autenticación con Laravel para usuarios registrados.' />} proyectLinks={
            <>
              <ProyectoLinks enlace='https://github.com/tomymkiv/compra-venta-autos' imagen={githubLogo} title='Repositorio' alt='Repositorio de github' />
            </>
          }>
            <LogosLenguajes imageLink={tailwindLogo} lenguaje="Tailwind CSS" />
            <LogosLenguajes imageLink={reactLogo} lenguaje="React JS" />
            <LogosLenguajes imageLink={viteLogo} lenguaje="Vite" />
            <LogosLenguajes imageLink={typescriptLogo} lenguaje="TypeScript" />
            <LogosLenguajes imageLink={laravelLogo} lenguaje="Laravel" />
            <LogosLenguajes imageLink={sqliteLogo} lenguaje="SQLite" />
          </ContainerProyecto>
        </div>
      </div>
    </Section>
    <Section apartado='Contacto' clases='flex-col !mt-75 !mb-20'>
      <ContainerTitulos title='Contacto' />
      <div className='w-full flex items-center justify-center'>
        <div className="flex flex-col gap-5 items-center justify-center w-full lg:max-w-4xl">
          <div className='flex flex-col gap-5 h-full'>
            <div>
              <p className='text-lg'>Estoy interesado en oportunidades prácticas para obtener experiencia laboral y aportar a proyectos. Si tenés alguna oferta o interés, no dudes en contactarme.</p>
            </div>
            <form target="_blank" onSubmit={(e) => onSubmit(e)} action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-5 justify-between w-full border border-gray-600 rounded-md p-7 shadow-lg bg-gray-950/60'>
              <div>
                <InputGroup type='text' name='name' id='Nombre' campo='Nombre' placeholder='Ingrese su nombre...' />
                <InputGroup type='email' name='email' id='Correo' campo='Correo' placeholder='Ingrese su correo...' />
                <InputGroup name='message' id='Mensaje' campo='Mensaje' placeholder='Deja tu mensaje...' />
              </div>
              <div className='w-full'>
                <button type='submit' id='Enviar' className='hover:bg-blue-800 transition-colors duration-300 cursor-pointer text-gray-200 font-medium border border-gray-500 rounded-md p-3 w-full'>Enviar</button>
                <p className={result ? 'text-green-500 bg-green-500/50' : 'text-red-500 bg-red-500/50' + ' font-[500] text-lg p-2 rounded-md text-center mt-5'}>{result}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  </>
}