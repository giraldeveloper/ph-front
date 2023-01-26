import Head from "next/head"
import style from "./styles"
import { Inmuebles } from '@/services/inmueble'
import TableInmueble from "@/components/tables/TableInmueble"
import Link from "next/link"

export default function Inmueble({ data }): JSX.Element {

  return (
    <>
      <Head>
        <title>admin - inmueble</title>
        <meta name="description" content="real estate administrative panel" />
      </Head>
      <main>
        <div className='page-content'>
          <Link href='/inmueble/create'>crear</Link>
          <TableInmueble data={data} />
        </div>
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