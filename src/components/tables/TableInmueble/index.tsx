import { IInmueble } from "@/services/interfaces"
import { Inmuebles } from "@/services/inmueble"
import { useState } from "react";
import ModalUpdateInmueble from "@/components/modals/ModalUpdateInmueble";

export default function TableInmueble({ data }) {

  const [people, setPeople] = useState(data)
  const [open, setOpen] = useState(false)
  const [person, setPerson] = useState({})

  const refreshTable = () => {
    Inmuebles.getInmuebles()
      .then(data => {
        setPeople(data)

      })
  }

  const onSubmitForm = () => {
    setOpen(!open)
    refreshTable()
  }

  const handleClickUpdate = (person: IInmueble) => {
    setPerson(person)
    setOpen(!open)
  }

  const handleClickDelete = (id: string) => {
    console.log(id);

    Inmuebles.deleteInmueble(id)
      .then(status => {
        console.log(status);
      })
    refreshTable()
  }

  return (
    <>
      <div>
        <table>
          <tbody>
            <tr className="tr-fixed">
              <td>Bloque</td>
              <td>Numero</td>
              <td>Tipo</td>
              <td>Usuario Sistema</td>
              <td>Fecha Creacion</td>
              <td>Fecha Modificacion</td>
              <td>Estado</td>
              <td>Opciones</td>
            </tr>
            {
              people.map((person: IInmueble) =>
                <tr key={person.id}>
                  <td>{person.bloque}</td>
                  <td>{person.numero}</td>
                  <td>{person.tipo}</td>
                  <td>{person.usuarioSistema ?? 'no registra'}</td>
                  <td>{new Date(person.fechaCreacion).toLocaleDateString()}</td>
                  <td>{new Date(person.fechaModificacion).toLocaleDateString()}</td>
                  <td>{person.activo ? 'activo' : 'inactivo'}</td>
                  <td>
                    <button onClick={() => handleClickUpdate(person)}>actualizar</button>
                    <button onClick={() => handleClickDelete(person.id)}>eliminar</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        <ModalUpdateInmueble
          person={person}
          open={open}
          onSubmitForm={onSubmitForm} />

      </div>
      <style jsx>{`
        div{
          max-height: 100%;
          overflow-y: scroll;
          outline: 1px solid #ccc;
        }

        .tr-fixed{
          position: sticky;
          top: 0px;
          outline: 1px solid #ccc;
        }
      `}</style>
    </>
  )
}