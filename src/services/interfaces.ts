export interface IInmueble {
  "id": string;
  "bloque": string;
  "numero": string;
  "tipo": string;
  "activo": boolean;
  "usuarioSistema": null | string;
  "fechaCreacion": string;
  "fechaModificacion": string
}

export interface IPostInmueble {
  "bloque": string;
  "numero": string;
  "tipo": string;
  "activo": boolean;
  "propietarios"?: Array<IPersona>;
  "apoderados"?: Array<IPersona>;
  "residentes"?: Array<IPersona>
}

export interface IPersona {
  "tipoIdentificacion": string;
  "numeroIdentificacion": string;
  "primerApellido": string;
  "segundoApellido": string;
  "primerNombre": string;
  "segundoNombre": string;
  "razonSocial": string;
  "nombreComercial": string;
  "tipoPersona": string;
  "fechaNacimiento": string
}