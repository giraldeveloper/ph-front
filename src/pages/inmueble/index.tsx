import Head from "next/head"
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
        <div className='section'>
          <Link href='/inmueble/create' className="link">crear</Link>
          <TableInmueble data={data} />
        </div>
      </main>
      <style jsx>{`
        .section{
          position: relative;
          height: 70vh;
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