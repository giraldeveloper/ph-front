import { IPersona } from "@/services/interfaces"

export default function TablePersonas({ personas }) {

  return personas.length > 0 ? (
    <table>
      <tbody>
        <tr >
          <td>Tipo de documento</td>
          <td>Documento de identidad</td>
          <td>Nombre completo</td>
        </tr>
        {
          personas.map((persona: IPersona, index: number) => <tr key={index}>
            <td>{persona.tipoIdentificacion}</td>
            <td>{persona.numeroIdentificacion}</td>
            <td>{persona.primerNombre} {persona.segundoNombre} {persona.primerApellido} {persona.segundoApellido}</td>
          </tr>)
        }
      </tbody>
    </table>
  ) : null
}