import { IInmueble } from "@/services/interfaces"
import { Inmuebles } from "@/services/inmueble"
import { useState } from "react";
import ModalUpdateInmueble from "@/components/modals/ModalUpdateInmueble";

export default function TableInmueble({ data }) {

  const [people, setPeople] = useState(data)
  const [open, setOpen] = useState(false)
  const [id, setID] = useState('')
  const [bloque, setBloque] = useState('')
  const [numero, setNumero] = useState('')
  const [tipo, setTipo] = useState('')
  const [activo, setActivo] = useState(true)
  const [index, setIndex] = useState(1)

  const onSubmitForm = (value: string) => {
    const array = [...people]
    array[index] = value
    setPeople(array)
    setOpen(!open)
  }

  const handleClickUpdate = (id: string,
    bloque: string,
    numero: string,
    tipo: string,
    activo: boolean,
    index: number) => {
    setID(id)
    setBloque(bloque)
    setNumero(numero)
    setTipo(tipo)
    setActivo(activo)
    setIndex(index)
    setOpen(!open)
  }

  const handleClickDelete = (id: string) => {
    console.log(id);

    Inmuebles.deleteInmueble(id)
      .then(status => {
        console.log(status);
      })
    const newArray = people.filter((elem: IInmueble) => elem.id !== id)
    setPeople(newArray)
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
              people.map(({ id, bloque, numero, tipo, usuarioSistema, fechaCreacion, fechaModificacion, activo }: IInmueble, index: number) =>
                <tr key={id}>
                  <td>{bloque}</td>
                  <td>{numero}</td>
                  <td>{tipo}</td>
                  <td>{usuarioSistema ?? 'no registra'}</td>
                  <td>{new Date(fechaCreacion).toLocaleDateString()}</td>
                  <td>{new Date(fechaModificacion).toLocaleDateString()}</td>
                  <td>{activo ? 'activo' : 'inactivo'}</td>
                  <td>
                    <button onClick={() => handleClickUpdate(
                      id,
                      bloque,
                      numero,
                      tipo,
                      activo,
                      index
                    )}>actualizar</button>
                    <button onClick={() => handleClickDelete(id)}>eliminar</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        <ModalUpdateInmueble bloque={bloque} numero={numero} tipo={tipo} id={id} activo={activo} open={open} onSubmitForm={onSubmitForm} />

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