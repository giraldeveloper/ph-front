import Head from "next/head"
import { Inmuebles } from '@1/services/inmueble'
import TableInmueble from "@1/components/tables/TableInmueble"

export default function Inmueble({ data }): JSX.Element {

  return (
    <>
      <Head>
        <title>admin - inmuebles</title>
        <meta name="description" content="real estate administrative panel" />
      </Head>
      <main>
        <div className='section'>
          <TableInmueble data={data} />
        </div>
      </main>
      <style jsx>{`
          .section{
          }
        `}</style>
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