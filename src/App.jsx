import { useState } from 'react'
import './App.css'
import Navbar from './componentes/navbar'
import Experiencia from './componentes/experiencia'
import ImgKevin from './imagenes/kevin2.jpeg'
import { VscGithubAlt } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { MdOutlineWorkOutline } from "react-icons/md";

function App() {

  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <section className='mx-80 my-44'>
        <img src={ImgKevin} alt="Kevin" className='w-20 h-20 rounded-full border border-black' />
        <h1 className='font-bold text-4xl my-3'>
          Hola, soy Kevin
        </h1>
        <p className='font-extralight text-lg' style={{ width: '500px' }}>
          +1 año de practica, Estudiante de <strong className='text-sky-500 font-semibold'>Ingeniería de  Software y desarrollador FrontEnd</strong> de Ecuador.
          Especializándome en el desarrollo de aplicaciones web únicas.
        </p>
        <div className='my-3'>
          <a
            href='https://github.com/kevmateo'
            target='_blank'
            className='border border-gray-400 py-1 px-3 mr-3 rounded-3xl inline-flex items-center bg-secundary text-white transition-transform hover:scale-110'
          >
            <VscGithubAlt className='mr-2' /> GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/kevin-cano-crucerira/'
            target='_blank'
            className='border border-gray-400 py-1 px-3 mr-3 rounded-3xl inline-flex items-center bg-secundary text-white transition-transform hover:scale-110'
          >
            <IoLogoLinkedin className='mr-2' />Linkedin
          </a>
          <a
            href=''
            className='border border-gray-400 py-1 px-3 mr-3 rounded-3xl inline-flex items-center bg-secundary text-white transition-transform hover:scale-110'
          >
            <LiaFileDownloadSolid className='mr-2' />Curriculum
          </a>
        </div>
      </section>
      <section className='mx-80'>
        <h2 className='inline-flex text-2xl font-semibold'>
          <MdOutlineWorkOutline className='text-3xl mr-2' /> Experiencia Laboral
        </h2>
        <Experiencia
          ExperienciaNombre={'Desarrollador de Software'}
          ExperienciaInstitucion={'Universidad Politécnica Estatal del Carchi'}
          ExperienciaFecha={'11 Marzo - 19 Abril 2024'}
          ExperienciaDescripcion={'En este puesto, desempeñé el rol de desarrollador de software, trabajando con tecnologías como SQL y PL/SQL para la parte de backend y del lado del Front End trabaje con una plataforma low code Apex de Oracle.'}
        />
        <Experiencia
          ExperienciaNombre={'Coordinador de Mesa'}
          ExperienciaInstitucion={'Consejo Nacional Electoral'}
          ExperienciaFecha={'6 Abril - 22 Junio 2024'}
          ExperienciaDescripcion={'Me desempeñé como coordinador de mesa, cultivando habilidades blandas tales como la comunicación efectiva, el trabajo en equipo, la capacidad de tratar con personas y la habilidad para aprender rápidamente. Destaqué durante las sesiones de capacitación, siendo seleccionado como coordinador líder, además de formar parte del equipo de recuento.'}
        />
      </section>
    </div>
  )
}

export default App
