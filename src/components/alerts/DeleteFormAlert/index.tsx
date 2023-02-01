import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { Inmuebles } from '@1/services/inmueble'

export default function DeleteFormAlert({ active, setActive, id, refreshTable }) {

  const handleClickYes = () => {
    Inmuebles.deleteInmueble(id)
      .then(() => {
        refreshTable()
        setActive(false)
      })
  }

  const handleClickNo = () => {
    setActive(false)
  }

  return (
    active
      ?
      <div className="rounded-md bg-red-50 p-4 absolute w-96 mx-auto left-0 right-0">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Eliminar inmueble</h3>
            <div className="mt-2 text-sm text-red-700">
              <p>
                ¿estas seguro de eliminar este inmueble?
              </p>
            </div>
            <div className='flex justify-around mt-2'>
              <button className='bg-red-100 px-4 rounded-md hover:bg-red-200' onClick={handleClickYes}>si</button>
              <button className='bg-red-100 px-4 rounded-md hover:bg-red-200' onClick={handleClickNo}>no</button>
            </div>
          </div>
        </div>
      </div>
      :
      <></>
  )
}