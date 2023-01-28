import { IInmueble, IPostInmueble } from "./interfaces"

export class Inmuebles {

  public static getInmuebles(): Promise<IInmueble[]> {
    return fetch('http://localhost:5001/v1/inmueble')
      .then(res => res.json())
      .then(response => {
        const { data } = response
        return data
      })
  }

  public static async createInmueble(inmueble: IPostInmueble): Promise<string> {

    const options = {
      method: 'POST',
      body: JSON.stringify({ ...inmueble, "propietarios": [], "apoderados": [], "residentes": [] }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    console.log(inmueble);

    const res = await fetch('http://localhost:5001/v1/inmueble', options)
    const response = await res.json()
    console.log(response);

    const { code } = response
    return code
  }

  public static async deleteInmueble(id: string): Promise<string> {
    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    }
    const res = await fetch(`http://localhost:5001/v1/inmueble/${id}`, options)
    const response = await res.json()
    const { code } = response
    return code
  }

  public static async updateInmueble(id: string, inmueble: IPostInmueble) {

    console.log(inmueble);


    const options = {
      method: 'PATCH',
      body: JSON.stringify({ ...inmueble, "propietarios": [], "apoderados": [], "residentes": [] }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    const res = await fetch(`http://localhost:5001/v1/inmueble/${id}`, options)
    const response = await res.json()
    console.log(response);

    const { code } = response
    return code
  }
}