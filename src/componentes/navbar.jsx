import { CiLight } from "react-icons/ci";

function Navbar() {
  return (
    <nav className='bg-white w-full h-11 flex items-center justify-between border'>
      <p className="ml-6 font-bold text-lg">Desarrollador Web</p>
      <ul className="flex gap-11 mr-6 font-medium text-base">
        <li className="cursor-pointer hover:text-secundary">Experiencia</li>
        <li className="cursor-pointer hover:text-secundary">Proyectos</li>
        <li className="cursor-pointer hover:text-secundary">Sobre mí</li>
        <li className="cursor-pointer hover:text-secundary">Contacto</li>
        <li className="cursor-pointer hover:text-secundary"><CiLight /></li>
      </ul>
    </nav>
  )
}

export default Navbar;