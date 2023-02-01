import FormCreateInmueble from "@1/components/forms/FormCreateInmueble"

export default function ModalUpdateInmueble({ person, open, onSubmitForm }) {
  return (
    open
      ?
      <>
        <div className="container">
          <div className="section">
            <FormCreateInmueble method="PATCH" person={person} onSubmitForm={onSubmitForm} />
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