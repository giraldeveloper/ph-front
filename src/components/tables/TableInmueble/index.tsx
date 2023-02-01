import { IInmueble } from "@1/services/interfaces"
import { Inmuebles } from "@1/services/inmueble"
import { useState } from "react";
import Link from "next/link";
import ModalUpdateInmueble from "@1/components/modals/ModalUpdateInmueble";
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { PlusIcon as PlusIconMini } from '@heroicons/react/20/solid'

export default function TableInmueble({ data }) {

  const [people, setPeople] = useState(data)

  const refreshTable = () => {
    Inmuebles.getInmuebles()
      .then(data => {
        setPeople(data)
      })
  }

  const handleClickDelete = (id: string) => {
    Inmuebles.deleteInmueble(id)
      .then(() => {
        refreshTable()
      })
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
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

// export default function TableInmueble({ data }) {

//   const [people, setPeople] = useState(data)
//   const [open, setOpen] = useState(false)
//   const [person, setPerson] = useState({})

//   const refreshTable = () => {
//     Inmuebles.getInmuebles()
//       .then(data => {
//         setPeople(data)
//       })
//   }

//   const onSubmitForm = () => {
//     setOpen(!open)
//     refreshTable()
//   }

//   const handleClickUpdate = (person: IInmueble) => {
//     setPerson(person)
//     setOpen(!open)
//   }

// //   const handleClickDelete = (id: string) => {
// //     console.log(id);

// //     Inmuebles.deleteInmueble(id)
// //       .then(() => {
// //         refreshTable()
// //       })
// //   }

//   return (
//     <>
//       <div>
//         <table>
//           <tbody>
//             <tr className="tr-fixed">
//               <td>Bloque</td>
//               <td>Numero</td>
//               <td>Tipo</td>
//               <td>Usuario Sistema</td>
//               <td>Fecha Creacion</td>
//               <td>Fecha Modificacion</td>
//               <td>Estado</td>
//               <td>Opciones</td>
//             </tr>
//             {
//               people.map((person: IInmueble) =>
//                 <tr key={person.id}>
//                   <td>{person.bloque}</td>
//                   <td>{person.numero}</td>
//                   <td>{person.tipo}</td>
//                   <td>{person.usuarioSistema ?? 'no registra'}</td>
//                   <td>{new Date(person.fechaCreacion).toLocaleDateString()}</td>
//                   <td>{new Date(person.fechaModificacion).toLocaleDateString()}</td>
//                   <td>{person.activo ? 'activo' : 'inactivo'}</td>
//                   <td>
//                     <Link href={`/inmueble:${person.id}`}></Link>
//                   </td>
//                 </tr>
//               )
//             }
//           </tbody>
//         </table>
//         <ModalUpdateInmueble
//           person={person}
//           open={open}
//           onSubmitForm={onSubmitForm} />

//       </div>
//       <style jsx>{`
//         div{
//           max-height: 100%;
//           overflow-y: scroll;
//           outline: 1px solid #ccc;
//         }

//         .tr-fixed{
//           position: sticky;
//           top: 0px;
//           outline: 1px solid #ccc;
//         }
//       `}</style>
//     </>
//   )
// }