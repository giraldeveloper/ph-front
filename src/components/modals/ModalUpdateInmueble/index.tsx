import FormCreateInmueble from "@/components/forms/FormCreateInmueble"

export default function ModalUpdateInmueble({ bloque, numero, tipo, id, activo, open, onSubmitForm }) {
  return (
    open
      ?
      <>
        <div className="container" hidden={true}>
          <div className="section">
            <FormCreateInmueble method="PATCH" bloque={bloque} numero={numero} tipo={tipo} activo={activo} id={id} onSubmitForm={onSubmitForm} />
          </div>
        </div>
        <style jsx>{`

        .container{
          position:fixed;
          top: 0;
          left: 0;
          display: grid;
          place-items: center;
          height: 100vh;
          width: 100vw;
          background: #444b
        }

        .section{
          width: 20%;
          height: 60vh
        }
      `}</style>
      </>
      :
      <></>
  )
}