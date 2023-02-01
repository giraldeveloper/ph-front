import { IInmueble, IPostInmueble } from "./interfaces"
import axios from "axios"

export class Inmuebles {

  public static async getInmuebles(): Promise<IInmueble[]> {
    try {
      const response = await axios.get(`${process.env.API_ROUTE}/inmueble`)
      const { data } = response
      return data.data
    } catch (error) {
      console.log(error);
      return []
    }

  }

  public static async createInmueble(inmueble: IPostInmueble): Promise<string> {

    const body = {
      ...inmueble,
      propietarios: [],
      apoderados: [],
      residentes: []
    }

    const response = await axios.post(`${process.env.API_ROUTE}/inmueble`, body)
    const { data } = response
    return data.code
  }

  public static async deleteInmueble(id: string): Promise<string> {

    try {
      const response = await axios.delete(`${process.env.API_ROUTE}/inmueble/${id}`)
      const { data } = response
      return data.code
    } catch (error) {
      console.log(error)
      return 'error'
    }
  }

  public static async updateInmueble(id: string, inmueble: IPostInmueble) {

    const body = {
      ...inmueble,
      "propietarios": [],
      "apoderados": [],
      "residentes": []
    }

    const response = await axios.patch(`${process.env.API_ROUTE}/inmueble/${id}`, body)
    const { data } = response
    return data.code
  }
}