import './App.css'
import fmaDemo from '../src/img/fma-demo.png'
import aeibookDemo from '../src/img/aeibook-demo.png'
import jsLogo from '../src/img/js-logo.png'
import tailwindLogo from '../src/img/tailwind-logo.png'
import laravelLogo from '../src/img/laravel-logo.png'
import sqliteLogo from '../src/img/sqlite-logo.png'
import viteLogo from '../src/img/vite-logo.png'
import typescriptLogo from '../src/img/typescript-logo.png'
import reactLogo from '../src/img/react-logo.png'
import NavLinksDesktop from './components/desktopNav/NavLinksDesktop'
import Lines from './components/mobileNav/Lines'
import MenuFunction from './components/mobileNav/MenuFunction'
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

function App() {
  return <>
    <header className="flex md:justify-center">
      <nav className='w-full'>
        <button onClick={MenuFunction} className="md:hidden w-full transition-background duration-300 fixed z-2 menu-btn bg-white/65 p-4">
          <Lines />
          <Lines />
          <Lines />
        </button>
        <ul
          className="fixed bg-white/80 top-0 backdrop-blur-sm flex flex-col items-center justify-center h-screen dropdown-menu w-0 md:hidden transition-all ease-out duration-300 text-left gap-2 z-1 overflow-hidden">
          <NavLinkMobile enlace="Presentacion" />
          <NavLinkMobile enlace="Aptitudes" />
          <NavLinkMobile enlace="Habilidades" />
          <NavLinkMobile enlace="Proyectos" />
          <NavLinkMobile enlace="Contacto" />
        </ul>
        <div className="hidden w-full bg-gray-100/80 shadow-md fixed md:flex items-center justify-center">
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
      <div className="flex flex-col items-center justify-center gap-7 lg:max-w-3xl">
        <ContainerTitulos title={"Desarrollo de software"} />
        <div className="flex items-center justify-center">
          <article className="max-w-xl md:max-w-2xl font-thin text-lg text-gray-500 text-center">Mi nombre es Francisco Tomás Silvetti y
            soy desarrollador de software full stack principalmente orientado a <b className="font-medium">backend</b>.</article>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-sm">
          <a href="#Contacto" className="font-medium text-lg text-center py-3 px-4 rounded-lg cursor-pointer shadow-sm border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white/95 transition-colors w-full">Contacto</a>
        </div>
      </div>
    </Section>
    <Section apartado='Aptitudes'>
      <div className="flex flex-col items-center justify-center gap-7 w-full md:w-auto mx-3 lg:max-w-3xl">
        <ContainerTitulos title='Aptitudes' />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 w-full">
          <ContainerAptitudes title='Desarrollo web' logo={<svg className="w-5 fill-gray-200" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512">
            <path
              d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
          </svg>
          }>
            <p className="text-gray-600">Considero mi desarrollo como flexible, escalable y comprensible para otros
              desarrolladores. Me destaco en el desarrollo y mantenimiento de <b className="font-medium">RESTFUL API's</b> y sistemas <b className="font-medium">CRUD (create, read, update, delete)</b>.
            </p>
          </ContainerAptitudes>
          <ContainerAptitudes title='Trabajo grupal' logo={<svg className="w-5 fill-gray-200" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512">
            <path
              d="M96 192C96 130.1 146.1 80 208 80C269.9 80 320 130.1 320 192C320 253.9 269.9 304 208 304C146.1 304 96 253.9 96 192zM32 528C32 430.8 110.8 352 208 352C305.2 352 384 430.8 384 528L384 534C384 557.2 365.2 576 342 576L74 576C50.8 576 32 557.2 32 534L32 528zM464 128C517 128 560 171 560 224C560 277 517 320 464 320C411 320 368 277 368 224C368 171 411 128 464 128zM464 368C543.5 368 608 432.5 608 512L608 534.4C608 557.4 589.4 576 566.4 576L421.6 576C428.2 563.5 432 549.2 432 534L432 528C432 476.5 414.6 429.1 385.5 391.3C408.1 376.6 435.1 368 464 368z" />
          </svg>
          }>
            <p className="text-gray-600">Me gusta participar en grupos de desarrollo para resolver un problema en
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
            <p className="text-gray-600">
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
            <p className="text-gray-600">Tanto si hablamos de <b className="font-medium">reuniones</b> (presenciales o
              virtuales) como de la finalizacion de un <b className="font-medium">proyecto</b> en curso, destaco mi
              puntualidad.
            </p>
          </ContainerAptitudes>
        </div>
      </div>
    </Section>
    <Section apartado='Habilidades'>
      <div className="flex flex-col items-center justify-center lg:max-w-3xl">
        <ContainerTitulos title='Habilidades' />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8.5 items-center">
          <ContainerHabilidades title='Desarrollo frontend' >
            <Habilidades lenguaje="HTML5" clase="hover:bg-orange-500 hover:text-white/95" />
            <Habilidades lenguaje="CSS3" clase="hover:bg-blue-500 hover:text-white/95" />
            <Habilidades lenguaje="JavaScript" clase="hover:bg-yellow-500 hover:text-white/95" />
            <Habilidades lenguaje="TypeScript" clase="hover:bg-blue-600 hover:text-white/95" />
            <Habilidades lenguaje="React JS" clase="hover:bg-white/90 hover:text-[#00D7FF]" />
            <Habilidades lenguaje="Bootstrap" clase="hover:bg-purple-500 hover:text-white/95" />
            <Habilidades lenguaje="Tailwind CSS" clase="hover:bg-blue-400 hover:text-white/95" />
          </ContainerHabilidades>
          <ContainerHabilidades title='Desarrollo backend' >
            <Habilidades lenguaje="PHP" clase="hover:bg-[#6D7BB2] hover:text-white/95" />
            <Habilidades lenguaje="Laravel" clase="hover:bg-red-600 hover:text-white/95" />
            <Habilidades lenguaje="MySql" clase="hover:bg-white hover:text-[#00618A]" />
            <Habilidades lenguaje="SQLite" clase="hover:bg-white hover:text-[#00618A]" />
            <Habilidades lenguaje="SQL Server" clase="hover:bg-white hover:text-red-500" />
          </ContainerHabilidades>
        </div>
        <ContainerHabilidades title='Otras herramientas' >
          <Habilidades lenguaje="Git/Github" clase="hover:bg-gray-900 hover:text-white" />
          <Habilidades lenguaje="Vite" clase="hover:bg-purple-500 hover:text-white" />
          <Habilidades lenguaje="VSCode" clase="hover:bg-gray-700 hover:text-[#23A7EA]" />
        </ContainerHabilidades>
      </div>
    </Section>
    <Section apartado='Proyectos' clases='!h-auto scroll-mt-[100px]'>
      <div className="flex flex-col items-center justify-center lg:max-w-4xl">
        <ContainerTitulos title='Proyectos destacados' />
        {/* cambiar a sm:grid-cols-2 cuando hayan, al menos, dos proyectos para mostrar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ContainerProyecto imageLink={aeibookDemo} title='Aeibook' description={<Parrafos description='Este es un proyecto basado en una red social. En esta se pueden realizar diferentes acciones que van desde CRUD con el usuario que registras (crear, leer, editar y eliminar), al igual que con las publicaciones, las cuales soportan tanto video como imagen.' />} proyectLinks={<ProyectoLinks enlace='https://github.com/tomymkiv/Aeibook' imagen='https://preflib.github.io/PrefLib-Jekyll/assets/img/gitHubLogo.png' title='Repositorio' alt='Repositorio de github' />}>
            <LogosLenguajes imageLink={tailwindLogo} lenguaje="Tailwind CSS" />
            <LogosLenguajes imageLink={jsLogo} lenguaje="JavaScript" />
            <LogosLenguajes imageLink={laravelLogo} lenguaje="Laravel" />
            <LogosLenguajes imageLink={sqliteLogo} lenguaje="SQLite" />
            <LogosLenguajes imageLink={viteLogo} lenguaje="Vite" />
            {/* <ProyectoLinks enlace='#' imagen='/src/img/www-logo.png' title='Pagina web' alt='Sitio web' /> */}
          </ContainerProyecto>
          <ContainerProyecto imageLink={fmaDemo} title='Forza Motorsport Argentina' description={<Parrafos description='Este es un sitio web creado para una comunidad de Forza Motorsport de Argentina. La misma contiene información relevante acerca de la comunidad, sobre las últimas carreras subidas a su canal de youtube asi tambien como una tabla con los resultados de sus campeonatos mas recientes. Se utilizó React Router para separan los apartados en distintas páginas.' />} proyectLinks={
            <>
              <ProyectoLinks enlace='https://github.com/tomymkiv/forzamotorsportargentina' imagen='https://preflib.github.io/PrefLib-Jekyll/assets/img/gitHubLogo.png' title='Repositorio' alt='Repositorio de github' />
              <ProyectoLinks enlace='https://tomymkiv.github.io/forzamotorsportargentina/' imagen='/src/img/www-logo.png' title='Pagina web' alt='Sitio web' />
            </>
          }>
            <LogosLenguajes imageLink={tailwindLogo} lenguaje="Tailwind CSS" />
            <LogosLenguajes imageLink={reactLogo} lenguaje="React JS" />
            <LogosLenguajes imageLink={viteLogo} lenguaje="Vite" />
            <LogosLenguajes imageLink={typescriptLogo} lenguaje="TypeScript" />
          </ContainerProyecto>
        </div>
      </div>
    </Section>
    <Section apartado='Contacto'>
      <div className="flex flex-col items-center justify-center w-full">
        <ContainerTitulos title='Contacto' />
        <div className="w-full lg:max-w-3xl border border-gray-400 rounded-md px-7.5 py-10 shadow-lg bg-gray-100">
          <form target="_blank" action="https://formsubmit.co/silvettifrancisco04@gmail.com" method="POST" className='flex flex-col gap-5'>
            <InputGroup type='text' name='Nombre' id='Nombre' />
            <InputGroup type='email' name='Correo' id='Correo' />
            <InputGroup name='Mensaje' id='Mensaje' />
            <InputGroup type='submit' id='Enviar' clases='bg-blue-500 hover:bg-blue-600 cursor-pointer text-gray-200 font-medium' value='Enviar' />
            <input type="hidden" name='_next' value={'http://tomymkiv.github.io/portfolio/'} />
            <input type="hidden" name='_template' value='table' />
          </form>
        </div>
      </div>
    </Section>
  </>
}

export default App;