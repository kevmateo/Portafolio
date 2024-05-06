
function Experiencia({ ExperienciaNombre, ExperienciaInstitucion, ExperienciaFecha, ExperienciaDescripcion }) {
  return (
    <div className='flex my-5 border '>
      <div className='border'>
        <p className='font-semibold text-sky-500 text-xl'>{ExperienciaNombre}</p>
        <p className='font-medium text-base'>{ExperienciaInstitucion}</p>
        <p className='text-base text-gray-600 font-thin'>{ExperienciaFecha}</p>
      </div>
      <div className='border'>
        <p className="text-base text-gray-600 font-thin">{ExperienciaDescripcion}</p>
      </div>
    </div>
  )
}

export default Experiencia