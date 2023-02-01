import { IInmueble } from "@1/services/interfaces"
import { Inmuebles } from "@1/services/inmueble"
import { useState } from "react";
import Link from "next/link";
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { PlusIcon as PlusIconMini } from '@heroicons/react/20/solid'
import DeleteFormAlert from "@1/components/alerts/DeleteFormAlert";

export default function TableInmueble({ data }) {

  const [people, setPeople] = useState(data)
  const [active, setActive] = useState(false)
  const [id, setId] = useState('')

  const refreshTable = () => {
    Inmuebles.getInmuebles()
      .then(data => {
        setPeople(data)
      })
  }

  const handleClickDelete = (id: string) => {
    setActive(true)
    setId(id)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 relative ">
      <DeleteFormAlert active={active} setActive={setActive} id={id} refreshTable={refreshTable} />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Inmuebles</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link href='/inmueble/create'>
            <button
              type="button"
              className="inline-flex items-center rounded-full border border-transparent bg-blue-600 p-1 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <PlusIconMini className="h-5 w-5" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6">
                      Bloque
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-center font-semibold text-gray-900">
                      Numero
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-center font-semibold text-gray-900">
                      Tipo
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-center font-semibold text-gray-900">
                      Usuario Sistema
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-center font-semibold text-gray-900">
                      Fecha Creacion
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-center font-semibold text-gray-900">
                      Fecha Modificacion
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-center font-semibold text-gray-900">
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((inmueble: IInmueble) => (
                    <tr key={inmueble.id}>

                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center sm:pl-6">
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{inmueble.bloque}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-gray-500">
                        <div className="ml-4">
                          <div className="text-gray-900">{inmueble.numero}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-gray-500">
                        <div className="ml-4">
                          <div className="text-gray-900">{inmueble.tipo}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-gray-500">
                        <div className="ml-4">
                          <div className="text-gray-900">{inmueble.usuarioSistema ?? 'no registra'}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-gray-500">
                        <div className="ml-4">
                          <div className="text-gray-900">{new Date(inmueble.fechaCreacion).toLocaleDateString()}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-gray-500">
                        <div className="ml-4">
                          <div className="text-gray-900">{new Date(inmueble.fechaModificacion).toLocaleDateString()}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-gray-500">
                        <div className="ml-4">
                          {
                            inmueble.activo
                              ?
                              <span className="inline-flex rounded-full bg-green-100 px-2 text-sm font-semibold leading-5 text-green-800">
                                Activo
                              </span>
                              :
                              <span className="inline-flex rounded-full bg-red-100 px-2 text-sm font-semibold leading-5 text-red-800">
                                Inactivo
                              </span>
                          }
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-gray-500">
                        <div className="flex items-center flex-row">
                          <Link href={`/inmueble/${inmueble.id}`}>
                            <PencilSquareIcon className="h-6 w-6 text-blue-800" aria-hidden="true" />
                          </Link>
                          <button onClick={() => handleClickDelete(inmueble.id)}>
                            <TrashIcon className="h-6 w-6 text-red-800" aria-hidden="true" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}