import Head from "next/head";
import FormCreateInmueble from "@1/components/forms/FormCreateInmueble";

export default function Create(): JSX.Element {

  return (
    <>
      <Head>
        <title>admin - create inmueble</title>
        <meta name="description" content="form to create an element inmueble" />
      </Head>
      <main>
        <div className="container">
          <div className="section">
            <FormCreateInmueble />
          </div>
        </div>
      </main>
      <style jsx>{`
        .container{
          display: flex;
          justify-content: center;
        }

      `}</style>
    </>
  )
}