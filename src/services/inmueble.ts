interface inmuebleI {
  "id": string;
  "bloque": string;
  "numero": string;
  "tipo": string;
  "activo": boolean;
  "usuarioSistema": null | string;
  "fechaCreacion": string;
  "fechaModificacion": string
}

export class Inmuebles {

  public static getInmuebles(): Promise<inmuebleI[]> {
    return fetch('http://localhost:3000/v1/inmueble')
      .then(res => res.json())
      .then(response => {
        const { data } = response
        return data
      })

  }
}