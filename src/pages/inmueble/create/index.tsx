// import { useState } from "react";
import Head from "next/head";
import FormCreateInmueble from "@/components/forms/FormCreateInmueble";
// import TablePersonas from "@/components/tables/TablePersonas";
// import FormCreatePersona from "@/components/forms/FormCreatePersona/FormCreatePersona";

export default function Create(): JSX.Element {

  // const [propietarios, setPersonas] = useState([{
  //   "tipoIdentificacion": "CC",
  //   "numeroIdentificacion": "1144940800",
  //   "primerApellido": "Giraldo",
  //   "segundoApellido": "Ortiz",
  //   "primerNombre": "Andrés",
  //   "segundoNombre": "Felipe",
  //   "razonSocial": "Giraldo Developer SAS",
  //   "nombreComercial": "GiraldoDev",
  //   "tipoPersona": "natural",
  //   "fechaNacimiento": "1990-07-01"
  // }])
  // const [apoderados, setApoderados] = useState([])
  // const [residentes, setResidentes] = useState([])
  // const [modal, setModal] = useState(true);

  // const changeStateModal = () => setModal(!modal)



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
          {/* <div className="section">
            <span>propietarios</span>
            <TablePersonas personas={[]} />
            <span>apoderados</span>
            <TablePersonas personas={apoderados} />
            <span>residentes</span>
            <TablePersonas personas={residentes} />
          </div> */}
        </div>
        {/* <FormCreatePersona hidden={modal} /> */}
      </main>
      <style jsx>{`

        {/* .section:nth-child(1){
          width: 20%
        }

        .section:nth-child(2){
          width: 60%;
          overflow-y: scroll;
          display: flex;
          flex-direction: column;
          row-gap: 10px
        } */}

        .container{
          height: 60vh;
          display: flex;
          justify-content: space-between;
        }

        {/* span{
          background: var(--secondary-color);
          padding: 10px;
          border-radius: var(--radius);
          display: block;
          font-weight: 600;
          font-size: 18px;
          text-align: center;
        } */}

      `}</style>
    </>
  )
}