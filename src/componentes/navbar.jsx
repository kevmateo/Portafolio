import { CiLight } from "react-icons/ci";

function Navbar() {
  return (
    <nav className='bg-transparent w-full h-11 flex items-center justify-between fixed inset-0'>
      <p className="ml-6 font-bold text-lg">Desarrollador Web</p>
      <ul className="flex gap-11 mr-6 font-medium text-base">
        <li className="cursor-pointer hover:text-sky-500">Experiencia</li>
        <li className="cursor-pointer hover:text-sky-500">Proyectos</li>
        <li className="cursor-pointer hover:text-sky-500">Sobre mí</li>
        <li className="cursor-pointer hover:text-sky-500">Contacto</li>
        <li className="cursor-pointer "><CiLight className="w-6 h-6 transition-transform hover:scale-110" /></li>
      </ul>
    </nav>
  )
}

export default Navbar;