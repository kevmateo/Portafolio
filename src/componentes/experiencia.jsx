
function Experiencia({ ExperienciaNombre, ExperienciaInstitucion, ExperienciaFecha, ExperienciaDescripcion }) {
  return (
    <article className='flex my-5 border p-4 shadow-3xl rounded-xl'>
      <div className='w-1/3'>
        <p className='font-semibold text-sky-500 text-xl'>{ExperienciaNombre}</p>
        <p className='font-medium text-base'>{ExperienciaInstitucion}</p>
        <p className='text-base text-gray-600 font-thin'>{ExperienciaFecha}</p>
      </div>
      <div className='w-2/3'>
        <p className="text-base text-gray-600 font-thin">{ExperienciaDescripcion}</p>
      </div>
    </article>
  )
}

export default Experiencia