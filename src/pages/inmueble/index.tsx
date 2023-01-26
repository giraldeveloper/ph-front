import Head from "next/head"
import style from "./style"
import { Inmuebles } from '@/services/inmueble'

export default function Inmueble({ data }): JSX.Element {

  return (
    <>
      <Head>
        <title>admin - inmueble</title>
        <meta name="description" content="inmueble" />
      </Head>
      <main>
        <table>
          <tbody>
            {
              data.map(inmueble =>
                <tr key={inmueble.id}>
                  <td>{inmueble.bloque}</td>
                  <td>{inmueble.numero}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </main>
      <style jsx>{style}</style>
    </>
  )
}

export async function getServerSideProps() {
  const data = await Inmuebles.getInmuebles()
  return {
    props: {
      data
    }
  }
}