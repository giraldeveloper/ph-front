import { useRouter } from 'next/router'
import Head from 'next/head'

export default function InmuebleOptions() {

  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>admin - inmueble</title>
        <meta name="description" content="Panel of an Inmueble" />
      </Head>
      <main>
        {id}
      </main>
    </>
  )
}