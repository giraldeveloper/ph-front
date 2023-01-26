import styles from "./styles"

export default function TableInmueble({ data }) {
  return (
    <>
      <table>
        <tbody>
          <tr >
            <td>Bloque</td>
            <td>Numero</td>
            <td>Tipo</td>
            <td>Usuario Sistema</td>
            <td>Estado</td>
          </tr>
          {
            data.map(inmueble =>
              <tr key={inmueble.id}>
                <td>{inmueble.bloque}</td>
                <td>{inmueble.numero}</td>
                <td>{inmueble.tipo}</td>
                <td>{inmueble.usuarioSistema ?? 'no registra'}</td>
                <td>{inmueble.activo ? 'activo' : 'inactivo'}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      <style jsx>{styles}</style>
    </>
  )

}